# IAlgorithmCalculationDebug.UserData

IAlgorithmCalculationDebug.UserData
-


# IAlgorithmCalculationDebug.UserData


## Синтаксис


UserData: [ITsUserData](KeTransform.chm::/Interface/ITsUserData/ITsUserData.htm);


## Описание


Свойство UserData возвращает
 пользовательские данные, связанные с алгоритмом расчёта.


## Пример


Для выполнения примера предполагается наличие в репозитории алгоритма
 расчёта с идентификатором ALGORITHM. В алгоритме расчёта должны быть созданы
 два блока расчёта и блок контроля. Также предполагается наличие пустого
 регламентного отчёта с идентификатором REPORT.


Добавьте ссылки на системные сборки: Algo, Dimensions, Matrix, Metabase,
 Report, Transform. Также добавьте ссылки на сборки, которые [необходимы](../../Intro/KeAlgo_Programming.htm)
 для работы с алгоритмами расчёта.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObjectDescriptor;

	    Algo: ICalcObject;

	    CalcList: ICalcObjectsList;

	    CalcAlgo: ICalcAlgorithm;

	    CalcDebug: IAlgorithmCalculationDebug;

	    Report, Report1: IPrxReport;

	    Result: IAlgorithmCalculationResult;

	    Load: IAlgorithmTimeResults;

	    TimeResult: IAlgorithmTimeResult;

	    Matrix, ValidationMatrix: IMatrixDataSource;

	    DimSS: IDimSelectionSet;

	    Matr, ValidationMatr: IMatrix;

	    Coord: IMatrixCoord;

	    pUserData: ITsUserData;

	    currentIteration, maxIterations, i: Integer;

	    Sec: Double;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим алгоритм расчёта

	    MObj := MB.ItemById("ALGORITHM");

	    // РО для промежуточных результатов

	    Report := MB.ItemByID("REPORT").Edit As IPrxReport;

	    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

	    CalcAlgo := Algo As ICalcAlgorithm;

	    // Формирование списка объектов алгоритма

	    CalcList := CalcAlgo.Items.Clone;

	    // Запуск алгоритма в режиме отладки

	    CalcDebug := CalcAlgo.Debug(CalcList);

	    // Перейти к следующему

	    CalcDebug.NextStep;

	    // Записываем результат в регламентный отчёт

	    Report1 := CalcDebug.PrxReport(CalcAlgo, CalcAlgo.Items.Item(0));

	    Report.CopyFrom(Report1);

	    (Report As IMetabaseObject).Save;

	    // Переход к указанному объекту алгоритма расчета

	    // В приведённом примере выбирается объект расчета из списка объектов на отладку (список при расчете уменьшается)

	    CalcDebug.StepToObject(CalcDebug.Objects.Item(0));

	    // Получим пользовательские данные, при помощи которых запустим циклический расчет

	    pUserData := CalcDebug.UserData;

	    // Зададим максимальное число итераций и текущую итерацию

	    pUserData.Data("MAX_ITERATION") := 3;

	    pUserData.Data("CURRENT_ITERATION") := 0;

	    // Рассчитаем выбранные объект расчета циклически N-раз

	    If pUserData.Contains("CURRENT_ITERATION") Then

	        currentIteration := pUserData.Data("CURRENT_ITERATION") As Integer;

	        maxIterations := pUserData.Data("MAX_ITERATION") As Integer;

	        While currentIteration < maxIterations Do

	            //Просмотр промежуточных данных

	            Matrix := CalcDebug.Matrix((CalcAlgo.Items.Item(1) As ICalcBlock).StubOut);

	            DimSS := Matrix.CreateDimSelectionSet;

	            Matr := Matrix.Execute(DimSS);

	            Coord := Matr.CreateCoord;

	            For i := 0 To Matr.DimensionCount - 1 Do

	                Coord.Item(i) := 0;

	            End For;

	            Debug.WriteLine(Matr.Item(Coord));

	            // Рассчитаем оъект расчета заново

	            CalcDebug.RecalcPrev;

	            currentIteration := currentIteration + 1;

	        End While;

	    End If;

	    // Переход к след объекту расчет

	    CalcDebug.NextStep;

	    // Просмотр промежуточных данных

	    ValidationMatrix := CalcDebug.ValidationMatrix((CalcAlgo.Items.Item(2) As ICalcValidationBlock).StubOut);

	    DimSS := ValidationMatrix.CreateDimSelectionSet;

	    For i := 0 To DimSS.Count - 1 Do

	        DimSS.Item(i).SelectAll;

	    End For;

	    ValidationMatr := ValidationMatrix.Execute(DimSS);

	    Coord := ValidationMatr.CreateCoord;

	    For i := 0 To ValidationMatr.DimensionCount - 1 Do

	        Coord.Item(i) := 0;

	    End For;

	    Debug.WriteLine(ValidationMatr.Item(Coord));

	    // Перейти к сохранению данных в БД.

	    CalcDebug.StepToSaveData;

	    // Проверка на завершение расчета и вывод информации по загрузке данных

	    If CalcDebug.IsFinished = True Then

	        Debug.WriteLine("Расчет завершен.");

	        // данные по результатам расчета

	        Result := CalcDebug.Result;

	        Load := Result.Load;

	        Debug.WriteLine("Результат загрузки источников данных:");

	        TimeResult := Load.Item(0);

	        Debug.WriteLine(" Наименование: " + TimeResult.Name);

	        Debug.WriteLine(" Идентификатор: " + TimeResult.Id);

	        Sec := TimeResult.ExecuteMilisecods / 1000;

	        Debug.WriteLine(" Время загрузки: " + Sec.ToString + " сек.");

	        Debug.WriteLine("");

	    End If;

	End Sub UserProc;


В результате выполнения примера будет произведена отладка расчёта алгоритма,
 в котором будут выполнены блоки расчёта и блок контроля. Результат первого
 блока расчёта будет сохранён в регламентный отчёт. Второй блок будет рассчитан
 циклически четыре раза. Результат расчёта будет получен в виде матрицы,
 первое значение из матрицы будет выведено в консоль среды разработки.
 Для блока контроля также будет получена матрица промежуточных результатов
 и одно значение будет выведено в консоль среды разработки.


См. также:


[IAlgorithmCalculationDebug](IAlgorithmCalculationDebug.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
