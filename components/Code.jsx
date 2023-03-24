import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, ToastAndroid } from "react-native";
import { COLORS, SIZES, assets } from "../constants";
import { CodeButton } from "./Button";
import * as Clipboard from "expo-clipboard";
import ModalWindow from "./ModalWindow";
import { useTranslation } from "react-i18next";

const ModalCode = ({ data, toggleModal, isModalVisible }) => {
  return (
    <ModalWindow isModalVisible={isModalVisible} toggleModal={toggleModal}>
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CodeBlock code={data.code} />
        </ScrollView>
      </View>
    </ModalWindow>
  );
};

const Code = ({ route }) => {
  const data = route.params;
  const { t } = useTranslation()
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isTextCopied, setIsTextCopied] = useState(false);
  const [timeoutInstance, setTimeoutInstance] = useState(null);

  const copyToClipboard = async (text) => {
    if (timeoutInstance) {
      clearTimeout(timeoutInstance);
    }

    ToastAndroid.showWithGravity(
      t("Copied"),
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    );

    setIsTextCopied(true);

    await Clipboard.setStringAsync(text);

    setTimeoutInstance(
      setTimeout(() => {
        setIsTextCopied(false);
      }, 2500)
    );
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1, padding: SIZES.base / 2 }}>
      <CodeButton
        imgUrl={isTextCopied ? assets.success : assets.copy}
        handlePress={() => copyToClipboard(data.code)}
        top={SIZES.font}
        right={SIZES.font * 4.5}
      />
      <CodeButton
        imgUrl={assets.expand}
        handlePress={toggleModal}
        top={SIZES.font}
        right={SIZES.font}
      />
      <ModalCode
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
    backgroundColor: COLORS.charcoal,
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
