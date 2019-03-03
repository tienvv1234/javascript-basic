//BUDGET controller
var budgetController = (function() {
  
})();

// UI Controller
var UIController = (function() {
  // some code
})();

// GLOBAL controller
var controller = (function(budgetCtrl, UICtrl) {

  var ctrlAddItem = function(){
    //todo list
  }

  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem)

  document.addEventListener('keypress', function(event) {
    if(event.keyCode === 13 || event.which === 13){
      ctrlAddItem();
    }
  })
  
})(budgetController, UIController);
