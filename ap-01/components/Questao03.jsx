import { useEffect, useState } from "react";
import { Button, FlatList, Text, View } from "react-native";

const Questao03 = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  const onChangeOffset = () => setOffset((prevOffset) => prevOffset + 10);

  useEffect(() => {
    setLoading(true);

    fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
      .then((res) => res.json())
      .then((data) => {
        const { results } = data;

        setPokemonList(results);
      })
      .finally(() => setLoading(false));
  }, [offset]);

  return (
    <View>
      {loading ? (
        <Text>Carregando...</Text>
      ) : (
        <View>
          <FlatList
            data={pokemonList}
            renderItem={({ item }) => <Text>- {item?.name}</Text>}
            keyExtractor={(_, index) => index}
          />
          <Button title="Próximos 10" onPress={onChangeOffset} />
        </View>
      )}
    </View>
  );
};

export default Questao03;
