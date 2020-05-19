let app = new Vue({
	el: "#app",
	data: {
		todo: "",
		items: [
			"A書籍の構成案作成",
			"X記事の著者校正",
			"今月締の請求書作成",
			"WINGSメンバーの面接"
		]
	},
	methods: {
		onAdd: function () {
			this.items.unshift(this.todo);
			this.todo = "";
		},
		onRemove: function () {
			let that = this;
			this.items = this.items.filter(function (value) {
				return value !== that.todo;
			});
			this.todo = "";
		},
		onSort: function () {
			this.items.sort();
		}
	}
});