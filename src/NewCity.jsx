import { useState } from "react";

export function NewCity() {
    const [name, setName] = useState("")

    async function addNewCity() {
        await setDoc(
            doc(citiesRef, name),
            {
                name: name,
                capital: false,
                regions: ["west_coast", "norcal"]
            })
    }

    return <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={addNewCity}> Add new city </button>
    </div>

}