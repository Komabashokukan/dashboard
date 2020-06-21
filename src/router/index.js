import Home from '@/views/Home.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path : '/',
        name : 'Home',
        component : Home
    },
    {
        path : '/form',
        name : 'Form',
        component : () => import('@/views/Form.vue')
    },
    {
        path : '/form/reservation_request',
        name : 'ReservationRequest',
        component : () => import('@/views/form/ReservationRequest.vue')
    },
    {
        path : '/form/project_plan',
        name : 'ProjectPlan',
        component : () => import('@/views/form/ProjectPlan.vue')
    },
    {
        path : '/form/overtime_use',
        name : 'OvertimeUse',
        component : () => import('@/views/form/OvertimeUse.vue')
    },
    {
        path : '/exit_check',
        name : 'ExitCheck',
        component : () => import('@/views/ExitCheck.vue')
    },
    {
        path : '/exit_check/exit_check_set',
        name : 'ExitCheckSet',
        component : () => import('@/views/exit_check/ExitCheckSet.vue')
    },
    {
        path : '/exit_check/exit_check_light',
        name : 'ExitCheckLight',
        component : () => import('@/views/exit_check/ExitCheckLight.vue')
    },
    {
        path : '/exit_check/exit_check_sound',
        name : 'ExitCheckSound',
        component : () => import('@/views/exit_check/ExitCheckSound.vue')
    },
    {
        path: '/form/consent',
        name: 'Consent',
        component : () => import('@/views/form/Consent.vue')
    },
    {
        path: '/equipments',
        name: 'Equipments',
        component : () => import('@/views/Equipments.vue')
    },
    {
        path: '/equipments/equipment_light',
        name: 'Equipment_Light',
        component : () => import('@/views/equipments/EquipmentLight.vue')
    },
    {
        path: '/equipments/equipment_log_light',
        name: 'EquipmentLog_Light',
        component : () => import('@/views/equipments/EquipmentLogLight.vue')
    }
];

const router = new VueRouter({
    mode : 'history',
    base : process.env.BASE_URL,
    routes
});

export default router
