/*function to create DOM elements*/
(function(){
    let container = document.createElement('div'); container.setAttribute('class', 'container');
    let main = document.createElement('main');
    let form = document.createElement('form'); form.setAttribute('onsubmit','postSubmit();');
    form.setAttribute('class','myForm');

    /*function to create FORM LABEL AND FORM INPUT FIELD*/
    function setFormData(param){
        let formBox = document.createElement('div'); formBox.setAttribute('class','formBox');
        let label = document.createElement('label'); label.setAttribute('for',param);
        switch(param){
            case 'fname':label.innerText = 'First Name';break;
            case 'lname' : label.innerText = 'Last Name';break;
            case 'addr1' : label.innerText = 'Address Line';break;
            case 'state' : label.innerText = 'State';break;
            case 'zip' : label.innerText = 'Zip';break;
            default:label.innerText = param;break;
        }

        if(param ==='country')
        {
            let select = document.createElement('select');select.setAttribute('class','input');
        select.setAttribute('name','country');
        select.setAttribute('id','country');
        let option = document.createElement('option'); option.setAttribute('value','India');
        option.innerText = 'India';
        select.append(option);
        option = document.createElement('option'); option.setAttribute('value','SriLanka');
        option.innerText = 'SriLanka';
        select.append(option);
        formBox.append(label,select);
        form.append(formBox);
        }
        else if(param==='choiceoffood')
        {
            let input = document.createElement('input'); input.setAttribute('type','radio');
            input.setAttribute('id','veg');
            input.setAttribute('name',param);
            input.setAttribute('class','input');
            let p = document.createElement('p');
            p.innerText='Veg';

            let input1 = document.createElement('input'); input1.setAttribute('type','radio');
            input1.setAttribute('id','Nonveg');
            input1.setAttribute('name',param);
            input1.setAttribute('class','input');
            let p1 = document.createElement('p');
            p1.innerText='NonVeg';
            formBox.append(label,input,p,input1,p1);
            form.append(formBox);
        }
        else if(param=='gender')
        {
            let select = document.createElement('select');select.setAttribute('class','input');
            select.setAttribute('name','gender');
            select.setAttribute('id','gender');
            let option = document.createElement('option'); option.setAttribute('value','Male');
            option.innerText = 'Male';
            select.append(option);
            option = document.createElement('option'); option.setAttribute('value','Female');
            option.innerText = 'Female';
            select.append(option);
            formBox.append(label,select);
            form.append(formBox);
        }
        else if(param==='button')
        {
            let button = document.createElement('button'); button.setAttribute('type','submit');
            button.innerText = 'Submit';
            formBox.append(button);
            form.append(formBox);
        }
        else{
            let input = document.createElement('input'); input.setAttribute('type','text');
            input.setAttribute('id',param);
            input.setAttribute('name',param);
            input.setAttribute('class','input');
            formBox.append(label,input);
            form.append(formBox);
        }
    }

    /*function call to create form elements and input fields*/
    setFormData('fname');
    setFormData('lname');
    setFormData('addr1');
    setFormData('state');
    setFormData('country');
    setFormData('zip');
    setFormData('choiceoffood');
    setFormData('gender');
    setFormData('button');

    /*creating a table*/
    let aside = document.createElement('aside');
    let table = document.createElement('table');
    let tr = document.createElement('tr');
    
    let th = document.createElement('th');th.innerText = 'FirstName';
    tr.append(th);
    th = document.createElement('th');th.innerText = 'LastName';
    tr.append(th);
    th = document.createElement('th');th.innerText = 'Address Line';
    tr.append(th);
    th = document.createElement('th');th.innerText = 'State';
    tr.append(th);
    th = document.createElement('th');th.innerText = 'Country';
    tr.append(th);
    th = document.createElement('th');th.innerText = 'Zip';
    tr.append(th);
    th = document.createElement('th');th.innerText = 'Choice of Food';
    tr.append(th);
    th = document.createElement('th');th.innerText = 'Gender';
    tr.append(th);

    table.append(tr);
    aside.append(table);
    main.append(form);
    container.append(main,aside);
    document.body.append(container);

})();


function postSubmit(){
    event.preventDefault();
    let table = document.querySelector('table');
    let tr = document.createElement('tr');

    let inputList = document.querySelectorAll('.input');
    inputList.forEach(function(x){
        let td = document.createElement('td');

        if(x.type==='radio' && x.checked) td.innerText = x.id;
        else if(x.type==='radio' && (!x.checked)) return;
        else
        td.innerText = x.value;
        tr.append(td);

    });
    table.append(tr);
}