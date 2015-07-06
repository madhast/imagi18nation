Template.addKeyModal.events({
    'click .add-key-btn': function () {
        $('.add-key-modal').modal();
        return false;
    },
    'submit form': function () {
        console.log('submit new key');
        return false;
    }
});
