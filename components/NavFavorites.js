import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Pressable,
} from "react-native";
import tw from "twrnc";
import React from "react";
import { Icon } from "@rneui/themed";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "code street, Uk",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "London Eye, London, Uk",
  },
];

const NavFavorites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={([tw`bg-gray-200`], { height: 0.5 })}></View>
      )}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity style={tw`flex-row items-center p-5`}>
            <Icon
              style={tw`mr-4 rounded-full bg-gray-300 p-3`}
              name={item.icon}
              type="ionicon"
              color="white"
              size={18}
            />
            <View>
              <Text style={tw`font-semibold text-lg`}>{item.location}</Text>
              <Text style={tw`text-gray-500`}>{item.destination}</Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default NavFavorites;

const styles = StyleSheet.create({});
