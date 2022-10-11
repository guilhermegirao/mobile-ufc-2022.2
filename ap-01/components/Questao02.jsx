import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const Questao02 = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");

  const onSum = () => setResult(Number(number1) + Number(number2));
  const onSubtract = () => setResult(Number(number1) - Number(number2));
  const onMultiplicate = () => setResult(Number(number1) * Number(number2));
  const onDivide = () => {
    const n2 = Number(number2);

    if (n2 === 0) {
      setResult("Impossível dividir");
      return;
    }

    setResult(Number(number1) / n2);
  };

  return (
    <View>
      <View style={Styles.numbersContainer}>
        <TextInput
          value={number1}
          onChangeText={setNumber1}
          placeholder="Número 1"
          keyboardType="numeric"
          style={Styles.input}
        />
        <TextInput
          value={number2}
          onChangeText={setNumber2}
          placeholder="Número 2"
          keyboardType="numeric"
          style={Styles.input}
        />
      </View>
      <View style={Styles.operationsContainer}>
        <Button onPress={onSum} title="+" />
        <Button onPress={onSubtract} title="-" />
        <Button onPress={onMultiplicate} title="*" />
        <Button onPress={onDivide} title="/" />
      </View>
      <View>
        <Text>Resultado: {result}</Text>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  numbersContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    width: "100%",
  },
  operationsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default Questao02;
