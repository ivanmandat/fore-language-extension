# IPPSpeedometerTrends.Add

IPPSpeedometerTrends.Add
-


# IPPSpeedometerTrends.Add


## Синтаксис


Add(Value: [IPPSpeedometerTrend](../IPPSpeedometerTrend/IPPSpeedometerTrend.htm)):
 Integer;


## Параметры


Value. Добавляемый тренд.


## Описание


Метод Add добавляет тренд в
 коллекцию.


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

	    Trends: IPPSpeedometerTrends;

	    Trend: IPPSpeedometerTrend;

	    Marker: IPPSpeedometerMarkerBase;

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

	    // Получим коллекцию трендов
	 шкалы

	    Trends := Scale.Trends;

	    // Выведем количество имеющихся трендов

	    Debug.WriteLine("Трендов в коллекции до удаления: " + Trends.Count.ToString);

	    // Удалим все имеющиеся тренды

	    Trends.RemoveAll;

	    // Создадим новый тренд

	    Trend := New PPSpeedometerTrend.Create;

	    // Установим значение тренда

	    Trend.Value := 15000;

	    // Установим текст,
	 отображаемый в текстовой метке тренда

	    Trend.Label.Text := "Точка невозврата";

	    // Установим копию центрального маркера спидометра в качестве маркера тренда

	    Marker := Speedometer.Center;

	    Trend.Marker := Marker;

	    // Добавим настроенный тренд в коллекцию

	    Trends.Add(Trend);

	    (Enalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера в окно консоли будет выведен размер
 коллекции трендов, после чего коллекция будет очищена. Будет создан новый
 тренд, настроены значение, текст, маркер тренда. Новый тренд будет добавлен
 в коллекцию трендов.


См. также:


[IPPSpeedometerTrends](IPPSpeedometerTrends.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
