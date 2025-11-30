# IPPSpeedometerTimeDataAdapter.Data

IPPSpeedometerTimeDataAdapter.Data
-


# IPPSpeedometerTimeDataAdapter.Data


## Синтаксис


Data(Attribute: Variant; TimePointIndex: Integer):
 Variant;


## Параметры


Attribute. Показатель;


TimePointIndex. Временная точка.


## Описание


Свойство Data возвращает значение
 показателя в указанную временную точку.


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

	    Data: IPPSpeedometerTimeDataAdapter;

	    i: integer;

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

	    // Получим данные показателей

	    Data := Scale.DataSource;

	    For i := 0 To Data.TimePointsCount - 1 Do

	        Debug.WriteLine("Временная точка: " + Data.TimePointName(i) +

	            ", значение показателя: " + Data.Data("Валовой региональный продукт на душу населения, руб.", i));

	    End For;

	    (Enalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера в окно консоли для каждой временной
 точки будут выведены ее наименование и значение показателя.


См. также:


[IPPSpeedometerTimeDataAdapter](IPPSpeedometerTimeDataAdapter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
