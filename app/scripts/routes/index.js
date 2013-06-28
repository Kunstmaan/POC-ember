App.IndexRoute = Ember.Route.extend({
    setupController: function() {
    },
    model: function () {
        return App.StockItem.find();
    }
});