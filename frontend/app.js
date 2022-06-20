import {createRouter, createWebHistory} from 'vue-router';
import {createApp} from 'vue';
import App from './App.vue';
import MainPage from './views/MainPage.vue';
import TournamentCreator from './views/TournamentCreator.vue';
import TournamentEditor from './components/panels/TournamentEditorPanel.vue';
import LoginPage from './views/LoginPage.vue';
import RegisterPage from './views/RegisterPage.vue';
import UserProfile from './views/UserProfile.vue';
import ChangePassword from './components/panels/ChangePasswordPanel.vue';
import BracketDesigner from './views/BracketDesigner.vue';
import BracketView from './views/BracketView.vue';

const routes = [
	{path: '/', name: 'Home', component: MainPage},
	{path: '/tournament/creator/:id', name: 'TournamentCreatorPage', component: TournamentCreator},
	{path: '/tournament/edit/:id', name: 'TournamentEditorPage', component: TournamentEditor},
	{path: '/login', name: 'LoginPage', component: LoginPage},
	{path: '/register', name: 'RegisterPage', component: RegisterPage},
	{path: '/profile', name: 'UserProfile', component: UserProfile},
	{path: '/changepassword', name: 'PasswordChange', component: ChangePassword},
	{path: '/bracket/:id', name: 'BracketDesigner', component: BracketDesigner},
	{path: '/bracketview/:id', name: 'BracketView', component: BracketView}
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

createApp(App).use(router).mount('#app')
