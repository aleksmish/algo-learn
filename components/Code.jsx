import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SIZES } from '../constants';

const Code = ({ route }) => {
  const data = route.params
  console.log(data)
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} >
      <CodeBlock code={data.code}/>
    </ScrollView>
  )
}

const CodeBlock = ({ code }) => {
  const [lineCount, setLineCount] = useState(1);

  const handleNewLine = text => {
    console.log(text)
    const lines = text.split('\n');
    setLineCount(lines.length);
  };

  const commentRegex = /(\/\/.*)/;
  
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
          onTextLayout={({ nativeEvent: { lines } }) => handleNewLine(lines.join('\n'))}
        >
          {code}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#282c34',
    padding: SIZES.base,
    borderRadius: SIZES.font,
  },
  lineNumbers: {
    alignItems: "center",
    width: SIZES.medium,
  },
  lineNumber: {
    lineHeight: SIZES.large,
    color: '#abb2bf',
    fontSize: SIZES.small,
  },
  code: {
    paddingLeft: SIZES.base,
  },
  codeText: {
    color: '#fff',
    fontSize: SIZES.small,
    lineHeight: SIZES.large,
  },
});

export default Code;
