document.addEventListener('DOMContentLoaded', function() {
    // Language selector functionality
    const languageSelector = document.getElementById('language-selector');
    const languageMenu = document.getElementById('language-menu');
    const currentLang = document.querySelector('.current-lang');
    const languageButton = languageSelector.querySelector('button');
    const mobileLanguageSelector = document.getElementById('mobile-language-selector');
    
    // Translations object
    const translations = {
        es: {
            inicio: "Inicio",
            servicios: "Servicios",
            contacto: "Contacto",
            reservarAhora: "Reservar Ahora",
            heroTitle: "Viaja con Estilo y Comodidad",
            heroSubtitle: "Descubre una nueva forma de viajar con nuestro servicio premium de transporte turístico",
            destinosUnicos: "Destinos Únicos",
            exploraLugares: "Explora lugares increíbles",
            seguro: "100% Seguro",
            viajaTransquilidad: "Viaja con tranquilidad",
            disponible: "24/7 Disponible",
            siempreServicio: "Siempre a tu servicio",
            primeraClase: "Primera Clase",
            servicioPremium: "Servicio premium",
            nuestrosServicios: "Nuestros Servicios",
            transportePrivado: "Transporte Privado",
            toursGrupales: "Tours Grupales",
            trasladosAeropuerto: "Traslados al Aeropuerto",
            transporteVip: "Transporte VIP",
            descubreServicios: "Descubre nuestra amplia gama de servicios de transporte diseñados para hacer tu viaje inolvidable",
            nombre: "Nombre",
            correoElectronico: "Correo Electrónico",
            telefono: "Teléfono",
            servicioInteres: "Servicio de Interés",
            mensaje: "Mensaje",
            enviarMensaje: "Enviar Mensaje",
            seleccioneServicio: "Seleccione un servicio",
            modoOscuro: "Modo oscuro",
            modoClaro: "Modo claro",
            planificarViaje: "Estamos aquí para ayudarte a planificar tu próximo viaje",
            direccion: "123 Calle Principal, Ciudad",
            contactanos: "Contáctanos",
            conoceMas: "Conoce más",
            enlacesRapidos: "Enlaces Rápidos",
            siguenos: "Síguenos",
            placeholderNombre: "Tu nombre",
            placeholderEmail: "tu@email.com",
            placeholderTelefono: "+1 234 567 890",
            placeholderMensaje: "Escribe tu mensaje aquí..."
        },
        en: {
            inicio: "Home",
            servicios: "Services",
            contacto: "Contact",
            reservarAhora: "Book Now",
            heroTitle: "Travel with Style and Comfort",
            heroSubtitle: "Discover a new way to travel with our premium tourist transport service",
            destinosUnicos: "Unique Destinations",
            exploraLugares: "Explore incredible places",
            seguro: "100% Safe",
            viajaTransquilidad: "Travel with peace of mind",
            disponible: "24/7 Available",
            siempreServicio: "Always at your service",
            primeraClase: "First Class",
            servicioPremium: "Premium service",
            nuestrosServicios: "Our Services",
            transportePrivado: "Private Transport",
            toursGrupales: "Group Tours",
            trasladosAeropuerto: "Airport Transfers",
            transporteVip: "VIP Transport",
            descubreServicios: "Discover our wide range of transport services designed to make your trip unforgettable",
            nombre: "Name",
            correoElectronico: "Email",
            telefono: "Phone",
            servicioInteres: "Service of Interest",
            mensaje: "Message",
            enviarMensaje: "Send Message",
            seleccioneServicio: "Select a service",
            modoOscuro: "Dark mode",
            modoClaro: "Light mode",
            planificarViaje: "We are here to help you plan your next trip",
            direccion: "123 Main Street, City",
            contactanos: "Contact Us",
            conoceMas: "Learn more",
            enlacesRapidos: "Quick Links",
            siguenos: "Follow Us",
            placeholderNombre: "Your name",
            placeholderEmail: "your@email.com",
            placeholderTelefono: "+1 234 567 890",
            placeholderMensaje: "Write your message here..."
        },
        fr: {
            inicio: "Accueil",
            servicios: "Services",
            contacto: "Contact",
            reservarAhora: "Réserver",
            heroTitle: "Voyagez avec Style et Confort",
            heroSubtitle: "Découvrez une nouvelle façon de voyager avec notre service de transport touristique premium",
            destinosUnicos: "Destinations Uniques",
            exploraLugares: "Explorez des endroits incroyables",
            seguro: "100% Sûr",
            viajaTransquilidad: "Voyagez en toute tranquillité",
            disponible: "Disponible 24/7",
            siempreServicio: "Toujours à votre service",
            primeraClase: "Première Classe",
            servicioPremium: "Service premium",
            nuestrosServicios: "Nos Services",
            transportePrivado: "Transport Privé",
            toursGrupales: "Tours en Groupe",
            trasladosAeropuerto: "Transferts Aéroport",
            transporteVip: "Transport VIP",
            descubreServicios: "Découvrez notre large gamme de services de transport conçus pour rendre votre voyage inoubliable",
            nombre: "Nom",
            correoElectronico: "Email",
            telefono: "Téléphone",
            servicioInteres: "Service d'Intérêt",
            mensaje: "Message",
            enviarMensaje: "Envoyer le Message",
            seleccioneServicio: "Sélectionnez un service",
            modoOscuro: "Mode sombre",
            modoClaro: "Mode clair",
            planificarViaje: "Nous sommes là pour vous aider à planifier votre prochain voyage",
            direccion: "123 Rue Principale, Ville",
            contactanos: "Contactez-nous",
            conoceMas: "En savoir plus",
            enlacesRapidos: "Liens Rapides",
            siguenos: "Suivez-nous",
            placeholderNombre: "Votre nom",
            placeholderEmail: "votre@email.com",
            placeholderTelefono: "+1 234 567 890",
            placeholderMensaje: "Écrivez votre message ici..."
        }
    };

    // Toggle language menu with animation
    languageButton.addEventListener('click', function(e) {
        e.stopPropagation();
        const chevron = this.querySelector('.fa-chevron-down');
        chevron.style.transform = languageMenu.classList.contains('hidden') ? 'rotate(180deg)' : 'rotate(0)';
        languageMenu.classList.toggle('hidden');
        
        // Add fade in animation
        if (!languageMenu.classList.contains('hidden')) {
            languageMenu.style.opacity = '0';
            languageMenu.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                languageMenu.style.opacity = '1';
                languageMenu.style.transform = 'translateY(0)';
            }, 50);
        }
    });

    // Close language menu when clicking outside
    document.addEventListener('click', function() {
        languageMenu.classList.add('hidden');
        const chevron = languageButton.querySelector('.fa-chevron-down');
        chevron.style.transform = 'rotate(0)';
    });

    // Handle language selection (desktop)
    document.querySelectorAll('#language-menu a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.dataset.lang;
            updateLanguage(lang);
        });
    });

    // Handle language selection (mobile)
    mobileLanguageSelector.addEventListener('change', function() {
        updateLanguage(this.value);
    });

    function updateLanguage(lang) {
        currentLang.textContent = lang.toUpperCase();
        mobileLanguageSelector.value = lang;
        updateContent(lang);
        languageMenu.classList.add('hidden');
        
        // Save language preference
        localStorage.setItem('preferredLanguage', lang);
    }

    function updateContent(lang) {
        // Update text content based on selected language
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.dataset.translate;
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Update select options
        document.querySelectorAll('select option[data-translate]').forEach(option => {
            const key = option.dataset.translate;
            if (translations[lang][key]) {
                option.textContent = translations[lang][key];
            }
        });

        // Update form placeholders
        document.querySelectorAll('[data-placeholder]').forEach(element => {
            const key = element.dataset.placeholder;
            if (translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });
    }

    // Dark mode functionality
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const mobileDarkModeToggle = document.getElementById('mobile-dark-mode-toggle');
    const html = document.documentElement;
    
    // Check for saved dark mode preference or system preference
    if (localStorage.getItem('darkMode') === 'enabled' || 
        (localStorage.getItem('darkMode') === null && 
         window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        enableDarkMode();
    }

    // Listen for system dark mode changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (localStorage.getItem('darkMode') === null) {
            e.matches ? enableDarkMode() : disableDarkMode();
        }
    });

    // Handle dark mode toggle (desktop and mobile)
    [darkModeToggle, mobileDarkModeToggle].forEach(toggle => {
        toggle.addEventListener('click', function() {
            html.classList.contains('dark') ? disableDarkMode() : enableDarkMode();
        });
    });

    function enableDarkMode() {
        html.classList.add('dark');
        localStorage.setItem('darkMode', 'enabled');
        updateDarkModeIcons(true);
    }

    function disableDarkMode() {
        html.classList.remove('dark');
        localStorage.setItem('darkMode', 'disabled');
        updateDarkModeIcons(false);
    }

    function updateDarkModeIcons(isDark) {
        const icons = [
            darkModeToggle.querySelector('.fa-moon'),
            darkModeToggle.querySelector('.fa-sun'),
            mobileDarkModeToggle.querySelector('.fa-moon'),
            mobileDarkModeToggle.querySelector('.fa-sun')
        ];
        
        icons.forEach(icon => {
            if (icon) {
                if ((icon.classList.contains('fa-moon') && isDark) ||
                    (icon.classList.contains('fa-sun') && !isDark)) {
                    icon.classList.add('hidden');
                } else {
                    icon.classList.remove('hidden');
                }
            }
        });
    }

    // Initialize AOS
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

    // Load saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        updateLanguage(savedLanguage);
    }
});