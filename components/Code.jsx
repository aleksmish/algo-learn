import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SIZES, assets } from "../constants";
import Modal from "react-native-modal";
import { ModalButton } from "./Button";
import * as Clipboard from "expo-clipboard";

const ExpandedCode = ({ data, toggleModal, isModalVisible }) => {
  return (
    <Modal
      isVisible={isModalVisible}
      onBackButtonPress={toggleModal}
      onBackdropPress={toggleModal}
      animationIn={"zoomIn"}
      animationOut={"zoomOut"}
      animationInTiming={50}
      animationOutTiming={50}
    >
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CodeBlock code={data.code} />
        </ScrollView>
      </View>
    </Modal>
  );
};

const Code = ({ route }) => {
  const data = route.params;
  const [isModalVisible, setModalVisible] = useState(false);
  const [isTextCopied, setTextCopied] = useState(false);

  const copyToClipboard = async (text) => {
    setTextCopied(true);
    await Clipboard.setStringAsync(text);
    setTimeout(() => {
      setTextCopied(false);
    }, 2500);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1, padding: SIZES.base / 2 }}>
      <ModalButton
        imgUrl={isTextCopied ? assets.success : assets.copy}
        handlePress={() => copyToClipboard(data.code)}
        top={SIZES.font}
        right={SIZES.font * 4.5}
      />
      <ModalButton
        imgUrl={assets.expand}
        handlePress={toggleModal}
        top={SIZES.font}
        right={SIZES.font}
      />
      <ExpandedCode
        data={data}
        toggleModal={toggleModal}
        isModalVisible={isModalVisible}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CodeBlock code={data.code} />
      </ScrollView>
    </View>
  );
};

const CodeBlock = ({ code }) => {
  const [lineCount, setLineCount] = useState(1);

  const handleNewLine = (text) => {
    const lines = text.split("\n");
    setLineCount(lines.length);
  };

  return (
    <View style={styles.container}>
      <View style={styles.lineNumbers}>
        {Array.from({ length: lineCount }, (_, i) => (
          <Text key={i} style={styles.lineNumber}>
            {i + 1}
          </Text>
        ))}
      </View>
      <View style={styles.code}>
        <Text
          style={styles.codeText}
          onTextLayout={({ nativeEvent: { lines } }) =>
            handleNewLine(lines.join("\n"))
          }
        >
          {code}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#282c34",
    padding: SIZES.base,
    borderRadius: SIZES.font,
  },
  lineNumbers: {
    alignItems: "center",
    width: SIZES.medium,
  },
  lineNumber: {
    lineHeight: SIZES.large,
    color: "#abb2bf",
    fontSize: SIZES.small,
  },
  code: {
    paddingLeft: SIZES.base,
  },
  codeText: {
    color: "#fff",
    fontSize: SIZES.small,
    lineHeight: SIZES.large,
  },
});

export default Code;
