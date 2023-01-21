function Test(props) {

    //console.log(props.valuetab)
    
    return (
        <form onSubmit={props.valuePrint}>
            <label>
                {props.valueName}
            <input
                value={props.valueName}
                onChange={event => props.valueSet(event.target.value)}
                name="username"
                type="text"
            />
            </label>
            <br />

            <label>
                {props.valuetab.var1} <br/>
                {props.valuetab.var2} <br/>
                {props.valuetab.var3} <br/>
                {props.valuetab.var4} <br/>
            <input
                value={props.valuetab.var1}
                onChange={event => props.valueSetTab(valuetab => ({...valuetab, ...{"var1":`${event.target.value}`}}))}
                name="name1"
                type="text"
            />
            <input
                value={props.valuetab.var2}
                onChange={event => props.valueSetTab(valuetab => ({...valuetab, ...{"var2":`${event.target.value}`}}))}
                name="name1"
                type="text"
            />
            <input
                value={props.valuetab.var3}
                onChange={event => props.valueSetTab(valuetab => ({...valuetab, ...{"var3":`${event.target.value}`}}))}
                name="name1"
                type="text"
            />
            <input
                value={props.valuetab.var4}
                onChange={event => props.valueSetTab(valuetab => ({...valuetab, ...{"var4":`${event.target.value}`}}))}
                name="name1"
                type="text"
            />
            </label>
            <br />
            
            <button>Submit</button>
        </form>
    )
}

export default Test