App.StockItemsIndexRoute = Ember.Route.extend({
    model: function () {
        return App.StockItem.find();
    }
});