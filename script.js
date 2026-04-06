/* ========== 表單驗證和事件監聽 ========== */
document.addEventListener('DOMContentLoaded', function() {
    /* ========== 取得 DOM 元素 ========== */
    var loginForm = document.getElementById('loginForm');
    var loginInput = document.getElementById('emailOrPhone');

    /* ========== 驗證函式 ========== */
    function checkValidity(value) {
        var isEmail = value.includes('@');
        var isPhone = /^\d+$/.test(value) && value.length >= 10;
        return isEmail || isPhone;
    }

    /* ========== 表單提交事件 ========== */
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
        }
    });

    /* ========== 輸入事件監聽 - 清除錯誤狀態 ========== */
    loginInput.addEventListener('input', function() {
        loginInput.classList.remove('error');
        loginInput.setCustomValidity('');
    });
});