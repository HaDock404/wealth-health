import { useState } from "react"

import Test from "./Test"
//recupérer la valeur et la mettre dans un useste, essayer de faire un usestate avec un tableau et afficher le usestate dans la console
function GlobalState() {

    const [name, setName] = useState("")
    const [tab, setTab] = useState(
        {
            var1: "Gael",
            var2: "Eden",
            var3: "Flavie",
            var4: "Pompon",
        }
    )
    console.log(tab.var1)
    let updatedValue = {"var1":"Eli"};
    setTab(tab => (
        {
            ...tab, ...updatedValue
        }
    ))
    console.log(tab.var1)

    const printValues = e => {
        e.preventDefault();
        console.log(name);
      };

    return (
        <Test 
            valueName={name} 
            valueSet={setName} 
            valuePrint={printValues}
            valuetab={tab}
            valueSetTab={setTab}
        />

    )
}

export default GlobalState