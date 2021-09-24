import React from "react";
import Main from "./components/MainComponent";
import { LogBox } from "react-native";

// Ignore log notification by message:
LogBox.ignoreLogs(["Warning: ..."]);

// Ignore all log notifications:
LogBox.ignoreAllLogs();
export default function App() {
  return <Main />;
}
