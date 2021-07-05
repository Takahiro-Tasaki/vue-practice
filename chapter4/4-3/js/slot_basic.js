let MyHello = {
	props: [ "yourName" ],
	template: "<div>こんにちは、<slot>ゲスト</slot>さん！!</div>"
};

new Vue({
	el: "#app",
	components: {
		"my-hello": MyHello
	}
});