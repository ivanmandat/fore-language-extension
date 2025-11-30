# TabSheetLegendPanel.MetadataSection

TabSheetLegendPanel.MetadataSection
-


# TabSheetLegendPanel.MetadataSection


## Синтаксис


MetadataSection: String;


## Описание


Свойство MetadataSection устанавливает
 идентификатор у [легенды
 метрик](UiAnalyticalArea.chm::/TableView/Legend.htm) таблицы.


## Комментарии


Значение свойства можно установить с помощью метода setMetadataSection,
 а возвратить - с помощью метода getMetadataSection.


Свойство отображает вкладки [легенды метрик](UiAnalyticalArea.chm::/TableView/Legend.htm)
 на боковой панели при [настройке
 метрик для таблицы](UiAnalyticalArea.chm::/Work_with_dimensions/Table_metrics.htm), каждая из которых имеет значение:


	- Legend0. Цвет шрифта;


	- Legend1. Размер шрифта;


	- Legend2. Цвет фона;


	- Legend3. Значение.


Свойство уместно использовать при получении значений методом getMetadataSection,
 если в таблице настроено отображение
 данных по нескольким метрикам.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 ExpressBox с наименованием «expressBox»
 (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox_Example.htm)»). Перед функцией «Ready()»
 в примере по созданию компонента добавьте функции для работы с легендой
 таблицы:


function loadTabSheetMaster()
    {
        var scripts = [
            PP.ScriptPath + "PP.BaseMaster.js",
            PP.ScriptPath + "PP.TabSheetMaster.js",
            PP.ScriptPath + "PP.Ufe.js"
        ];
        PP.scriptManager.loadStyles([PP.ScriptPath + "PP.Ufe.css"]);
        PP.scriptManager.loadScripts(scripts, new PP.Delegate(onLoadTabSheetMaster, window));
    }
function onLoadTabSheetMaster()
    {
        propertyBar = expressBox.getPropertyBarView();
        tabSheetMaster = propertyBar.getTabSheetMaster();
        tabSheetMaster.refresh();
        legendPanels = tabSheetMaster.getLegendPanels();
        console.log(legendPanels);
    }
Добавьте событие [EaxOpened](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.EaxOpened.htm)
 для загрузки мастера таблицы в «eaxMdService» при создании сервиса для
 работы с экспресс-отчетами:


EaxOpened: new PP.Delegate(loadTabSheetMaster, window)
Выполните пример с компонентом ExpressBox.
 После открытия экспресс-отчета [настройте](UiAnalyticalArea.chm::/Work_with_dimensions/Table_metrics.htm)
 отображение данных в таблице по метрикам «Значение»,
 «Цвет фона».


Получим настройки легенды «Цвет фона»
 с помощью консоли:


tabSheetMaster.refresh();
legendPanels = tabSheetMaster.getLegendPanels();
var legend = legendPanels[0].getMetadataSection();
var source = expressBox.getSource();
PP.getProperty(source.getMetadata(), "grid.legends.md.Legends." + legend);
В результате выполнения примера в консоли будут выведены все настройки
 для легенды «Цвет фона».


См. также:


[TabSheetLegendPanel](TabSheetLegendPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
