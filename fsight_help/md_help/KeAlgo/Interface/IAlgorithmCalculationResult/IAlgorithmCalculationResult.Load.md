# IAlgorithmCalculationResult.Load

IAlgorithmCalculationResult.Load
-


# IAlgorithmCalculationResult.Load


## Синтаксис


Load: [IAlgorithmTimeResults](../IAlgorithmTimeResults/IAlgorithmTimeResults.htm);


## Описание


Свойство Load возвращает результат
 загрузки источников данных.


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

	    Load, Save: IAlgorithmTimeResults;

	    Result: IAlgorithmTimeResult;

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

	    // Выведем в консоль результат загрузки источников данных

	    Load := CalcResult.Load;

	    Debug.WriteLine("Результат загрузки источников данных:");

	    For i:=0 To Load.Count-1 Do

	        Result := Load.Item(i);

	        Debug.WriteLine(" Наименование: " + Result.Name);

	        Debug.WriteLine(" Идентификатор: " + Result.Id);

	        Sec := Result.ExecuteMilisecods/1000;

	        Debug.WriteLine(" Время загрузки: " +  Sec.ToString + " сек.");

	        Debug.WriteLine("");

	    End For;

	    // Выведем в консоль результат сохранения данных в приёмниках

	    Save := CalcResult.Save;

	    Debug.WriteLine("Результат сохранения данных в приёмниках:");

	    For i:=0 To Save.Count-1 Do

	        Result := Save.Item(i);

	        Debug.WriteLine(" Наименование: " + Result.Name);

	        Debug.WriteLine(" Идентификатор: " + Result.Id);

	        Sec := Result.ExecuteMilisecods/1000;

	        Debug.WriteLine(" Время сохранения: " +  Sec.ToString + " сек.");

	        Debug.WriteLine("");

	    End For;

	End Sub UserProc;


В результате выполнения примера будет рассчитан алгоритм расчёта. В
 консоль будут выведены результаты загрузки источников данных и сохранения
 данных в приёмниках, например:


Результат загрузки источников данных:


 Наименование: Filter


 Идентификатор: FILTER


 Время загрузки: 0.007 сек.


 Наименование: Cube


 Идентификатор: CUBE


 Время загрузки: 0.005 сек.


Результат сохранения данных
 в приёмниках:


 Наименование: Cube


 Идентификатор: CUBE


 Время сохранения: 0.013 сек.


См. также:


[IAlgorithmCalculationResult](IAlgorithmCalculationResult.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
