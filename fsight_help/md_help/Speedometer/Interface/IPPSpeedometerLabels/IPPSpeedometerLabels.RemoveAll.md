# IPPSpeedometerLabels.RemoveAll

IPPSpeedometerLabels.RemoveAll
-


# IPPSpeedometerLabels.RemoveAll


## Синтаксис


RemoveAll;


## Описание


Метод RemoveAll удаляет все
 текстовые метки из коллекции.


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

	    Scales: IPPSpeedometerScales;

	    Scale: IPPSpeedometerScale;

	    Labels: IPPSpeedometerLabels;

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

	    // Получим коллекцию шкал спидометра

	    Scales := Speedometer.Scales;

	    // Получим шкалу данных

	    Scale := Scales.DataScale;

	    // Получим коллекцию текстовых меток шкалы данных

	    Labels := Scale.Labels;

	    // Очистим коллекцию

	    Labels.RemoveAll;

	    (Enalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера будут удалены все текстовые метки шкалы
 данных спидометра.


См. также:


[IPPSpeedometerLabels](IPPSpeedometerLabels.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
