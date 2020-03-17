const tableData = data
const tbody = d3.select('tbody')

function displayData(data){ 
    tbody.text("")
    data.forEach(function(sighting){
    new_tr = tbody.append("tr")
    Object.entries(sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}

displayData(tableData)

const handleClick = () => {
    d3.event.preventDefault()

    const date = d3.select('#datetime').property('value')
    let filteredData = tableData;

    if (date)
        filteredData = filteredData.filter(row => row.datetime === date)
    
    tbody.html('')  // Clear existing data

    data.forEach(row => {
        const currentRow = tbody.append('tr')  // append row
        Object.values(row).forEach(value => {
            const cell = currentRow.append('td')
            cell.text(value)
        })
    })
}

d3.selectAll('#filter-btn').on('click', handleClick)
// buildTable(tableData)