//BUDGET controller
var budgetController = (function() {
  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
    this.percentage = -1;
  };

  Expense.prototype.calculatePercentages = function(totalIncome) {
    if (totalIncome > 0) {
      this.percentage = Math.round((this.value / totalIncome) * 100);
    }
  };

  Expense.prototype.getPercentage = function() {
    return this.percentage;
  };

  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var calculateTotal = function(type) {
    var sum = 0;

    data.allItems[type].forEach(function(cur) {
      sum = sum + cur.value;
    });

    data.totals[type] = sum;
  };

  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    },
    budget: 0,
    percentage: -1
  };

  return {
    addItem: function(type, des, val) {
      var newItem, ID;

      // create new id
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }

      //create new item base on 'inc' and 'exp' type
      if (type === 'exp') {
        newItem = new Expense(ID, des, val);
      } else if (type === 'inc') {
        newItem = new Income(ID, des, val);
      }
      // push it into out data structure
      data.allItems[type].push(newItem);

      // return the new item;
      return newItem;
    },

    deleteItem: function(type, id) {
      var ids, index;

      ids = data.allItems[type].map(function(current) {
        return current.id;
      });

      index = ids.indexOf(id);

      if (index !== -1) {
        data.allItems[type].splice(index, 1);
      }
    },

    calculateBudget: function() {
      // Calculate total income and expenses
      calculateTotal('exp');
      calculateTotal('inc');
      // Calculate the budget: income - expense
      data.budget = data.totals.inc - data.totals.exp;
      // Calculate the percentage of income that we spent
      if (data.totals.inc > 0) {
        data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
      }
    },

    calculatePercentages: function() {
      data.allItems.exp.forEach(function(cur) {
        cur.calculatePercentages(data.totals.inc);
      });
    },

    getPercentages: function() {
      var allPerc = data.allItems.exp.map(function(cur) {
        return cur.getPercentage();
      });
      return allPerc;
    },

    getBudget: function() {
      return {
        budget: data.budget,
        percentage: data.percentage,
        totalInc: data.totals.inc,
        totalExp: data.totals.exp
      };
    }
  };
})();

// UI Controller
var UIController = (function() {
  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
    incomeContainer: '.income__list',
    expensesContainer: '.expenses__list',
    budgetLable: '.budget__value',
    incomeLable: '.budget__income--value',
    expensesLable: '.budget__expenses--value',
    percentageLable: '.budget__expenses--percentage',
    container: '.container',
    expensePercLable: '.item__percentage'
  };

  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
      };
    },

    addListItem: function(obj, type) {
      var html, newHtml, element;
      // create html string with placeholder text
      if (type === 'inc') {
        element = DOMstrings.incomeContainer;
        html =
          '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">+%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else {
        element = DOMstrings.expensesContainer;
        html =
          '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">- %value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }
      // replace the placeholder text with some actual data
      newHtml = html.replace('%id%', obj.id);
      newHtml = newHtml.replace('%description%', obj.description);
      newHtml = newHtml.replace('%value%', obj.value);
      // we insert the html into the dom
      document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
    },

    clearFields: function() {
      var fields, fieldsArray;

      fields = document.querySelectorAll(
        DOMstrings.inputDescription + ', ' + DOMstrings.inputValue
      );
      console.log('fields', fields); // this will return NodeList, using slice for convert NodeList to Array
      // one problem for that fields.slice will not work. because fields is not array
      // call the slice methods using the call method;

      fieldsArray = Array.prototype.slice.call(fields);
      console.log('fieldsArray', fieldsArray);

      fieldsArray.forEach(function(current, index, array) {
        current.value = '';
      });

      fieldsArray[0].focus();
    },

    deleteListItem: function(selectorId) {
      var element;
      debugger;
      element = document.getElementById(selectorId);
      element.parentNode.removeChild(element);
    },

    displayBudget: function(obj) {
      document.querySelector(DOMstrings.budgetLable).textContent = obj.budget;
      document.querySelector(DOMstrings.incomeLable).textContent = obj.totalInc;
      document.querySelector(DOMstrings.expensesLable).textContent =
        obj.totalExp;

      if (obj.percentage > 0) {
        document.querySelector(DOMstrings.percentageLable).textContent =
          obj.percentage + '%';
      } else {
        document.querySelector(DOMstrings.percentageLable).textContent = '---';
      }
    },

    displayPercentages: function(percentages) {
      var fields;
      fields = document.querySelectorAll(DOMstrings.expensePercLable);

      var nodeListForEach = function(list, callback) {
        for (let i = 0; i < list.length; i++) {
          callback(list[i], i);
        }
      };

      nodeListForEach(fields, function(current, index) {
        // to do list
        if (percentages[index] > 0) {
          current.textContent = percentages[index] + '%';
        } else {
          current.textContent = '---';
        }
      });
    },

    formatNumber: function(num, type) {
      // 1 + or - before number exactly 2 decimal points
      // comma separating the thousands e.g: 2310.4567 --> + 2,310.46
      console.log('num', num);
      num = Math.abs(num);
      console.log('Math.abs(num)', num);
      num = num.toFixed(2);
    },

    getDOMstrings: function() {
      return DOMstrings;
    }
  };
})();

