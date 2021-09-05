import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS, FONTS, SIZES, icons } from '../constans'

function Home() {
    function renderNavBar() {
        return (
            <View style={{
                flexDirection: "row", height: 50,
                justifyContent: "space-between",
                alignItems: "flex-end",
                paddingHorizontal: SIZES.padding,
                backgroundColor: SIZES.width
            }}>
                <TouchableOpacity style={{ justifyContent: "center", width: 50, }} onPress={() => console.log("Back")}>
                    <Image source={icons.back_arrow} style={{ width: 30, height: 30, tintColor: COLORS.primary }} />
                </TouchableOpacity>

                <TouchableOpacity on Press={() => console.log("More")}>
                    <Image source={icons.more} style={{ width: 30, height: 30, tintColor: COLORS.primary }} />
                </TouchableOpacity>
            </View>
        )
    }

    function renderHeader() {
        return (
            <View style={{ paddingHorizontal: SIZES.padding, paddingVertical: SIZES.padding, backgroundColor: COLORS.white }}>
                <Text style={{ color: COLORS.primary, ...FONTS.h2 }}>My Expenses</Text>
                <Text style={{ color: COLORS.darkgray, ...FONTS.h3 }}>Summary (private)</Text>
                <View style={{ flexDirection: "row", marginTop: SIZES.padding, alignItems: "center" }}>
                    <View style={{ height: 50, width: 50, backgroundColor: COLORS.lightGray, justifyContent: "center", alignItems: "center", ...SIZES.radius }}>
                        <Image source={icons.calendar} style={{ width: 30, height: 30, tintColor: COLORS.lightBlue, }} />
                    </View>
                    <View style={{ marginLeft: SIZES.padding }}>
                        <Text style={{ ...FONTS.h3, color: COLORS.primary }}>11 nov, 2020</Text>
                        <Text style={{ ...FONTS.body3, color: COLORS.darkgray }}>18% more last moth</Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style={{ flax: 1, backgroundColor: COLORS.lightGray2 }}>
            {renderNavBar()}
            {renderHeader()}
        </View>
    )
}

export default Home
