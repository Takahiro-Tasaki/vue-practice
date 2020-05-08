let MySlot = {
	props: [ "yourName" ],
	template: `<div>
		<header>
			<slot name="header">DEFAULT HEADER</slot>
		</header>
		<div>
			<slot>DEFAULT MAIN</slot>
		</div>
		<footer>
			<slot name="footer">DEFAULT FOOTER</slot>
		</footer>
	</div>`
};

new Vue({
	el: "#app",
	components: {
		"my-slot": MySlot
	}
});