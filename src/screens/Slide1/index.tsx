import { View, Text, Image } from "react-native";
import { styles } from "./styles"
import CustomButton from '../../components/CustomButton';


export function Slide1() {
  const handlePress = () => {
    console.log('Botão pressionado!');
  };

  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.texto}>Checkins</Text>
      </View>

      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.text}>Data</Text>
          <Text style={styles.text}>Aula</Text>
          <Text style={styles.text}>Checkin</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>Data</Text>
          <Text style={styles.cell}>Atividade</Text>
          <View style={styles.botao}>
            <CustomButton title="Checkin" onPress={handlePress} />
          </View>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>Data</Text>
          <Text style={styles.cell}>Prova</Text>
          <View style={styles.botao}>
            <CustomButton title="Checkin" onPress={handlePress} />
          </View>
        </View>
      </View>
    </View>
  );
};
