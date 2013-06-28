App.IndexRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        console.log(model);
        controller.set('model', model);
    },
    model: function () {
        return App.StockItem.find();
    }
});