// GLOBAL controller
var controller = (function(budgetCtrl, UICtrl) {
  var setupEventListeners = function() {
    var DOM = UICtrl.getDOMstrings();

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });

    document
      .querySelector(DOM.container)
      .addEventListener('click', ctrlDeleteItem);
  };

  var updateBudget = function() {
    // 1. Calculate the budget
    budgetController.calculateBudget();

    // 2. return the budget
    var budget = budgetController.getBudget();

    // 3. Display the budget on the UI
    UIController.displayBudget(budget);
  };

  var updatePercentages = function() {
    var percentages;
    // 1. Calculate percentages
    budgetController.calculatePercentages();
    // 2. Read percentages from the budget controller
    percentages = budgetController.getPercentages();
    // 3. update the UI with the new percentages
    UIController.displayPercentages(percentages);
  };

  var ctrlAddItem = function() {
    var input, newItem;

    //todo list
    // 1. get the field input date
    input = UIController.getInput();

    if (input.description !== '' && !isNaN(input.value) && input.value > 0) {
      // 2. Add the item to budget controller
      newItem = budgetController.addItem(
        input.type,
        input.description,
        input.value
      );

      // 3. Add the item to the UI
      UIController.addListItem(newItem, input.type);
      UIController.clearFields();

      // 4. Clear the fields
      UIController.clearFields();

      // 5. Calculate and update Budget
      updateBudget();

      // 6. Calculate and update percentages
      updatePercentages();
    }
  };

  var ctrlDeleteItem = function(event) {
    var itemId, splitId, type, id;
    // console.log('event', event);
    // console.log('event.target', event.target);
    // console.log('event.target.parentNode', event.target.parentNode);
    // console.log(
    //   'event.target.parentNode.parentNode',
    //   event.target.parentNode.parentNode
    // );
    // console.log(
    //   'event.target.parentNode.parentNode.parentNode',
    //   event.target.parentNode.parentNode.parentNode
    // );
    // console.log(
    //   'event.target.parentNode.parentNode.parentNode.parentNode',
    //   event.target.parentNode.parentNode.parentNode.parentNode
    // );
    itemId = event.target.parentNode.parentNode.parentNode.parentNode.id;
    // console.log(itemId);

    if (itemId) {
      splitId = itemId.split('-');
      type = splitId[0];
      id = parseInt(splitId[1]);

      //1. delete the item from the data structure
      budgetController.deleteItem(type, id);
      //2. delete the item from the UI
      UIController.deleteListItem(itemId);
      //3. Update and show the new budget
      updateBudget();

      //4. Calculate and update percentages
      updatePercentages();
    }
  };

  return {
    init: function() {
      console.log('Application has started');
      UIController.displayBudget({
        budget: 0,
        percentage: -1,
        totalInc: 0,
        totalExp: 0
      });
      setupEventListeners();
    }
  };
})(budgetController, UIController);

controller.init();
