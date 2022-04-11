import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "twrnc";
import { useSelector } from "react-redux";
import { selectDestination, selectOrigin } from "../slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "@env";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!origin || !destination) return;

    // zoom to markup fit
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origin, destination]);

  return (
    <MapView
      ref={mapRef}
      style={tw`bg-white h-full`}
      mapType="mutedStandard"
      initialRegion={{
        // latitude: origin.location.lat,
        // longitude: origin.location.lng,
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={origin.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeColor="black"
          strokeWidth={3}
        />
      )}

      {origin?.location && (
        <Marker
          coordinate={{
            // latitude: origin.location.lat,
            // longitude: origin.location.lng,
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}

      {destination?.location && (
        <Marker
          coordinate={{
            // latitude: origin.location.lat,
            // longitude: origin.location.lng,
            latitude: 137.78825,
            longitude: -122.4324,
          }}
          title="Destination"
          description={destination.description}
          identifier="destination"
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
