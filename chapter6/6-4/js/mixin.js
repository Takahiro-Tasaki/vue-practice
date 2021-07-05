let dataLoggable = {
	mounted: function () {
		console.log(this.$data);
	}
}

let myComp = {
	data: function () {
		return {
			current: new Date()
		}
	},
	template: `<div>現在時刻：{{ current }}</div>`,
	mixins: [dataLoggable]
}

let app = new Vue({
	el: "#app",
	components: {
		"my-comp": myComp
	}
});