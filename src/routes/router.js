import { createRouter, createWebHistory } from "vue-router";
import Counter from "../components/Counter.vue";
import Home from "../components/Home.vue";
import Foo from "../components/Foo.vue";

const routes = [
	{
		path: "/counter",
		name: "Counter",
		component: Counter
	},
	{
		path: "/",
		component: Home,
		children: [
			{
				path: "foo",
				name: "foo",
				component: Foo
			}
		]
	}
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;