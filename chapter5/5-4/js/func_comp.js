let myRandom = {
	functional: true,
	props: ["min", "max"],
	render: function (h, context) {
		let
			min = context.props.min,
			max = context.props.max,
			result = Math.floor(Math.random() * (max - min + 1) + min);

		return h("p", result);
	}
};

let app = new Vue({
	el: "#app",
	components: {
		"my-random": myRandom
	}
});