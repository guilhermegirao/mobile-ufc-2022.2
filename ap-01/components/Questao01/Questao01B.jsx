import { FlatList, Text, View } from "react-native";

const Questao01B = () => {
  const disciplinas = [
    "REDES",
    "PROJETO DE INTERFACES MÓVEIS",
    "ESTÁGIO CURRICULAR II",
  ];

  return (
    <View>
      <Text>Disciplinas:</Text>
      <FlatList
        data={disciplinas}
        renderItem={({ item }) => <Text>- {item}</Text>}
        keyExtractor={(_, index) => index}
      />
    </View>
  );
};

export default Questao01B;
