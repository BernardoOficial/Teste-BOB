const accordions = Array.from(document.querySelectorAll(".main__accordion-item"));

accordions.forEach(accordion => {

  let isActive = false;
  const accordionTitle = accordion.querySelector('.main__title');
  
  accordionTitle.addEventListener('click', handleClick)

  function handleClick(evento) {
    evento.stopPropagation();

    isActive = !isActive;

    accordionTitle.classList.toggle("main__title--active");
    
    const currentTitleHeight = accordionTitle.offsetHeight;
    const currentParagraphHeight = accordionTitle.nextElementSibling.offsetHeight;

    isActive
      ? (accordion.style.height = `${
          Number(currentTitleHeight) + Number(currentParagraphHeight)
        }px`)
      : (accordion.style.height = `${currentTitleHeight}px`);

  }
})