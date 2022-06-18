import App from './App.vue';
import MainPage from './views/MainPage.vue';
import TournamentCreator from './views/TournamentCreator.vue';
import BracketDesigner from './views/BracketDesigner.vue';
import LoginPanel from './components/panels/LoginPanel.vue';

import { createWebHistory, createRouter } from 'vue-router';
import { createApp } from 'vue';

const routes = [
    { path: '/', name: 'Home', component: MainPage },
    { path: '/tc', name: 'TournamentCreatorPage', component: TournamentCreator },
    { path: '/login', name: 'LoginPage', component: LoginPanel },
    { path: '/bck', name: 'BracketDesigner', component: BracketDesigner }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(router).mount('#app')
