import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

type user = {
    id: number,
    name: string,
    category: string,
    price: number,
    inStock: string,
    rating: number,
}
const List = () => {
    const [data, setData] = useState<user[]>([])
    useEffect(() => {
        axios.get('https://mocki.io/v1/2f28b8f2-032c-4959-a9dc-b96d5bf8d8b6')
            .then(function (response) {
                setData(response.data)
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, [])
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (<View style={

                    styles.listContainer}>

                    <View style={styles.firstItem}><Text style={styles.txt1}>{item.id}</Text></View>
                    <View style={styles.secondItem}><Text style={styles.txt1}>{item.name}</Text></View>
                    <View style={styles.thirdItem}><Text style={styles.txt1}>{item.category}</Text></View>
                    <View style={styles.fourthItem}><Text style={styles.txt1}>{item.price}</Text></View>
                    <View style={styles.fifthItem}><Text style={styles.txt1}>{item.inStock}</Text></View>
                    <View style={styles.sixthItem}><Text style={styles.txt1}>{item.rating}</Text></View>

                </View>
                )}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#d4d2d2"
    },
    name: {
        fontSize: 22,
        fontWeight: "bold",
        color: "white"
    },
    listContainer: {
        height: 210,
        width: "90%",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "tomato",
        marginTop: 10,
    },
    firstItem: {
        height: 35,
        width: "100%",
        paddingHorizontal: 10
    },
    secondItem: {
        height: 35,
        width: "100%",
        paddingHorizontal: 10
    },
    thirdItem: {
        height: 35,
        width: "100%",
        paddingHorizontal: 10
    },
    fourthItem: {
        height: 35,
        width: "100%",
        paddingHorizontal: 10
    },
    fifthItem: {
        height: 35,
        width: "100%",
        paddingHorizontal: 10
    },
    sixthItem: {
        height: 35,
        width: "100%",
        paddingHorizontal: 10
    },
    txt1: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        paddingHorizontal: 10
    }
})


export default List;