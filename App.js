import { useEffect, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { ListItem } from "@rneui/themed";

export default function App() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    getAllPersons();
  }, []);

  const getAllPersons = async () => {
    const response = await fetch("https://api.lagtinget.ax/api/persons.json");
    const data = await response.json();
    setPersons(data);
  };

  return (
    <View style={styles.personCard}>
      <FlatList
        data={persons}
        keyExtractor={(data) => data.id.toString()}
        renderItem={({ item }) => (
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  personCard: {
    flex: 1,
    backgroundColor: "#ff9b53",
    borderWidth: 1,
    padding: 20,
  },
});
