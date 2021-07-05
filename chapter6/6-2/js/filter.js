Vue.filter("trim", function(value) {
	if(typeof value !== "string") {
		return value;
	}
	return value.trim();
});

let app = new Vue({
	el: "#app",
	data: {
		str: " WINGS Project "
	}
});