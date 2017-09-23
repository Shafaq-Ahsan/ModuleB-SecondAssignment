$(document).ready(function () {
    // $('#datatable').dataTable();
    $("[data-toggle=tooltip]").tooltip();
//    document.getElementById("btn_click").click()
    $("#add").modal();
});
var abc;

function calculate(){
      var b = document.getElementById("secondNumber").value;
     var fname = document.getElementById("addFirstNum").value;
    var lname = document.getElementById("addOperation").value;
    var table = document.getElementById("tableBody");
    var tablerow = document.createElement("tr");
    
    var d2 = document.createElement("td");
    var t2 = document.createTextNode(fname);
    d2.appendChild(t2);
    tablerow.appendChild(d2);
      var d3 = document.createElement("td");
    var t3 = document.createTextNode(lname);
    d3.appendChild(t3);
    tablerow.appendChild(d3);
    var d4 = document.createElement("td");
    var t4 = document.createTextNode(b);
    d4.appendChild(t4);
    tablerow.appendChild(d4);
    var d1 = document.createElement("td");
    var t1 = document.createTextNode("Result :"+abc(Number(b)));
    d1.appendChild(t1);
    tablerow.appendChild(d1);
    table.appendChild(tablerow);
}

function clickAdd() {
    var fname = document.getElementById("addFirstNum").value;
    var lname = document.getElementById("addOperation").value;
   abc = cal(Number(fname),lname);
   
 
    document.getElementById("close").click()

}
function cal (number,operator){
    switch (operator) {
        case "+":
            return function perform (b){
                return number + b;
            }
        case "-":
              return function perform (b){
                return number - b;
            }
            case "*":
              return function perform (b){
                return number * b;
            }
            case "/":
              return function perform (b){
                return b / number;
            }
        default:
          return function perform (b){
                return number + b;
            }
    }
}

