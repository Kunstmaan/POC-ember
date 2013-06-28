App.ChartView = Ember.View.extend({
    templateName: 'views/chart',
    didInsertElement: function() {
        var elementId = this.get('elementId'),
            $element = $('#' + elementId),
            data = this.get('value');

        var options = {
            'xAxis': {
                'type': 'datetime'
            },
            'series': []
        };

        console.log(data);
        console.log(data.length);


        /**


        var data = scope.data;
        if (!$.isArray(data)) {
            data = [data];
        }

        var i, stockData;
        for (i = 0; i < data.length; i++) {
            stockData = data[i];

            options.series.push({
                'name': stockData.name,
                'data': stockData.history
            });
        }

        element.highcharts(options);

        var chart = element.highcharts();
        **/
    }
});