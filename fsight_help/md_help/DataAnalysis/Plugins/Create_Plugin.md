# Создание плагина

Создание плагина
-


# Создание плагина


Для создания [плагина](Plugins.htm):


	- в веб-приложении и [конструкторе
	 бизнес-приложений](Constructor.chm::/Intro/Designer_business_applications.htm) создайте файлы плагина:


		- <наименование плагина>.js.
		 Скрипт плагина, написанный на языке программирования JavaScript;


		- <наименование плагина>.css.
		 Стили плагина.


При написании скрипта плагина используйте
 следующие шаблоны:


	Шаблон
	 скрипта для аналитической панели Шаблон скрипта для регламентного отчёта и формы
	 ввода


		Если
		 описание плагина добавляется в файл config.json [веб-приложения](Setup.chm::/UiWebSetup/03_Setup_Web/PP_config_Java.htm#modules_config)/[конструктора
		 бизнес-приложений](Setup.chm::/Extensions/Configuration_Designer_of_Business_Applications.htm#modules_config_json):


// Зададим блок регистрации
(function ()
{
  if (window.Kap)
  {
    Kap.regPluginBlock({
      Id: "MyLabel",  //идентификатор, по которому происходит связка плагин-блока с его реализацией
      Name: "MyLabelText",  //наименование типа блока
      View: "PP.Ui.Dashboard.MyLabel",  //класс визуализатора или имя класса визуализатора
      Icon: "./custom_plugins/img/MainIcon.png",  //путь к пиктограмме (16*16) для плагина, необязательный параметр
      SourceClass: PP.Mb.MetabaseObjectClass.KE_CLASS_EXPRESSREPORT, //тип или код класса источника данных
      Js: "./custom_plugins/MyLabel.js",  //для динамической загрузки скрипта с реализацией плагина, обязательный параметр
      Master: "PP.Ui.MyMaster",  //класс мастера или имя класса мастера
      Props: {  //дополнительные параметры плагина для установки значений по умолчанию, необязательный параметр
        pluginProps: {}
      }
    });
  }
})();

if (!PP.Ui.MyLabel)
{
  PP.Ui.MyLabel = {};
  PP.initNamespace(PP.Ui.MyLabel, "PP.Ui.MyLabel");
}

// Создадим прототип своего визуализатора для регистрируемого блока
PP.Ui.MyLabel = function(settings) {
  this._Source = null;
  this._bgFlag = false;
  this.PropertyChanged = new PP.Delegate();
  this.Refreshed = new PP.Delegate();
  PP.Ui.MyLabel.base.constructor.apply(this, arguments);
  this.setContent("MyLabelText");
};
PP.initClass(PP.Ui.MyLabel, PP.Ui.Label, "PP.Ui.MyLabel");

var Plugin = PP.Ui.MyLabel.prototype;

Plugin._propertyChangedFire = function () {
  this.PropertyChanged.fire(this);
};

Plugin._refreshedFire = function () {
  console.log("My Label Refreshed");
  this.Refreshed.fire(this);
};

// Если плагин должен поддерживать работу с источником данных, то
// установим источник визуализатору, который открыт в аналитической панели
Plugin.setSource = function(source) {
  this._Source = source;
  this.setContent("Source loaded: " + this._Source.getId());
  this._refreshedFire();
};

// Если плагин должен поддерживать хранимые свойства зададим методы setProps и getProps
Plugin.setProps = function(value) {  //метод установки хранимых свойств блока
  if (value) {
    var props = JSON.parse(value);
    this._bgFlag = props.bgFlag ? props.bgFlag : false;
  } else {
    this._bgFlag = false;
  }
  this.refresh();
};

Plugin.getProps = function() {  //метод, предоставляющий аналитической панели свойства для сохранения
  var props = {
    bgFlag: this._bgFlag
  };
  return JSON.stringify(props);
};

Plugin.refresh = function() {
  this._DomNode.style.backgroundColor = this._bgFlag ? "green" : "transparent";
  this._refreshedFire();
};

Plugin.refreshAll = function () {  //метод вызывается при обновлении блока с отчётом
};

Plugin.setWidth = function () {
  if (this._Instance)   this._redraw();
};

Plugin.setHeight = function () {
  if (this._Instance)   this._redraw();
};

// Если плагин должен иметь собственное контекстное меню зададим метод getContextMenu
Plugin.getContextMenu = function() {
  var _DataView = this;
  var menu = new PP.Ui.Menu({
    Items : [ {
      MenuItem : {
        Id : "pluginMenuItem",
        Content : "plugin menu item",
        Checked : _DataView._bgFlag,
        CheckedChanged : function(sender, args) {
          _DataView._bgFlag = sender.getChecked();
          _DataView.refresh();
        }
      }
    }]
  });
  return menu;
};

// Создадим прототип мастера для регистрируемого блока
PP.Ui.MyMaster = function(settings) {
  this._DataView;
  PP.Ui.MyMaster.base.constructor.apply(this, arguments);
  var myPanel = new PP.Ui.MasterPanel(
  {
    Id: "MyPluginMaster",
    ViewType: PP.Ui.NavigationItem,
    Content: "Plugin settings...",
    Title: "My plugin master"
  });
  myPanel.getHeaderControl().CheckedChanged.add(this._onPropsChanged, this);
  this.addMasterPanel(myPanel);
};
PP.initClass(PP.Ui.MyMaster, PP.Ui.Master, "PP.Ui.MyMaster");

var Master = PP.Ui.MyMaster.prototype;

// Если для плагина должны отображаться дополнительные вкладки боковой панели, содержащие его настройки,
// то зададим реализацию метода setDataView(view), где view - это экземпляр визуализатора плагина.
// Дополнительно зададим свойство Master в блоке регистрации
Master.setDataView = function(view) {
  this._DataView = view;
  for (var i = 0; i < this.getItems().length; i++) {
    var item = this.getItem(i);
    if (item.getId() === "MyPluginMaster") {
      item.setTitle("My plugin master. Data view type: " + view.getTypeName());
      if (view._bgFlag) {
        item.getHeaderControl().setChecked(view._bgFlag, false);
      }
    }
  }
};

Master._onPropsChanged = function(sender, args) {
  this._DataView._bgFlag = args.CheckedState;
  this._DataView._propertyChangedFire();
  this._DataView.refresh();
};

		Совет. Для
		 удобного использования пользовательских плагинов создайте отдельную
		 папку custom_plugins, в которой будут размещаться подключаемые
		 плагины.


		В шаблоне скрипта для аналитической панели измените следующие
		 параметры, если описание плагина добавляется в файл PP.xml [веб-приложения](Setup.chm::/UiWebSetup/03_Setup_Web/PP_config_Java.htm)
		 или DBA.config.json [конструктора
		 бизнес-приложений](Setup.chm::/Extensions/Configuration_Designer_of_Business_Applications.htm#dba_config_json):


			- Путь для динамической загрузки скрипта с реализацией плагина:


 Js: "../custom_plugins/MyLabel.js"  //для динамической загрузки скрипта с реализацией плагина, обязательный параметр


			- Путь до пиктограммы плагина:


Icon: "../custom_plugins/img/MainIcon.png",  //путь к пиктограмме (16*16) для плагина, необязательный параметр
		Ниже приведены примеры методов и функций, входящих в структуру
		 скрипта плагина, которые могут быть использованы для решения следующих
		 задач:


		[![](../opened.gif)![](../closed.gif)Построение
		 плагина, источником данных которого является отчёт](javascript:TextPopup(this))


			Для построения плагина, источником данных которого является
			 [отчёт](UIAdhoc.chm::/Blocks/Reports/Reports.htm)
			 (параметр SourceClass,
			 определяющий класс объектов источника данных плагина и содержащийся
			 в описании метода [Kap.regPluginBlock](dhtmlAdhoc.chm::/Kap.regPluginBlock.htm), в
			 скрипте), задайте функцию для метода refreshAll
			 в структуре скрипта плагина следующим образом:


Plugin.refreshAll = function () {
    if (this._Instance)
        this._Source.getPPService().refresh(this._Source, new PP.Delegate(() => {
            this._redraw();
        }));
};

			Также можно задать дополнительный код, который будет выполняться
			 до и после построения плагина:


Plugin.refreshAll = function () {
    if (this._Instance)
        this._Source.getPPService().refresh(this._Source, new PP.Delegate(() => {
            //код до построения плагина
            this._redraw();
            //код после построения плагина
        }));
};


		[![](../opened.gif)![](../closed.gif)Получение
		 данных визуализатора в плагине, источником данных которого является
		 отчёт](javascript:TextPopup(this))


			Для получения данных визуализатора в плагине, источником
			 данных которого является [отчёт](UIAdhoc.chm::/Blocks/Reports/Reports.htm)
			 (параметр SourceClass,
			 определяющий класс объектов источника данных плагина и содержащийся
			 в описании метода [Kap.regPluginBlock](dhtmlAdhoc.chm::/Kap.regPluginBlock.htm), в
			 скрипте), используйте методы, соответствующие визуализаторам
			 данных, в структуре скрипта плагина следующим образом:


var data = this._Source.<метод визуализатора>


			В таблице приведены методы, соответствующие визуализаторам
			 данных в отчётах:


					 Визуализатор данных
					 Метод экспресс-отчёта
					 Метод регламентного отчёта


					 Таблица
					 EaxAnalyzer.getTabSheetData
					 Используется класс [GridBox](dhtmlReport.chm::/Classes/RegularReport/GridBox/GridBox.htm)


					 Диаграмма
					 [EaxAnalyzer.getChartData](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.ChartData.htm)
					 [PrxMdService.getChart](dhtmlReport.chm::/Classes/RegularReport/PrxMdService/PrxMdService.getChart.htm)


					 Карта
					 [EaxAnalyzer.getMapData](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.MapData.htm)
					 PrxMdService.getMap


					 Пузырьковая диаграмма
					 [EaxAnalyzer.getBubbleChartData](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.BubbleChartData.htm)
					 -


					 Пузырьковое дерево
					 EaxAnalyzer.getBubbleTreeData
					 -


					 Плоское дерево
					 EaxAnalyzer.getTreeMapData
					 -


					 Индикатор
					 [EaxAnalyzer.getGaugeData](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.GaugeData.htm)
					 -


			Пример использования класса [GridBox](dhtmlReport.chm::/Classes/RegularReport/GridBox/GridBox.htm):


			var gridSet = {

			    Source: this._Source,

			    Service: this._Source.getPPService(),

			    IsRTL: this.getIsRTL(),

			    Enabled: true,

			    Width: this._Width,

			    Height: this._Height,

			    ImagePath: this._ImagePath

			};

			this._Instance = new PP.Prx.Ui.GridBox(gridSet);


			Пример получения данных визуализатора приведен в разделе
			 «[Получение отметки измерения в плагине,
			 источником данных которого является экспресс-отчёт](#select_dim)».


		[![](../opened.gif)![](../closed.gif)Получение
		 отметки измерения в плагине, источником данных которого является
		 экспресс-отчёт](javascript:TextPopup(this))


			Для получения измерений экспресс-отчёта используйте метод
			 [EaxAnalyzer.getDims](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.getDims.htm)
			 в функции для метода _redraw
			 в структуре скрипта плагина следующим образом:


var dims = this._Source.getDims()

			Для получения информации об отмеченных элементах измерения
			 используйте метод [DimSrv.getAllSelectedEls](dhtmlDim.chm::/Classes/Metabase/DimSrv/DimSrv.getAllSelectedEls.htm).


			Пример вывода в консоль информации об отмеченных элементах
			 измерения и их расположения в таблице при каждом построении
			 плагина:


Plugin._redraw = function() {
    var series = PP.getProperty(this._Source.getChartData(), "meta.hiChart.series") || [];
    var dims = this._Source.getDims();
    dims.forEach((dim) => {
        dimSource = dim.getPPService();
        dimSource.getAllSelectedEls(dim,
            new PP.Delegate((sender,args) => {
                console.log(dim.getId());
                console.log(dim.getPosition());
                console.log(PP.getProperty(args, 'Args.Els'));
            })
        );
    });
    if (this._Instance)
        this._Instance.clear();
    this._Instance = this._draw(this.getId(), series, this._UseSerieColor);
};


		[![](../opened.gif)![](../closed.gif)Настройка
		 синхронизации измерений источника данных плагина с источниками
		 данных других объектов](javascript:TextPopup(this))


			Синхронизация измерений источника данных плагина с источниками
			 данных других объектов аналитической панели может осуществляться
			 двумя способами: по отметке, по выделенным данным.


			Для получения подробной информации обратитесь к разделу
			 «[Настройка
			 синхронизации измерений источников данных](UIAdhoc.chm::/Blocks/Dimension_links.htm)».


			Примечание.
			 Из плагина недоступно получении информации о настроенных [связях
			 измерений](UiAdhoc.chm::/Blocks/Dimension_links.htm#dashboard), которые хранятся в отчёте.


			Рассмотрим первый случай - синхронизация отметки:


				- Измените отметку с помощью методов класса [DimSrv](dhtmlDim.chm::/Classes/Metabase/DimSrv/DimSrv.htm)
				 по моникёру измерения отчёта.


				- Отправьте изменения отметки в одном из измерений
				 отчёта на сервер с помощью метода [EaxMdService.doFetchData](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.doFetchData.htm).


				- Отправьте изменения плагина аналитической панели
				 для обновления связанных блоков:


this.MetadataChanged.fire(this, {});

			Пример изменения отметки измерения и передача изменений
			 отчёта на сервер для синхронизации:


Plugin.refresh = function() {
    ...
    // Подпишемся на событие DimCombo.SelectionChanged, наступающее после изменения отметки
    if (args && args.getPropertyName() === "SelectionChanged") {
        var eaxService = this._Source.getPPService();
        var dimKey = 68045;
        var dimSource = this._Source.getDim(dimKey);
        var dimService = eaxService.getDimService();
        dimService.SelectionChanged.addOne(() => {
            // Отправим изменение отметки в отчёте на сервер и перестроим плагин
            eaxService.doFetchData(
                this._Source,
                new PP.Delegate(() => {
                    console.log("MetadataChanged");
                    this.MetadataChanged.fire(this, {});
                    this._redraw();
                }, this),
                dimKey
            )
        }, this);
        // Отправим новую отметку измерения на сервер
        var args = {
            keys: [10000000, 10000017, 10000018, 10000019, 10000020],
            selCommand: PP.Mb.SelCommands.Select,
            dmElRelative: PP.Mb.DmElRelative.Current
        };
        dimService.selectByKeys(dimSource, args);
    }
    ...
};

			Пример изменения отметки с помощью боковой панели, на которой
			 будет добавлена новая вкладка «Plugin
			 master» с раскрывающимся списком, содержащим элементы
			 измерения, при выделении плагина на рабочей области аналитической
			 панели:


PP.Ui.MyMaster = function(settings) {
    this._DataView = null;
    PP.Ui.MyMaster.base.constructor.apply(this, arguments);
    var myPanel = new PP.Ui.MasterPanel({
        Id: "MyPluginMaster",
        Title: "My plugin master",
        IsHeaderControlVisible: false,
        ViewType: PP.Ui.NavigationItem,
        Content: new PP.Ui.GridPanel({
            Width: 300,
            Style: "margin-left: 30px",
            Items: [
                ...
                // Добавим в разметку мастера компонент, реализующий раскрывающийся список
                this._DimCombo = new PP.Mb.Ui.DimCombo({
                    Top: 2,
                    Left: 1,
                    Width: 240
                })
                ...
            ]
        })
    });
    myPanel.getHeaderControl().CheckedChanged.add(this._onPropsChanged, this);
    this.addMasterPanel(myPanel);
};
...
PP.Ui.MyMaster.prototype.setDataView = function(view) {
    this._DataView = view;
    for (var i = 0; i < this.getItems().length; i++) {
        var item = this.getItem(i);
        if (item.getId() === "MyPluginMaster") {
            item.setTitle("My plugin master. Data view type: " + view.getTypeName());
            if (view._bgFlag) {
                item.getHeaderControl().setChecked(view._bgFlag, false);
            }
        }
    }
    // Зададим компоненту источник данных - измерение отчёта
    var source = this._DataView._Source;
    var dimKey = 1190439;
    var dimSource = source.getDim(dimKey);
    this._DimCombo.setSource(dimSource);
    this._DimCombo.getTreeView().setSelectionMode(PP.Ui.TreeListSelectionMode.SingleSelect);
    // Подпишемся на событие смены отметки
    this._DimCombo.SelectionChanged.addOne(
        new PP.Delegate((sender, data) => {
            this._DataView.refresh(new PP.Mb.Ui.PropertyChangedEventArgs({
                PropertyName: "ComboSelectionChanged",
                Metadata: dimKey
            }));
        }, this),
    this);
};
...
Plugin.refresh = function() {
    ...
    // Отправим изменение отметки на сервер и перестроим компонент
    if (args && args.getPropertyName() === "ComboSelectionChanged") {
        var dimKey = args.getMetadata();
        this._Source.getPPService().doFetchData(
            this._Source,
            new PP.Delegate(() => {
                console.log("MetadataChanged");
                this.MetadataChanged.fire(this, {});
                this._redraw();
            }, this),
            dimKey
        );
    }
    ...
};

			Рассмотрим второй случай - синхронизация выделенных данных:


				- Выделите данные с помощью методов визуализатора,
				 который является источником данных: [Object.getPPService](dhtmlMetabase.chm::/Classes/Metabase/Object/Object.PPService.htm),
				 [EaxMdService.setChartSelection](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.setChartSelection.htm).


			Методы используются в структуре
			 скрипта плагина следующим образом:


this._Source.getPPService().setChartSelection()


				- Настройте синхронизацию для блока с плагином с помощью
				 события MetadataChanged
				 и отправьте изменения аналитической панели на сервер для
				 обновления связанных блоков по индексам синхронизации
				 в качестве параметра callback
				 метода [EaxMdService.setChartSelection](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.setChartSelection.htm):


new PP.Delegate(() => {
    this.MetadataChanged.fire(this, {});
}, this)

			Пример выделения данных и передача изменений аналитической
			 панели на сервер для синхронизации при нажатии на ряд диаграммы:


Plugin._draw = function (elementId, data, useSerieColor) {
    ...
    function serieClick(data, index, series) {
        console.log("Click");
        var selectSeries = {
            index: 0,
            points: { Item: index }
        };
        that.refresh(
            new PP.Mb.Ui.PropertyChangedEventArgs({
                PropertyName: "ChartSerieSelection",
                Metadata: selectSeries
            })
        );
    }
    ...
};
...
Plugin.refresh = function (args) {
    ...
    if (args && args.getPropertyName() === "ChartSerieSelection") {
        var selectSeries = args.getMetadata();
        this._Source.getPPService().setChartSelection(
            this._Source,
            selectSeries,
            new PP.Delegate(() => {
                console.log("MetadataChanged");
                this.MetadataChanged.fire(this, {});
            }, this)
        );
    }
    ...
};


		[![](../opened.gif)![](../closed.gif)Выполнение
		 Fore-функции в плагине и получение результата выполнения в консоли
		 браузера](javascript:TextPopup(this))


			Для выполнения Fore-функции в плагине и получения результата
			 выполнения в консоли браузера используйте метод [Metabase](dhtmlMetabase.chm::/Classes/Metabase/Metabase/Metabase.htm).runForeExec
			 в функции для метода refresh
			 в структуре скрипта плагина следующим образом:


Plugin.refresh = function (args) {
    ...
    var mb = this._Source.getMetabase();
    mb.runForeExec(
        "ID_OBJECT", // укажите идентификатор модуля Fore, в котором задана функция
        "NAME_FUNCTION", // укажите наименование функции
        // Выведем результат выполнения функции в консоль
        new PP.Delegate((sender, args) => {
            var res = PP.getProperty(args, "Response.ForeExecResult.result");
            console.log(res);
        }),
        // Выведем информационное сообщение, если функция не выполнилась
        new PP.Delegate(() => {
            console.log("Не удалось выполнить функцию");
        })
    );
    ...
};

			При выполнении функции на сервер веб-приложения отправляется
			 запрос на выполнение операции [ForeExec](PPSOMService.chm::/Operations/Repository/ForeExec.htm),
			 после чего выводится ответ в консоль браузера.


			Для получения подробной информации о функциях на языке Fore
			 обратитесь к разделу «[Процедуры
			 и функции](Fore.chm::/06_SyntRules/Fore_Synt_ProcAndFunc.htm)».


		[![](../opened.gif)![](../closed.gif)Создание
		 прототипа мастера для регистрируемого блока, источником которого
		 является аналитическая панель](javascript:TextPopup(this))


			Примечание.
			 Доступно для шаблона скрипта плагина, который добавляется
			 в файл config.json [веб-приложения](Setup.chm::/UiWebSetup/03_Setup_Web/PP_config_Java.htm#modules_config)/[конструктора
			 бизнес-приложений](Setup.chm::/Extensions/Configuration_Designer_of_Business_Applications.htm#modules_config_json).


			При создании прототипа мастера для регистрируемого блока,
			 источником которого является аналитическая панель, доступны
			 следующие поля параметра settings:


				- Control.
				 Родительский компонент боковой панели настроек;


				- KapBox.
				 Компонент аналитической панели, в которой находится плагин.


			Например:


// Создадим прототип мастера для регистрируемого блока
PP.Ui.MyMaster = function(settings) {
  this._DataView;
  PP.Ui.MyMaster.base.constructor.apply(this, arguments);
  var myPanel = new PP.Ui.MasterPanel(
  {
    Id: "MyPluginMaster",
    ViewType: PP.Ui.NavigationItem,
    Content: "Plugin settings...",
    Title: "My plugin master"
  });
  myPanel.getHeaderControl().CheckedChanged.add(this._onPropsChanged, this);
  this.addMasterPanel(myPanel);
  this._NavigationBar = settings.Control;
  this._KapBox = settings.KapBox;
};
PP.initClass(PP.Ui.MyMaster, PP.Ui.Master, "PP.Ui.MyMaster");
			При использовании плагина, содержащего данный блок, в аналитической
			 панели будет отображаться блок «My
			 plugin master» на боковой панели после выбора отчёта.


/* <outputFile name="PP.MyLabel.js" /> */
(function ()
{

})();

if (!PP.Ui.Prx)
{
    PP.Ui.Prx = {};
    PP.initNamespace(PP.Ui.Prx, "PP.Ui.Prx");
}
PP.Ui.Prx.MyLabel = function (settings)
{
    this._Instance = null;
    this._Source = settings.Source;
    PP.Ui.Prx.MyLabel.base.constructor.apply(this, arguments);
    this._defineEvents(["PropertyChanged", "MetadataChanged"]);
    if (!this.getDomNode())
        this._initFromHTML("<div id='" + this.getId() + "' style='position: absolute; top: 0; right: 0; bottom: 0; left: 0;'></div>");
};
PP.initClass(PP.Ui.Prx.MyLabel, PP.Ui.Control, "PP.Ui.Prx.MyLabel");

var Plugin = PP.Ui.Prx.MyLabel.prototype;

Plugin.refresh = function (args) { //метод вызывается из отчёта при обновлении листа плагина
    this._Instance = new Object();
};
Plugin.setProps = function (props) { //метод вызывается для установки пользовательских настроек

};
Plugin.getProps = function () { //метод вызывается для сохранения пользовательских настроек

};
Plugin.setSource = function (source) { //метод устанавливает источник данных - модель регламентного отчёта
    this._Source = source;
};
Plugin.setWidth = function (w){

};
Plugin.setHeight = function (h){

};
Plugin = null;


Важно.
 Для преднастроенных плагинов зарезервированы идентификаторы: PP.Ui.Dashboard.Sankey
 - «Sankey-диаграмма»; PP.Ui.Dashboard.Gantt
 - «Диаграмма Ганта»; PP.Ui.Dashboard.Indicator
 - «Индикатор». При создании пользовательского
 плагина используйте идентификатор, отличный от зарезервированных.


	- в настольном приложении создайте объекты, написанные на языке
	 программирования [Fore](Fore.chm::/Fore_Title.htm), в среде
	 разработки:


		- Создайте [форму-визуализатор](PluginViewForm.htm).
		 Данная форма содержит компоненты, образующие внешний вид плагина,
		 и код, описывающий логику работы компонентов в плагине. Форма-визуализатор
		 должна наследоваться от класса [AdhocUserViewForm](KeAdhoc.chm::/Class/AdhocUserViewForm/AdhocUserViewForm.htm). Особенности кода формы-визуализатора:


			- если плагин должен поддерживать хранимые свойства, то
			 создайте реализацию методов [AdhocUserViewForm.SaveSettings](KeAdhoc.chm::/Interface/IAdhocUserView/IAdhocUserView.SaveSettings.htm)
			 и [AdhocUserViewForm.LoadSettings](KeAdhoc.chm::/Interface/IAdhocUserView/IAdhocUserView.LoadSettings.htm);


			- если плагин должен поддерживать определенные источники
			 данных, то создайте реализацию свойства [AdhocUserViewForm.SupportedSource](KeAdhoc.chm::/Interface/IAdhocUserView/IAdhocUserView.SupportedSource.htm)
			 с указанием в нем требуемых источников данных с помощью перечисления
			 [MetabaseObjectClass](KeSom.chm::/Enums/MetabaseObjectClass.htm).


		- Создайте [форму-мастер](PluginMasterForm.htm).
		 Данная форма содержит компоненты, образующие вкладки боковой панели
		 для настройки плагина, и код, описывающий логику применения настроек
		 к плагину. Форма-мастер должна наследоваться от класса [AdhocUserMasterForm](KeAdHoc.chm::/Class/AdhocUserMasterForm/AdhocUserMasterForm.htm).


После выполнения действий плагин будет создан
 в навигаторе объектов в качестве формы-визуализатора и формы-модуля.


Примечание.
 Плагин, написанный на языке программирования Fore, используется только
 для [подключения к аналитической
 панели](Connecting_Plugins_Dashboards.htm) в настольном приложении.


После выполнения действий будет создан плагин, доступный для подключения
 к аналитической панели, регламентному отчёту и форме ввода.


См. также:


[Плагины](Plugins.htm)
 | [Подключение плагина к аналитической
 панели](Connecting_Plugins_Dashboards.htm) | [Подключение плагина
 к регламентному отчёту](Connecting_Plugins_Report.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
