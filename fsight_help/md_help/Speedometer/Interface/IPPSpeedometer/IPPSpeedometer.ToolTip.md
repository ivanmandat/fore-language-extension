# IPPSpeedometer.ToolTip

IPPSpeedometer.ToolTip
-


# IPPSpeedometer.ToolTip


## Синтаксис


ToolTip: String;


## Описание


Свойство ToolTip определяет
 текст всплывающей подсказки спидометра.


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

	    Speedometer.ToolTip := "Спидометр-9000!";

	    Debug.WriteLine("Подсказка: " + Speedometer.ToolTip);

	    (Enalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера будет установлен текст всплывающей подсказки
 спидометра.


См. также:


[IPPSpeedometer](IPPSpeedometer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
