import React, { useEffect, useState } from 'react';
// Import de la fonction pour récupérer les infos d'un article
import { getTableFicheSuiveuse } from '../services/api.js';

// Icônes utilisées dans l'affichage
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsDot } from "react-icons/bs";

// Parse proprement le champ CONFIG_APPLIQUEE retourné par l'API
const parseConfig = (result) => {
    try {
        const raw = result?.RESULT?.[0]?.CONFIG_APPLIQUEE;
        return typeof raw === 'string' ? JSON.parse(raw) : raw;
    } catch (e) {
        console.warn("Erreur de parsing config :", e);
        return "__invalid__"; // On retourne un marqueur explicite d'erreur
    }
};

// Vérifie que l'objet config contient bien les propriétés attendues
const isValidConfig = (config) => {
    return (
        config &&
        typeof config === 'object' &&
        typeof config.PARENT === 'string' &&
        typeof config.ARTICLE === 'string' &&
        Array.isArray(config.SUB_ARTICLE)
    );
};

// Composant récursif pour afficher un sous-ensemble (sous-article)
const SubArticle = ({ article, level = 1 }) => {
    const [configFetched, setConfigFetched] = useState(null); // Stocke la config récupérée
    const [isOpen, setIsOpen] = useState(false);              // Gère l'ouverture/fermeture de la branche

    // Appelé au montage pour récupérer la config du sous-article
    useEffect(() => {
        const fetchData = async () => {
            const res = await getTableFicheSuiveuse(article);
            const parsed = parseConfig(res);
            setConfigFetched(parsed);
        };
        fetchData();
    }, [article]); // Re-fetch uniquement si `article` change

    const isValid = isValidConfig(configFetched); // Vérifie si la config est correcte
    const hasChildren = isValid && configFetched.SUB_ARTICLE.length > 0; // Y a-t-il des (sous)-sous-ensembles ?

    const handleToggle = () => {
        setIsOpen(!isOpen); // Toggle ouverture / fermeture
    };

    return (
        <div className={`ml-8 mt-1`}>
            <div className="flex items-center gap-2">
                {/* Affiche un bouton + / - si on a des enfants, sinon juste un bullet point */}
                {hasChildren ? (
                    <button
                        onClick={handleToggle}
                        className="w-6 h-6 cursor-pointer border border-gray-400 rounded flex items-center justify-center hover:bg-gray-100 transition"
                    >
                        {isOpen ? <AiOutlineMinus size={14} /> : <AiOutlinePlus size={14} />}
                    </button>
                ) : (
                    <span className="w-6 h-6 flex items-center justify-center">
                        <BsDot size={24} className="text-gray-600" />
                    </span>
                )}

                {/* Nom du sous-article, cliquable (ouvre une nouvelle page "parallèle") */}
                <span
                    onClick={() => window.open(`#/ajout?article=${encodeURIComponent(article)}`, '_blank')}
                    className="text-blue-600 underline cursor-pointer"
                >
                    {article}
                </span>
            </div>

            {/* Si la branche est ouverte, on affiche récursivement les sous-articles */}
            {isOpen && hasChildren && (
                <div>
                    {configFetched.SUB_ARTICLE.map((sub, i) => (
                        <SubArticle key={i} article={sub} level={level + 1} />
                    ))}
                </div>
            )}

            {/* Affiche une erreur si la config n'est pas valide */}
            {!isValid && configFetched === "__invalid__" && (
                <p className="text-red-500 italic pl-4">Erreur de config du sous-ensemble.</p>
            )}
        </div>
    );
};

// Composant principal qui affiche la config d’un article donné
const Config = ({ config }) => {
    // Cas : rien n'a encore été chargé
    if (config === null) {
        console.warn("Config non encore chargée");
        return <p className="text-gray-400 italic p-2">En attente de recherche.</p>;
    }

    // Cas : erreur de parsing JSON
    if (config === "__invalid__") {
        console.warn("Config invalide");
        return <p className="text-red-500 italic p-2">Erreur de parsing dans la configuration.</p>;
    }

    // Cas : structure incorrecte
    if (!isValidConfig(config)) {
        console.warn("Config non conforme :", config);
        return <p className="text-red-500 italic p-2">Données de configuration non conformes.</p>;
    }

    // Cas normal : on affiche l’article et ses sous-articles
    return (
        <div className="p-2">
            <div className="pl-2 font-semibold">{config.ARTICLE}</div>
            {config.SUB_ARTICLE.map((sub, i) => (
                <SubArticle key={i} article={sub} level={1} />
            ))}
        </div>
    );
};

export default Config;
