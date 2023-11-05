// fill in javascript code here
let myForm = document.querySelector("form");
//console.log(myForm);
let studentName = document.getElementById("name");
//console.log(studentName);
let employeeId = document.getElementById("employeeID");
let dept = document.getElementById("department");
let studentExp = document.getElementById("exp");
let studentEmailId = document.getElementById("email");
let mobileNumber = document.getElementById("mbl");
let tbody = document.querySelector("tbody");
let allData = [];
myForm.addEventListener("submit", function (e){
  e.preventDefault();
  // console.log(studentName.value);
  let obj = {};
  obj.name = studentName.value;
  obj.employeeId = employeeId.value;
  obj.department = dept.value;
  obj.experience = studentExp.value;
  obj.email = studentEmailId.value;
  obj.mobileno = mobileNumber.value;
  if (Number(obj.experience) > 5) {
    obj.role = "Senior";
  } else if (Number(obj.experience) >= 2 && Number(obj.experience) <= 5) {
    obj.role = "Junior";
  } else {
    obj.role = "Fresher";
  }
   
  allData.push(obj);
  tbody.innerHTML = null;
 
  ///console.log(allData);
  function display(allData){
    tbody.innerHTML = ""; 
    
    allData.map((ele) => {
        //console.log(ele)
        let row = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");
        let btn = document.createElement("button");
        btn.setAttribute("id", "del");
        btn.innerText = "Delete";
        btn.addEventListener("click", function () {
          let deleted = allData.filter((element) => {
            return element != ele;
          });
          display(deleted)
        });
        td1.innerText = ele.name;
        td2.innerText = ele.employeeId;
        td3.innerText = ele.department;
        td4.innerText = ele.experience;
        td5.innerText = ele.email;
        td6.innerText = ele.mobileno;
        td7.innerText = ele.role;
        //console.log(typeof(Number(ele.experience)))
     
        row.append(td1, td2, td3, td4, td5, td6, td7, btn);
        tbody.append(row);
 
      });
    }
    display(allData);
    }) ;

   

  
 