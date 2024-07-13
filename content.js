// content.js
console.log("Hide Elo extension loaded ♟️");

// // Chat room code for when you play a rematch
// const chatRoomComponent = document.querySelector(".chat-room-component");

// document.addEventListener("click", function (event) {
// 	const spans = chatRoomComponent.querySelectorAll("span");

// 	if (!chatRoomComponent) return;
// 	if (!spans) return;

// 	spans.forEach((span) => {
// 		if (span.textContent.includes("rating")) {
// 			span.remove();
// 		}
// 	});
// });

const disableButton = document.getElementById("action-btn");

disableButton.addEventListener("click", function () {
	const isEnabled = disableButton.innerHTML == "Enable";
	const styleSheet = document.styleSheets[1]; //TODO - add validation to ensure this is the correct style sheet
	//Currently only updating the stylesheet locally, not updating on chess.com
	if (!isEnabled) {
		disableButton.innerHTML = "Enable";
		styleSheet.disabled = false;
		return;
	}

	disableButton.innerHTML = "Disable";
	styleSheet.disabled = true;

	console.log("Button clicked - ");
});
