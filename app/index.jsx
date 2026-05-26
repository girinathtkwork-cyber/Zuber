import { Redirect } from "expo-router";
import { View, ActivityIndicator } from "react-native";
import { useAuth } from "../context/AuthContext";

const Index = () => {
  const { user, loading } = useAuth();

  // Wait until Firebase checks auth state
  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // If logged in → go to app
  if (user) {
    return <Redirect href="/(root)/(tabs)/home" />;
  }

  // If not logged in → go to welcome/login
  return <Redirect href="/welcome" />;
};

export default Index;