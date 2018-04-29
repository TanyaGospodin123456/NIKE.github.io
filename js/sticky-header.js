(function() {
  
  var pageHeader = document.querySelector(".header_bottom");
  var pageHeaderHeight = pageHeader.getBoundingClientRect().bottom + window.pageYOffset;
  
  window.addEventListener("scroll", function() {
    
    if (pageHeader.classList.contains("header_bottom-sticky") && (window.pageYOffset < pageHeaderHeight)) {
        
      pageHeader.classList.remove("header_bottom-sticky");
        
    } else if (window.pageYOffset > pageHeaderHeight) {
        
      pageHeader.classList.add("header_bottom-sticky");
        
    }
    
  }, false);
  
})();