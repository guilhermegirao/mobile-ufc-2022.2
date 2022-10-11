import { FlatList, StyleSheet, Text, View } from "react-native";

const Questao01B = ({ disciplinas }) => {
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
