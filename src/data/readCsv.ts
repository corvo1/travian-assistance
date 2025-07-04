import { useCallback } from "react";

const useReadCsvData = () =>
  useCallback(async () => {
    const res = await fetch("/data/example.csv");
    const text = await res.text();
    const lines = text.trim().split("\n");
    const headers = lines[0].split(",");
    const records = lines.slice(1).map((line) => {
      const values = line.split(",");
      return headers.reduce((obj, header, idx) => {
        obj[header] = values[idx];
        return obj;
      }, {} as Record<string, string>);
    });
    return { records };
  }, []);

export default useReadCsvData;
