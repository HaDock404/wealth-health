import { useState } from "react"

import Test from "./Test"

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
    /*let updatedValue = {"var5":"Eli"};
    setTab(tab => (
        {
            ...tab, ...updatedValue
        }
    ))*/

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