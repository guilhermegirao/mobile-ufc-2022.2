import { Text, View } from "react-native";

const Questao01A = ({ nome, sobrenome, curso }) => {
  const nomeCompleto = `${nome} ${sobrenome}`;

  return (
    <View>
      <Text>Nome completo: {nomeCompleto}</Text>
      <Text>Curso: {curso}</Text>
    </View>
  );
};

export default Questao01A;
