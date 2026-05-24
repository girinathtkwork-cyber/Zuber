import { Tabs } from "expo-router";

const Layout = () => {
  return (
    <>
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="home" />
        <Tabs.Screen name="rides" />
        <Tabs.Screen name="chat" />
        <Tabs.Screen name="profile" />
      </Tabs>
    </>
  );
};

export default Layout;
