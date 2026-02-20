import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.containerImagem}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
            }}
            style={styles.foto}
          />
        </View>

        <View style={styles.containerTexto}>
          <Text style={styles.nome}>Dev Junior</Text>
          <Text style={styles.cargo}>Full Stack Developer</Text>
        </View>

        <View style={styles.containerIcones}>
          <AntDesign name="github" size={40} color="#24292e" />
          <AntDesign name="linkedin" size={40} color="#0e76a8" />
          <Entypo name="mail" size={40} color="#333" />
          
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c3e50",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: 280,
    backgroundColor: "white",
    borderRadius: 30,
    padding: 20,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  containerImagem: {
    backgroundColor: "#f0f0f0",
    borderRadius: 100,
    padding: 10,
    marginBottom: 15,
  },
  foto: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  containerTexto: {
    alignItems: "center",
    marginBottom: 20,
  },
  nome: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1a1a1a",
  },
  cargo: {
    fontSize: 18,
    color: "#666",
    marginTop: 5,
  },
  containerIcones: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 10,
  },
});
