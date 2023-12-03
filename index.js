//sidebar
const menuItems = document.querySelectorAll(".menu-item");
console.log(menuItems);
//messgaes
const messageNotification = document.querySelector("#messages-notification");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#messages-search");

//theme
const theme = document.querySelector("#theme");
const themeModel = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");
// remove active class from all items
const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");
    if (item.id != "notifications") {
      document.querySelector(".notification-popup").style.display = "none";
    } else {
      document.querySelector(".notification-popup").style.display = "block";
      document.querySelector(
        "#notifications .notifications-count"
      ).style.display = "none";
    }
  });
});

//===================================messages----------------------------======================
//searches chat

const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();

  message.forEach((chat) => {
    let name = chat.querySelector("h5").textContent.toLocaleLowerCase();
    console.log(name);
    if (name.indexOf(val) != -1) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
};

//search chat

messageSearch.addEventListener("keyup", searchMessage);

//highlight messages card when mesages menu item is clicked
messageNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messageNotification.querySelector(".notifications-count").style.display =
    "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

//=============theme cuztimization=======================
//open model
const openThemeModel = () => {
  themeModel.style.display = "grid";
};
//closing the model
const closeThemeModel = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModel.style.display = "none";
  }
};
//closing the model
themeModel.addEventListener("click", closeThemeModel);
theme.addEventListener("click", openThemeModel);

// ------------------------font size-------------
fontSizes.forEach((size) => {
  let fontSizes;

  if (size.classList.contains("font-size-1")) {
    fontSize = "10px";
  } else if (size.classList.contains("font-size-2")) {
    fontSize = "13px";
  } else if (size.classList.contains("font-size-3")) {
    fontSize = "16px";
  } else if (size.classList.contains("font-size-4")) {
    fontSize = "19px";
  }
  if (size.classList.contains("font-size-5")) {
    fontSize = "22px";
  }

  // change font size of the root html element
  document.querySelector("html").style.fontSize = fontSize;
});
