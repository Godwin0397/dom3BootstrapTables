function create_tableTags(tagName, attribute1Name, attribute1Value, content){
    var tagNameData = document.createElement(tagName)
    if (attribute1Name && attribute1Name!==""){
        tagNameData.setAttribute(attribute1Name, attribute1Value)
    }
    if (content && content!==""){
        tagNameData.innerHTML = content
    }
    return tagNameData
}

let tableCreate = create_tableTags("table", "class", "table")
let thead = create_tableTags("thead", "class", "thead-dark")

let theadRow = create_tableTags("tr")
let thheadtd1 = create_tableTags("th", "scope", "col", "#")
let thheadtd2 = create_tableTags("th", "scope", "col", "First Name")
let thheadtd3 = create_tableTags("th", "scope", "col", "Last Name")
let thheadtd4 = create_tableTags("th", "scope", "col", "Handle")

theadRow.append(thheadtd1, thheadtd2, thheadtd3, thheadtd4)

thead.append(theadRow)

let tbody = create_tableTags("tbody")

let tbodyRow1 = create_tableTags("tr")
let tbodyRow1td1 = create_tableTags("th", "scope", "row", "1")
let tbodyRow1td2 = create_tableTags("td", "", "", "Mark")
let tbodyRow1td3 = create_tableTags("td", "", "", "Otto")
let tbodyRow1td4 = create_tableTags("td", "", "", "@mdo")

tbodyRow1.append(tbodyRow1td1, tbodyRow1td2, tbodyRow1td3, tbodyRow1td4)

let tbodyRow2 = create_tableTags("tr")
let tbodyRow2td1 = create_tableTags("th", "scope", "row", "2")
let tbodyRow2td2 = create_tableTags("td", "", "", "Jacob")
let tbodyRow2td3 = create_tableTags("td", "", "", "Thornton")
let tbodyRow2td4 = create_tableTags("td", "", "", "@fat")

tbodyRow2.append(tbodyRow2td1, tbodyRow2td2, tbodyRow2td3, tbodyRow2td4)

let tbodyRow3 = create_tableTags("tr")
let tbodyRow3td1 = create_tableTags("th", "scope", "row", "3")
let tbodyRow3td2 = create_tableTags("td", "", "", "Larry")
let tbodyRow3td3 = create_tableTags("td", "", "", "the Bird")
let tbodyRow3td4 = create_tableTags("td", "", "", "@twitter")

tbodyRow3.append(tbodyRow3td1, tbodyRow3td2, tbodyRow3td3, tbodyRow3td4)

let tbodyRow4 = create_tableTags("tr")
let tbodyRow4td1 = create_tableTags("th", "scope", "row", "4")
let tbodyRow4td2 = create_tableTags("td", "", "", "Jacob")
let tbodyRow4td3 = create_tableTags("td", "", "", "Thornton")
let tbodyRow4td4 = create_tableTags("td", "", "", "@fat")

tbodyRow4.append(tbodyRow4td1, tbodyRow4td2, tbodyRow4td3, tbodyRow4td4)

tbody.append(tbodyRow1, tbodyRow2, tbodyRow3, tbodyRow4)

tableCreate.append(thead, tbody)

document.body.append(tableCreate)

