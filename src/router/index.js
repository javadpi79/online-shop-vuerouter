import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Product from "../views/ProductView.vue";
import Posts from "../views/Admin/Posts.vue";
import Products from "../views/Admin/Products.vue";
import Users from "../views/Admin/Users.vue";
import IndexAdmin from "../views/Admin/Index.vue";

import MainLayout from "../layouts/MainLayout.vue";
import AdminLayout from "../layouts/AdminLayout.vue";

const routes = [{
        path: "/",
        component: MainLayout,
        children: [{
                path: "",
                name: "home",
                component: HomeView,
            },
            {
                path: "singleProduct/:id/:title",
                component: Product,
                name: "SingleProduct",
            },
            {
                path: "search",
                component: () =>
                    import ("../views/SearchView.vue"),
                name: "Search",
            },
        ],
    },
    {
        path: "/admin",
        component: AdminLayout,
        children: [{
                path: "",
                component: IndexAdmin,
            },
            {
                path: "users",
                component: Users,
            },
            {
                path: "products",
                component: Products,
            },
            {
                path: "Posts",
                component: Posts,
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;