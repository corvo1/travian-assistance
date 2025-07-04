import React, { useEffect, useState } from "react";
import { TroopInfo } from "./interface";
import useGetTroopInformations from "./dto";

const TroopInformations: React.FC = () => {
  const [troops, setTroops] = useState<TroopInfo[] | null>(null);
  const { getTroopInformations } = useGetTroopInformations(setTroops, "Roman");

  useEffect(() => {
    getTroopInformations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (troops === null) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Troop Informations</h2>
      <div className="w-full max-w-full overflow-x-auto">
        <table className="min-w-full border">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Offense</th>
              <th className="border px-4 py-2">Defense (Infantry)</th>
              <th className="border px-4 py-2">Defense (Cavalry)</th>
              <th className="border px-4 py-2">Speed</th>
              <th className="border px-4 py-2">Capacity</th>
              <th className="border px-4 py-2">Lumber</th>
              <th className="border px-4 py-2">Clay</th>
              <th className="border px-4 py-2">Iron</th>
              <th className="border px-4 py-2">Crop</th>
              <th className="border px-4 py-2">Total Cost</th>
              <th className="border px-4 py-2">Upkeep</th>
              <th className="border px-4 py-2">Time</th>
            </tr>
          </thead>
          <tbody>
            {troops.map((troop, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="border px-4 py-2">{troop.name}</td>
                <td className="border px-4 py-2">{troop.offense}</td>
                <td className="border px-4 py-2">{troop.defenseInfantry}</td>
                <td className="border px-4 py-2">{troop.defenseCavalry}</td>
                <td className="border px-4 py-2">{troop.speed}</td>
                <td className="border px-4 py-2">{troop.capacity}</td>
                <td className="border px-4 py-2">{troop.lumber}</td>
                <td className="border px-4 py-2">{troop.clay}</td>
                <td className="border px-4 py-2">{troop.iron}</td>
                <td className="border px-4 py-2">{troop.crop}</td>
                <td className="border px-4 py-2">{troop.totalCost}</td>
                <td className="border px-4 py-2">{troop.upkeep}</td>
                <td className="border px-4 py-2">{troop.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TroopInformations;
