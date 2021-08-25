const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: "A pancake  is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter ",
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `sandwich that typically consists of boneless, skinless chicken breast served between slices of bread, on a bun, or on a roll.`,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `sweet drink made by blending milk, ice cream, and flavorings or sweeteners such as butterscotch, caramel sauce, chocolate syrup, fruit syrup, or whole fruit into a thick, sweet, cold mixture..`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `French toast is a dish made of sliced bread soaked in beaten eggs and typically milk, then pan fried. Alternative names and variants include "eggy bread", "Bombay toast", `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `dish made from beaten eggs, fried with butter or oil in a frying pan. It is quite common for the omelette to be folded around fillings such as cheese, chives, vegetables, mushrooms, meat, or some combination of the above.`,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Oreos are one of my favorite cookies (#guiltypleasure) and this Oreo Milkshake is equally as creamy and delicious as those yummy cookies `,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `This juicy 100% bacon burger is topped with cheddar cheese, crispy bacon, sauteed mushrooms and fire roasted bell peppers and onions, inside a cheddar bun and finished with lettuce, tomato, red onions, pickles and a sweet bourbon sauce `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `Loaded Cheeseburger Fries taste just like your favorite burger, but in appetizer form. These fries are topped with the classic ingredients of a cheeseburger and are baked to perfection `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `a large thoroughly shaken or blended drink made of milk, a flavoring syrup, and often ice cream a chocolate milkshake.`,
  },
  {
    id: 10,
    title: "delight dinner",
    category: "dinner",
    price: 26.99,
    img: "./images/item-10.jpeg",
    desc: `sweet drink made by blending milk, ice cream, and flavorings or sweeteners such as butterscotch, caramel sauce, chocolate syrup, fruit syrup, or whole fruit into a thick, sweet, cold mixture..`,
  },
];

const section = document.querySelector(".section-center");




window.addEventListener("DOMContentLoaded", function () {
  displayitem(menu);
  addbutton();
  
});

function displayitem(menuitem) {
  let allmenu = menuitem.map(function (item) {
    return `<article class="menu-item">
    <img src=${item.img} class="photo" alt=${item.title}>
    <div class="item-info">
      <header>
      <h4>${item.title}</h4>
      <h4 class="price">${item.price}</h4>
     </header>
     <p class="item-text">
      ${item.desc}
     </p>
    </div>
  </article>`;
  });

  allmenu = allmenu.join("");
  section.innerHTML = allmenu;
}

function addbutton(){

  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );

  let allbtn = categories.map(function (item) {
    return `<button class="filter-btn" type="button" data-id=${item}>${item}</button>`;
  }).join(" ");
  
  document.querySelector(".btn-container").innerHTML = allbtn;
  const btns = document.querySelectorAll(".filter-btn");
  
  
  btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const newmenu = menu.filter(function (item) {
        if (category === "all") {
          return item;
        }
  
        if (item.category === category) {
          return item;
        }
      });
  
      displayitem(newmenu);
    });
  });
}