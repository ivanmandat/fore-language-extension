# IMsLinearRegressionTransform.DiagnosticTests

IMsLinearRegressionTransform.DiagnosticTests
-


# IMsLinearRegressionTransform.DiagnosticTests


## Синтаксис


DiagnosticTests: [IMsDiagnosticTestList](../IMsDiagnosticTestList/IMsDiagnosticTestList.htm);


## Описание


Свойство DiagnosticTests возвращает набор диагностических тестов модели.


## Комментарии


Набор тестов нельзя изменить, т.е. удалить существующий или добавить собственный тест.


## Пример


Для выполнения примера в репозитории должен присутствовать контейнер моделирования с идентификатором «MODEL_SPACE», содержащий модель линейной регрессии (оценка МНК) с идентификатором «MODEL». Модель содержит более одного фактора. Также в контейнере должна содержаться переменная с идентификатором «VAR». Данная переменная не должна содержаться в модели «MODEL».


Добавьте ссылки на системные сборки «Metabase», «Ms», «Stat», «Cubes».


			Sub DiagnosticTests;

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

    OmittedVarTest: IMsOmittedVariablesTestSettings;

    Info: IMsFormulaTermInfo;

    VarTrans: IMsFormulaTransformVariable;

    Calc: IMsMethodCalculation;

    Coord: IMsFormulaTransformCoord;

    Expl: IMsCompositeFormulaTerm;

    Res: IMsDiagnosticTestResults;

    Varr: IVariableStub;

    pVar: IMsFormulaTransformVariable;

    ar: Array[1] Of integer;

    Stat: ISpecificationTestStatistic;

    i: Integer;

    Coef: ICoefficients;

    CoefNames: Array Of String;

Begin

    mb := MetabaseClass.Active;

    ContModelDescr := mb.ItemById("MODEL_SPACE");

    ModelObj := mb.ItemByIdNamespace("MODEL", ContModelDescr.Key).Edit;

    pModel := ModelObj As IMsModel;

    pTransform := pModel.Transform;

    pFormula := pTransform.FormulaItem(0);

    pRegress := pFormula.Method As IMsLinearRegressionTransform;

// получаем набор диагностических тестов
    pTestList := pRegress.DiagnosticTests;

// находим критерий пропущенных переменных
    Test := pTestList.FindByType(MsDiagnosticTestType.OmittedVariables);

    OmittedVarTest := Test.Settings As IMsOmittedVariablesTestSettings;

// обновляем параметры
    OmittedVarTest.RefreshIncluded;

// оставляем в объясняемых рядах первый фактор модели
    ar[0] := 0;

    OmittedVarTest.IncludedExplanatories := ar;

// получаем тестируемую переменную
    Varr := MB.ItemByIdNamespace("VAR", ContModelDescr.Key).Bind As IVariableStub;

    Info := pTransform.CreateTermInfo;

    pVar := pTransform.Inputs.Add(Varr);

    VarTrans := pTransform.Outputs.Item(0);

    Info.Slice := pVar.SlicesTree(VarTrans).CreateSlice(1);

// включаем полученную переменную в тест
    Expl := OmittedVarTest.OmittedExplanatories.Add;

    Expl.Expression.AsString := Info.TermInnerText;

// задаем параметры тестирования
    Coord := pTransform.CreateCoord(VarTrans);

    Calc := pModel.CreateCalculation As IMsMethodCalculation;

    Calc.Period.IdentificationStartDate := DateTime.ComposeDay(1990, 01, 01);

    Calc.Period.IdentificationEndDate := DateTime.ComposeDay(2007, 12, 31);

    Calc.Period.ForecastStartDate := DateTime.ComposeDay(2008, 01, 01);

    Calc.Period.ForecastEndDate := DateTime.ComposeDay(2010, 12, 31);

// выполняем тестирование
    Res := Test.Execute(Calc As IMsMethodCalculation, Coord);

// выводим результаты
    Stat := Res.ChiTest;

    Debug.WriteLine("-- Статистика Хи-квадрат --");

    Debug.Write("     Значение: ");

    Debug.WriteLine(Stat.Statistic);

    Debug.Write("     Вероятность: ");

    Debug.WriteLine(Stat.Probability);

    If Res.FTestResult Then

        Debug.WriteLine("     Гипотеза о незначимости добавляемых рядов принимается");

    Else

        Debug.WriteLine("     Гипотеза о незначимости добавляемых рядов отвергается");

    End If;

    Stat := Res.FTest;

    Debug.WriteLine("-- Статистика Фишера --");

    Debug.Write("     Значение: ");

    Debug.WriteLine(Stat.Statistic);

    Debug.Write("     Вероятность: ");

    Debug.WriteLine(Stat.Probability);

    If Res.ChiTestResult Then

        Debug.WriteLine("     Гипотеза о незначимости добавляемых рядов принимается");

    Else

        Debug.WriteLine("     Гипотеза о незначимости добавляемых рядов отвергается");

    End If;

    Debug.WriteLine("-- Стандартная ошибка --");

    Debug.WriteLine(Res.SummaryStatistics.SE);

    Debug.WriteLine("-- Значения коэффициентов модели --");

    Coef := Res.ModelCoefficients.Coefficients;

    For i := 0 To Coef.Estimate.Length - 1 Do

        Debug.WriteLine("   Коэффициент " + i.ToString);

        Debug.Write("     Значение: ");

        Debug.WriteLine(Coef.Estimate[i]);

        Debug.Write("     Вероятность: ");

        Debug.WriteLine(Coef.Probability[i]);

    End For;

    CoefNames := Res.CoefficientsARNames;

    If CoefNames.Length <> 0 Then

        Debug.WriteLine("-- Коэффициенты авторегрессии --");

        Coef := Res.CoefficientsAR;

        For i := 0 To CoefNames.Length - 1 Do

            Debug.WriteLine("   Коэффициент " + CoefNames[i]);

            Debug.Write("     Значение: ");

            Debug.WriteLine(Coef.Estimate[i]);

            Debug.Write("     Вероятность: ");

            Debug.WriteLine(Coef.Probability[i]);

        End For;

    End If;

    CoefNames := Res.CoefficientsMANames;

    If CoefNames.Length <> 0 Then

    Debug.WriteLine("-- Коэффициенты скользящего среднего --");

    Coef := Res.CoefficientsMA;

        For i := 0 To CoefNames.Length - 1 Do

            Debug.WriteLine("   Коэффициент " + CoefNames[i]);

            Debug.Write("     Значение: ");

            Debug.WriteLine(Coef.Estimate[i]);

            Debug.Write("     Вероятность: ");

            Debug.WriteLine(Coef.Probability[i]);

        End For;

    End If;

End Sub DiagnosticTests;


В примере описана настройка параметров диагностического теста (критерий пропущенных переменных). Заданы параметры:


-
объясняющий ряд - первый фактор модели;


-
добавляемая переменная - переменная «VAR».


Затем выполняется тестирование и результаты выводятся в окно консоли.


См. также:


[IMsLinearRegressionTransform](IMsLinearRegressionTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
