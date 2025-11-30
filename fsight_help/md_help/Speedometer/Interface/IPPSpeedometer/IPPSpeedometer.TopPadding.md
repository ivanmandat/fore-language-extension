# IPPSpeedometer.TopPadding

IPPSpeedometer.TopPadding
-


# IPPSpeedometer.TopPadding


## Синтаксис


TopPadding: Double;


## Описание


Свойство TopPadding определяет
 верхний отступ спидометра.


## Комментарии


По умолчанию значение свойства равно «0».


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

	    // Определим новые параметры отступа

	    Speedometer.TopPadding := 30;

	    Speedometer.BottomPadding := 30;

	    Speedometer.RightPadding := 30;

	    Speedometer.LeftPadding := 30;

	    (Enalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера будут определены новые параметры отступа
 спидометра.


См. также:


[IPPSpeedometer](IPPSpeedometer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
