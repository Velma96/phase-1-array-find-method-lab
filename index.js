

const record = [
    { year: "2018", result: "N/A"},
    { year: "2017", result: "N/A"},
    { year: "2016", result: "N/A"},
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
]
function superbowlWin(record) {
    const win = record.find(entry=>entry.results ==="W")
    return win ? win.year: "2015";
   

}
const result=superbowlWin(record);
console.log(result);


