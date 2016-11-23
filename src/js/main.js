import angular from 'angular';

import { routerConfig } from './routes';
import { LayoutController } from './controllers/LayoutController'
import { AddController } from './controllers/AddController'
import { HomeController } from './controllers/HomeController'
import { FormService } from './services/form-server'
import { SingleController } from './controllers/SingleController'


import 'angular-ui-router';

angular 
	.module('app', ['ui.router'])
	.controller('LayoutController', LayoutController)
	.controller('AddController', AddController)
	.controller('HomeController', HomeController)
	.controller('SingleController', SingleController)
	.config(routerConfig)
	.service('FormService', FormService);