import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Signup from './views/Signup.vue';
import Login from './views/Login.vue';
import Logout from './views/Logout.vue';
import UsersShow from './views/UsersShow.vue';
import UsersEdit from './views/UsersEdit.vue';
import InterestsEdit from './views/InterestsEdit.vue';
import InterestsNew from './views/InterestsNew.vue';
import OpeningsNew from './views/OpeningsNew.vue';
import GroupsIndex from './views/GroupsIndex.vue';
import GroupsEdit from './views/GroupsEdit.vue';
import GroupsShow from './views/GroupsShow.vue';
import GroupsNew from './views/GroupsNew.vue';
import GroupsJoin from './views/GroupsJoin.vue';
import EventsNew from './views/EventsNew.vue';
import UsersCalendar from './views/UsersCalendar.vue';
import UserGoogleCalendar from './views/UserGoogleCalendar.vue';



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/users/show',
      name: 'usersShow',
      component: UsersShow
    },
    {
      path: '/users/edit',
      name: 'usersEdit',
      component: UsersEdit
    },
    {
      path: '/interests/:id/edit',
      name: 'interestsEdit',
      component: InterestsEdit
    },
    {
      path: '/interests/new',
      name: 'interestsNew',
      component: InterestsNew
    },
    {
      path: '/openings/new',
      name: 'openingsNew',
      component: OpeningsNew
    },
    {
      path: '/groups/index',
      name: 'groupsIndex',
      component: GroupsIndex
    },
    {
      path: '/groups/new',
      name: 'groupsNew',
      component: GroupsNew
    },
    {
      path: '/groups/join',
      name: 'groupsJoin',
      component: GroupsJoin
    },
    {
      path: '/groups/:id/edit',
      name: 'groupsEdit',
      component: GroupsEdit
    },
    {
      path: '/groups/:id',
      name: 'groupsShow',
      component: GroupsShow
    },
    {
      path: '/events/new',
      name: 'eventsNew',
      component: EventsNew
    },
    {
      path: '/users/calendar',
      name: 'usersCalendar',
      component: UsersCalendar
    },
    {
      path: '/users/googlecalendar',
      name: 'userGoogleCalendar',
      component: UserGoogleCalendar
    }
              
  ]
})
