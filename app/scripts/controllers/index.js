App.IndexController = Ember.ArrayController.extend({
    data: [],
    filter: 'all',
    init: function() {
        console.log('Initializing index controller');
        this._super();

        this.updateData();

        this.set('filter', 'something');
    },
    updateData: function() {
        console.log('Updating the data');
        var model = this.get('model');

        this.forEach(function(item, index) {
            console.log('looping this');
            console.log(index);
            console.log(item);
        });

        model.forEach(function(item, index) {
            console.log('looping this');
            console.log(index);
            console.log(item);
        });
    }.observes('filter')
});