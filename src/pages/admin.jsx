import Fresque from "../components/Fresque";

const objets = [
    { type: 'Type1', date: '2025-03-10' },
    { type: 'Type2', date: '2025-03-11' },
    { type: 'Type3', date: '2025-03-12' },
    { type: 'Type4', date: '2025-03-13' },
    { type: 'Type5', date: '2025-03-14' },
    { type: 'Type6', date: '2025-03-15' },
    { type: 'Type7', date: '2025-03-16' },
    { type: 'Type8', date: '2025-03-17' },
    { type: 'Type9', date: '2025-03-18' },
    { type: 'Type10', date: '2025-03-19' },
    { type: 'Type11', date: '2025-03-20' },
    { type: 'Type12', date: '2025-03-21' },
    { type: 'Type13', date: '2025-03-22' },
    { type: 'Type14', date: '2025-03-23' },
    { type: 'Type15', date: '2025-03-24' },
    { type: 'Type16', date: '2025-03-25' },
    { type: 'Type17', date: '2025-03-26' },
    { type: 'Type18', date: '2025-03-27' },
    { type: 'Type19', date: '2025-03-28' },
    { type: 'Type20', date: '2025-03-29' },
    { type: 'Type21', date: '2025-03-30' },
    { type: 'Type22', date: '2025-03-31' },
    { type: 'Type23', date: '2025-04-01' },
    { type: 'Type24', date: '2025-04-02' },
    { type: 'Type25', date: '2025-04-03' },
    { type: 'Type26', date: '2025-04-04' },
    { type: 'Type27', date: '2025-04-05' },
    { type: 'Type28', date: '2025-04-06' },
    { type: 'Type29', date: '2025-04-07' },
    { type: 'Type30', date: '2025-04-08' },
  ];

const Admin = () => {
  return (
    <div className="p-4">
      <Fresque objets={objets} />
    </div>
  );
};

export default Admin;