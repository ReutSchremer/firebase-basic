import { collection, setDoc, doc } from "firebase/firestore";
import { firestore } from "./firebase";

export async function initDB() {

    const citiesRef = collection(firestore, "cities");

    await setDoc(
        doc(citiesRef, "IL-----jerusalem"),
        {
            name: "Israel ",
            capital: true,
            regions: ["west_coast", "norcal"]
        }).then(res => console.log('res:', res));


    console.log("here")
















    // await setDoc(doc(citiesRef, "LA"), {
    //     name: "Los Angeles", state: "CA", country: "USA",
    //     capital: false, population: 3900000,
    //     regions: ["west_coast", "socal"]
    // });




    // await setDoc(doc(citiesRef, "DC"), {
    //     name: "Washington, D.C.", state: null, country: "USA",
    //     capital: true, population: 680000,
    //     regions: ["east_coast"]
    // });
    // await setDoc(doc(citiesRef, "TOK"), {
    //     name: "Tokyo", state: null, country: "Japan",
    //     capital: true, population: 9000000,
    //     regions: ["kanto", "honshu"]
    // });
    // await setDoc(doc(citiesRef, "BJ"), {
    //     name: "Beijing", state: null, country: "China",
    //     capital: true, population: 21500000,
    //     regions: ["jingjinji", "hebei"]
    // });
}