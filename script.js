
let employees=[];
//  generate unic id for each employee
function generateID(){
   return employees.length+1;
}
// function create object and push to array
function addedEmployee(name,profession,age){
   console.log(name);
let employe={
   id:generateID(),
   name:name,
   profession:profession,
   age: age,
}
employees.push(employe);
displayemployeData();
showMessage("Employee Added successfully","success");
}
function showMessage(messageStr,className){
   let messageDiv=document.getElementById('message');
   messageDiv.innerText=messageStr;
   messageDiv.className=className;
}
// function to update data on ui design
function displayemployeData(){
   const addedEmployee_container=document.querySelector('.AddedEmployee-container');
   addedEmployee_container.innerHTML='';
   console.log(employees);
   employees.forEach((employe)=>{
    const updateOnui=document.createElement('div');
    const button=document.createElement('button');
    const addData=document.createElement('div');
    addData.classList.add('addData');
    button.id="delete-btn";
    button.innerText="Delete";
    button.addEventListener('click',()=>deleteEmployee(employe.id));
    updateOnui.classList.add('updateOnui');
    let innerHTML=`
                      <div class="id">${employe.id}</div>
                  <div class="id">Name: ${employe.name}</div>
                  <div class="id">Profession: ${employe.profession}</div>
                  <div class="name">age: ${employe.age}</div>`;
                  updateOnui.innerHTML=innerHTML;
                  addData.append(updateOnui);
                  addData.append(button);
                  addedEmployee_container.append(addData);
   })
}
// function to delete employe
function deleteEmployee(id){
   employees=employees.filter(employe=>employe.id !=id);
   displayemployeData();
}
// listener handle asubmit event
document.getElementById('employeeForm').addEventListener('submit',(e)=>{
   e.preventDefault();
   let name=document.getElementById('name').value;
   let profession=document.getElementById('profession').value;
   let age=document.getElementById('age').value;
 if(name.trim()==='' || profession.trim()===''||age.trim()===''){
   showMessage('please fill all fields','error');
 }
 else{
   addedEmployee(name, profession, age);
   document.getElementById('employeeForm').reset();
 }
})

