# IAlgorithmCalculationResult.TotalElapsedMilliseconds

IAlgorithmCalculationResult.TotalElapsedMilliseconds
-


# IAlgorithmCalculationResult.TotalElapsedMilliseconds


## Синтаксис


TotalElapsedMilliseconds: Integer;


## Описание


Свойство TotalElapsedMilliseconds
 определяет общее время расчёта алгоритма.


## Пример


Для выполнения примера предполагается наличие в репозитории готового
 алгоритма расчёта с идентификатором ALGORITHM. В алгоритме расчёта должны
 содержаться настроенные объекты.


Добавьте ссылки на системные сборки: Algo, Metabase. Также добавьте
 ссылки на сборки, которые [необходимы](../../Intro/KeAlgo_Programming.htm)
 для работы с алгоритмами расчёта.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObjectDescriptor;

	    Algo: ICalcObject;

	    CalcAlgo: ICalcAlgorithm;

	    CalcResult: IAlgorithmCalculationResult;

	    Sec: Double;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим алгоритм расчёта

	    MObj := MB.ItemById("ALGORITHM");

	    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

	    CalcAlgo := Algo As ICalcAlgorithm;

	    // Выполним расчёт алгоритма

	    CalcResult := CalcAlgo.Calculate;

	    // Выведем в консоль результат расчёта

	    Sec := CalcResult.TotalElapsedMilliseconds/1000;

	    Debug.WriteLine("Общее время выполнения расчёта алгоритма: " + Sec.ToString + " сек.");

	    Sec := CalcResult.InitMilliseconds/1000;

	    Debug.WriteLine("Время инициализации: " + Sec.ToString + " сек.");

	    Sec := CalcResult.ElapsedMilliseconds/1000;

	    Debug.WriteLine("Время расчёта объектов: " + Sec.ToString + " сек.");

	End Sub UserProc;


В результате выполнения примера будет рассчитан алгоритм расчёта. В
 консоль будет выведен результат расчёта, например:


Общее время выполнения расчёта алгоритма: 0.078
 сек.


Время инициализации: 0.031 сек.


Время расчёта объектов: 0.031 сек.


См. также:


[IAlgorithmCalculationResult](IAlgorithmCalculationResult.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
