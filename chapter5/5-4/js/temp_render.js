let myLoading = {
	props: ["type"],
	render: function (h) {
		switch (this.type) {
			case "text":
				return h("p", "...Now Loading...");
			case "image":
				return h("img", {
					attrs: {
						src: "img/loading.gif",
						alt: "loading"
					}
				});
			default:
				console.log("type属性はimage、textいずれかで設定してください");
				return null;
		}
	}
};

let app = new Vue({
	el: "#app",
	components: {
		"my-loading": myLoading
	}
});