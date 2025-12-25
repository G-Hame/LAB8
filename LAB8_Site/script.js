// Обработка формы обратной связи
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Получаем данные формы
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                service: document.getElementById('service').value,
                message: document.getElementById('message').value
            };
            
            // Для примера просто покажем сообщение
            alert(`Спасибо, ${formData.name}! Ваша заявка на услугу "${getServiceName(formData.service)}" принята. Мы свяжемся с вами в ближайшее время.`);
            
            // Очищаем форму
            contactForm.reset();
        });
    }
    
    // Функция для получения названия услуги
    function getServiceName(value) {
        const services = {
            'wedding': 'Свадебная видеосъемка',
            'corporate': 'Корпоративное видео',
            'advertisement': 'Рекламный ролик',
            'other': 'Другая услуга'
        };
        
        return services[value] || 'Услуга';
    }
});