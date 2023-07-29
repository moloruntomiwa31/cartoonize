import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue"
import Feature from "../views/Feature.vue"
import Pricing from "../views/Pricing.vue"
import Support from "../views/Support.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/home",
            redirect: "/"
        },
        {
            path: "/features",
            name: "feature",
            component: Feature
        },
        {
            path: "/pricing",
            name: "pricing",
            component: Pricing
        },
        {
            path: "/support",
            name: "support",
            component: Support
        }
    ]
})
export default router