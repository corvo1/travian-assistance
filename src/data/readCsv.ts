interface CsvRecord {
  [key: string]: string;
}

export async function readCsvData(): Promise<CsvRecord[]> {
  const res = await fetch("/data/example.csv");
  const text = await res.text();
  const lines = text.trim().split("\n");
  const headers = lines[0].split(",");
  console.log(text);
  const records: CsvRecord[] = lines.slice(1).map((line) => {
    const values = line.split(",");
    return headers.reduce((obj, header, idx) => {
      obj[header] = values[idx];
      return obj;
    }, {} as CsvRecord);
  });
  return records;
}
