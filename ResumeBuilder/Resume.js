function addNewWEField(){
    //console.log("Adding new field...")
    let newNode = document.createElement("textarea");
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter your work experience");

    let weob = document.getElementById('we');
    let weAddButtonOb = document.getElementById('weAddButton');
    weob.insertBefore(newNode,weAddButtonOb);
}

function addNewAQField(){
    //console.log("Adding new field...")
    let newNode = document.createElement("textarea");
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter your academic qualification");

    let aqob = document.getElementById('aq');
    let aqAddButtonOb = document.getElementById('aqAddButton');
    aqob.insertBefore(newNode,aqAddButtonOb);
}

function generateCV(){
    let nameField= document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = nameField;
    document.getElementById("nameT2").innerHTML= nameField;
    document.getElementById("contactT").innerHTML = document.getElementById('contactField').value;
    document.getElementById("addressT").innerHTML = document.getElementById('addressField').value;
    document.getElementById("fbT").innerHTML = document.getElementById('fbField').value;
    document.getElementById("instaT").innerHTML = document.getElementById('instaField').value;
    document.getElementById("linkedT").innerHTML = document.getElementById('linkedField').value;
    document.getElementById("objectiveT").innerHTML = document.getElementById('objectiveField').value;
    
    let file = document.getElementById('imgField').files[0];

    let reader =  new FileReader();
    reader.readAsDataURL(file);
    //set image to template
    reader.onloadend = function (){
        document.getElementById('imgT').src= reader.result;
    };
    
    // Work experience
    let wes = document.getElementsByClassName("weField");
    let str="";
    for(let e of wes){
        str= str + `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML = str;

    //Academic Qualifications
    let aqs = document.getElementsByClassName("aqField");
     str="";
    for(let e of aqs){
        str= str + `<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML = str;
    document.getElementById('cv-form').style.display="none";
    document.getElementById('cv-template').style.display="block";
}

function printCV(){
    window.print();
}