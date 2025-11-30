# IMsChowTestSettings.GroupSeparator

IMsChowTestSettings.GroupSeparator
-


# IMsChowTestSettings.GroupSeparator


## Синтаксис


		GroupSeparator: Array;


## Описание


Свойство GroupSeparator определяет
 разделение наблюдений объясняемого ряда на группы.


## Комментарии


Свойство представляет собой массив, который может содержать лишь нули
 и единицы. Каждому элементу массива соответствует наблюдение, содержащееся
 в периоде идентификации объясняемого ряда. Если значение элемента массива
 - ноль, то наблюдение включается в первую группу, если единица - то во
 вторую группу.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором CONT_MODEL, содержащего модель линейной
 регрессии (оценка МНК) с идентификатором MODEL. Модель содержит более
 одного фактора.


Добавьте ссылки на системные сборки: Metabase, Ms, Stat.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    ContModelDescr: IMetabaseObjectDescriptor;

		    ModelObj: IMetabaseObject;

		    pModel: IMsModel;

		    pTransform: IMsFormulaTransform;

		    pFormula: IMsFormula;

		    pRegress: IMsLinearRegressionTransform;

		    pTestList: IMsDiagnosticTestList;

		    Test: IMsDiagnosticTest;

		    TestSettings: IMsChowTestSettings;

		    VarTrans: IMsFormulaTransformVariable;

		    Calc: IMsMethodCalculation;

		    Coord: IMsFormulaTransformCoord;

		    Res: IMsDiagnosticTestResults;

		    Stat: IChowTestLinRegress;

		    Coef: ICoefficients;

		    i: Integer;

		    arr: Array Of Integer;

		Begin

		    mb := MetabaseClass.Active;

		    ContModelDescr := mb.ItemById("CONT_MODEL");

		    ModelObj := mb.ItemByIdNamespace("MODEL", ContModelDescr.Key).Edit;

		    pModel := ModelObj As IMsModel;

		    pTransform := pModel.Transform;

		    pFormula := pTransform.FormulaItem(0);

		    pRegress := pFormula.Method As IMsLinearRegressionTransform;

		// получаем набор диагностических тестов

		    pTestList := pRegress.DiagnosticTests;

		// находим тесты Чоу

		    Test := pTestList.FindByType(MsDiagnosticTestType.Chow);

		    TestSettings := Test.Settings As IMsChowTestSettings;

		// задаем тип теста

		    TestSettings.TestType := ChowTestType.Forecast;

		// задаем разделение на группы

		    Arr := New Integer[19];

		    Arr[0] := 1; Arr[1] := 1; Arr[2] := 1; Arr[3] := 1; Arr[4] := 0;

		    Arr[5] := 0; Arr[6] := 0; Arr[7] := 0; Arr[8] := 0; Arr[9] := 0;

		    Arr[10] := 0; Arr[11] := 0; Arr[12] := 0; Arr[13] := 0; Arr[14] := 0;

		    Arr[15] := 0; Arr[16] := 0; Arr[17] := 0; Arr[18] := 0;

		    TestSettings.GroupSeparator := Arr;

		// задаем параметры тестирования

		    VarTrans := pTransform.Outputs.Item(0);

		    Coord := pTransform.CreateCoord(VarTrans);

		    Calc := pModel.CreateCalculation As IMsMethodCalculation;

		    Calc.Period.IdentificationStartDate := DateTime.ComposeDay(1990, 01, 01);

		    Calc.Period.IdentificationEndDate := DateTime.ComposeDay(2007, 12, 31);

		    Calc.Period.ForecastStartDate := DateTime.ComposeDay(2008, 01, 01);

		    Calc.Period.ForecastEndDate := DateTime.ComposeDay(2010, 12, 31);

		// выполняем тестирование

		    Res := Test.Execute(Calc As IMsMethodCalculation, Coord);

		// выводим результаты

		    If Res.FTestResult Then

		        Debug.WriteLine("Выборки однородные, гипотеза об отсутствии структурных изменений принимается");

		    Else

		        Debug.WriteLine("Выборки неоднородные, гипотеза об отсутствии структурных изменений не принимается");

		    End If;

		    Stat := Res.LR0;

		    Coef := Stat.ModelCoefficients.Coefficients;

		    Debug.WriteLine("-- Коэффициенты первой группы --");

		    For i := 0 To Coef.Estimate.Length - 1 Do

		        Debug.WriteLine("   Коэффициент " + i.ToString);

		        Debug.Write("     Значение: ");

		        Debug.WriteLine(Coef.Estimate[i]);

		        Debug.Write("     Вероятность: ");

		        Debug.WriteLine(Coef.Probability[i]);

		    End For;

		    Stat := Res.LR1;

		    Coef := Stat.ModelCoefficients.Coefficients;

		    Debug.WriteLine("-- Коэффициенты второй группы --");

		    For i := 0 To Coef.Estimate.Length - 1 Do

		        Debug.WriteLine("   Коэффициент " + i.ToString);

		        Debug.Write("     Значение: ");

		        Debug.WriteLine(Coef.Estimate[i]);

		        Debug.Write("     Вероятность: ");

		        Debug.WriteLine(Coef.Probability[i]);

		    End For;

		End Sub UserProc;


В результате выполнения примера будут заданы настройки параметров диагностического
 теста Чоу:


	- заданы уровень значимости и тип теста;


	- определены группы наблюдений.


Тест будет выполнен, результаты будут выведены в окно консоли.


См. также:


[IMsChowTestSettings](IMsChowTestSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
