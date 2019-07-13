# Calendar
Calendar library class to customize your own calendar.

### What you need
* ```The latest verion of JQuery```
* ```The latest verion of Bootstrap ```
* ```The latest verion of JQuery Datepicker ```

Optional:
* ```You may include some Datatables editor for filtering by date, the calendar is using Metronic Datatables as example```

### Using the Calendar
The main functionality resides in the design of the calendar and the changeDate event. You can use this class to trigger events or implement new methods. Each click in a certain date will display an understandable text to the user, for example "14th March 2016" instead of "14/3/16", this last value (the date itself) will be stored in a hidden input and will be mapped against the controller. Each click includes a functionality to filter the data by the selected date if desired.

By default I was working on SQLServer and in my case I had the next format 'dd/mm/yyyy hh:mm:ss', which is not a valid date format for Javascript. Modify the format conversion at your earliest convenience. The Javascript accepted format: 'dd/mm/yyyy'

Params and class properties:
* ```this.date``` -> Hidden Date input field mapped against the controller entity
* ```this.dateTextValue ``` -> Date text field displayed to the user, use the method "GetDateText" to customize
* ```this.filterData``` -> This is the Datatables object, default is null, otherwise the table will filter by date
* ```var calendar``` -> The Datepicker itself
* ```var locale``` -> The locale applied to this calendar object, by default it is in Spanish

Methods:
* ```getOptions()``` -> Returns the default options for Datepicker initialization, like date format and locale
* ```GetDateText(data)``` -> Returns the displayed text for the user, for example "14th March 2016" instead of "14/3/16"
* ```InitEvents()``` -> Intializes the Datepicker
* ```FormatModelDate(modelDate)``` -> Get the Model Date('dd/mm/yyyy hh:mm:ss') and returns Spanish (custom) model date('dd/mm/yyyy')
* ```ParseToValidDate(modelDate)``` -> Get your custom model date('dd/mm/yyyy') and returns a Javascript valid date('mm/dd/yyyy')
* ```SetDate(modelDate)``` -> Get the Model Date and set in both input fields the date and the text date, this method uses "FormatModelDate", "ParseToValidDate" and "GetDateText" methods
* ```setFilterData(val)``` -> Set the Datatables object for filtering

### Example of use
-Always check if your calendar class exists before using!

var calendar = new calendar();

calendar.initEvents();

calendar.setDate(yourSqlDate);

calendar.setFilterData(yourDatatablesObject); // Optional
