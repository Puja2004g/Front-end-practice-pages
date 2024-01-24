document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".accordiam button");
    
    buttons.forEach(function (button, index) {
        button.addEventListener("click", function () {
            var textId = "text" + (index + 1);
            var tag = document.getElementById(textId);
            
            tag.style.transition = "0.5s ease-in-out" ;
            
            if (tag.style.display === "none" || tag.style.display === "") {
                tag.style.display = "block";
                button.querySelector("img").src = "assets/images/icon-minus.svg";
            } else {
                tag.style.display = "none";
                button.querySelector("img").src = "assets/images/icon-plus.svg"
            }
        });
    });
});


// document.addEventListener("DOMContentLoaded", function () {
//     var buttons = document.querySelectorAll(".accordiam button");
  
//     buttons.forEach(function (button, index) {
//         button.addEventListener("click", function () {
//           var textId = "text" + (index + 1);
//           var tag = document.getElementById(textId);
      
//           tag.style.transition = "0.5s ease-in-out";
//           tag.style.height = "0"; // Initially hide content
      
//           if (tag.style.display === "none" || tag.style.display === "") {
//             tag.style.display = "block";
//             tag.style.height = "auto"; // Transition to full height
//             button.querySelector("img").src = "assets/images/icon-minus.svg";
//           } else {
//             tag.style.height = "0"; // Transition back to hidden
//             setTimeout(function() { // Delay to complete transition before hiding
//               tag.style.display = "none";
//             }, 500);
//             button.querySelector("img").src = "assets/images/icon-plus.svg";
//           }
//         });
//       });
      
//     });
  
