# IMsRedundantVariablesTestSettings.RedundantExplanatories

IMsRedundantVariablesTestSettings.RedundantExplanatories
-


# IMsRedundantVariablesTestSettings.RedundantExplanatories


## Синтаксис


RedundantExplanatories: Array;


## Описание


Свойство RedundantExplanatories определяет индексы избыточных рядов.


## Комментарии


Индексы должны быть представлены в виде целочисленного массива, формируемого на основе свойства [IMsLinearRegressionTransform.Explanatories](../IMsLinearRegressionTransform/IMsLinearRegressionTransform.Explanatories.htm).


## Пример


Для выполнения примера в репозитории должен присутствовать контейнер моделирования с идентификатором «CONT_MODEL», содержащий модель линейной регрессии (оценка МНК) с идентификатором «MODEL». Модель содержит более одного фактора, включенного в расчёт.


Добавьте ссылки на системные сборки «Metabase», «Ms», «Stat».


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

    TestSettings: IMsRedundantVariablesTestSettings;

    VarTrans: IMsFormulaTransformVariable;

    Calc: IMsMethodCalculation;

    Coord: IMsFormulaTransformCoord;

    Res: IMsDiagnosticTestResults;

    Stat: ISpecificationTestStatistic;

    ar: Array[1] Of Integer;

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

// находим критерий избыточных переменных
    Test := pTestList.FindByType(MsDiagnosticTestType.RedundantVariables);

    TestSettings := Test.Settings As IMsRedundantVariablesTestSettings;

// задаем избыточные ряды
    ar[0] := 0;

    TestSettings.RedundantExplanatories := ar;

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
    Stat := Res.ChiTest;

    Debug.WriteLine("-- Статистика Хи-квадрат --");

    Debug.Write("     Значение: ");

    Debug.WriteLine(Stat.Statistic);

    Debug.Write("     Вероятность: ");

    Debug.WriteLine(Stat.Probability);

    Stat := Res.FTest;

    Debug.WriteLine("-- Статистика Фишера --");

    Debug.Write("     Значение: ");

    Debug.WriteLine(Stat.Statistic);

    Debug.Write("     Вероятность: ");

    Debug.WriteLine(Stat.Probability);

End Sub UserProc;


В примере описана настройка параметров диагностического теста (критерий избыточных переменных). Тестироваться будет модель без первого регрессора. После выполнения тестирования результаты выводятся в окно консоли.


См. также:


[IMsRedundantVariablesTestSettings](IMsRedundantVariablesTestSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
