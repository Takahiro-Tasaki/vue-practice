Vue.mixin({
	created: function () {
		let {title, keyword, description} = this.$data;
		if (title) {
			document.title = title;
		}
		if (keyword) {
			document.querySelector("meta[name='keyword']").setAttribute("content", keyword);
		}
		if (description) {
			document.querySelector("meta[name='description']").setAttribute("content", description);
		}
	}
});

let myMix = {
	template: `<div>Global Mix-In!!</div>`,
	data: function() {
		return {
			title: "グローバルミックスイン",
			keyword: "mixin, vuejs, component",
			description: "アプリ全体に適用されるミックスインの例です。"
		}
	}
}

let app = new Vue({
	el: "#app",
	components: {
		"my-mix": myMix
	}
});