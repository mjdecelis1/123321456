function backCategories() {
    window.location.href = 'categories.html';  
}
function goCategories() {
    window.location.href = 'categories.html';
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
    let isExpanded;
    const arrow = container.querySelector('.arrowDown'); 
    const dish = container.querySelector('.dishesDetails'); 


    container.addEventListener('click', (event) => {
      
        if (event.target === arrow) {
            if (isExpanded) {
                isExpanded = false;
                container.style.width = defaultSize.width;
                container.style.height = defaultSize.height;
                arrow.style.transform = 'rotate(0deg)';  
                dish.style.display = 'none'; 
                container.classList.remove('no-hover');  
            } else {
                isExpanded = true;
                container.style.width = expandedSize.width;
                container.style.height = expandedSize.height;
                arrow.style.transform = 'rotate(180deg)'; 
                dish.style.display = 'block'; 
                container.classList.add('no-hover');
            }
        }
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