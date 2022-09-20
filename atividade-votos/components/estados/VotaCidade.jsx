import { useState } from "react";
import { View, Text, Button } from "react-native";

const VotaCidade = () => {
  const [votesQuixada, setVotesQuixada] = useState(0);
  const [votesQuixeramobim, setVotesQuixeramobim] = useState(0);
  const [votesIbicuitinga, setVotesIbicuitinga] = useState(0);

  const [mostVotedCity, setMostVotedCity] = useState('');

  const updateMostVotedCity = () => {
    const votesList = [votesQuixada, votesQuixeramobim, votesIbicuitinga];

    const index = votesList.indexOf(Math.max(...votesList));

    if (index === 0) {
      setMostVotedCity('Quixadá');
    }

    if (index === 1) {
      setMostVotedCity('Quixeramobim');
    }

    if (index === 2) {
      setMostVotedCity('Ibicuitinga');
    }
  };

  return (
    <View>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 28, fontWeight: "bold" }}>
          Cidade mais votada: {mostVotedCity}
        </Text>

        <Button title="Atualizar dado" onPress={() => updateMostVotedCity()} />
      </View>

      <View>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Quixadá: {votesQuixada}
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Quixeramobim: {votesQuixeramobim}
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Ibicuitinga: {votesIbicuitinga}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          margin: 10,
        }}
      >
        <View style={{ margin: 5 }}>
          <Button
            title="Quixadá"
            onPress={() => setVotesQuixada(votesQuixada + 1)}
          />
        </View>
        <View style={{ margin: 5 }}>
          <Button
            title="Quixeramobim"
            onPress={() => setVotesQuixeramobim(votesQuixeramobim + 1)}
          />
        </View>
        <View style={{ margin: 5 }}>
          <Button
            title="Ibicuitinga"
            onPress={() => setVotesIbicuitinga(votesIbicuitinga + 1)}
          />
        </View>
      </View>
    </View>
  );
};

export default VotaCidade;
