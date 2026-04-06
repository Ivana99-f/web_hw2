document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const input = document.getElementById('emailOrPhone');

    form.addEventListener('submit', (e) => {
        const val = input.value.trim();
        const isValid = val.includes('@') || (/^\d+$/.test(val) && val.length >= 10);

        if (!val || !isValid) {
            e.preventDefault();
            input.classList.add('error');
            input.setCustomValidity(val ? '請輸入有效的手機號碼或 Email' : '請填寫這個欄位。');
            input.reportValidity();
        } else {
            input.setCustomValidity(''); 
        }
    });

    input.addEventListener('input', () => {
        input.classList.remove('error');
        input.setCustomValidity('');
    });
});