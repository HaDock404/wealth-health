import styled from "styled-components"
import { HaDock404Plugin } from "hadock404-plugin"
import { states, departments } from '../plugins/Data.js'
import { useState } from "react"

const CardSignInContent = styled.form`
    box-sizing: border-box;
    background-color: white;
    width: 100%;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    `

const CardInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 1rem;
    `

const CardLabel = styled.label`
    font-weight: bold;
    `

const CardInput = styled.input`
    padding: 5px;
    font-size: 1.2rem;
    `

const CardButton = styled.button`
    display: block;
    width: 200px;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 1rem;
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
    cursor: pointer;
    `

const CardTitle = styled.h1`
    font-size: 30px;
    color: #334a1f;
    width: 100%;
    text-align: center;
    `

const CardForm1 = styled.div`
    padding: 20px;`

const CardForm2 = styled.div`
    border: 2px solid black;
    padding: 20px;
    position: relative;
    `

const CardDisplay = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 50%;
    min-width: 500px;
    `

const CardTest = styled.h3`
    position: absolute;
    margin: 0px;
    background-color: white;
    padding: 5px;
    top: -17px;
    `

function Form (props) {

    const [value1, setValue1] = useState(null)
    const [value2, setValue2] = useState(null)

    function reset() {
        setValue1(null);
        setValue2(null);
        alert("Employee created")
    }

    function state(e) {
        props.setTab(tab => ({...tab, ...{"state":`${e.getAttribute('data')}`}}))
    }

    function test(e) {
        props.setTab(tab => ({...tab, ...{"department":`${e.getAttribute('data')}`}}))
    }


        return (
            <CardSignInContent onSubmit={props.submit}>
                <CardTitle>Create Employee</CardTitle>
                <CardDisplay>
                    <CardForm1>
                        <CardInputWrapper>
                            <CardLabel htmlFor="First-Name">First Name</CardLabel>
                            <CardInput 
                                type="text" 
                                id="First-Name"
                                value={props.tab.firstName}
                                onChange={event => props.setTab(tab => ({...tab, ...{"firstName":`${event.target.value}`}}))}
                            />
                        </CardInputWrapper>
                        <CardInputWrapper>
                            <CardLabel htmlFor="Last-Name">Last Name</CardLabel>
                            <CardInput 
                                type="text" 
                                id="Last-Name"
                                value={props.tab.lastName}
                                onChange={event => props.setTab(tab => ({...tab, ...{"lastName":`${event.target.value}`}}))}
                            />
                        </CardInputWrapper>
                        <CardInputWrapper>
                            <CardLabel htmlFor="Date-of-Birth">Date of Birth</CardLabel>
                            <CardInput 
                                type="date" 
                                id="Date-of-Birth"
                                value={props.tab.birthDate}
                                onChange={event => props.setTab(tab => ({...tab, ...{"birthDate":`${event.target.value}`}}))}
                            />
                        </CardInputWrapper>
                        <CardInputWrapper>
                            <CardLabel htmlFor="Start-Date">Start Date</CardLabel>
                            <CardInput 
                                type="date" 
                                id="Start-Date"
                                value={props.tab.startDate}
                                onChange={event => props.setTab(tab => ({...tab, ...{"startDate":`${event.target.value}`}}))}
                            />
                        </CardInputWrapper>     
                    </CardForm1>

                    <CardForm2>
                        <CardTest>Adress</CardTest>
                        <CardInputWrapper>
                                <CardLabel htmlFor="First-Name">Street</CardLabel>
                                <CardInput 
                                    type="text" 
                                    id="First-Name"
                                    value={props.tab.street}
                                    onChange={event => props.setTab(tab => ({...tab, ...{"street":`${event.target.value}`}}))}
                                />
                            </CardInputWrapper>
                            <CardInputWrapper>
                                <CardLabel htmlFor="Last-Name">City</CardLabel>
                                <CardInput 
                                    type="text" 
                                    id="Last-Name"
                                    value={props.tab.city}
                                    onChange={event => props.setTab(tab => ({...tab, ...{"city":`${event.target.value}`}}))}
                                />
                            </CardInputWrapper>
                            <CardInputWrapper>
                                <CardLabel htmlFor="State">State</CardLabel>
                                <CardInput 
                                    type="text" 
                                    id="State"
                                    value={props.tab.state}
                                    onChange={event => props.setTab(tab => ({...tab, ...{"state":`${event.target.value}`}}))}
                                />
                            </CardInputWrapper>
                            <HaDock404Plugin dropdownMessage="Select" onDataReceived={state} tabWordsList={states} value={value1} onChange={setValue1}></HaDock404Plugin>
                            <CardInputWrapper>
                                <CardLabel htmlFor="Zip-Code">Zip Code</CardLabel>
                                <CardInput 
                                    type="text" 
                                    id="Zip-Code"
                                    value={props.tab.zipCode}
                                    onChange={event => props.setTab(tab => ({...tab, ...{"zipCode":`${event.target.value}`}}))}
                                />
                                <HaDock404Plugin dropdownMessage={"Select"} onDataReceived={test} tabWordsList={departments} value={value2} onChange={setValue2}></HaDock404Plugin>
                            </CardInputWrapper>
                    </CardForm2>
                </CardDisplay>
                <CardButton onClick={reset} type="submit">Save</CardButton>
                
            </CardSignInContent>
        )
    
    
}

export default Form