import App from "./App.svelte";

let x: number = 12;

const app = new App({
	target: document.getElementById("home"),
	props: {}
});