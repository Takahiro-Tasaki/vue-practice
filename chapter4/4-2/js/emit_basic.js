let MyCounter = {
	props: ["step"],
	template: `<button type="button" v-on:click="onclick">{{ step }}</button>`,
	methods: {
		onclick: function () {
			this.$emit("plus", Number(this.step));
		}
	}
};

new Vue({
	el: "#app",
	components: {
		"my-counter": MyCounter
	},
	data: {
		current: 0
	},
	methods: {
		onPlus: function (e) {
			this.current += e;
		}
	}
});