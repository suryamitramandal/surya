function switchLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    applyLanguage(lang);
}

function applyLanguage(lang) {
    const elements = [
        ['nav-home', 'navHome'],
        ['nav-about', 'navAbout'],
        ['nav-events', 'navEvents'],
        ['nav-team', 'navTeam'],
        ['nav-sponsors', 'navSponsors'],
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
        ['contact-info', 'contactInfo'],
        ['name-anna', 'name_anna'],
        ['position-anna', 'position_anna'],
        ['name-ayush', 'name_ayush'],
        ['position-ayush', 'position_ayush'],
        ['name-babu', 'name_babu'],
        ['position-babu', 'position_babu'],
        ['name-ghura', 'name_ghura'],
        ['position-ghura', 'position_ghura'],
        ['name-prince', 'name_prince'],
        ['position-prince', 'position_prince'],
        ['name-rajan', 'name_rajan'],
        ['position-rajan', 'position_rajan'],
        ['name-satish', 'name_satish'],
        ['position-satish', 'position_satish'],
        ['name-shubham-jalgar', 'name_shubham_jalgar'],
        ['position-shubham-jalgar', 'position_shubham_jalgar'],
        ['name-shubham-singh', 'name_shubham_singh'],
        ['position-shubham-singh', 'position_shubham_singh'],
        ['name-sunny', 'name_sunny'],
        ['position-sunny', 'position_sunny'],
        ['name-vipul', 'name_vipul'],
        ['position-vipul', 'position_vipul'],
        ['name-adbhilash', 'name_adbhilash'],
        ['position-adbhilash', 'position_adbhilash'],
        ['name-babu-nikhil', 'name_babu_nikhil'],
        ['position-babu-nikhil', 'position_babu_nikhil'],
        ['sponsor-name-1', 'sponsor_name_1'],
        ['company-name-1', 'company_name_1'],
        ['sponsor-name-2', 'sponsor_name_2'],
        ['company-name-2', 'company_name_2'],
        ['sponsor-name-3', 'sponsor_name_3'],
        ['company-name-3', 'company_name_3']
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
