# IPPSpeedometerScales.Count

IPPSpeedometerScales.Count
-


# IPPSpeedometerScales.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает размер
 коллекции шкал.


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

	    // Выведем размер коллекции

	    Debug.Writeline("Количество элементов в коллекции: " + Scales.Count.ToString);

	    // Выведем наименование шкалы данных

	    Debug.Writeline("Наименование шкалы
	 данных: " + Scales.DataScale.Name);

	    // Получим шкалу по ее индексу

	    Scale := Scales.Item(0);

	    // Удалим все элементы из коллекции

	    Scales.RemoveAll;

	    // Вернём сохраненную шкалу

	    Scales.Add(Scale);

	    (Enalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены сообщения
 с количеством шкал в коллекции и с наименованием шкалы данных. Будут удалены
 все элементы из коллекции шкал, затем сохраненная заранее шкала будет
 возвращена в коллекцию.


См. также:


[IPPSpeedometerScales](IPPSpeedometerScales.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
