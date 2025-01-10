const translations = {
    id: {
        title: "PT.CEYSIA PFP",
        subtitle: "Solusi Terbaik untuk Kebutuhan Anda",
        aboutLink: "Tentang Kami",
        productsLink: "Produk Kami",
        contactLink: "Hubungi Kami",
        welcomeTitle: "Selamat Datang di PT.CEYSIA PFP",
        welcomeText: "Kami berkomitmen untuk menghadirkan produk hasil alam Indonesia yang berkualitas tinggi ke dunia.",
        aboutTitle: "Tentang Kami",
        aboutText: "PT.CEYSIA PFP adalah perusahaan yang berkomitmen untuk membawa kekayaan hasil alam Indonesia ke dunia.",
        productsTitle: "Produk Kami",
        productsList: [
            "Produk A: Harga Rp 100.000",
            "Produk B: Harga Rp 200.000",
            "Produk C: Harga Rp 300.000"
        ],
        contactTitle: "Hubungi Kami",
        contactText: "Kami dengan senang hati menjawab pertanyaan Anda. Silakan hubungi kami!",
        email: "Email: indocharcoal99@gmail.com",
        whatsapp: "WhatsApp: +62 895-0385-7819",
        testimonialsTitle: "Testimoni Pelanggan",
        testimonials: [
            "Produk berkualitas tinggi! Sangat memuaskan. - Andi, Jakarta",
            "Pengiriman cepat dan pelayanan terbaik. Terima kasih! - Sari, Bandung",
            "Kopi yang luar biasa, saya pasti akan memesan lagi. - Budi, Surabaya"
        ]
    },
    en: {
        title: "PT.CEYSIA PFP",
        subtitle: "The Best Solution for Your Needs",
        aboutLink: "About Us",
        productsLink: "Our Products",
        contactLink: "Contact Us",
        welcomeTitle: "Welcome to PT.CEYSIA PFP",
        welcomeText: "We are committed to delivering high-quality natural products from Indonesia to the world.",
        aboutTitle: "About Us",
        aboutText: "PT.CEYSIA PFP is a company committed to bringing Indonesia's natural wealth to the world.",
        productsTitle: "Our Products",
        productsList: [
            "Product A: Price Rp 100,000",
            "Product B: Price Rp 200,000",
            "Product C: Price Rp 300,000"
        ],
        contactTitle: "Contact Us",
        contactText: "We are happy to answer your questions. Feel free to reach out to us!",
        email: "Email: indocharcoal99@gmail.com",
        whatsapp: "WhatsApp: +62 895-0385-7819",
        testimonialsTitle: "Customer Testimonials",
        testimonials: [
            "High-quality products! Very satisfied. - John, Jakarta",
            "Fast delivery and excellent service. Thank you! - Sarah, Bandung",
            "Amazing coffee, I’ll definitely order again. - Mike, Surabaya"
        ]
    }
};

function switchLanguage(lang) {
    // Update global text
    document.getElementById('title').textContent = translations[lang].title;
    document.getElementById('subtitle').textContent = translations[lang].subtitle;
    document.getElementById('about-link').textContent = translations[lang].aboutLink;
    document.getElementById('products-link').textContent = translations[lang].productsLink;
    document.getElementById('contact-link').textContent = translations[lang].contactLink;

    // Update Welcome section
    if (document.getElementById('welcome-title')) {
        document.getElementById('welcome-title').textContent = translations[lang].welcomeTitle;
        document.getElementById('welcome-text').textContent = translations[lang].welcomeText;
    }

    // Update About section
    if (document.getElementById('about-title')) {
        document.getElementById('about-title').textContent = translations[lang].aboutTitle;
        document.getElementById('about-text').textContent = translations[lang].aboutText;
    }

    // Update Products section
    if (document.getElementById('products-title')) {
        document.getElementById('products-title').textContent = translations[lang].productsTitle;

        const productsList = translations[lang].productsList;
        const productsElement = document.getElementById('products-list');
        productsElement.innerHTML = ''; // Clear existing items

        productsList.forEach(product => {
            const listItem = document.createElement('li');
            listItem.textContent = product;
            productsElement.appendChild(listItem);
        });
    }

    // Update Contact section
    if (document.getElementById('contact-title')) {
        document.getElementById('contact-title').textContent = translations[lang].contactTitle;
        document.getElementById('contact-text').textContent = translations[lang].contactText;
        document.getElementById('email').textContent = translations[lang].email;
        document.getElementById('whatsapp').textContent = translations[lang].whatsapp;
    }

    // Update Testimonials section
    if (document.getElementById('testimonials-title')) {
        document.getElementById('testimonials-title').textContent = translations[lang].testimonialsTitle;

        const testimonials = translations[lang].testimonials;
        const testimonialsElement = document.getElementById('testimonials-list');
        testimonialsElement.innerHTML = ''; // Clear existing items

        testimonials.forEach(testimonial => {
            const listItem = document.createElement('li');
            listItem.textContent = testimonial;
            testimonialsElement.appendChild(listItem);
        });
    }
}