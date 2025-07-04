import React, { useEffect, useState } from "react";
import { TroopInfo } from "./interface";
import useGetTroopInformations from "./dto";

const TroopInformations: React.FC = () => {
  const [troops, setTroops] = useState<TroopInfo[]>([]);
  const { troopInfos } = useGetTroopInformations();
  setTroops(troopInfos);

  useEffect(() => {}, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Troop Informations</h2>
      <table className="min-w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Score</th>
          </tr>
        </thead>
        <tbody>
          {troops.map((troop) => (
            <tr key={troop.id}>
              <td className="border px-4 py-2">{troop.id}</td>
              <td className="border px-4 py-2">{troop.name}</td>
              <td className="border px-4 py-2">{troop.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TroopInformations;
