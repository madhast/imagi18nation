//
Meteor.startup(function () {
    Translations = new Mongo.Collection('translations');

    if (Meteor.isServer) {
        //Translations.publish('translations', function () {
        //    return Languages.find();
        //});
    }
});
