import React, { useState } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import Item from "./Item";

// Async fetch method, it uses a public API to get all matchs of the day
const getData = async () => {
  /*  Until October, there would be no other NBA matchs. In order to print some data we use the last day of last season, 2021-08-17
  const today = new Date().toLocaleDateString('fr-CA');
  */
  const today:string = '2021-08-17';
  return fetch(
    "https://balldontlie.io/api/v1/games?start_date=" + today + "&end_date=" + today
  )
    .then((response) => response.json())
    .then((responseJSON: Object) => {
      return responseJSON;
    })
    .catch((error) => {
      console.error(error);
    });
};
const getFormatData = async () => {
  let data = await getData();
  return data["data"].map((match) => {
    return {
      key: match["id"].toString(),
      fstTeam: match["home_team"]["full_name"],
      scdTeam: match["visitor_team"]["full_name"].toString(),
    };
  });
};

const Corps = () => {
  let [matchs, setMatchs] = useState([]);
  React.useEffect(() => {
    getFormatData().then((data) => {
      setMatchs(data);
    });
  }, []);

  return (
    <View>
      {/* It shows all NBA matchs of the day */}
      <FlatList
        keyExtractor= {(item, index) => item.key}
        data={matchs} 
        renderItem={({ item }) => (
          <Item fstTeam={item.fstTeam} scdTeam={item.scdTeam} />
        )}
      />
    </View>
  );
};

export default Corps;