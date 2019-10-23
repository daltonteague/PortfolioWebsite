
var webProjects = document.querySelectorAll(".web");
var mobileProjects = document.querySelectorAll(".mobile");
var select = document.getElementsByClassName("filter-button");

function filter(sel) {

	if (sel === "Mobile") {
			console.log("mobile");
		for (i = 0; i < webProjects.length; i++) {
			webProjects[i].style.display = "none"
		}
		for (i = 0; i < mobileProjects.length; i++) {
			mobileProjects[i].style.display = "block"
		}
	} else if (sel === "Web") {
			console.log("web");
		for (i = 0; i < webProjects.length; i++) {
			webProjects[i].style.display = "block"
		}
		for (i = 0; i < mobileProjects.length; i++) {
			mobileProjects[i].style.display = "none"
		}
	} else  if (sel === "All") {
			console.log("all");
		for (i = 0; i < webProjects.length; i++) {
			webProjects[i].style.display = "block"
		}
		for (i = 0; i < mobileProjects.length; i++) {
			mobileProjects[i].style.display = "block"
		}
	}
}