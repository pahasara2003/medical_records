
const toggleTheme = (e)=>{
    const addingTheme = e.checked ? "light" : "dark";
    const removingTheme = !e.checked ? "light" : "dark";
     
    document.body.classList.add(addingTheme);
    document.body.classList.remove(removingTheme);
    localStorage.setItem("theme",addingTheme)

}


document.addEventListener("DOMContentLoaded", () => {
  
  let theme = localStorage.getItem("theme");
  theme = theme ? theme : "light";

  document.body.classList.add(theme);
  if(theme == "light"){
    document.getElementById("theme").checked = true;
  }
});