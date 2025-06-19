import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/auth.styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => alert("Image Pressed")}>
        <Image
        source={{ uri: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww" }}
        style={{ width: 300, height: 300, borderRadius: 50, marginTop: 20 }}
      />
      </TouchableOpacity>
      <Link href={"notifications" as any} style={{ marginTop: 20, padding: 10, borderRadius: 5 }}>
        <Text>Notifications</Text>
      </Link>
    </View>
  );
}


