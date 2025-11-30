# IMsArimaTransform.DiagnosticTests

IMsArimaTransform.DiagnosticTests
-


# IMsArimaTransform.DiagnosticTests


## Синтаксис


		DiagnosticTests([Calculation: [IMsMethodCalculation](../IMsMethodCalculation/IMsMethodCalculation.htm)
		 = Null;]

		                [Coord:
		 [IMsFormulaTransformCoord](../IMsFormulaTransformCoord/IMsFormulaTransformCoord.htm)
		 = Null]): [IMsDiagnosticTestList](../IMsDiagnosticTestList/IMsDiagnosticTestList.htm);


## Параметры


Calculation. Настройки, необходимые
 для расчёта;


Coord. Срез, по которому осуществляется
 расчёт.


## Описание


Свойство DiagnosticTests возвращает
 набор диагностических тестов модели.


## Комментарии


Набор тестов нельзя изменить, то есть нельзя удалить существующий или
 добавить собственный тест.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащего модель ARIMA с идентификатором
 MODEL.


Добавьте ссылки на системные сборки: Metabase, Ms, Stat.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    MsKey: Integer;

		    Model: IMsModel;

		    Transform: IMsFormulaTransform;

		    Formula: IMsFormula;

		    Arima: IMsArimaTransform;

		    TestList: IMsDiagnosticTestList;

		    Test: IMsDiagnosticTest;

		    DSettings: IMsRamseyRessetTestSettings;

		    VarTrans: IMsFormulaTransformVariable;

		    Coord: IMsFormulaTransformCoord;

		    Calc: IMsMethodCalculation;

		    DResults: IMsDiagnosticTestResults;

		    Stat: ISpecificationTestStatistic;

		Begin

		    MB := MetabaseClass.Active;

		    // Получаем ключ контейнера моделирования

		    MsKey := MB.GetObjectKeyById("MS");

		    // Получаем модель

		    Model := MB.ItemByIdNamespace("MODEL", MsKey).Bind As IMsModel;

		    // Получаем параметры расчета модели

		    Transform := Model.Transform;

		    Formula := Transform.FormulaItem(0);

		    Arima := Formula.Method As IMsArimaTransform;

		    // Получаем набор диагностических тестов модели

		    TestList := Arima.DiagnosticTests;

		    // Находим тест «Критерий функциональной формы»

		    Test := TestList.FindByType(MsDiagnosticTestType.RamseyResset);

		    // Получаем параметры теста

		    DSettings := Test.Settings As IMsRamseyRessetTestSettings;

		    // Задаем число дополнительных регрессоров, входящих в тестовую регрессию.

		    DSettings.Power := 3;

		    // Задаем параметры тестирования

		    VarTrans := Transform.Outputs.Item(0);

		    Coord := Transform.CreateCoord(VarTrans);

		    Calc := Model.CreateCalculation As IMsMethodCalculation;

		    Calc.Period.IdentificationStartDate := DateTime.ComposeDay(1990, 01, 01);

		    Calc.Period.IdentificationEndDate := DateTime.ComposeDay(2007, 12, 31);

		    Calc.Period.ForecastStartDate := DateTime.ComposeDay(2008, 01, 01);

		    Calc.Period.ForecastEndDate := DateTime.ComposeDay(2010, 12, 31);

		    // Выполняем тестирование

		    DResults := Test.Execute(Calc As IMsMethodCalculation, Coord);

		    // Выводим результаты теста

		    Stat := DResults.ChiTest;

		    Debug.WriteLine("-- Статистика Хи-квадрат --");

		    Debug.Write("     Значение: ");

		    Debug.WriteLine(Stat.Statistic);

		    Debug.Write("     Вероятность: ");

		    Debug.WriteLine(Stat.Probability);

		    Stat := DResults.FTest;

		    Debug.WriteLine("-- Статистика Фишера --");

		    Debug.Write("     Значение: ");

		    Debug.WriteLine(Stat.Statistic);

		    Debug.Write("     Вероятность: ");

		    Debug.WriteLine(Stat.Probability);

		End Sub UserProc;


В результате выполнения примера для модели MODEL будет выполнен диагностический
 тест «Критерий функциональной формы»,
 результаты тестирования будут выведены в окно консоли.


См. также:


[IMsArimaTransform](IMsArimaTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
