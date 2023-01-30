import styled from "styled-components";
import "../styles/style.css"

const CardDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

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

    return (
        <CardDiv id="employee-div" className="container">
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
                    {props.tab.map(
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
        </CardDiv>
    )
}

export default Employees