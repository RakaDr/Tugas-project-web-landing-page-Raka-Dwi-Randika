document.addEventListener('DOMContentLoaded', function () {
    // Menangani klik pada tombol Log In
    document.querySelector('.log-in').addEventListener('click', function (event) {
        event.preventDefault(); // Mencegah aksi default link
        showLoginForm(); // Panggil fungsi untuk menampilkan form login
    });

    // Menangani klik pada tombol Sign Up
    document.querySelector('.sign-up').addEventListener('click', function (event) {
        event.preventDefault(); // Mencegah aksi default link
        showSignUpForm(); // Panggil fungsi untuk menampilkan form sign up
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Menangani klik pada tombol Log In
    document.querySelector('.log-in').addEventListener('click', function (event) {
        event.preventDefault(); // Mencegah aksi default link
        showLoginForm(); // Panggil fungsi untuk menampilkan form login
    });

    // Menangani klik pada tombol Sign Up
    document.querySelector('.sign-up').addEventListener('click', function (event) {
        event.preventDefault(); // Mencegah aksi default link
        showSignUpForm(); // Panggil fungsi untuk menampilkan form sign up
    });
});

// Fungsi untuk menampilkan form login
function showLoginForm() {
    document.getElementById('loading').style.display = 'flex'; // Tampilkan loading

    setTimeout(() => {
        document.getElementById('loading').style.display = 'none'; // Sembunyikan loading
        document.getElementById('overlay').style.display = 'flex'; // Tampilkan overlay
        document.getElementById('loginForm').style.display = 'block'; // Tampilkan form login
        document.getElementById('signUpForm').style.display = 'none'; // Sembunyikan form signup
    }, 1000); // Simulasi loading 1 detik
}

// Fungsi untuk menampilkan form sign up
function showSignUpForm() {
    document.getElementById('loading').style.display = 'flex'; // Tampilkan loading

    setTimeout(() => {
        document.getElementById('loading').style.display = 'none'; // Sembunyikan loading
        document.getElementById('overlay').style.display = 'flex'; // Tampilkan overlay
        document.getElementById('signUpForm').style.display = 'block'; // Tampilkan form signup
        document.getElementById('loginForm').style.display = 'none'; // Sembunyikan form login
    }, 1000); // Simulasi loading 1 detik
}

// Menangani klik pada tombol Tutup di form login
document.getElementById('closeButton').addEventListener('click', function () {
    document.getElementById('loginForm').style.display = 'none'; // Sembunyikan form login
    document.getElementById('overlay').style.display = 'none'; // Sembunyikan overlay
});

// Menangani klik pada tombol Tutup di form sign up
document.getElementById('closeSignUpButton').addEventListener('click', function () {
    document.getElementById('signUpForm').style.display = 'none'; // Sembunyikan form signup
    document.getElementById('overlay').style.display = 'none'; // Sembunyikan overlay
});

// Event listener untuk tombol Sign Up dan Log In di navbar
document.querySelector('.log-in').addEventListener('click', showLoginForm);
document.querySelector('.sign-up').addEventListener('click', showSignUpForm);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Hitung posisi untuk scroll
            const navbarHeight = document.querySelector('.navbar').offsetHeight; // Tinggi navbar
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - (window.innerHeight /2) + (targetElement.offsetHeight /2) + (navbarHeight / 2);

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});


// Fungsi untuk memeriksa apakah elemen terlihat di viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Menambahkan kelas animasi saat elemen terlihat
function animateOnScroll() {
    const animatedElements = document.querySelectorAll('.animated');
    animatedElements.forEach((el) => {
        if (isElementInViewport(el)) {
            el.classList.add('fadeInUp'); // Menambahkan kelas animasi
            el.classList.remove('animated'); // Menghapus kelas untuk mencegah animasi berulang
        }
    });
}

// Menjalankan fungsi saat scroll
window.addEventListener('scroll', animateOnScroll);

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Fungsi untuk menampilkan slide
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) { slideIndex = 1 }    
    if (n < 1) { slideIndex = slides.length }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";
}

// Auto change slides every 5 seconds (optional)
setInterval(() => {
    plusSlides(1);
}, 10000);
