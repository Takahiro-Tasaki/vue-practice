Vue.filter("nl2br", function(value) {
	if(typeof value !== "string") {
		return value;
	}
	return value.replace(/\r?\n/g, "<br>");
});

let app = new Vue({
	el: "#app",
	data: {
		demo: ""
	}
});