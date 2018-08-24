import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Router.route('/', function () {
    this.render('main');
  });

  Router.route('/rose');
if (Meteor.isClient) {
  
  Meteor.startup(function () {

  

});

Template.main.events({
  'click #subscribe-btn': function(){
      $("#subscribe-section").show();
      $([document.documentElement, document.body]).animate({
        scrollTop: $("#subscribe-section").offset().top
    }, 500);
  }
});

      // let playing = false;
      // let audio = document.querySelector("#song");
      // this.el.addEventListener('click', () => {
      //   if (!playing) {
      //     audio.play();
      //   } else {
      //     audio.pause();
      //     audio.currentTime = 0;
      //   }
      //   playing = !playing;
      // });
  
}
