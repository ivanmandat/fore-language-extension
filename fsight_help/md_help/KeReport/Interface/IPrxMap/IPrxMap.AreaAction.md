# IPrxMap.AreaAction

IPrxMap.AreaAction
-


# IPrxMap.AreaAction


## Синтаксис


AreaAction: String;


## Описание


Свойство AreaAction определяет
 макрос для обработки событий карты.


Примечание.
 Объект среды разработки, в котором содержится реализация макроса, должен
 быть [подключен к регламентному
 отчету](../IPrxAssemblies/IPrxAssemblies.Add.htm).


## Комментарии:


В зависимости от того, где находится реализация макроса, различается
 способ указания пути к макросу в данном свойстве:


	- Макрос реализован в модуле/форме репозитория: <идентификатор
	 модуля/формы>.<наименование макроса>;


	- Макрос реализован в одном из объектов сборки репозитория: <идентификатор
	 сборки>.<наименование макроса>;


В модулях/формах репозитория реализация пользовательских макросов должна
 производиться в глобальном пространстве имен (Global Scope).


## Пример


Для выполнения примера создайте модуль с идентификатором «Module»,
 содержащий процедуру «ModMapClick». Подключите системные сборки: Ui, Report.


	Sub ModMapClick(TerrId: Variant; Map: IPrxMap);

	Begin

	    WinApplication.InformationBox("Код территории = " + (TerrId As Integer).ToString);

	End Sub ModMapClick;


Создайте регламентный отчет с идентификатором «REGULAR_REPORT», на листе
 которого расположена карта с исходными данными. Добавьте созданный модуль
 в [модули
 отчета](uireport.chm::/desktop/reports/event/uireport_reports_event_module.htm).


Создайте модуль, который назначает [обработчик
 события](UiReport.chm::/desktop/Maps/UiMaps_Report_property_param.htm) карты. Подключите системные сборки: Metabase,
 Report, Tab.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    Report: IPrxReport;

	    TabSheet: ITabSheet;

	    Map: IPrxMap;

	Begin

	    Metabase := MetabaseClass.Active;

	    Report := Metabase.ItemById("REGULAR_REPORT").Edit As IPrxReport;

	    TabSheet := (Report.ActiveSheet As IPrxTable).TabSheet;

	    Map := TabSheet.Objects.Item(0).Extension As IPrxMap;

	    Map.AreaAction := "Module.ModMapClick";

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


В регламентном отчете добавится обработчик события для карты, при нажатии
 на любой из регионов будет выдаваться сообщение с кодом территории.


См. также:


[IPrxMap](IPrxMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
