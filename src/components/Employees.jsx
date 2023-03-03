import styled from "styled-components";
import "../styles/style.css"

import DpDataTable from 'dp-data-table';

const CardDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

/*const tableau = [
    {
        firstName: "jean",
        lastName: "valjean",
        birthDate: "2023-01-21",
        startDate: "2023-01-22",
        street: "12 rue des champs",
        city: "paris",
        state: "yveline",
        zipCode: "49300",
        department: "sales"
    },
    {
        firstName: "margot",
        lastName: "vaxjean",
        birthDate: "2023-01-21",
        startDate: "2023-01-22",
        street: "12 rue des champs",
        city: "paris",
        state: "yveline",
        zipCode: "49300",
        department: "sales"
    },
    {
        firstName: "jacques",
        lastName: "valjean",
        birthDate: "2023-01-21",
        startDate: "2023-01-22",
        street: "12 rue des champs",
        city: "paris",
        state: "yveline",
        zipCode: "49300",
        department: "sales"
    },
]*/

/*let tableau2 = []*/

function User (firstName,lastName, birthDate, startDate, street, city, state, zipCode, department) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.startDate = startDate;
        this.street = street;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.department = department;
}


/*
function Employees(props) {
    let i = 0

    function sortTable(n) {
        console.log(n)
        var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table = document.getElementById("employee-table");
        switching = true;
        dir = "asc";

        while (switching) {

            switching = false;
            rows = table.rows;

            for (i = 1; i < (rows.length - 1); i++) {
                shouldSwitch = false;
                x = rows[i].getElementsByTagName("TD")[n];
                y = rows[i + 1].getElementsByTagName("TD")[n];
                if (dir === "asc") {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                } else if (dir === "desc") {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
            }
            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                switchcount ++;
            } else {
                if (switchcount === 0 && dir === "asc") {
                    dir = "desc";
                    switching = true;
                }
            }
        }
    }

    function SearchAlgo(e) {

        for (let i = 0; i < props.tab.length; i++) {
            if(e === props.tab[i].firstName  || e === props.tab[i].lastName || e === props.tab[i].birthDate || e === props.tab[i].startDate || e === props.tab[i].street || e === props.tab[i].city || e === props.tab[i].state || e === props.tab[i].zipCode || e === props.tab[i].department) {
                var user1 = new User(props.tab[i].firstName, props.tab[i].lastName, props.tab[i].birthDate, props.tab[i].startDate, props.tab[i].street, props.tab[i].city, props.tab[i].state, props.tab[i].zipCode, props.tab[i].department,);
                tableau2.push(user1)
                setTab(tableau2)
            }
        }
        if (e === "") {
            tableau2 = []
            setTab(props.tab)            
        }
    }

    const [tab, setTab] = useState(props.tab)

    return (
        <CardDiv id="employee-div" className="container">

            <div>
                <label htmlFor="">Search: </label>
                <input onChange={(e)=>SearchAlgo(e.target.value)} type="text"/>
            </div>
            <h1>Current Employees</h1>
            <table id="employee-table" className="display dataTable no-footer" role="grid">
                <thead>
                    <tr role="row">
                        <th className="sorting_asc" tabIndex="0" aria-controls="employee-table" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="First Name: activate to sort column descending" style={{width: "76.8594px"}} onClick={() => sortTable(0)}>
                            First Name
                        </th>
                        <th className="sorting" tabIndex="0" aria-controls="employee-table" rowSpan="1" colSpan="1" aria-label="Last Name: activate to sort column ascending" style={{width: "74.2188px"}} onClick={() => sortTable(1)}>
                            Last Name
                        </th>
                        <th className="sorting" tabIndex="0" aria-controls="employee-table" rowSpan="1" colSpan="1" aria-label="Start Date: activate to sort column ascending" style={{width: "70.6406px"}} onClick={() => sortTable(2)}>
                            Date of Birth
                        </th>
                        <th className="sorting" tabIndex="0" aria-controls="employee-table" rowSpan="1" colSpan="1" aria-label="Department: activate to sort column ascending" style={{width: "82.6406px"}} onClick={() => sortTable(3)}>
                            Start Date
                        </th>
                        <th className="sorting" tabIndex="0" aria-controls="employee-table" rowSpan="1" colSpan="1" aria-label="Date of Birth: activate to sort column ascending" style={{width: "89.7656px"}} onClick={() => sortTable(4)}>
                            Street
                        </th>
                        <th className="sorting" tabIndex="0" aria-controls="employee-table" rowSpan="1" colSpan="1" aria-label="Street: activate to sort column ascending" style={{width: "40.5781px"}} onClick={() => sortTable(5)}>
                            City
                        </th>
                        <th className="sorting" tabIndex="0" aria-controls="employee-table" rowSpan="1" colSpan="1" aria-label="City: activate to sort column ascending" style={{width: "29.3281px"}} onClick={() => sortTable(6)}>
                            State
                        </th>
                        <th className="sorting" tabIndex="0" aria-controls="employee-table" rowSpan="1" colSpan="1" aria-label="State: activate to sort column ascending" style={{width: "34.6562px"}} onClick={() => sortTable(7)}>
                            Zip Code
                        </th>
                        <th className="sorting" tabIndex="0" aria-controls="employee-table" rowSpan="1" colSpan="1" aria-label="Zip Code: activate to sort column ascending" style={{width: "63.5781px"}} onClick={() => sortTable(8)}>
                            Department
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tab.map(
                        e =>
                            <tr key={i++}>
                                <td>{e.firstName}</td>
                                <td>{e.lastName}</td>
                                <td>{e.birthDate}</td>
                                <td>{e.startDate}</td>
                                <td>{e.street}</td>
                                <td>{e.city}</td>
                                <td>{e.state}</td>
                                <td>{e.zipCode}</td>
                                <td>{e.department}</td>
                            </tr>
                    )}
                </tbody>
            </table>
            <DpDataTable items={
                tab.map(e => [{
                            FirstName: e.firstName, 
                            Lastname: e.lastName, 
                            Birthdate: e.birthDate,
                            Startdate: e.startDate,
                            Street: e.street,
                            City: e.city,
                            State: e.state,
                            Zipcode: e.zipCode,
                            Department: e.department
                        }])
            } />
        </CardDiv>
    )
}*/

