import { useState, useCallback } from "react";
/* Services */
import GooglePlacesService from "../services/api/GooglePlacesService";

export function useAutocompletePlaces() {
  const [suggestions, setSuggestions] = useState<GoogleSuggestions[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getSuggestions = useCallback((q: string) => {
    setLoading(true);

    return GooglePlacesService.getPredictions(q).then(result => {
      if (result.status === "OK") {
        setSuggestions(result.predictions);
      }

      setLoading(false);

      return result;
    });
  }, []);

  return { suggestions, loading, getSuggestions };
}
