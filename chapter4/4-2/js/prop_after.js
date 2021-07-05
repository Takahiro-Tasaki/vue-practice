let MyHello = {
	template: `<div title="result" class="main">こんにちは、{{ name }}！</div>`,
	data: function () {
		return {
			name: "Vue.js"
		}
	}
};

new Vue({
	el: "#app",
	components: {
		"my-hello": MyHello
	}
});