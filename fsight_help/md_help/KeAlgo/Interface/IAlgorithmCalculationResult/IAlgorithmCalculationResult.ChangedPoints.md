# IAlgorithmCalculationResult.ChangedPoints

IAlgorithmCalculationResult.ChangedPoints
-


# IAlgorithmCalculationResult.ChangedPoints


## Синтаксис


ChangedPoints: [IAlgorithmChangedPointResults](../IAlgorithmChangedPointResults/IAlgorithmChangedPointResults.htm);


## Описание


Свойство ChangedPoints возвращает
 информацию о [количестве
 ячеек в приёмнике данных](CalculationAlgorithm.chm::/Desktop/Work/Perform_calculations.htm#change_points_count), изменённых при выполнении
 расчёта [блоков
 расчёта](CalculationAlgorithm.chm::/Desktop/Calculation_block/Calculation_unit.htm).


## Комментарии


Свойство предназначено для удобства проверки результатов расчёта алгоритма.


## Пример


Для выполнения примера в репозитории необходимо наличие алгоритма расчёта
 с идентификатором ALGORITHM. В алгоритме расчёта должны содержаться настроенные
 объекты.


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

	    PointResults: IAlgorithmChangedPointResults;

	    PointResult: IAlgorithmChangedPointResult;

	    i: Integer;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим алгоритм расчёта

	    MObj := MB.ItemById("ALGORITHM");

	    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

	    CalcAlgo := Algo As ICalcAlgorithm;

	    // Выполним расчёт алгоритма

	    CalcResult := CalcAlgo.Calculate;

	    // Получим информацию о количестве изменённых ячеек
	 данных

	    PointResults := CalcResult.ChangedPoints;

	    // Выведем в консоль количество блоков
	 расчёта

	    Debug.WriteLine("Количество блоков
	 расчёта: " + PointResults.Count.ToString);

	    // Выведем в консоль информацию о каждом объекте алгоритма расчёта

	    For i := 0 To PointResults.Count - 1 Do

	        // Выберем объект алгоритма расчёта

	        PointResult := PointResults.Item(i);

	        // Выведем наименование блока
	 расчёта

	        Debug.WriteLine("Наименование блока расчёта: " + PointResult.Name);

	        // Выведем идентификатор блока
	 расчёта

	        Debug.WriteLine("Идентификатор блока расчёта: " + PointResult.Id);

	        // Выведем ключ блока
	 расчёта

	        Debug.WriteLine("Ключ блока расчёта: " + PointResult.Key.ToString);

	        // Выведем количество ячеек
	 данных, изменённых при выполнении блока расчёта

	        Debug.WriteLine("Количество изменённых ячеек данных: " + PointResult.ChangedPointsCount.ToString);

	    End For;

	End Sub UserProc;


В результате выполнения примера будут вычислены блоки расчёта. В консоль
 будет выведен результат расчёта с информацией о количестве изменённых
 ячейках в приёмнике данных, например:


Количество блоков расчёта: 1


Наименование блока расчёта: Блок расчёта


Идентификатор блока расчёта: CALC


Ключ блока расчёта: 299979


Количество изменённых ячеек данных: 23


См. также:


[IAlgorithmCalculationResult](IAlgorithmCalculationResult.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
