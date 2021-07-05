let MyChild = {
	data: function () {
		return {
			message: ""
		}
	},
	template: `<p>子：{{ message }}</p>`,
	mounted: function () {
		this.$parent.message = "子から設定";
	}
};

new Vue({
	el: "#app",
	components: {
		"my-child": MyChild
	},
	data: {
		message: ""
	},
	mounted: function () {
		this.$refs.child.message = "親から設定";
	}
});