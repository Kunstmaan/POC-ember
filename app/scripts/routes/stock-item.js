App.StockItemRoute = Ember.Route.extend({
    setupController: function() {
    },
    model: function () {
        return App.StockItem.find();
    }
});