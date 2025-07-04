import { useCallback } from "react";
import { TroopInfo } from "./interface";
import loadJsonData from "@/data/readJson";

const useGetTroopInformations = (
  setTroops: React.Dispatch<React.SetStateAction<TroopInfo[] | null>>,
  race: string,
) => {
  const getTroopInformations = useCallback(async (): Promise<void> => {
    const records = await loadJsonData();
    // Map and ensure all fields match TroopInfo type
    const troopInfos: TroopInfo[] = records
      ?.find((record) => record.race === race)
      ?.troops?.map((record: any) => ({
        name: String(record.name),
        offense: Number(record.offense),
        defenseInfantry: Number(record.defenseInfantry),
        defenseCavalry: Number(record.defenseCavalry),
        speed: Number(record.speed),
        capacity: Number(record.capacity),
        lumber: Number(record.lumber),
        clay: Number(record.clay),
        iron: Number(record.iron),
        crop: Number(record.crop),
        totalCost: Number(record.totalCost),
        upkeep: Number(record.upkeep),
        time: String(record.time),
      }));
    setTroops(troopInfos);
  }, [setTroops]);

  return {
    getTroopInformations,
  };
};

export default useGetTroopInformations;
