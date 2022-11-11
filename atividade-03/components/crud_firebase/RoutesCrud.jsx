import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeEstudante from "./estudante/HomeEstudante";
import CriarEstudante from "./estudante/CriarEstudante";
import ListarEstudante from "./estudante/ListarEstudante";
import EditarEstudante from "./estudante/EditarEstudante";

import HomeProfessor from "./professor/HomeProfessor";
import CriarProfessor from "./professor/CriarProfessor";
import ListarProfessor from "./professor/ListarProfessor";
import EditarProfessor from "./professor/EditarProfessor";

const Tab = createBottomTabNavigator();

const RoutesCrud = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeEstudante"
        component={HomeEstudante}
        options={{ title: "Home Estudante" }}
      />
      <Tab.Screen
        name="CriarEstudante"
        component={CriarEstudante}
        options={{ title: "Criar Estudante" }}
      />
      <Tab.Screen
        name="ListarEstudante"
        component={ListarEstudante}
        options={{ title: "Listar Estudantes" }}
      />
      <Tab.Screen
        name="EditarEstudante"
        component={EditarEstudante}
        options={{ title: "Editar Estudante" }}
      />

      <Tab.Screen
        name="HomeProfessor"
        component={HomeProfessor}
        options={{ title: "Home Professor" }}
      />
      <Tab.Screen
        name="CriarProfessor"
        component={CriarProfessor}
        options={{ title: "Criar Professor" }}
      />
      <Tab.Screen
        name="ListarProfessor"
        component={ListarProfessor}
        options={{ title: "Listar Professores" }}
      />
      <Tab.Screen
        name="EditarProfessor"
        component={EditarProfessor}
        options={{ title: "Editar Professor" }}
      />
    </Tab.Navigator>
  );
};

export default RoutesCrud;
