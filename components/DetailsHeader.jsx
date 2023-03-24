import { Image, StatusBar, Text, View } from "react-native";
import { CircleButton } from "./Button";
import { SIZES, assets, COLORS, FONTS } from "../constants";
import { useState } from "react";
import ModalWindow from "./ModalWindow";
import { useTranslation } from "react-i18next";

const Information = ({ data, toggleModal, isModalVisible }) => {
  const { t } = useTranslation()

  return (
    <ModalWindow isModalVisible={isModalVisible} toggleModal={toggleModal}>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: COLORS.charcoal,
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
            {t("Time Complexity")}
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
                borderTopLeftRadius: SIZES.font,
                borderBottomLeftRadius: SIZES.font,
              }}
            >
              <Text
                style={{
                  color: COLORS.light,
                  fontSize: SIZES.font,
                  marginBottom: SIZES.base,
                }}
              >
                {t("Worst")}
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
                  fontSize: SIZES.font,
                  marginBottom: SIZES.base,
                }}
              >
                {t("Average")}
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
                borderTopRightRadius: SIZES.font,
                borderBottomRightRadius: SIZES.font,
              }}
            >
              <Text
                style={{
                  color: COLORS.light,
                  fontSize: SIZES.font,
                  marginBottom: SIZES.base,
                }}
              >
                {t("Best")}
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
            {t("Space Complexity")}
          </Text>
          <View
            style={{
              borderWidth: 0.5,
              borderColor: "#ffffff8d",
              margin: SIZES.base,
              padding: SIZES.base,
              borderRadius: SIZES.font,
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
    </ModalWindow>
  );
};

const DetailsHeader = ({ data, navigation, title, hasInfo }) => {
  const { t } = useTranslation()
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
        {t(title)}
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
