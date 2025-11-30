# IPPSpeedometerArrows.Count

IPPSpeedometerArrows.Count
-


# IPPSpeedometerArrows.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает размер
 коллекции стрелок.


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

	    Arrows: IPPSpeedometerArrows;

	    Arrow: IPPSpeedometerArrowBase;

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

	    // Получим коллекцию стрелок шкалы
	 спидометра

	    Arrows := Scale.Arrows;

	    // Получим первую стрелку коллекции

	    Arrow := Arrows.Item(0);

	    Arrow.ID := "ArrowCopy";

	    // Добавим стрелку в коллекцию

	    Arrows.Add(Arrow);

	    // Выведем размер коллекции стрелок

	    Debug.WriteLine("Стрелок в коллекции: " + Arrows.Count.ToString);

	    // Очистим коллекцию

	    Arrows.RemoveAll;

	    (Enalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера в коллекцию стрелок шкалы будет добавлена
 копия первой стрелки из этой коллекции. В окно консоли будет выведен размер
 коллекции стрелок, после чего все стрелки будут удалены из коллекции.


См. также:


[IPPSpeedometerArrows](IPPSpeedometerArrows.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
