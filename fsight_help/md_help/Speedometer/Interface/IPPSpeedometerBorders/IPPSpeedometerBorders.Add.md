# IPPSpeedometerBorders.Add

IPPSpeedometerBorders.Add
-


# IPPSpeedometerBorders.Add


## Синтаксис


Add(Value: [IPPSpeedometerBorder](../IPPSpeedometerBorder/IPPSpeedometerBorder.htm)):
 Integer;


## Параметры


Value. Добавляемая граница.


## Описание


Метод Add добавляет границу
 в коллекцию.


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

	    Borders: IPPSpeedometerBorders;

	    Border: IPPSpeedometerBorder;

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

	    Speedometer.EnableBorder := True;

	    // Получим коллекцию границ спидометра

	    Borders := Speedometer.Borders;

	    // Выведем размер коллекции границ

	    Debug.WriteLine("Границ до удаления: " + Borders.Count.ToString);

	    // Удалим все старые границы

	    Borders.RemoveAll;

	    // Добавим границу с заданной толщиной

	    Borders.Add(Borders.CreateBorder(10));

	    (Enalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера в окно консоли будет выведен размер
 коллекции границ. Коллекция будет очищена, после чего будет создана и
 добавлена в коллекцию новая граница.


См. также:


[IPPSpeedometerBorders](IPPSpeedometerBorders.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
