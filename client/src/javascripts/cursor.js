// import { $, $$ } from './bling';
// const body = $('body')
// const cursor = $('.cursor')
// const backgroundTweet = $('.backgroundTweet')

// const setMousePosition = (() => {
// 	body.addEventListener('mousemove', function mousePosition(e) {
// 		const left = e.pageX - 12;
// 		const top = e.pageY - window.scrollY - 2;
// 		cursor.style.left = `${left}px`;
// 		cursor.style.top = `${top}px`;
// 	});
// })()

// const cursorEventListeners = (() => {
// 	window.addEventListener('mousedown', function changeKKImage() {
// 		cursor.style.backgroundImage = "url('https://s3.eu-west-2.amazonaws.com/lifeishappening/fingerDown1.png')"
// 		console.log('please')
// 	});
// 	window.addEventListener('mouseup', function changeKKImageBack() {
// 		cursor.style.backgroundImage = "url('https://s3.eu-west-2.amazonaws.com/lifeishappening/fingerUp1.png')"
// 		console.log('work')
// 	});
// 	backgroundTweet.addEventListener('mouseover', function overBackground() {
// 		body.classList.add('noCursor')
// 		cursor.style.opacity = "1";
// 	});
// 	backgroundTweet.addEventListener('mouseleave', function offBackground() {
// 		body.classList.remove('noCursor')
// 		cursor.style.opacity = "0";
// 	});
// });


// export {
// 	cursorEventListeners
// }