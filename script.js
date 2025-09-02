// const list = document.getElementById('list');

// function addHovering(event) {
//     const item = event.target.closest('.list-group-item');
//     if (!item) return;

//     document.querySelectorAll('#list .list-group-item')
//         .forEach(el => el.classList.remove('bg-primary-subtle'));

//     item.classList.add('bg-primary-subtle')
// }
// list.addEventListener('dblclick', addHovering);

// const form = document.forms[0];


// const inputUserName = form.elements['username'];

// const inputEmail = form.elements['email'];
// inputUserName.value = "Peter";
// inputEmail.value = "peter@gmail.com"

// form.addEventListener("submit", function (event) {
//     event.preventDefault();

// })
// form.requestSubmit();

// const btn = document.querySelector('.btn-primary');

// document.addEventListener('click', (event) => {
//     console.log(`Относитеьно Х: ${event.clientX}px \n
// Относитеьно У: ${event.clientY}px`);
//     console.log(`Относитеьно страницы Х: ${event.pageX}px \n
// Относитеьно страницы У: ${event.pageY}px`);

//     console.log(`Ширина: ${event.target.offsetWidth}px`)
//     console.log(`Висота: ${event.target.offsetHeight}px`)


// })

// const card = document.getElementById('card');
// const btns = document.querySelectorAll('.btn');

// btns.forEach(btn => btn.addEventListener('click', getScroll));

// function getScroll(e) {

//     const height = card.offsetHeight;
//     window.scrollBy({
//         top: height + 50,
//         behavior: 'smooth'
//     })
//     e.preventDefault();

// }

// const sections = document.querySelectorAll('section');

// observingConfig = {
//     threshold: 0.4,
// }

// function handleIntersect(entries, observer) {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('animated');
//         } else entry.target.classList.remove('animated')
//     })
// }
// const observer = new IntersectionObserver(handleIntersect, observingConfig);

// sections.forEach(section => observer.observe(section));

// const item1 = document.querySelector('.item1');
// const item2 = document.querySelector('.item2');

// item1.addEventListener('mouseenter', () => {
//     const dropdown = item1.querySelector('.dropdown-1');

//     if (dropdown.children.length) return;
//     dropdown.innerHTML = `
//      <li>Company</li>
//     <li>Team</li>
//     <li>Careers</li>
//     `
// });

// item2.addEventListener('mouseenter', () => {
//     const dropdown2 = item2.querySelector('.dropdown-2');

//     if (dropdown2.children.length) return;
//     dropdown2.innerHTML = `
//      <li>Posdfd</li>
//     <li>Team</li>
//     <li>Careers</li>
//     `
// });

// const menuData = {
//     item1: ["Company", "Team", "Careers"],
//     item2: ["PDFs", "Reports", "Guides"],
//     item3: ["Email us", "Locations", "Support"]
// };


// const item = document.querySelectorAll('.header-list-item');

// item.forEach(li => {
//     li.addEventListener('mouseenter', () => {
//         const dropdown = li.querySelector('.dropdown');

//         if (dropdown.children.length > 0) return;

//         const key = li.classList[1];
//         const list = menuData[key] || [];

//         list.forEach(text => {
//             const el = document.createElement('li');
//             el.textContent = text;
//             dropdown.appendChild(el);
//         })


//     })
// })

// const car = {
//     year: new Date(2024, 3, 1),
//     brand: "audi",
//     color: "blue",
//     power: 3.2,
//     isFast: true,
// }
// const carJson = JSON.stringify(car);
// console.log(JSON.parse(carJson))
// const carFromJson = JSON.parse(carJson, (key, value) => {
//     if (key === "year") {
//         return new Date(value);
//     } return value
// });


// console.log(carFromJson)

// const p = document.body.children[1];
// const h3 = p.previousElementSibling;
// const span = p.nextElementSibling;

// const greeting = h3.textContent + " " + span.textContent;
// console.log(greeting)

// const li = document.getElementById('one');
// li.insertAdjacentHTML("afterend", `<li>2</li><li>3</li>`)

// const ul = document.querySelector('#elem');
// let text = prompt('ведите текст');
// while (text !== '' && text !== null) {
//     const li = document.createElement('li');
//     li.textContent = text;

//     ul.append(li);
//     text = prompt('Введите текст');
// }

// const input = document.querySelector('[todo-input]');
// const btn = document.querySelector('[btn-todo]');

// const todoList = JSON.parse(localStorage.getItem('todos')) || [];

// btn.addEventListener('click', () => {
//     if (input.value.trim() !== "") {
//         todoList.push(input.value);
//         localStorage.setItem('todos', JSON.stringify(todoList));


//         input.value = "";
//     }
// })


const headerNav = document.querySelector('.header-nav');
const headerActive = document.querySelector('.header-active');
const mobMenu = document.querySelector('.mob-menu');
const mobContent = document.querySelector('.mob-content');
const close = document.querySelector('.close');
const burger = document.querySelector('.burger');

window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        headerNav.classList.add('hidden');
        headerActive.classList.add('hidden');
        mobMenu.classList.remove('hidden');
    } else {
        headerNav.classList.remove('hidden');
        headerActive.classList.remove('hidden');
        mobMenu.classList.add('hidden');
        mobContent.classList.add('hidden');
        close.classList.add('hidden');
    }
})

burger.addEventListener("click", () => {
    mobContent.classList.remove('hidden');
    close.classList.remove('hidden');
})

close.addEventListener('click', () => {
    mobContent.classList.add('hidden');
    close.classList.add('hidden');
})

