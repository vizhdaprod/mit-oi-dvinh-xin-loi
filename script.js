const messages = [
    "Ơ vẫn giận hả",
    "Thôi đừng giận nữa màa",
    "Cười tươi cái xem nào",
    "Thui bỏ qua cho tui nhá",
    "Hứa không tái phạm nữa",
    "mít đừng giận tui nữa nhá",
    "nhá",
    "nhá",
    "nhá",
    "Nhá"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
