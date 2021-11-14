function menuMobile() {
  function outsideClick(element, events, callback) {
    const html = document.documentElement;
    const outside = "data-outside";

    if (!element.hasAttribute(outside)) {
      events.forEach((userEvent) => {
        setTimeout(() => {
          html.addEventListener(userEvent, handleOutsideClick);
        });
      });
      element.setAttribute(outside, "");
    }

    function handleOutsideClick(event) {
      if (!element.contains(event.target)) {
        element.removeAttribute(outside);
        events.forEach((userEvent) => {
          html.removeEventListener(userEvent, handleOutsideClick);
        });
        callback();
      }
    }
  }
  const btn = document.querySelector(".btn-mobile");
  const menu = document.querySelector(".nav-menu");

  btn.addEventListener("click", () => {
    btn.classList.toggle("ativo");
    menu.classList.toggle("ativo");

    outsideClick(menu, ["click"], () => {
      menu.classList.remove("ativo");
      btn.classList.remove("ativo");
    });
  });
}
menuMobile();
