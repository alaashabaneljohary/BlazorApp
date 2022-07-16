let formInputs = document.getElementById('formInput');
function showData()
{
 formInputs.style.display = 'block';
}
let customeCodeInput = document.getElementById('customeCode') ;
let customeNameInput = document.getElementById('customeName') ;
let customeEmailInput = document.getElementById('customeEmail');
let customePhoneInput = document.getElementById('customePhone');
// let customeDateInput = document.getElementById('customeDate');
let save = document.getElementById('save') ;
let containerData  ;
let mood = 'Save' ;
let tmp ;
if(localStorage.getItem('users') == null)
{
    containerData = [] ;
} else 
{
    containerData = JSON.parse(localStorage.getItem('users'));
    displayData(containerData);
}
function creatData() {
    formInputs.style.display = 'none';
   
    if(validationNameInputs() == true && validationPhone() == true && validationEmail() == true)
    {
        let userData = {

            pCode:customeCodeInput.value ,
            pName:customeNameInput.value ,
            pEmail:customeEmailInput.value,
            pPhone:customePhoneInput.value ,
            pDate:getCurrentDate() , 
 
        }
       if(mood === 'Save') 
       {
        containerData.push(userData) ;
        
       } else {
        containerData [tmp] = userData ;
        mood = "Save" ;
        save.innerHTML = "Save"; 
    
       }
       localStorage.setItem('users', JSON.stringify(containerData)) ;
       displayData(containerData);
       
    };
};


function displayData(productList){
    let newData = `` ;
    for(let i = 0 ; i < productList.length ; i++ )
    {
        newData+= `<tr>
        <td>${i}</td>
        <td>${productList[i].pCode}</td>
        <td>${productList[i].pName}</td>
        <td>${productList[i].pEmail}</td>
        <td>${productList[i].pPhone}</td>
        <td id='todays'>${ productList[i].pDate}</td>
        <td><button class="btn btn-primary" onclick="updateData(${i})">Edit</button></td>
        <td><button class="btn btn-danger" onclick="deleteData(${i})">Remove</button></td>
    </tr>`;
    }
    document.getElementById('tableRow').innerHTML = newData ;
    
    
}

function getCurrentDate(){
  
    
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
     return today;
   }


function deleteData(index){
    containerData.splice(index , 1) ;
    localStorage.setItem('users', JSON.stringify(containerData)) ;
    displayData(containerData);
}

function updateData(i)
{
    customeCodeInput.value = containerData[i].pCode ;
    customeNameInput.value = containerData[i].pName ;
    customeEmailInput.value= containerData[i].pEmail ;
    customePhoneInput.value = containerData[i].pPhone;
    // customeDateInput.value = getCurrentDate();

    showData();
    save.innerHTML = 'Edit';
    mood = 'Edit'
    tmp = i ;
    localStorage.setItem('users', JSON.stringify(containerData)) ;

}

function validationNameInputs(){
    let regax = /^[A-Z][a-z]{3,15}$/ ;
    if(regax.test(customeNameInput.value) == true)
    {
        customeNameInput.classList.add('is-valid');
        customeNameInput.classList.remove('is-invalid');
        return true ;
    } 
    else {
        customeNameInput.classList.add('is-invalid');
        customeNameInput.classList.remove('is-valid');
        
        return false ;
    }
}

function validationPhone()
{
    let regax = /^(010|011|012|015)[0-9]{8}/;
    if(regax.test(customePhoneInput.value) == true)
    {
        customePhoneInput.classList.add('is-valid');
        customePhoneInput.classList.remove('is-invalid');
        return true ;
    } 
    else {
        customePhoneInput.classList.add('is-invalid');
        customePhoneInput.classList.remove('is-valid');

        return false ;
    }
}
function validationEmail()
{
    let regax = /@[A-Za-z]{3,20}.com$/;
    if(regax.test(customeEmailInput.value) == true)
    {
        customeEmailInput.classList.add('is-valid');
        customeEmailInput.classList.remove('is-invalid');
        return true ;
    } 
    else {
        customeEmailInput.classList.add('is-invalid');
        customeEmailInput.classList.remove('is-valid');
        return false ;
    }
}


let myDemo = document.getElementById('demo');

document.body.addEventListener('mousemove',function(e){
      
    myDemo.style.left = `${e.clientX}px` ;
    myDemo.style.top = `${e.clientY}px` ;
})

























// let myTody = ['Sunday' , 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
// let month = ['January' , 
//              'February',
//              'March',
//              'April',
//              'May',
//              'June',
//              'July',
//              "August",
//              'September',
//              'October',
//              'November',
//              'December']


  
 
 
