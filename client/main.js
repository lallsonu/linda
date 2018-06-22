import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Router.route('/', function () {
    this.render('main');
  });

  Router.route('/rose');
if (Meteor.isClient) {
  
}
