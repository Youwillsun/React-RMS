import Index from "../pages/admin/dashboard/Index";
import Edit from "../pages/admin/product/Edit";
import List from "../pages/admin/product/List";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";

export const mainRoutes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/404',
        component: PageNotFound
    }
]

export const adminRoutes = [
    {
        path: '/admin/dashboard',
        component: Index,
        isShow: true,
        title:'看板',
        icon:'area-chart'
    },
    {
        path: '/admin/products',
        component: List,
        isShow: true,
        exact: true,
        title: '商品管理',
        icon:'shop'
    },
    {
        path: '/admin/products/edit/:id?',
        component: Edit,
        isShow: false
    }
]