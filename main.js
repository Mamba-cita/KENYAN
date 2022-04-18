//table data

const table = [{

        name: 'John Doe',
        age: '25',
        occupation: 'Doctor',
        city: 'LIC',
        state: 'NY'
    },
    {
        name: "Susan Jons",
        age: '36',
        occupation: "Engineer",
        city: "Main city",
        state: "FL",
    },
    {
        name: "Mike Smith",
        age: '48',
        occupation: "Contractor",
        city: "Los Anglous",
        state: "CA",
    },
    {
        name: "Adam Jim",
        age: '62',
        occupation: "Surgent",
        city: "Flanders",
        state: "NJ",
    },
    {
        name: "Mike Doe",
        age: '26',
        occupation: "plummer",
        city: "LIC",
        state: "NY",
    },
    {
        name: "Sally Jons",
        age: '37',
        occupation: "blacksmith",
        city: "Main city",
        state: "FL",
    },
    {
        name: "Arnold Smith",
        age: '49',
        occupation: "unemployed",
        city: "Los Anglous",
        state: "CA",
    },
    {
        name: "Adel Jim",
        age: '61',
        occupation: "nurse",
        city: "Flanders",
        state: "NJ",
    }

]

//table header


const tableHeader = Object.keys(table[0]);
//console.log(tableHeader);
const search = document.querySelector('.filter-input');
const output = document.querySelector('.output');


//load DOM elements


window.addEventListener('DOMContentLoaded', loadTable);
search.addEventListener('input', filter);


//fuction to load table


function loadTable() {
    let temp = '<table><tr>';
    tableHeader.forEach(header => temp += `<th>${header.toUpperCase()}</th>`);
    temp += '</tr>';
    table.forEach(row => {
        temp += `
    <tr>
    <td>${row.name}</td>
    <td>${row.age}</td>
    <td>${row.occupation}</td>
    <td>${row.city}</td>
    <td>${row.state}</td>

    </tr>
    `
    });
    temp += '</table>';
    output.innerHTML = temp;

}

//filter function

function filter(e) {
    let results;
    let temp = "";

    results = table.filter(item =>
        item.state.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.city.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.occupation.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.age.toLowerCase().includes(e.target.value.toLowerCase())
    );
    //console.log(results);
}