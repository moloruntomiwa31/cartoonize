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
            component: Home,
            meta: {
                title: "Colorcinch | Home"
            }
        },
        {
            path: "/home",
            redirect: "/"
        },
        {
            path: "/features",
            name: "feature",
            component: Feature,
            meta: {
                title: "Colorcinch | Feature"
            }
        },
        {
            path: "/pricing",
            name: "pricing",
            component: Pricing,
            meta: {
                title: "Colorcinch | Pricing"
            }
        },
        {
            path: "/support",
            name: "support",
            component: Support,
            meta: {
                title: "Colorcinch | Support"
            }
        }
    ]
})
router.beforeEach((to) => {
    document.title = to.meta?.title ?? 'Colorcinch'
})
export default router