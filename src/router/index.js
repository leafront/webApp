const home = r => require.ensure([], () => r(require('../view/home')), 'home')

const news = r => require.ensure([], () => r(require('../view/news')), 'news')

const contact = r => require.ensure([], () => r(require('../view/contact')), 'contact')

const business = r => require.ensure([], () => r(require('../view/business')), 'business')

const projectCase = r => require.ensure([], () => r(require('../view/project/case')), 'projectCase')

const projectTeam = r => require.ensure([], () => r(require('../view/project/team')), 'projectTeam')

const picker = r => require.ensure([], () => r(require('../view/test/picker')), 'picker')

const error = r => require.ensure([], () => r(require('../view/error')), 'error')

const router = [{
  path: '/',
  name: 'home',
  component: home
},{
	path: '/news',
	name: 'news',
	component: news
},{
	path: '/contact',
	name: 'contact',
	component: contact
},{
	path: '/business',
	name: 'business',
	component: business
},{
	path: '/project/case',
	name: 'projectCase',
	component: projectCase
},{
	path: '/project/team',
	name: 'projectTeam',
	component: projectTeam
},{
	path: '/test/picker',
	name: 'picker',
	component: picker
},{
  path: '*',
	name: 'error',
	component: error
}]

export default router
