/*global Ember, DS */

var App = window.App = Ember.Application.create();

App.Router.map(function () {
    // put your routes here

    // http://discuss.emberjs.com/t/routers-nested-resource-implementation-is-extremely-limiting/927/6
    this.resource('stockItems', {'path': '/overview'}, function() {
        this.resource('stockItem', {'path': '/:stock-item_id'});
        this.route('new');
    });
});

App.Store = DS.Store.extend({
    revision: 1,
    adapter: 'DS.FixtureAdapter'
});

console.log(Ember.keys(Ember.TEMPLATES));