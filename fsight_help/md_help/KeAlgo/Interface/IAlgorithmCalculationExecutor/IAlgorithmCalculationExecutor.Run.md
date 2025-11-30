# IAlgorithmCalculationExecutor.Run

IAlgorithmCalculationExecutor.Run
-


# IAlgorithmCalculationExecutor.Run


## Синтаксис


Run: [IAlgorithmCalculationResult](../IAlgorithmCalculationResult/IAlgorithmCalculationResult.htm);


## Описание


Метод Run осуществляет расчёт
 алгоритма.


## Пример


Для выполнения примера предполагается наличие в репозитории алгоритма
 расчёта с идентификатором ALGORITHM. В алгоритме расчёта должны быть созданы
 блоки расчёта.


Добавьте ссылки на системные сборки: Algo, Metabase. Также добавьте
 ссылки на сборки, которые [необходимы](../../Intro/KeAlgo_Programming.htm)
 для работы с алгоритмами расчёта.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObjectDescriptor;

	    Algo: ICalcObject;

	    CalcAlgo: ICalcAlgorithm;

	    CalcAlgoExecuter: IAlgorithmCalculationExecutor;

	    HasCalcBlocks: Boolean;

	    CalcObject: ICalcObject;

	    i: Integer;

	    CalcResult: IAlgorithmCalculationResult;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим алгоритм расчёта

	    MObj := MB.ItemById("ALGORITHM");

	    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

	    CalcAlgo := Algo As ICalcAlgorithm;

	    // Создадим объект для
	 проверки наличия объектов расчёта по их типу

	    CalcAlgoExecuter := CalcObjectFactory.CreateCalculationExecutor(MObj);

	    HasCalcBlocks := CalcAlgoExecuter.HasObjectByType(CalcObjectType.CalcBlock);

	    Debug.WriteLine("Признак наличия в алгоритме блоков расчёта: " + HasCalcBlocks.ToString);

	    // Если в аглоритме есть блоки расчёта, то выводим список их имён в консоль и рассчитываем алгоритм

	    If HasCalcBlocks Then

	        Debug.WriteLine("Список имён блоков расчёта алгоритма:");

	        For i := 0 To CalcAlgo.Items.Count - 1 Do

	            CalcObject := CalcAlgo.Items(i);

	            If CalcObject.Type = CalcObjectType.CalcBlock Then

	                Debug.WriteLine("  " + i.ToString + ") " + (CalcObject As ICalcBlock).Name);

	            End If;

	        End For;

	        Debug.WriteLine("Прозведём расчёт алгоритма:");

	        CalcResult := CalcAlgoExecuter.Run;

	        Debug.WriteLine("  Расчёт завершён за " + CalcResult.TotalElapsedMilliseconds.ToString + " мс.");

	    End If;

	End Sub UserProc;


При выполнении будет проверено наличие блоков расчёта в алгоритме. Если
 блоки расчёта имеются, от их имена будут выведены в консоль среды разработки
 и после этого алгоритм будет рассчитан.


См. также:


[IAlgorithmCalculationExecutor](IAlgorithmCalculationExecutor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
