App.StockItem = DS.Model.extend({
    name: DS.attr('string'),
    market: DS.attr('string'),
    history: DS.hasMany('App.HistoryItem')
});

App.StockItem.FIXTURES = [
    {
        id: 1,
        name: 'BEL20',
        market: 'Brussels Euronext'
    },
    {
        id: 2,
        name: 'GOOG',
        market: 'Nasdaq'
    },
    {
        id: 3,
        name: 'AAPL',
        market: 'Nasdaq'
    },
    {
        id: 4,
        name: 'MSFT',
        market: 'Nasdaq'
    }
];