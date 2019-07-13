var calendar = function () {
	
    this.date = $('#Date');
    this.dateTextValue = $('#DateTextValue');
    this.filterData = null;

    var calendar = $('#datepicker');
    var locale = 'es'

    var getOptions = function () {
        var options = {
            format: 'dd/mm/yyyy',
            language: locale
        };

        return options;
    };

    var GetDateText = function (data) {
        var fullTextDate = "";

        if (data instanceof Date) {
            var day = data.getDate();
            var month = data.toLocaleString(locale, { month: 'long' });
            var year = data.getFullYear();

            monthFirstLetter = month.substring(0, 1).toUpperCase();
            month = monthFirstLetter + month.substring(1);

            fullTextDate = day + " de " + month + " de " + year;
        }

        return fullTextDate;
    };

    var InitEvents = function () {
        var that = this;

        $(calendar).datepicker(getOptions()).on('changeDate', function () {
            var selectedDate = $(this).datepicker('getDate');
            $(that.dateTextValue).val(GetDateText(selectedDate));

            if (that.filterData != null && that.filterData) {
                var currentDate = $(that.date).val();
                gridView().filter(currentDate, 'Search');
            }
        });
    };

    var FormatModelDate = function (modelDate) {
        var fecha = modelDate.split(' ');
        return fecha[0]; // get 'dd/mm/yyyy hh:mm:ss' and returns 'dd/mm/yyyy'
    };

    var ParseToValidDate = function (modelDate) {
        var fecha = modelDate.split('/');

        var day = fecha[0];
        var month = fecha[1];
        var year = modelDate.includes(' ') ? fecha[2].split(' ')[0] : fecha[2];

        return new Date(month + "/" + day + "/" + year); // get 'dd/mm/yyyy' and returns 'mm/dd/yyyy'
    };

    var SetDate = function (modelDate) {
        var dateFormatted = FormatModelDate(modelDate);

        $(this.date).val(dateFormatted);
        $(this.dateTextValue).val(GetDateText(ParseToValidDate(dateFormatted)));
    };

    var setFilterData = function (val) {
        this.filterData = val;
    };

    return {
        init: function () {
            InitEvents();
        },
        formatModelDate: function (modelDate) {
            return FormatModelDate(modelDate);
        },
        setDate: function (modelDate) {
            SetDate(modelDate);
        },
        setFilterData: function (val) {
            setFilterData(val);
        },
    };
}