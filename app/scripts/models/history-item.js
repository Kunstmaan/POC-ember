App.HistoryItem = DS.Model.extend({
    time: DS.attr('date'),
    uotation: DS.attr('number'),
    stockItem: DS.belongsTo('App.StockItem')
});

var i,
    maxStart = 200,
    maxStep = 5,
    fixtures = [];
for (i = 1; i <= 4; i++) {
    var j,
        time = (new Date()).getTime(),
        base = Math.floor((Math.random() * maxStart) + 1);

    for (j = 1; j < 61; j++) {
        fixtures.push({
            'id': ((i-1) * 61) + j,
            'time': time - (j * 60000),
            'quotation': base + (-maxStep + Math.floor((Math.random() * maxStep) + 1)),
            'stockItem': j
        });
    }
}

App.HistoryItem.FIXTURES = fixtures;