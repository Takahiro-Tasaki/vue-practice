Vue.config.optionMergeStrategies.tags = function (toVal, fromVal) {
	if (!toVal) {
		toVal = [];
	}
	if (!fromVal) {
		fromVal = [];
	}
	return fromVal.concat(toVal);
};

let tagin = {
	tags: ["tag", "strategy"]
}

let myComp = {
	tags: ["component", "sample"],
	template: `<div>{{ $options.tags }}</div>`,
	mixins: [tagin]
}

let app = new Vue({
	el: "#app",
	components: {
		"my-comp": myComp
	}
});