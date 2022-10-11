import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

const Questao05 = () => {
  const [country, setCountry] = useState("");
  const [continent, setContinent] = useState("africa");
  const [loading, setLoading] = useState(false);

  const onChangeContinent = (cont) => setContinent(cont);

  useEffect(() => {
    setLoading(true);

    fetch(
      `https://restcountries.com/v2/region/${continent}?fields=name,population`
    )
      .then((res) => res.json())
      .then((data) => {
        if (continent === "asia") {
          const [lessPopulateCountry] = data.sort(
            (a, b) => a.population - b.population
          );

          setCountry(lessPopulateCountry.name);

          return;
        }

        const [mostPopulateCountry] = data.sort(
          (a, b) => b.population - a.population
        );

        setCountry(mostPopulateCountry.name);
      })
      .finally(() => setLoading(false));
  }, [continent]);

  return (
    <View>
      {loading ? (
        <Text>Carregando...</Text>
      ) : (
        <View>
          <Text>
            O país {continent === "asia" ? "menos populoso " : "mais populoso "}
            da {continent} é: {country}
          </Text>
        </View>
      )}
      <View>
        <Button title="América" onPress={() => onChangeContinent("americas")} />
        <Button title="Ásia" onPress={() => onChangeContinent("asia")} />
        <Button title="África" onPress={() => onChangeContinent("africa")} />
      </View>
    </View>
  );
};

export default Questao05;
