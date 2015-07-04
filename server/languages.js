//
Meteor.startup(function () {
    Languages = new Mongo.Collection('languages');

    if (Meteor.isServer) {
        //Meteor.publish('languages', function () {
        //    return Languages.find();
        //});
    }
});

Meteor.methods({
    addLanguage: function (newLang) {
        console.log(newLang);
    },
    removeLanguage: function (key) {
        console.log(key);
    }
});
