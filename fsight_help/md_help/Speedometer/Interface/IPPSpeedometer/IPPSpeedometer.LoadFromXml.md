# IPPSpeedometer.LoadFromXml

IPPSpeedometer.LoadFromXml
-


# IPPSpeedometer.LoadFromXml


## Синтаксис


LoadFromXml(Xml: String);


## Параметры


Xml. Строка с
 Xml-разметкой.


## Описание


Метод LoadFromXml загружает
 Xml-разметку спидометра из строковой переменной.


## Комментарии


Для сохранения Xml-разметки спидометра в строковую переменную используйте
 метод [IPPSpeedometer.SaveToXml](IPPSpeedometer.SaveToXml.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории аналитической
 панели с идентификатором «ADHOC». Аналитическая панель должна содержать
 спидометр.


Добавьте ссылки на системные сборки: Adhoc, Express, Metabase и Speedometer.


	Sub UserProc;

	Var

	    Speedometer: IPPSpeedometer;

	    MB: IMetabase;

	    AdhocReport: IAdhocReport;

	    EaxSpeedometer: IEaxSpeedometer;

	    Enalyzer: IEaxAnalyzer;

	    DsObjs: IAdhocDataSourceObjects;

	    XML: String;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим аналитическую панель

	    AdhocReport := MB.ItemById("ADHOC").Edit As IAdhocReport;

	    // Получим источники данных аналитической панели

	    DsObjs := AdhocReport.DataSourceObjects;

	    // Получим спидометр

	    Enalyzer := DsObjs.Item(0).GetSourceObject As IEaxAnalyzer;

	    EaxSpeedometer := Enalyzer.Speedometer;

	    // Получим параметры спидометра

	    Speedometer := EaxSpeedometer.Speedometer;

	    // Сохраним параметры спидометра в Xml-разметке

	    XML := Speedometer.SaveToXml;

	    // Перезагрузим параметры спидометра

	    Speedometer.LoadFromXml(XML);

	    (Enalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера Xml-разметка спидометра будет сохранена
 в строковую переменную, затем настройки параметров спидометра будут перезагружены.


См. также:


[IPPSpeedometer](IPPSpeedometer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
