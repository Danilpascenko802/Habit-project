"use strict"


//функция что показывает модальное окно с формой о уведомлениях
//Илья Дмитренко

let  notificationFormJs = function () {
      function showCover() {
        let coverDiv = document.createElement('div');
        coverDiv.id = 'cover-div';
  
        
        document.body.style.overflowY = 'hidden';
  
        document.body.append(coverDiv);
      }
  
      function hideCover() {
        document.getElementById('cover-div').remove();
        document.body.style.overflowY = '';
      }



  let inputPeriod = document.getElementById('period');
  let inputBegin = document.getElementById('begin');
  let inputFinish = document.getElementById('finish');

       
  const newNotification = { 
    conctructor(input1, input2, input3){
    this.input1 = input1;
    this.input2 = input2;
    this.input3 = input3;
    }
}

function showPrompt() {
        
        showCover();
        let form = document.getElementById('prompt-form');
        let container = document.getElementById('prompt-form-container');
       
  
        function complete() {
          hideCover();
          container.style.display = 'none';
          event.preventDefault();
          
}

  
        form.onsubmit = function(event) {
          event.preventDefault();
          let valuePeriod = inputPeriod.value;
          let valueOt = inputBegin.value;
          let valueDo = inputFinish.value;
          if (valuePeriod === '' || valueOt === ' ' || valueDo == '') return false; // игнорируем отправку пустой формы
          complete();
          return false;
          let notification = new newNotification( index1, index2, index3);
        };
  


        form.cancel.onclick = function() {
          complete(null);
        };

        container.style.display = 'block';
        form.elements.text.focus();
    }
    showPrompt();
  }
  
  notificationFormJs();

   //Функция что создает уведомления

  //  let notificationAboutHabitsJs = function () {
     
  //  }
  //  notificationAboutHabitsJs();