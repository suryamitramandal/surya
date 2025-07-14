function switchLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    applyLanguage(lang);
}

function applyLanguage(lang) {
    const elements = [
        ['nav-home', 'navHome'],
        ['nav-about', 'navAbout'],
        ['nav-events', 'navEvents'],
        ['nav-contact', 'navContact'],
        ['title', 'title'],
        ['subtitle', 'subtitle'],
        ['hero-heading', 'heroHeading'],
        ['hero-text', 'heroText'],
        ['join-btn', 'joinBtn'],
        ['about-heading', 'aboutHeading'],
        ['about-text', 'aboutText'],
        ['events-heading', 'eventsHeading'],
        ['events-text', 'eventsText'],
        ['contact-heading', 'contactHeading'],
        ['contact-info', 'contactInfo']
    ];

    elements.forEach(([id, key]) => {
        const el = document.getElementById(id);
        if (el && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update contact list if exists
    const contactList = document.getElementById('contact-list');
    if (contactList && translations[lang].contactList) {
        contactList.innerHTML = '';
        translations[lang].contactList.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            contactList.appendChild(li);
        });
    }
}

// Apply language on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    const languageDropdown = document.getElementById('language');
    if (languageDropdown) languageDropdown.value = savedLang;
    applyLanguage(savedLang);
});
