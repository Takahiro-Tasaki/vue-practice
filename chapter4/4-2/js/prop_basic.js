let MyHello = {
	props: [ "yourName" ],
	template: "<div>こんにちは、{{ yourName }}さん！!</div>"
};

new Vue({
	el: "#app",
	components: {
		"my-hello": MyHello
	}
});