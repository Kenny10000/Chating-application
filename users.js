const searchBar = document.querySelector(".users .search input"),
searchBtn = document.querySelector(".users .search button"),
usersList = document.querySelector(".users .users-list");

searchBtn.onclick = ()=>{
    searchBar.classList.toggle("active");
    searchBar.focus();
    searchBtn.classList.toggle("active");
    searchBar.value = "";
}

searchBar.onkeyup = ()=>{
    let searchTerm =searchBar.value;
    if(searchTerm != ""){
        searchBtn.classList.add("active");
    }else{
        searchBtn.classList.remove("active");
    }
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/search.php", true);
    xhr.onload = ()=>{
if(xhr.readyState === XMLHttpRequest.DONE){
    if(xhr.status === 200){
        let data = xhr.response;
        usersList.innerHTML = data;
    // console.log(data);
  }
  }
  }
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send("searchTerm=" + searchTerm);
}

setInterval(()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "php/users.php", true);
    xhr.onload = ()=>{
if(xhr.readyState === XMLHttpRequest.DONE){
    if(xhr.status === 200){
        let data = xhr.response;
       if(!searchBar.classList.contains("active")){
        usersList.innerHTML = data;
       }
  }
  }
  }
  xhr.send();
}, 500);