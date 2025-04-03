// app/static/js/script.js
document.addEventListener('DOMContentLoaded', function() {
    // Настраиваем валидацию формы
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            const inputs = form.querySelectorAll('input[type="number"]');
            let isValid = true;
            
            inputs.forEach(input => {
                const value = parseFloat(input.value);
                const min = parseFloat(input.getAttribute('min'));
                const max = parseFloat(input.getAttribute('max'));
                
                if (isNaN(value) || value < min || value > max) {
                    isValid = false;
                    input.classList.add('is-invalid');
                } else {
                    input.classList.remove('is-invalid');
                }
            });
            
            if (!isValid) {
                event.preventDefault();
                alert('Пожалуйста, проверьте значения: они должны быть в допустимом диапазоне.');
            }
        });
    }
    
    // Анимация результата
    const resultContainer = document.querySelector('.result-container');
    if (resultContainer) {
        resultContainer.classList.add('animated');
        setTimeout(() => {
            resultContainer.classList.add('highlight');
        }, 300);
    }
    
    // Сброс формы
    const resetButton = document.getElementById('reset-form');
    if (resetButton) {
        resetButton.addEventListener('click', function() {
            const inputs = document.querySelectorAll('input[type="number"]');
            inputs.forEach(input => {
                // Возвращаем к дефолтным значениям
                const defaultValue = input.getAttribute('data-default');
                if (defaultValue) {
                    input.value = defaultValue;
                }
                input.classList.remove('is-invalid');
            });
            
            // Скрываем результат если он есть
            const resultContainer = document.querySelector('.result-container');
            if (resultContainer) {
                resultContainer.style.display = 'none';
            }
        });
    }
});