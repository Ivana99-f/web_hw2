document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('loginForm');
    var loginInput = document.getElementById('emailOrPhone');


    function checkValidity(value) {
        var isEmail = value.includes('@');
        var isPhone = /^\d+$/.test(value) && value.length >= 10;
        return isEmail || isPhone;
    }

    loginForm.addEventListener('submit', function(event) {
        var value = loginInput.value.trim();

        if (!value || !checkValidity(value)) {
            event.preventDefault();
            
            loginInput.classList.add('error');
            
            var errorMsg = value ? '請輸入有效的手機號碼或 Email' : '請填寫這個欄位。';
            
            loginInput.setCustomValidity(errorMsg);
            loginInput.reportValidity();
        } else {

            loginInput.setCustomValidity('');
            console.log('驗證通過，提交內容：', value);
        }
    });

  
    loginInput.addEventListener('input', function() {
        loginInput.classList.remove('error');
        loginInput.setCustomValidity('');
    });
});