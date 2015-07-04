Template.addLangModal.events({
  'submit form': function () {
    console.log('submit add lang');
    return false;
  },
  'click .add-lang-btn': function () {
    $('.add-lang-modal').modal();
    return false;
  }
});
