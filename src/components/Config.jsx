import React, { useEffect, useState } from 'react';
import { getTableFicheSuiveuse } from '../services/api.js';

// Icônes d’affichage (+, -, bullet)
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsDot } from "react-icons/bs";

/**
 * 🔍 Fonction utilitaire : parse le champ CONFIG du résultat API
 * Retourne un objet JSON ou "__invalid__" en cas d'erreur
 */
const parseConfig = (result) => {
    try {
        const raw = result?.RESULT?.[0]?.CONFIG;
        return typeof raw === 'string' ? JSON.parse(raw) : raw;
    } catch (e) {
        console.warn("Erreur de parsing config :", e);
        return "__invalid__";
    }
};

/**
 * ✅ Vérifie que l’objet de config contient les clés essentielles :
 * PARENT (string), ARTICLE (string), et SUB_ARTICLE (array)
 */
const isValidConfig = (config) => {
    return (
        config &&
        typeof config === 'object' &&
        typeof config.PARENT === 'string' &&
        typeof config.ARTICLE === 'string' &&
        Array.isArray(config.SUB_ARTICLE)
    );
};

/**
 * 🔁 Composant récursif : affiche un sous-article avec ses propres sous-articles
 * Props :
 * - article : nom du sous-article à afficher
 * - level : niveau de profondeur dans la hiérarchie (sert pour l’indentation, etc.)
 */
const SubArticle = ({ article, level = 1 }) => {
    const [configFetched, setConfigFetched] = useState(null); // Résultat API
    const [isOpen, setIsOpen] = useState(false);              // Ouverture/fermeture du sous-ensemble

    // Fetch de la config du sous-article à l'affichage
    useEffect(() => {
        const fetchData = async () => {
            const res = await getTableFicheSuiveuse(article);
            const parsed = parseConfig(res);
            setConfigFetched(parsed);
        };
        fetchData();
    }, [article]);

    const isValid = isValidConfig(configFetched);
    const hasChildren = isValid && configFetched.SUB_ARTICLE.length > 0;

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`ml-8 mt-1`}>
            <div className="flex items-center gap-2">
                {/* Icône d’expansion (si enfants) ou simple bullet */}
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

                {/* Nom du sous-article → clique pour ouvrir dans un onglet infos */}
                <span
                    onClick={() => window.open(`#/infos?article=${encodeURIComponent(article)}`, '_blank')}
                    className="text-blue-600 underline cursor-pointer"
                >
                    {article}
                </span>
            </div>

            {/* Si ouvert, afficher récursivement les enfants */}
            {isOpen && hasChildren && (
                <div>
                    {configFetched.SUB_ARTICLE.map((sub, i) => (
                        <SubArticle key={i} article={sub} level={level + 1} />
                    ))}
                </div>
            )}

            {/* Message d'erreur en cas de structure invalide */}
            {!isValid && configFetched === "__invalid__" && (
                <p className="text-red-500 italic pl-4">Erreur de config du sous-ensemble.</p>
            )}
        </div>
    );
};

/**
 * Composant principal : Config
 * Affiche la structure d’un article racine et ses sous-articles hiérarchiques
 */
const Config = ({ config }) => {
    // Cas 1 : données non encore chargées
    if (config === null) {
        console.warn("Config non encore chargée");
        return <p className="text-gray-400 italic p-2">En attente de recherche.</p>;
    }

    // Cas 2 : erreur parsing JSON
    if (config === "__invalid__") {
        console.warn("Config invalide");
        return <p className="text-red-500 italic p-2">Erreur de parsing dans la configuration.</p>;
    }

    // Cas 3 : structure incorrecte
    if (!isValidConfig(config)) {
        console.warn("Config non conforme :", config);
        return <p className="text-red-500 italic p-2">Données de configuration non conformes.</p>;
    }

    // Cas 4 : structure valide → affichage
    return (
        <div className="p-2">
            {/* Nom de l’article principal */}
            <div className="pl-2 font-semibold">{config.ARTICLE}</div>

            {/* Affichage récursif des sous-articles */}
            {config.SUB_ARTICLE.map((sub, i) => (
                <SubArticle key={i} article={sub} level={1} />
            ))}
        </div>
    );
};

export default Config;
