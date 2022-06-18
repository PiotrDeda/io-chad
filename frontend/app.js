import App from './App.vue';
import MainPage from './views/MainPage.vue';
import TournamentCreator from './views/TournamentCreator.vue';
import RegisterPanel from './components/panels/RegisterPanel.vue';
import LoginPanel from './components/panels/LoginPanel.vue';

import { createWebHistory, createRouter } from 'vue-router';
import { createApp } from 'vue';
import RegisterPanelVue from './components/panels/RegisterPanel.vue';
import PasswordChangeVue from './views/PasswordChange.vue';
import UserProfileVue from './views/UserProfile.vue';

const routes = [
    { path: '/', name: 'Home', component: MainPage },
    { path: '/tc', name: 'TournamentCreatorPage', component: TournamentCreator },
<<<<<<< HEAD
    { path: '/login', name: 'LoginPage', component: LoginPanel },
    { path: '/reg', name: 'RegisterPage', component: RegisterPanelVue },
    { path: '/userProfile', name: 'UserProfile', component: UserProfileVue },
    { path: '/passwd', name: 'PasswordChange', component: PasswordChangeVue }

=======
    { path: '/register', name: 'RegisterPage', component: RegisterPanel },
    { path: '/login', name: 'LoginPage', component: LoginPanel }
>>>>>>> 774fcf6999de922f379f697492d872bb6c364e5e
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(router).mount('#app')
