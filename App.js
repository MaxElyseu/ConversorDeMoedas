import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Conversor from './src/Conversor';
import { useEffect, useState } from 'react';
import api from './src/Services/api'
export default function App() {

  const [dolar, setDolar] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadingDolar(){
      try {
        const response = await api.get('last/USD-BRL')
        setDolar(response.data)
        setLoading(false)
      }catch (error) {
        console.error("Erro ao carregar dolar:", error);
      }
    }
    loadingDolar()
    },[])

    if(loading) {
      return(
        <View style={{justifyContent: "center", alignItems: "center", flex: 1}}>
          <Text style={{fontSize: 20, fontWeight: "bold"}}>Carregando moeda</Text>
          <ActivityIndicator color={"black"} size={70}/>
        </View>
      )
    } else {

  return (
    <View style={styles.container}>
      <Conversor data={dolar} />
      <StatusBar style="auto" />
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
