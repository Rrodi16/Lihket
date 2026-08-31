const quoteForm = document.querySelector('.quote');

if (quoteForm) {
    quoteForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = quoteForm.querySelector('input[type="text"]').value.trim();
        const email = quoteForm.querySelector('input[type="email"]').value.trim();
        const message = quoteForm.querySelector('textarea').value.trim();

        const methodSelect = quoteForm.querySelector('#contact-method');
        const selectedMethod = methodSelect ? methodSelect.value : 'email';

        if (selectedMethod === 'email') {
            const myEmail = 'rrodi1622@gmail.com';
            const subject = encodeURIComponent(`New Quote Request from ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

            const mailtoURL = `mailto:${myEmail}?subject=${subject}&body=${body}`;
            window.location.href = mailtoURL;
        } else if (selectedMethod === 'telegram') {
            const telegramUsername = 'ross_2_2';
            const textMessage = `Hello, my name is ${name}. Email: ${email}. Message: ${message}`;
            const encodedText = encodeURIComponent(textMessage);

            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

            if (isMobile) {
                const telegramAppURL = `tg://resolve?domain=${telegramUsername}&text=${encodedText}`;

                window.location.href = telegramAppURL;

                setTimeout(() => {
                    window.open(`https://t.me/${telegramUsername}?text=${encodedText}`, '_blank');
                }, 1000);
            } else {
                const telegramWebURL = `https://t.me/${telegramUsername}?text=${encodedText}`;
                window.open(telegramWebURL, '_blank');
            }
        }
    });
}