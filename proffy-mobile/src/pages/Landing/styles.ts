import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    // preenchendo todo o espaço da tela
    flex: 1,
    backgroundColor: '#8257e5',
    justifyContent: 'center',
    padding: 40,
  },

  banner: {
    width: '100%',
    // Adaptando o tamanho da imagem
    resizeMode: 'contain'
  },

  title: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
  }

})

export default styles;