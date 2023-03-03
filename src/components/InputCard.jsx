import styled from "styled-components"

const CardInput = styled.input`
    padding: 5px;
    font-size: 1.2rem;
    border: 1px solid black;
    background-color: grey;
    ` 

function InputCard(props) {
    return <CardInput type="date" value={props.value} onChange={props.onChange}></CardInput>
}

export default InputCard