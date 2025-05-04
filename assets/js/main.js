// resume section 
let resumeBtns = document.querySelectorAll('.btn-resume');
resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        let resumeDetail = document.querySelectorAll('.resume-detail');
        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetail.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetail[idx].classList.add('active')   // one by one show
    });
});

// portfolio section 

let arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
let arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

let activePortfolio = () => {
    let imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    let portfolioDetail = document.querySelectorAll('.portfolio-detail');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`

    portfolioDetail.forEach(detail => {
        detail.classList.remove('active')
    });
    portfolioDetail[index].classList.add('active')
}
// right 
arrowRight.addEventListener('click', () => {
    if (index < 4) {
        index++;
        arrowLeft.classList.remove('disabled')
    }
    else {
        index = 5;
        arrowRight.classList.add('disabled')
    }
    activePortfolio();
})
// left 
arrowLeft.addEventListener('click', () => {
    if (index > 1) {
        index--;
        arrowRight.classList.remove('disabled')
    }
    else {
        index = 0;
        arrowLeft.classList.add('disabled')
    }
    activePortfolio();
})

// navigation 

let nav = document.querySelectorAll('header nav a');
let logo = document.querySelector('.logo')
let sections = document.querySelectorAll('section')
let barsBox = document.querySelector('.bars-box')
let header = document.querySelector('header')
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle("active")
})



let activePage = () => {

    sections.forEach(section => {
        section.classList.remove('active')
    })

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove("active")
    // navbar.classList.add("fa-bars")

    header.classList.remove('active')
    setTimeout(() => {
        header.classList.add('active')
    }, 1100)

    nav.forEach(link => {
        link.classList.remove('active')
    })
    barsBox.classList.remove('active')
    setTimeout(() => {
        barsBox.classList.add('active')
    }, 1100)
}
nav.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();

            link.classList.add('active')

            setTimeout(() => {
                sections[idx].classList.add('active')
            }, 1100)
        }
    })
})

logo.addEventListener('click', () => {
    if (!nav[0].classList.contains('active')) {
        activePage();
        nav[0].classList.add('active')

        setTimeout(() => {
            sections[0].classList.add('active')
        }, 1100)
    }
})