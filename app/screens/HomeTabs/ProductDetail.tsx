import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import {
  IC_BACK,
  IC_CART,
  IC_FORWARD,
  IC_MENU,
  IC_SEARCH,
  _1,
  _2,
  _3,
  _4,
  _5,
} from "../../utils/ImageSource";
import { useDispatch } from "react-redux";
import { toastShow } from "../../libs/toast";
import { getProductDetailAsync } from "../../features/ProductDetail/thunks/index";
import Colors from "../../libs/Colors";
import { styles } from "../../Styles/ProductDetailStyles";

const { width: viewportWidth } = Dimensions.get("window");

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState("13C");
  const [selectedCountry, setSelectedCountry] = useState("UK");
  const flatListRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch<any>();
  const [productDetail, setProductDetail] = useState<any>();
  const [sizesArr, setSeizesArr] = useState<any>([]);

  const getProductDetail = async () => {
    dispatch(getProductDetailAsync())
      .unwrap()
      .then((result: any) => {
        console.log("LOG:: SEARCH RESULT ", result);
        setProductDetail(result);
        const arr: any = [];
        result?.sizes.map((size: any, index: number) => {
          arr.push(size?.uk);
          arr.push(size?.eu);
          arr.push(size?.us);
        });
        setSeizesArr(arr);
      })
      .catch(() => {
        toastShow("error", "Something wrong");
      });
  };

  useEffect(() => {
    getProductDetail().catch();
  }, []);

  const scrollToNext = () => {
    if (currentIndex < productDetail?.imageUrls.length - 1) {
      const nextIndex = currentIndex + 1;
      flatListRef.current.scrollToIndex({ animated: true, index: nextIndex });
      setCurrentIndex(nextIndex);
    }
  };

  const scrollToPrev = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      flatListRef.current.scrollToIndex({ animated: true, index: prevIndex });
      setCurrentIndex(prevIndex);
    }
  };

  const onScrollEnd = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / viewportWidth);
    setCurrentIndex(index);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Top Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={IC_MENU} style={{ width: 30, height: 30 }} />
        </TouchableOpacity>
        <Text style={styles.headerLogo}>LACED</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.headerIcon}>
            <Image source={IC_SEARCH} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon}>
            <Image source={IC_CART} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.carouselContainer}>
        <FlatList
          ref={flatListRef}
          data={productDetail?.imageUrls}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Image
              source={item}
              style={styles.productImage}
              resizeMode={"contain"}
            />
          )}
          onMomentumScrollEnd={onScrollEnd}
        />

        {/* Previous Button */}
        {currentIndex > 0 && (
          <TouchableOpacity style={styles.prevButton} onPress={scrollToPrev}>
            <Image source={IC_BACK} style={styles.icon} resizeMode={"cover"} />
          </TouchableOpacity>
        )}

        {/* Next Button */}
        {currentIndex < productDetail?.imageUrls.length - 1 && (
          <TouchableOpacity style={styles.nextButton} onPress={scrollToNext}>
            <Image
              source={IC_FORWARD}
              style={styles.icon}
              resizeMode={"cover"}
            />
          </TouchableOpacity>
        )}
      </View>

      {/* Indicators */}
      <View style={styles.indicatorContainer}>
        {productDetail?.imageUrls.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              index === currentIndex
                ? styles.activeIndicator
                : styles.inactiveIndicator,
            ]}
          />
        ))}
      </View>

      <Text
        style={{
          marginHorizontal: 15,
          marginTop: 20,
          color: Colors.gray1Color,
        }}
      >
        {productDetail?.brandCategories[0]?.name +
          " / " +
          productDetail?.styleCode}
      </Text>

      {/* Product Details */}
      <Text style={styles.productTitle}>{productDetail?.title}</Text>

      {/* Size Selection */}
      <View style={styles.sizeSelector}>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          {/* setSelectedCountry */}
          <Text style={styles.sizeTitle}>Available Sizes:</Text>

          <View style={styles.rowSize}>
            {["UK", "US", "EU"].map((country: any, index: number) => (
              <TouchableOpacity
                onPress={() => setSelectedCountry(country)}
                style={[
                  {
                    width: 40,
                    borderWidth: 1,
                    paddingVertical: 10,
                    borderColor: Colors.colorGray,
                  },
                  selectedCountry === country && styles.selectedSizeBox,
                ]}
              >
                <View key={index} style={{ alignSelf: "center" }}>
                  <Text style={{ fontSize: 10 }}>{country}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.sizesContainer}>
          <View style={styles.rowSize}>
            {sizesArr.map((size: any, index: number) => (
              <TouchableOpacity
                onPress={() => setSelectedSize(size)}
                style={[
                  {
                    width: "25%",
                  },
                  styles.sizeBox,
                  selectedSize === size && styles.selectedSizeBox,
                ]}
              >
                <View key={index} style={{ alignSelf: "center" }}>
                  <Text>{size}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
      <Text style={styles.productPrice}>£180</Text>

      {/* Add to Bag Button */}
      <TouchableOpacity style={styles.addToBagButton}>
        <Text style={styles.addToBagText}>ADD TO BAG</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProductDetails;
