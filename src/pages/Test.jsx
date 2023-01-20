function Test(props) {

    console.log(props.valuetab)
    
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
                {props.valuetab.var1}
            <input
                value={props.valuetab[0]}
                onChange={event => props.valueSetTab(event.target.value)}
                name="test"
                type="text"
            />
            </label>
            <br />
            <button>Submit</button>
        </form>
    )
}

export default Test