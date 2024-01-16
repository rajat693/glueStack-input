import React from "react";
import { SafeAreaView, View } from "react-native";
import { config } from "@gluestack-ui/config";
import {
  GluestackUIProvider,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  SearchIcon,
} from "@gluestack-ui/themed";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GluestackUIProvider config={config}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Example />
        </View>
      </GluestackUIProvider>
    </SafeAreaView>
  );
}

const Example = () => {
  return (
    <Input>
      <InputSlot pl="$3">
        <InputIcon as={SearchIcon} />
      </InputSlot>
      <InputField placeholder="Search..." />
    </Input>
  );
};
