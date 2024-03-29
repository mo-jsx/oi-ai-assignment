import { useState, useEffect } from "react";
import { FredSeriesObservationsResponse } from "../types/series";

function useFetchData(
  uri: string,
  seriesId: string,
  apiKey: string
): {
  data: FredSeriesObservationsResponse | null;
  loading: boolean;
  error: Error | null;
} {
  const [data, setData] = useState<FredSeriesObservationsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  const url = `api/${uri}?series_id=${seriesId}&api_key=${apiKey}&file_type=json`;

  useEffect(() => {
    const cachedData = localStorage.getItem("fred-data");

    if (cachedData) {
      try {
        const parsedData = JSON.parse(cachedData);
        setData(parsedData);
      } catch (error) {
        console.log("Error parsing cache data: ", error);
      }
    }

    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((fetchedData) => {
        setData(fetchedData);
        localStorage.setItem("fred-data", JSON.stringify(fetchedData));
      })
      .catch((error) => setError(error))
      .finally(() => {
        setLoading(false);
      });
  }, [uri, seriesId]);

  return { data, loading, error };
}

export default useFetchData;
