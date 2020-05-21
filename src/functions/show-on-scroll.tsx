export function loop() {
    const elementsToShow = document.querySelectorAll<HTMLElement>('.show-on-scroll')!;
    elementsToShow.forEach(function (element: HTMLElement) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
        console.log(element.classList)
    });
}

function isElementInViewport(el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0 && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}