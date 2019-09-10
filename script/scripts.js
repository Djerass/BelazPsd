// QUESTION POPUPS
const Popup = (() => {
  const messageClass = "message";
  const imgSource = "../images/close.png";
  const imgCloseClass = "close";

  const clearMessages = () => {
    const messages = Array.from(document.querySelectorAll(`.${messageClass}`));
    messages.forEach(mes => mes.parentNode.removeChild(mes));
  };

  const createMessage = (text, x, y) => {
    const message = document.createElement("div");
    message.style.left = `${x}px`;
    message.style.top = `${y + 20}px`;
    message.classList.add(messageClass);
    message.innerText = text;
    return message;
  };

  const createCloseImg = () => {
    const close = document.createElement("img");
    close.addEventListener("click", clearMessages);
    close.src = imgSource;
    close.classList.add(imgCloseClass);
    return close;
  };

  const getMessage = (parent, e) => {
    clearMessages();
    const message = createMessage(parent.dataset.message, e.pageX, e.pageY);
    const close = createCloseImg();
    message.appendChild(close);
    parent.parentNode.appendChild(message);
  };

  return class {
    constructor(itemClass) {
      this.popups = Array.from(document.querySelectorAll(itemClass));
      this.init();
    }
    init() {
      this.popups.forEach(popup =>
        popup.addEventListener("click", e => getMessage(popup, e))
      );
    }
  };
})();

document.addEventListener("DOMContentLoaded", () => {
  new Popup(".popup");
  (() => {
    const image = document.getElementById("images");
    let currImg = "./images/contract_bordered.png";
    setInterval(() => {
      currImg === "./images/contract_bordered.png"
        ? (currImg = "./images/contract2_bordered.png")
        : (currImg = "./images/contract_bordered.png");
      image.src = currImg;
    }, 3000);
  })();
});
