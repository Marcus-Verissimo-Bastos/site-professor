// Main JavaScript for JP Futevôlei

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // 2. Navbar shadow on scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('shadow-lg', 'bg-beach-deep/95');
            navbar.classList.remove('bg-beach-deep/90');
        } else {
            navbar.classList.remove('shadow-lg', 'bg-beach-deep/95');
            navbar.classList.add('bg-beach-deep/90');
        }
    });

    // 3. Interactive WhatsApp Booking Simulator
    const btnSendWhatsapp = document.getElementById('btnSendWhatsapp');
    if (btnSendWhatsapp) {
        btnSendWhatsapp.addEventListener('click', () => {
            const nameInput = document.getElementById('userName');
            const studentName = nameInput && nameInput.value.trim() ? nameInput.value.trim() : 'Futuro(a) Aluno(a)';

            // Selected level
            const levelChecked = document.querySelector('input[name="userLevel"]:checked');
            const studentLevel = levelChecked ? levelChecked.value : 'Iniciante';

            // Selected format
            const formatSelect = document.getElementById('userFormat');
            const studentFormat = formatSelect ? formatSelect.value : 'Aula em Grupo';

            // Selected shift
            const shiftSelect = document.getElementById('userShift');
            const studentShift = shiftSelect ? shiftSelect.value : 'Flexível';

            // Construct personalized message
            const message = `Olá João Pedro (Jota)! Meu nome é ${studentName}.\n\nVi seu site e gostaria de agendar uma aula de futevôlei no Vilarejo Beach Ingleses!\n\n📋 *Meus Detalhes:*\n• *Nível:* ${studentLevel}\n• *Formato:* ${studentFormat}\n• *Turno de Preferência:* ${studentShift}\n\nQuais são os dias e horários disponíveis para a gente marcar?`;

            const phone = '5548988278141';
            const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

            window.open(whatsappUrl, '_blank');
        });
    }

    // 4. Video playback helper: pause other videos when one starts playing
    const allVideos = document.querySelectorAll('.group-video');
    allVideos.forEach(vid => {
        vid.addEventListener('play', () => {
            allVideos.forEach(otherVid => {
                if (otherVid !== vid && !otherVid.paused) {
                    otherVid.pause();
                }
            });
        });
    });
});

