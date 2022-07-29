const btn = document.querySelector('.button_submit');
       if(btn.addEventListener('click', function(){
            let email = document.querySelector('.mail_field').value;
            let password = document.querySelector('.password_field').value;
            console.log('Email: ' + email + ' Password: ' + password);
      }));