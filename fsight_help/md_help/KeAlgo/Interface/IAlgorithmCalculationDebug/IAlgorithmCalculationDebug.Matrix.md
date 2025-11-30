# IAlgorithmCalculationDebug.Matrix

IAlgorithmCalculationDebug.Matrix
-


# IAlgorithmCalculationDebug.Matrix


## Синтаксис


Matrix(Stub: [IVariableStub](KeCubes.chm::/Interface/IVariableStub/IVariableStub.htm)):
 [IMatrixDataSource](KeMatrix.chm::/Interface/IMatrixDataSource/IMatrixDataSource.htm);


## Параметры


Stub. Абстрактный источник
 данных.


## Описание


Свойство Matrix возвращает абстрактный
 многомерный источник данных для получения промежуточных результатов расчёта
 [блока
 расчёта](CalculationAlgorithm.chm::/Desktop/Calculation_block/Calculation_unit.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории алгоритма
 расчёта с идентификатором ALGORITHM. В алгоритме расчёта должны быть созданы
 два блока расчёта и блок контроля. Также предполагается наличие пустого
 регламентного отчёта с идентификатором REPORT.


Добавьте ссылки на системные сборки: Algo, Dimensions, Matrix, Metabase,
 Report. Также добавьте ссылки на сборки, которые [необходимы](../../Intro/KeAlgo_Programming.htm)
 для работы с алгоритмами расчёта.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObjectDescriptor;

	    Algo: ICalcObject;

	    CalcList: ICalcObjectsList;

	    CalcAlgo: ICalcAlgorithm;

	    CalcDebug: IAlgorithmCalculationDebug;

	    i: Integer;

	    Report, Report1: IPrxReport;

	    Result: IAlgorithmCalculationResult;

	    Load: IAlgorithmTimeResults;

	    TimeResult: IAlgorithmTimeResult;

	    Sec: Double;

	    Matrix, ValidationMatrix: IMatrixDataSource;

	    DimSS: IDimSelectionSet;

	    Matr, ValidationMatr: IMatrix;

	    Coord: IMatrixCoord;

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

	    // Результат расчёта первого блока записываем в регламентный отчет

	    Report1 := CalcDebug.PrxReport(CalcAlgo, CalcAlgo.Items.Item(0));

	    Report.CopyFrom(Report1);

	    (Report As IMetabaseObject).Save;

	    // Переход к указанному объекту алгоритма расчета

	    CalcDebug.StepToObject(CalcDebug.Objects.Item(0));

	    // Просмотр промежуточных данных

	    Matrix := CalcDebug.Matrix((CalcAlgo.Items.Item(1) As ICalcBlock).StubOut);

	    DimSS := Matrix.CreateDimSelectionSet;

	    Matr := Matrix.Execute(DimSS);

	    Coord := Matr.CreateCoord;

	    For i := 0 To Matr.DimensionCount - 1 Do

	        Coord.Item(i) := 0;

	    End For;

	    Debug.WriteLine(Matr.Item(Coord));

	    // Переход к след объекту расчёта

	    CalcDebug.NextStep;

	    //Просмотр промежуточных данных

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

	    // Переход к сохранению данных в БД.

	    CalcDebug.StepToSaveData;

	    // Проверка на завершение расчёта и вывод информации по загрузке данных

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
 блока расчёта будет сохранён в регламентный отчёт. Результат второго блока
 расчёта будет получен в виде матрицы, первое значение из матрицы будет
 выведено в консоль среды разработки. Для блока контроля также будет получена
 матрица промежуточных результатов и одно значение будет выведено в консоль
 среды разработки.


См. также:


[IAlgorithmCalculationDebug](IAlgorithmCalculationDebug.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
