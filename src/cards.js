function cardGenerator(employee) {

 let list = ""
 if (employee.getRole()==="Manager"){
   list = `<li class="list-group-item">Office number: ${employee.officeNumber}</li>`
 } else if (employee.getRole()==="Engineer"){
   list = `<li class="list-group-item">Github: ${employee.github}</li>`
 } else {
   list = `<li class="list-group-item">School: ${employee.school}</li>`
 }

  return `<div class="card mx-auto mb-3" style="width: 15rem">
    <h3 class="card-header">${employee.name}<br />${employee.getRole()}</h3>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${employee.id}</li>
      <li class="list-group-item">Email address: ${employee.email}</li>
       ${list}
    </ul>
  </div>
  `;
}

module.exports = cardGenerator;