function Employees(props) {

    //const [tab, setTab] = useState(props.tab)

    /*const tab = [
        {
            firstName: "marie", 
            lastName: "dupont", 
            birthDate: "26/03/2024",
            startDate: "26/04/2003",
            street: "53 avenue de nantes",
            city: "cholet",
            state: "lalal",
            zipCode:"lalala",
            department: "lalala"
        },
        {
            firstName: "louise", 
            lastName: "dupont", 
            birthDate: "26/03/2024",
            startDate: "26/04/2003",
            street: "53 avenue de nantes",
            city: "cholet",
            state: "lalal",
            zipCode:"lalala",
            department: "lalala"
        },
    ]*/

    
    const dataTab = []

    props.tab.forEach(e => {
        if (e.birthDate !== '' && e.startDate !== '') {
            const birthdate = e.birthDate.getFullYear() + '/' + (e.birthDate.getMonth() + 1) + '/' + e.birthDate.getDate()
            const startdate = e.startDate.getFullYear() + '/' + (e.startDate.getMonth() + 1) + '/' + e.startDate.getDate()
            const newUser = new User(e.firstName, e.lastName, birthdate, startdate, e.street, e.city, e.state, e.zipCode, e.department)
            dataTab.push(newUser)
        } else {
            const newUser = new User(e.firstName, e.lastName, e.birthDate, e.startDate, e.street, e.city, e.state, e.zipCode, e.department)
            dataTab.push(newUser)
        }
        
        
        }
    )
    //console.log(dataTab)

    return (
        <CardDiv id="employee-div" className="container">
            <DpDataTable 
                items={dataTab} 
                showFilter
                showSort
                headers= {{'firstName': 'First Name', 'lastName': 'Last name', 'birthDate': 'Birthdate', 'startDate': 'Start date', 'street': 'Street', 'city': 'City', 'state': 'State', 'zipCode': 'Zipcode', 'department': 'Department'}}
            />
        </CardDiv>
    )
}

export default Employees