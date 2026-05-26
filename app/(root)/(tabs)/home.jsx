import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { auth } from "../../../firebaseConfig";

export default function Page() {
  const user = auth.currentUser;

  return (
    <SafeAreaView>
      {user && (
        <Text>
          Hello {user.email}
        </Text>
      )}
    </SafeAreaView>
  );
}