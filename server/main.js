import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup

    SSL('/Users/sonu/GitHub/linda/linda/server.key','/Users/sonu/GitHub/linda/linda/server.crt', 443);

});
