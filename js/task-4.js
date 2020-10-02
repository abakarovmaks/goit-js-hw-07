/*
 * Свойства «навигации» по DOM-узлам (взять список)
 * http://fecore.net.ua/books/m5ph3r-javascript/module-07/dom-traversal.html
 */

const navEl = document.querySelector('.site-nav');

// const firstNavItemEl = navEl.querySelector('.site-nav__item');
// console.log('firstNavItemEl', firstNavItemEl);
const firstNavItemEl = navEl.firstElementChild;
console.log('firstNavItemEl', firstNavItemEl);
console.log('children', navEl.children[2]);
