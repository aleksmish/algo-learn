import { Image, StatusBar, Text, View } from "react-native";
import { CircleButton } from "./Button";
import Modal from "react-native-modal";
import { SIZES, assets } from "../constants";
import { COLORS, FONTS } from "../constants/theme";
import { useState } from "react";

const Information = ({ data, toggleModal, isModalVisible }) => {
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
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#282c34",
          padding: SIZES.base,
          borderRadius: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          padding: SIZES.font,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: SIZES.base,
          }}
        >
          <Text style={{ color: COLORS.light, fontSize: SIZES.medium }}>
            Time Complexity
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              margin: SIZES.base,
            }}
          >
            <View
              style={{
                width: "33%",
                alignItems: "center",
                borderWidth: 0.5,
                borderColor: "#ffffff8d",
                borderEndWidth: 0,
                padding: SIZES.font,
              }}
            >
              <Text
                style={{
                  color: COLORS.light,
                  fontSize: SIZES.medium,
                  marginBottom: SIZES.base,
                }}
              >
                Worst
              </Text>
              <Text style={{ color: COLORS.light, fontSize: SIZES.small }}>
                {data[0]}
              </Text>
            </View>
            <View
              style={{
                width: "33%",
                alignItems: "center",
                borderWidth: 0.5,
                borderColor: "#ffffff8d",
                borderEndWidth: 0,
                padding: SIZES.font,
              }}
            >
              <Text
                style={{
                  color: COLORS.light,
                  fontSize: SIZES.medium,
                  marginBottom: SIZES.base,
                }}
              >
                Average
              </Text>
              <Text style={{ color: COLORS.light, fontSize: SIZES.small }}>
                {data[1]}
              </Text>
            </View>
            <View
              style={{
                width: "33%",
                alignItems: "center",
                borderWidth: 0.5,
                borderColor: "#ffffff8d",
                padding: SIZES.font,
              }}
            >
              <Text
                style={{
                  color: COLORS.light,
                  fontSize: SIZES.medium,
                  marginBottom: SIZES.base,
                }}
              >
                Best
              </Text>
              <Text style={{ color: COLORS.light, fontSize: SIZES.small }}>
                {data[2]}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: "#ffffff6a",
            borderBottomWidth: 0.5,
            alignSelf: "stretch",
          }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: SIZES.base,
          }}
        >
          <Text style={{ color: COLORS.light, fontSize: SIZES.medium }}>
            Space Complexity
          </Text>
          <View
            style={{
              borderWidth: 0.5,
              borderColor: "#ffffff8d",
              margin: SIZES.base,
              padding: SIZES.base,
            }}
          >
            <Text
              style={{
                color: COLORS.light,
                margin: SIZES.font,
                fontSize: SIZES.small,
              }}
            >
              {data[3]}
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const DetailsHeader = ({ data, navigation, title, hasInfo }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{ width: "100%", height: "100%" }}
        />
      </View>

      <Text
        style={{
          margin: SIZES.base,
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.large,
          color: COLORS.primary,
        }}
      >
        {title}
      </Text>

      <CircleButton
        opacity={0.9}
        imgUrl={assets.left}
        handlePress={() => navigation.goBack()}
        left={15}
        top={StatusBar.currentHeight + 5}
      />
      {hasInfo && (
        <>
          <CircleButton
            opacity={0.9}
            imgUrl={assets.info}
            handlePress={toggleModal}
            right={15}
            top={StatusBar.currentHeight + 5}
          />
          <Information
            data={data.complexities}
            toggleModal={toggleModal}
            isModalVisible={isModalVisible}
          />
        </>
      )}
    </View>
  );
};
export default DetailsHeader;
