let myHello = {
	data: function () {
		return {
			name: "Vue.js"
		};
	}
};

let app = new Vue({
	el: "#app",
	components: {
		"my-hello": myHello
	}
});