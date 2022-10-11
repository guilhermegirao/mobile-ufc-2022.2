import { useEffect, useState } from "react";
import { Text, View } from "react-native";

const Questao04 = () => {
  const [mostPopulate, setMostPopulate] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("https://restcountries.com/v2/region/africa?fields=name,population")
      .then((res) => res.json())
      .then((data) => {
        const [mostPopulateCountry] = data.sort(
          (a, b) => b.population - a.population
        );

        setMostPopulate(mostPopulateCountry.name);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <View>
      {loading ? (
        <Text>Carregando...</Text>
      ) : (
        <View>
          <Text>O país mais populoso da África é: {mostPopulate}</Text>
        </View>
      )}
    </View>
  );
};

export default Questao04;
