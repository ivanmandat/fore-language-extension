# ICalcObject.PrxReport

ICalcObject.PrxReport
-


# ICalcObject.PrxReport


## Синтаксис


PrxReport(CalcAlgorithm: [ICalcAlgorithm](../ICalcAlgorithm/ICalcAlgorithm.htm)):
 [IPrxReport](KeReport.chm::/Interface/IPrxReport/IPrxReport.htm);


## Параметры


CalcAlgorithm. Алгоритм расчёта,
 в котором содержится объект.


## Описание


Свойство PrxReport создаёт [регламентный отчёт](UIReport.chm::/UiReport_purpose.htm)
 с данными, полученными после расчёта объекта из приёмника данных.


## Пример


Для выполнения примера предполагается наличие в репозитории алгоритма
 расчёта с идентификатором ALGORITHM и регламентного отчёта с идентификатором
 REGULAR_REPORT. В алгоритме расчёта должны содержаться хотя бы три объекта
 для расчёта.


Добавьте ссылки на системные сборки: Algo, Metabase, Report. Также добавьте
 ссылки на сборки, которые [необходимы](../../Intro/KeAlgo_Programming.htm)
 для работы с алгоритмами расчёта.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObjectDescriptor;

	    Algo: ICalcObject;

	    CalcAlgo: ICalcAlgorithm;

	    CalcResult: IAlgorithmCalculationResult;

	    CalcObj: IAlgorithmTimeResults;

	    Obj: IAlgorithmTimeResult;

	    i: Integer;

	    Sec: Double;

	    Report, ReportCalc: IPrxReport;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим алгоритм расчёта

	    MObj := MB.ItemById("ALGORITHM");

	    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

	    CalcAlgo := Algo As ICalcAlgorithm;

	    // Зададим регламентный отчёт для построения результатов расчёта третьего объекта

	    Report := MB.ItemByID("REGULAR_REPORT").Edit As IPrxReport;

	    // Выполним расчёт алгоритма

	    CalcResult := CalcAlgo.Calculate;

	    // Получим результат расчёта объектов

	    CalcObj := CalcResult.Calc;

	    // Выведем в консоль результат расчёта третьего объекта

	    Obj := CalcObj.Item(2);

	    Debug.WriteLine("Наименование: " + Obj.Name);

	    Debug.WriteLine("Ключ: " + Obj.Key.ToString);

	    Sec := Obj.ExecuteMilisecods/1000;

	    Debug.WriteLine("Время расчёта
	 объекта: " + Sec.ToString + " сек.");

	    // Сохраним результат расчёта третьего объекта в регламентный отчёт

	    ReportCalc := CalcAlgo.Items.Item(2).PrxReport(CalcAlgo);

	    Report.CopyFrom(ReportCalc);

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера будут рассчитаны объекты алгоритма расчёта.
 Результат расчёта третьего объекта будет загружен в регламентный отчёт.
 В консоль будет выведена информация о результате расчёта третьего
 объекта, например:


Наименование: Блок расчёта


Ключ: 292615


Время расчёта объекта: 0.483 сек.


См. также:


[ICalcObject](ICalcObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
