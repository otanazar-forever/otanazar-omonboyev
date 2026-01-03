"use strict";

// Elementlarni tanlab olamiz
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector("#btn");
const searchBtn = document.querySelector(".bx-search");

// Sidebar ochish/yopish funksiyasi
const toggleSidebar = () => {
    sidebar.classList.toggle("open");
    menuBtnChange();
};

// Menu tugmasi bosilganda
if (closeBtn) {
    closeBtn.addEventListener("click", toggleSidebar);
}

// Qidiruv tugmasi bosilganda (sidebar yopiq bo'lsa ochadi)
if (searchBtn) {
    searchBtn.addEventListener("click", () => {
        if (!sidebar.classList.contains("open")) {
            sidebar.classList.toggle("open");
            menuBtnChange();
        }
    });
}

// Ikonkani o'zgartirish funksiyasi
function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
}

// Qo'shimcha: Ekranni kichraytirganda sidebarni avtomatik yopish (optional)
window.addEventListener("resize", () => {
    if (window.innerWidth < 768 && sidebar.classList.contains("open")) {
        sidebar.classList.remove("open");
        menuBtnChange();
    }
});
