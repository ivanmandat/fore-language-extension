# IMsWhiteHeteroskedasticityTestSettings.CrossProduct

IMsWhiteHeteroskedasticityTestSettings.CrossProduct
-


# IMsWhiteHeteroskedasticityTestSettings.CrossProduct


## Синтаксис


CrossProduct: Boolean;


## Описание


Свойство CrossProduct определяет,
 включать ли попарные произведения.


## Комментарии


CrossProduct позволяет использовать
 не только имеющиеся объясняющие ряды, но и их попарные произведения. Если
 рассматривается три ряда, то при использовании попарных произведений будут
 дополнительно рассмотрены регрессоры: S1*S2, S2*S3, S1*S3. Не рекомендуется
 включать попарные произведения, если количество объясняющих рядов (регрессоров)
 велико.


Допустимые значения:


	- True. Включать попарные
	 произведения;


	- False. Не включать попарные
	 произведения.


## Пример


Для выполнения примера в репозитории должен присутствовать контейнер
 моделирования с идентификатором «CONT_MODEL», содержащий модель линейной
 регрессии (оценка МНК) с идентификатором «MODEL». Модель содержит более
 одного фактора.


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

    TestSettings: IMsWhiteHeteroskedasticityTestSettings;

    VarTrans: IMsFormulaTransformVariable;

    Calc: IMsMethodCalculation;

    Coord: IMsFormulaTransformCoord;

    Res: IMsDiagnosticTestResults;

    Stat: ISpecificationTestStatistic;

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

// находим тест Уайта на гетероскедастичность

    Test := pTestList.FindByType(MsDiagnosticTestType.WhiteHeteroskedasticity);

    TestSettings := Test.Settings As IMsWhiteHeteroskedasticityTestSettings;

// задаем порядок авторегрессии

    TestSettings.CrossProduct := False;

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

End Sub UserProc;


В примере описана настройка параметров диагностического теста Уайта
 на гетероскедастичность. Тестироваться будет модель без использования
 попарного произведения регрессоров. После выполнения тестирования результаты
 выводятся в окно консоли.


См. также:


[IMsWhiteHeteroskedasticityTestSettings](IMsWhiteHeteroskedasticityTestSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
