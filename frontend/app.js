import App from './App.vue';
import MainPage from './views/MainPage.vue';
import TournamentCreator from './views/TournamentCreator.vue';
import RegisterPanel from './components/panels/RegisterPanel.vue';
import LoginPanel from './components/panels/LoginPanel.vue';

import { createWebHistory, createRouter } from 'vue-router';
import { createApp } from 'vue';

const routes = [
    { path: '/', name: 'Home', component: MainPage },
    { path: '/tc', name: 'TournamentCreatorPage', component: TournamentCreator },
    { path: '/register', name: 'RegisterPage', component: RegisterPanel },
    { path: '/login', name: 'LoginPage', component: LoginPanel }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(router).mount('#app')
