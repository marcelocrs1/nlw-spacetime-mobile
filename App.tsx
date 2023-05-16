import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.text}>Marcelo Santos Frontend Developer</Text>
    //   <StatusBar style="auto" />
    // </View>
    <View className="flex-1 items-center justify-center bg-gray-950">
      <Text className="text-6xl font-bold text-gray-50">
        Marcelo Santos Frontend Developer
      </Text>
      <StatusBar style="light" />
    </View>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   text: {
//     color: '#fff',
//     fontWeight: '700',
//     fontSize: 64,
//   }
// });
