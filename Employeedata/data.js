let employees=[{eid:101,ename:"Sai",esal:45000},
{eid:102,ename:"Viswanadh",esal:55000},
{eid:103,ename:"Charan",esal:65000}, 
]
let  display_Data = ()=>{
    let rows=""
    for(employee of employees){
     rows=rows +  `<tr>
                     <td>${employee.eid}</td>
                     <td>${employee.ename}</td>
                     <td>${employee.esal}</td>
                    </tr>`
    }
  document.getElementById('tbody_data').innerHTML=rows
}
