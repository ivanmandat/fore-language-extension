# IAlgorithmTimeResult.ExecuteMilisecods

IAlgorithmTimeResult.ExecuteMilisecods
-


# IAlgorithmTimeResult.ExecuteMilisecods


## Синтаксис


ExecuteMilisecods: Integer;


## Описание


Свойство ExecuteMilisecods возвращает
 время выполнения расчёта объекта.


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

	    CalcObj: IAlgorithmTimeResults;

	    Obj: IAlgorithmTimeResult;

	    i: Integer;

	    Sec: Double;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим алгоритм расчёта

	    MObj := MB.ItemById("ALGORITHM");

	    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

	    CalcAlgo := Algo As ICalcAlgorithm;

	    // Выполним расчёт алгоритма

	    CalcResult := CalcAlgo.Calculate;

	    // Получим результат расчёта объектов

	    CalcObj := CalcResult.Calc;

	    For i := 0 To CalcObj.Count-1 Do

	        Obj := CalcObj.Item(i);

	        Debug.WriteLine("Наименование: " + Obj.Name);

	        Debug.WriteLine("Идентификатор: " + Obj.Id);

	        Debug.WriteLine("Ключ: " + Obj.Key.ToString);

	        Sec := Obj.ExecuteMilisecods/1000;

	        Debug.WriteLine("Время расчёта: " + Sec.ToString + " сек.");

	        Debug.WriteLine("");

	    End For;

	    Debug.WriteLine("Итоговое время расчёта всех объектов: " + CalcObj.TotalTime.ToString + " мс.");

	End Sub UserProc;


В результате выполнения примера будут рассчитаны объекты алгоритма расчёта.
 В консоль будет выведен результат расчёта, например:


Наименование: Блок расчёта


Идентификатор: CALC


Ключ: 230593


Время расчёта: 0.057 сек.


Наименование: Блок контроля


Идентификатор: CONTROL


Ключ: 230831


Время расчёта: 0.018 сек.


Итоговое время расчёта всех объектов: 75 мс.


См. также:


[IAlgorithmTimeResult](IAlgorithmTimeResult.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
