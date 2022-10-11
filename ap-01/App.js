import { StyleSheet, Text } from "react-native";

import Questao01 from "./components/Questao01";
import Questao01A from "./components/Questao01/Questao01A";
import Questao01B from "./components/Questao01/Questao01B";
import Questao02 from "./components/Questao02";
import Questao03 from "./components/Questao03";
import Questao04 from "./components/Questao04";
import Questao05 from "./components/Questao05";

export default function App() {
  return (
    <>
      <Text style={Styles.textTitle}>Questão 01:</Text>
      <Questao01>
        <Questao01A nome="Guilherme" sobrenome="Girão" curso="CC" />
        <Questao01B />
      </Questao01>

      <Text style={Styles.textTitle}>Questão 02:</Text>
      <Questao02 />

      <Text style={Styles.textTitle}>Questão 03:</Text>
      <Questao03 />

      <Text style={Styles.textTitle}>Questão 04:</Text>
      <Questao04 />

      <Text style={Styles.textTitle}>Questão 05:</Text>
      <Questao05 />
    </>
  );
}

const Styles = StyleSheet.create({
  textTitle: {
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 8,
  },
});
