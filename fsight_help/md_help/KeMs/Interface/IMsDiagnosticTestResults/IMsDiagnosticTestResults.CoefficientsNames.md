# IMsDiagnosticTestResults.CoefficientsNames

IMsDiagnosticTestResults.CoefficientsNames
-


# IMsDiagnosticTestResults.CoefficientsNames


## Синтаксис


		CoefficientsNames: Array;


## Описание


Свойство CoefficientsNames возвращает
 наименования коэффициентов.


## Комментарии


Для получения значений коэффициентов используйте свойство [IMsDiagnosticTestResults.ModelCoefficients](IMsDiagnosticTestResults.ModelCoefficients.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащего задачу моделирования с
 идентификатором MODEL_RESETTEST_WEB. Задача должна быть создана из веб-приложения
 и содержать только модель линейной регрессии.


Добавьте ссылки на системные сборки: Metabase, Ms, Stat.


					Sub DiagnosticTests;

		Var

		    mb: IMetabase;

		    MSKey: Integer;

		    Problem: IMsProblem;

		    Meta: IMsMetaModel;

		    ChainEnts: IMsCalculationChainEntries;

		    ChainEl: IMsCalculationChainEntry;

		    pModel: IMsModel;

		    pTransform: IMsFormulaTransform;

		    pFormula: IMsFormula;

		    pRegress: IMsLinearRegressionTransform;

		    pTestList: IMsDiagnosticTestList;

		    Test: IMsDiagnosticTest;

		    VarTrans: IMsFormulaTransformVariable;

		    Settings: IMsDiagnosticTestSettings;

		    Calc: IMsMethodCalculation;

		    Coord: IMsFormulaTransformCoord;

		    Res: IMsDiagnosticTestResults;

		    Stat: ISpecificationTestStatistic;

		    i: Integer;

		    Coef: ICoefficients;

		    CoefNames: Array Of String;

		Begin

		    mb := MetabaseClass.Active;

		    // Получаем задачу моделирования

		    MSKey := mb.GetObjectKeyById("MS");

		    Problem := mb.ItemByIdNamespace("MODEL_RESETTEST_WEB", MSKey).Bind As IMsProblem;

		    // Получаем внутреннюю метамодель

		    Meta := Problem.MetaModel;

		    // Получаем задачу линейной регрессии

		    ChainEnts := Meta.CalculationChain;

		    For i := 0 To ChainEnts.Count - 1 Do

		        ChainEl := ChainEnts.Item(i);

		        If ChainEl.Type = MsCalculationChainEntryType.Model Then

		            pModel := (ChainEl As IMsCalculationChainModel).Model;

		        End If;

		    End For;

		    // Получаем параметры расчёта модели

		    pTransform := pModel.Transform;

		    pFormula := pTransform.FormulaItem(0);

		    pRegress := pFormula.Method As IMsLinearRegressionTransform;

		    // Получаем набор диагностических тестов

		    pTestList := pRegress.DiagnosticTests;

		    // Находим RESET-тест Рамсея

		    Test := pTestList.FindByType(MsDiagnosticTestType.RamseyResset);

		    VarTrans := pTransform.Outputs.Item(0);

		    // Получаем настройки теста

		    Settings := Test.Settings;

		    // Задаем уровень значимости

		    Settings.ConfidenceLevel := 0.75;

		    // Проверяем, доступен ли расчет теста с помощью пакета R

		    If Settings.SupportsR

		        Then

		            Settings.UseR := True;

		            Debug.WriteLine("При расчете теста будет использоваться подключение R");

		        Else

		            Debug.WriteLine("Тест не поддерживает расчет с помощью R");

		    End If;

		    Debug.WriteLine("");

		    // Задаем периоды тестирования

		    Coord := pTransform.CreateCoord(VarTrans);

		    Calc := pModel.CreateCalculation As IMsMethodCalculation;

		    Calc.Period.IdentificationStartDate := pTransform.Period.IdentificationStartDate;

		    Calc.Period.IdentificationEndDate := pTransform.Period.IdentificationEndDate;

		    Calc.Period.ForecastStartDate := pTransform.Period.ForecastStartDate;

		    Calc.Period.ForecastEndDate := pTransform.Period.ForecastEndDate;

		    // Выполняем тестирование

		    Res := Test.Execute(Calc As IMsMethodCalculation, Coord);

		    // Выводим результаты

		    If Res.Error <> "" Then

		        Debug.WriteLine(Res.Error);

		    Else

		        Stat := Res.ChiTest;

		        Debug.WriteLine("-- Статистика Хи-квадрат --");

		        Debug.WriteLine("     Значение: " + Stat.Statistic.ToString);

		        Debug.WriteLine("     Вероятность: " + Stat.Probability.ToString);

		        If Res.FTestResult Then

		            Debug.WriteLine("     Гипотеза о приемлемости функциональной формы принимается");

		        Else

		            Debug.WriteLine("     Гипотеза о приемлемости функциональной формы отвергается");

		        End If;

		        Stat := Res.FTest;

		        Debug.WriteLine("-- Статистика Фишера --");

		        Debug.WriteLine("     Значение: " + Stat.Statistic.ToString);

		        Debug.WriteLine("     Вероятность: " + Stat.Probability.ToString);

		        If Res.ChiTestResult Then

		            Debug.WriteLine("     Гипотеза о приемлемости функциональной формы принимается");

		        Else

		            Debug.WriteLine("     Гипотеза о приемлемости функциональной формы отвергается");

		        End If;

		        CoefNames := Res.CoefficientsNames;

		        Debug.WriteLine("-- Значения коэффициентов модели --");

		        Coef := Res.ModelCoefficients.Coefficients;

		        For i := 0 To Coef.Estimate.Length - 1 Do

		            Debug.WriteLine("   Коэффициент " + CoefNames[i]);

		            Debug.WriteLine("     Значение: " + Coef.Estimate[i].ToString);

		            Debug.WriteLine("     Вероятность: " + Coef.Probability[i].ToString);

		        End For;

		        CoefNames := Res.CoefficientsARNames;

		        If CoefNames.Length <> 0 Then

		            Debug.WriteLine("-- Коэффициенты авторегрессии --");

		            Coef := Res.CoefficientsAR;

		            For i := 0 To CoefNames.Length - 1 Do

		            Debug.WriteLine("   Коэффициент " + CoefNames[i]);

		            Debug.WriteLine("     Значение: " + Coef.Estimate[i].ToString);

		            Debug.WriteLine("     Вероятность: " + Coef.Probability[i].ToString);

		            End For;

		        End If;

		        CoefNames := Res.CoefficientsMANames;

		        If CoefNames.Length <> 0 Then

		        Debug.WriteLine("-- Коэффициенты скользящего среднего --");

		        Coef := Res.CoefficientsMA;

		            For i := 0 To CoefNames.Length - 1 Do

		            Debug.WriteLine("   Коэффициент " + CoefNames[i]);

		            Debug.WriteLine("     Значение: " + Coef.Estimate[i].ToString);

		            Debug.WriteLine("     Вероятность: " + Coef.Probability[i].ToString);

		            End For;

		        End If;

		    End If;

		End Sub DiagnosticTests;


В результате выполнения примера для модели будет выполнен RESET-тест Рамсея,
 результаты будут выведены в окно консоли. Расчёт будет выполнен с помощью
 пакета R.


См. также:


[IMsDiagnosticTestResults](IMsDiagnosticTestResults.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
