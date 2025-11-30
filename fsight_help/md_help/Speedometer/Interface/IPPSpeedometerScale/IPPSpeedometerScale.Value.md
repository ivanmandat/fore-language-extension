# IPPSpeedometerScale.Value

IPPSpeedometerScale.Value
-


# IPPSpeedometerScale.Value


## Синтаксис


Value(Index: Integer): Double;


## Параметры


Index. Индекс возвращаемого
 значения.


## Описание


Метод Value возвращает значение
 шкалы по его индексу.


## Комментарии


Для получения количества значений шкалы используйте свойство [IPPSpeedometerScale.ValuesCount](IPPSpeedometerScale.ValuesCount.htm).


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

	    i: Integer;

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

	    // Выведем значения шкалы данных

	    For i := 0 To Scale.ValuesCount - 1 Do

	        Debug.WriteLine(Scale.Value(i));

	    End For;

	    // Удалим все значения

	    Scale.ClearValues;

	    // Добавим новое значение

	    Scale.AddValue(1000);

	    // Произведем перерасчет шкалы спидометра

	    Scale.Recalc;

	    (Enalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены все значения
 шкалы данных. Старые значения будут удалены, будет добавлено новое значение
 и произведен перерасчет значений шкалы данных спидометра.


См. также:


[IPPSpeedometerScale](IPPSpeedometerScale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
