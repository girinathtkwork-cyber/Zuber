import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { icons, images } from "@/constants";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, Image, ScrollView, Text, View } from "react-native";

// 1. Import your config and auth function
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  // 2. Implement the operational login logic
  const onSignInPress = async () => {
    if (!form.email || !form.password) {
      Alert.alert("Error", "Please enter your email and password");
      return;
    }

    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      router.replace("/(root)/(tabs)/home");
    } catch (error) {
      Alert.alert("Login Failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView
      className="flex-1 bg-white"
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <View className="flex-1 bg-white">
        {/* Top Image */}
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Welcome 👋
          </Text>
        </View>

        {/* Form */}
        <View className="p-5">
          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />

          <InputField
            label="Password"
            placeholder="Enter your password"
            icon={icons.lock}
            secureTextEntry={true}
            textContentType="password"
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />

          <CustomButton
            title={loading ? "Signing In..." : "Sign In"}
            onPress={onSignInPress}
            className="mt-6"
            disabled={loading}
          />

          <OAuth />

          <Link
            href="/sign-up"
            className="text-lg text-center text-general-200 mt-10"
          >
            <Text>{"Don't have an account? "}</Text>
            <Text className="text-primary-500">Sign Up</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
