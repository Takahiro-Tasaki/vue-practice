let MyInput = {
	template: `<input type="text">`
};

new Vue({
	el: "#app",
	components: {
		"my-input": MyInput
	},
	methods: {
		onFocus: function (e) {
			console.log(e);
		}
	}
});