const fetchDataBtn = document.querySelector("#fetch");
const result = document.querySelector("#result");


async function getData(){
    result.innerText = "Loading";

   try{
      const response = await fetch("https://api.github.com/users/vignesh9684");
      const data = await response.json();
      result.innerText = `Github User Name:${data.name} has ${data.public_repos} public repos `;
    }catch(err){
       result.innerText = "Error";
    }

   }

fetchDataBtn.addEventListener("click",getData);

///
const fetchDataBtn1 = document.getElementById("val");
const result1 = document.getElementById("value");

result1.addEventListener("click",getData1);

async function getData1(){
    result.innerText = "Loading";

   try{
      const response = await fetch("https://api.github.com/users/vignesh9684");
      const data = await response.json();
      result.innerHTML = `<img src="${data.avatar_url}" />`;
    }catch(err){
       result.innerText = "Error";
    }

   }

const fetchDataBtn2 = document.querySelector("#img");
const result2 = document.querySelector("#image");

async function getData2(){
    result.innerText = "Loading";

   try{
      const response = await fetch("https://api.github.com/users/vignesh9684/repos");
      const data = await response.json();
      var data2 = data.map((ele)=>
      "Name:"+ele.name+" , "+"Forks_count:"+ele.forks_count+" , "
      +"Star_count:"+ele.stargazers_count+" , "+"repo-link-details: "+ele.html_url);
      result.innerText = "Repository Details"+" - "+ data2;
      

    }catch(err){
       result.innerText = "Error";
    }

   }

fetchDataBtn2.addEventListener("click",getData2);