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
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [uri, seriesId]);

  return { data, loading, error };
}

export default useFetchData;
