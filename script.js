function backCategories() {
    window.location.href = 'categories.html';  
}
function goCategories(){
    window.location.href = 'categories.html';
}

function goMain(){
    window.location.href = 'Main.html';  


} function goAppetizer(){
    window.location.href = 'Appetizer.html';  

} function goSalad(){
    window.location.href = 'Salads.html';  

}  function goDessert(){
    window.location.href = 'Desserts.html';  

} function goSoup(){
    window.location.href = 'Soups.html';  

}


var categories = [
    document.getElementById('food1Container'),
    document.getElementById('food2Container'),
    document.getElementById('food3Container'),
    document.getElementById('food4Container')
];

var defaultSize = { width: '90%', height: '160px' };
var expandedSize = { width: '90%', height: '140vh' };

categories.forEach((container) => {
    let isExpanded = false; 
    const arrow = container.querySelector('.arrowDown'); 
    const dish = container.querySelector('.dishesDetails'); 

    container.addEventListener('click', () => {
        if (isExpanded) {
            
            container.style.width = defaultSize.width;
            container.style.height = defaultSize.height;
            arrow.style.transform = 'rotate(0deg)';  
            dish.style.display = 'none'; 
            container.classList.remove('no-hover');  
        } else {
            
            container.style.width = expandedSize.width;
            container.style.height = expandedSize.height;
            arrow.style.transform = 'rotate(180deg)'; 
            dish.style.display = 'block'; 
            container.classList.add('no-hover');
        }

        isExpanded = !isExpanded;
    });
});

function toggleMenu() {
    const menu = document.getElementById("menuDropdown");
    menu.classList.toggle("show");
  }

  // Close the dropdown if clicked outside
  window.onclick = function(event) {
    if (!event.target.matches('.menu-icon')) {
      const dropdown = document.getElementById("menuDropdown");
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    }
  };
