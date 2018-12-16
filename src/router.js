import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Signup from './views/Signup.vue';
import Login from './views/Login.vue';
import Logout from './views/Logout.vue';
import UsersShow from './views/UsersShow.vue';
import UsersEdit from './views/UsersEdit.vue';
import InterestsEdit from './views/InterestsEdit.vue';
import InterestsCreate from './views/InterestsCreate.vue';
import OpeningsCreate from './views/OpeningsCreate.vue';
import GroupsIndex from './views/GroupsIndex.vue';
import GroupsEdit from './views/GroupsEdit.vue';
import GroupsShow from './views/GroupsShow.vue';
import GroupsCreate from './views/GroupsCreate.vue';
import GroupsJoin from './views/GroupsJoin.vue';
import EventsCreate from './views/EventsCreate.vue';
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
      path: '/interests/create',
      name: 'interestsCreate',
      component: InterestsCreate
    },
    {
      path: '/openings/create',
      name: 'openingsCreate',
      component: OpeningsCreate
    },
    {
      path: '/groups/index',
      name: 'groupsIndex',
      component: GroupsIndex
    },
    {
      path: '/groups/create',
      name: 'groupsCreate',
      component: GroupsCreate
    },
    {
      path: '/groups/join',
      name: 'groupsJoin',
      component: GroupsJoin
    },
    {
      path: '/groups/edit/:id',
      name: 'groupsEdit',
      component: GroupsEdit
    },
    {
      path: '/groups/:id',
      name: 'groupsShow',
      component: GroupsShow
    },
    {
      path: '/events/create',
      name: 'eventsCreate',
      component: EventsCreate
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
