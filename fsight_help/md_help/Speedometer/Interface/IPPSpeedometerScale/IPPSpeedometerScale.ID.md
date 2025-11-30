# IPPSpeedometerScale.ID

IPPSpeedometerScale.ID
-


# IPPSpeedometerScale.ID


## Синтаксис


ID: String;


## Описание


Свойство ID определяет идентификатор
 шкалы.


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

	    // Получим шкалу данных

	    Scale := Scales.DataScale;

	    // Выведем идентификатор шкалы

	    Debug.WriteLine("Идентификатор шкалы: " + Scale.ID);

	    // Выведем минимальное и максимальное значения шкалы

	    Debug.WriteLine("Максимальное значение: " + Scale.MaxValue.ToString);

	    Debug.WriteLine("Минимальное значение: " + Scale.MinValue.ToString);

	    // Изменим наименование шкалы

	    Scale.Name := "Шкала данных";

	    (Enalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера в окно консоли будет выведен идентификатор
 шкалы данных спидометра, максимальное и минимальное значения шкалы. Наименование
 шкалы будет изменено.


См. также:


[IPPSpeedometerScale](IPPSpeedometerScale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
