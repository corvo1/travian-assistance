import { useCallback } from "react";
import { TroopInfo } from "./interface";
import useReadCsvData from "@/data/readCsv";

const useGetTroopInformations = useCallback(async () => {
  const { records } = await useReadCsvData();
  const troopInfos: TroopInfo[] = records.map((record) => {
    return {
      id: record.id,
      name: record.name,
      score: record.score,
    };
  });
  return {
    troopInfos,
  };
}, []);

export default useGetTroopInformations;
