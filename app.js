const navigation = document.querySelector('.navigation');
const toggleBtn = document.querySelector('.navigation-mobile-toggle');

toggleBtn.onclick = function () {
    toggleBtn.classList.toggle("active")
    navigation.classList.toggle("active")
}