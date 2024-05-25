
import { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native'

function Conversor({data}) {
    const [valorConvertido, setValorConvertido] = useState(0)
    const [valorInput, setValorInput] = useState("")
    const usdToBrl = data?.USDBRL

    if (!usdToBrl) {
        return (
          <View>
            <Text>Não foi possível carregar a cotação do dólar.</Text>
          </View>
        );
      }

      function calcular() {
        let valorCalc = valorInput * usdToBrl.bid
        if(valorInput.length <= 0) {
            alert("Nenhum valor digitado, digite corretamente")
        }else { setValorConvertido(valorCalc)}
       
      }
    
      return (
        <View style={{width: "100%",height: "100%", marginTop: 80,alignItems:"center"}}>
            <View style={{backgroundColor: "red", marginBottom: 50,marginTop: "30%", borderRadius: 10}}>
                <Text style={{fontWeight: "bold", color: "white",   fontSize: 20,  padding: 15}}>{usdToBrl.name}</Text>
            </View>

            <View style={{width: "80%", backgroundColor: "#777", padding: 10, borderRadius: 5 }}>
                <TextInput 
                onChangeText={(valor) => setValorInput(valor)}
                placeholder='Valor a ser convertido' 
                placeholderTextColor={"white"} 
                style={{textAlign:"center", color: "white"}}/>               
            </View>


            <TouchableOpacity 
            onPress={calcular}
            style={{marginTop: 20, 
            padding: 15, 
            backgroundColor: "red", 
            width: "80%", 
            borderRadius: 5}}>
                <Text style={{textAlign:'center', color: "white", fontSize: 15, fontWeight:"bold"}}>Calcular</Text>
            </TouchableOpacity>

            <Text style={{marginTop: 30, fontSize: 20, fontWeight: "bold"}}>{valorConvertido.toFixed(2)}</Text>
          
        </View>)
}

export default Conversor