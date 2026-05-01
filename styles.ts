import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  map: {
    flex: 1,
    width: '100%'
  },

  mapContainer: {
    flex: 1,
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
  },

  box: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    position: 'absolute',
    top: 20,
    left: 300,
    zIndex: 1
  }
});