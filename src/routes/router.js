import { createRouter, createWebHistory } from "vue-router";
import Counter from "../components/Counter.vue";
import Home from "../components/Home.vue";
import Test from "../components/Test.vue";
import Foo from "../components/Foo.vue";
import Bar from "../components/Bar.vue";

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
				path: "test",
				name: "test",
				component: Test
			},
			{
				path: "foo",
				name: "foo",
				component: Foo
			},
			{
				path: "bar",
				name: "bar",
				component: Bar
			}
		]
	}
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;