import {createRouter, createWebHistory} from 'vue-router';
import {createApp} from 'vue';
import App from './App.vue';
import MainPage from './views/MainPage.vue';
import TournamentCreator from './views/TournamentCreator.vue';
import TournamentEditor from './components/panels/TournamentEditorPanel.vue';
import LoginPanel from './components/panels/LoginPanel.vue';
import RegisterPanel from './components/panels/RegisterPanel.vue';
import UserProfile from './views/UserProfile.vue';
import ChangePassword from './components/panels/ChangePasswordPanel.vue';
import BracketDesigner from './views/BracketDesigner.vue';

const routes = [
	{path: '/', name: 'Home', component: MainPage},
	{path: '/tournament/creator/:id', name: 'TournamentCreatorPage', component: TournamentCreator},
	{path: '/tournament/edit/:id', name: 'TournamentEditorPage', component: TournamentEditor},
	{path: '/login', name: 'LoginPage', component: LoginPanel},
	{path: '/register', name: 'RegisterPage', component: RegisterPanel},
	{path: '/profile', name: 'UserProfile', component: UserProfile},
	{path: '/changepassword', name: 'PasswordChange', component: ChangePassword},
	{path: '/bracket/:id', name: 'BracketDesigner', component: BracketDesigner}
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

createApp(App).use(router).mount('#app')
