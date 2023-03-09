$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
    } else {
        $('#header').removeClass('header-scrolled');
    }
});

if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
}


$('.testimonial').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
    infinite: true,
    arrows: true,
    dots: false,
    // centerMode: true,
    // centerPadding: '40px',
    responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                // centerPadding: '40px',
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                // centerPadding: '40px',
                slidesToShow: 1,
            },
        },
    ],
});

$(document).ready(function() {
    $('.client-list').slick({
        dots: false,
        speed: 300,
        slidesToShow: 7,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        // speed: 10000,
        pauseOnHover: false,
        // cssEase: 'linear',
        arrows: false,
        // rtl:false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

// reward steps image wrapper 
$(document).ready(function() {
    $('.reward-image-wrap').slick({
        dots: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        arrows: false,
        speed: 1500,
        cssEase: 'ease',
        fade: true,

        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});


// Generate a random string of text
// var text = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
var text = "random text to generate QR code of Account";

// Create a new QR code instance with the generated text
var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: text,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});



// scan qr code 
// Get the video element
const video = document.getElementById('qr-video');

// Get the canvas element
const canvas = document.getElementById('qr-canvas');

// Get the result element
const result = document.getElementById('qr-result');

// Get the scanner instance
const scanner = new Instascan.Scanner({ video });

// Set the scanning progress handler
scanner.addListener('scan', function(content) {
    result.innerText = content;
    result.style.display = 'block';
});

// Start the scanner
Instascan.Camera.getCameras().then(function(cameras) {
    if (cameras.length > 0) {
        // Find the back camera
        var backCam = cameras.find(function(cam) {
            return cam.name.indexOf('back') !== -1;
        });
        // If back camera is found, start the scanner with it
        if (backCam) {
            scanner.start(backCam);
        } else {
            // If no back camera is found, start the scanner with the first available camera
            scanner.start(cameras[0]);
        }
    } else {
        console.error('No cameras found.');
    }
}).catch(function(e) {
    console.error(e);
});

// Set the canvas dimensions
canvas.width = video.videoWidth;
canvas.height = video.videoHeight;

// Set the canvas context
const canvasContext = canvas.getContext('2d');
canvasContext.fillStyle = '#ffffff';

// Set the canvas drawing interval
setInterval(function() {
    canvasContext.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = canvasContext.getImageData(0, 0, canvas.width, canvas.height);
    const code = jsQR(imageData.data, imageData.width, imageData.height, { inversionAttempts: 'dontInvert' });
    if (code) {
        scanner.stop();
        result.innerText = code.data;
        result.style.display = 'block';
    }
}, 1000 / 30);