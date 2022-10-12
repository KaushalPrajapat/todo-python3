
updateOldList()
let add = document.getElementById('add')
add.addEventListener('click', updateList)

function updateOldList() {
    itemJsonArraystr = localStorage.getItem('itemsJson')
    if (itemJsonArraystr) {
        itemJsonArray = JSON.parse(itemJsonArraystr)
        tbody = document.getElementById('tableBody')
        str = ''
        itemJsonArray.forEach((element, index) => {
            str += `<tr>
                    <th scope="col">${index + 1}</th>
                    <th scope="col">${element[0]}</th>
                    <th scope="col">${element[1]}</th>
                    <th scope="col">${element[2]}</th>
                    <th> <button class="btn btn-danger" onclick = 'deleteItem()'>Detele</button></th>
                        </tr>`
        })
        tbody.innerHTML = str
    }
}
function updateList() {
    const d = new Date()
    const seconds = String(d.getSeconds()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    const hours = String(d.getHours()).padStart(2, '0');
    time = hours + ':' + minutes + ':' + seconds

    title = document.getElementById('title').value
    desc = document.getElementById('desc').value
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = []
        itemJsonArray.push([title, desc, time])
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else {
        itemJsonArraystr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArraystr)
        itemJsonArray.push([title, desc, time])
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))

    }

    // Putting into Tabel
    tbody = document.getElementById('tableBody')
    str = ''
    itemJsonArray.forEach((element, index) => {
        str += `<tr>
                    <th scope="col">${index + 1}</th>
                    <th scope="col">${element[0]}</th>
                    <th scope="col">${element[1]}</th>
                    <th scope="col">${element[2]}</th>
                    <th> <button class="btn btn-danger" onclick = 'deleteItem(${index})'>Detele</button></th>
                        </tr>`
    })
    tbody.innerHTML = str
}
function deleteItem(itemIndex) {
    // console.log('deleteing....')
    itemJsonArraystr = localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArraystr)
    itemJsonArray.splice(itemIndex, 1)
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    updateOldList()
}
function clearALL() {
    if (confirm('Whole List will be deleted')) {
        console.log('Clearing Storage')
        localStorage.clear();
        updateLatestList()
    }

}



function updateLatestList() {

    tbody = document.getElementById('tableBody')
    str = ''

    tbody.innerHTML = str
}