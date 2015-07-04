Template.addLangModal.events({
    'submit form': function (event) {
        console.log('submit add lang');

        var newLang = {
            title:  $(event.currentTarget).find('#lang').val(),
            key:    $(event.currentTarget).find('#key').val()
        };

        Meteor.call('addLanguage', newLang);
        return false;
    },
    'click .add-lang-btn': function () {
        $('.add-lang-modal').modal();
        return false;
    }
});
