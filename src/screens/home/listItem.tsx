import { View, Text } from "react-native"
import styles from "./styles"

export const ListItem = ({coin}) => {



  return (
    <View style={styles.card}>
    <Text style={styles.name}>{coin.name}</Text>
    <View style={styles.valueContainer}>
      <Text style={styles.currency}>{coin.currency}</Text>
      <Text style={styles.value}>{coin.value}</Text>
    </View>
   
  </View>
  )
}