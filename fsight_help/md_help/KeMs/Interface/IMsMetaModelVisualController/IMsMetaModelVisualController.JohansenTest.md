# IMsMetaModelVisualController.JohansenTest

IMsMetaModelVisualController.JohansenTest
-


# IMsMetaModelVisualController.JohansenTest


## Синтаксис


JohansenTest: [IMsVariableTest](../IMsVariableTest/IMsVariableTest.htm)


## Описание


Свойство JohansenTest возвращает
 параметры расчёта теста Йохансена.


## Комментарии


Для настройки параметров расчёта используйте интерфейс [IMsJohansenTestSettings](../IMsJohansenTestSettings/IMsJohansenTestSettings.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MS», содержащего задачу моделирования
 с идентификатором «WEB_PROBLEM». Задача должна содержать внутреннюю метамодель.
 Метамодель должна содержать не менее трех внутренних переменных.


Добавьте ссылки на системные сборки: Metabase, Ms, Stat.


			Sub JohansenTest;

Var

    mb: IMetabase;

    msKey: Integer;

    Problem: IMsProblem;

    Meta: IMsMetaModel;

    MetaVisual: IMsMetaModelVisualController;

    ChainEnts: IMsCalculationChainEntries;

    ChainEl: IMsCalculationChainEntry;

    Test: IMsVariableTest;

    CommonSett: IMsVariableTestSettings;

    InclSrc: IMsVariableTestDataList;

    VarArray: Array Of Variant;

    i, j: Integer;

    TestData: IMsVariableTestData;

    Johansen: IMsJohansenTestSettings;

    TestRes: IMsVariableTestResults;

    Res: Array;

Begin

    mb := MetabaseClass.Active;

    // Получаем ключ контейнера моделирования

    msKey := mb.GetObjectKeyById("MS");

    // Получаем задачу моделирования

    Problem := mb.ItemByIdNamespace("WEB_PROBLEM", msKey).Bind As IMsProblem;

    // Получаем метамодель

    Meta := Problem.MetaModel;

    MetaVisual := Meta.VisualController;

    // Получаем переменные метамодели

    ChainEnts := Meta.CalculationChain;

    j := 0;

    VarArray := New Variant[ChainEnts.Count];

    For i := 0 To ChainEnts.Count - 1 Do

        ChainEl := ChainEnts.Item(i);

        If ChainEl.Type = MsCalculationChainEntryType.Variable Then

            VarArray[j] := ChainEl;

            j := j + 1;

        End If;

    End For;

    // Задаем эндогенные переменные для расчёта теста

    For i := 1 To j - 1 Do

        ChainEl := VarArray[i] As IMsCalculationChainEntry;

        MetaVisual.AddTestIncludedEntrie(ChainEl.Key, MsVariableTestType.Johansen);

    End For;

    // Задаем экзогенные переменные для расчёта теста

    ChainEl := VarArray[0] As IMsCalculationChainEntry;

    MetaVisual.AddJohansenTestExogenousEntrie(ChainEl.Key);

    // Задаем общие параметры расчёта описательных статистик

    Test := MetaVisual.JohansenTest;

    CommonSett := Test.Settings;

    // Период расчёта

    CommonSett.StartDate := DateTime.Parse("01.01.1990");

    CommonSett.EndDate := DateTime.Parse("01.01.2015");

    // Метод обработки пропусков

    CommonSett.MissingData.Method := MissingDataMethod.LinTrend;

    // Задаем параметры расчёта теста Йохансена

    Johansen := CommonSett As IMsJohansenTestSettings;

    // Задаем порядок авторегрессии

    Johansen.AutoRegressionOrder := "1";

    // Задаем тип модели коррекции ошибок

    Johansen.ModelType := ECMType.TrendTrend;

    // Выводим информацию о тестируемых переменных

    InclSrc := Johansen.IncludedSources;

    Debug.WriteLine("Эндогенные переменные:");

    For i := 0 To InclSrc.Count - 1 Do

        TestData := InclSrc.Item(i);

        Debug.WriteLine("    " + TestData.Name);

    End For;

    Debug.WriteLine("Экзогенная переменная:");

    InclSrc := Johansen.ExogenousSources;

    TestData := InclSrc.Item(0);

    Debug.WriteLine("    " + TestData.Name);

    // Выполняем расчёт теста

    TestRes := Test.Execute;

    // Выводим результаты

    If TestRes.Error <> "" Then

        Debug.WriteLine(TestRes.Error);

    Else

        Res := TestRes.ResValueMatrix;

        Debug.WriteLine("");

        Debug.WriteLine("Тест Йохансена");

        Debug.WriteLine("");

        For i := 0 To Res.GetUpperBound(1) Do

            Select Case i

                Case 0: Debug.Write("Связи: ");

                Case 1: Debug.Write("Собственное значение: ");

                Case 2: Debug.Write("Отношение максимального правдоподобия: ");

                Case 3: Debug.Write("Критическое значение 1%: ");

                Case 4: Debug.Write("   Гипотеза принимается: ");

                Case 5: Debug.Write("Критическое значение 5%: ");

                Case 6: Debug.Write("   Гипотеза принимается: ");

                Case 7: Debug.Write("Критическое значение 10%: ");

                Case 8: Debug.Write("    Гипотеза принимается: ");

                Case 9: Debug.Write("Вероятность: ");

            End Select;

            For j := 0 To Res.GetUpperBound(2) Do

                Debug.Write(Res[i, j]); Debug.Write(";    ");

            End For;

            Debug.WriteLine("");

        End For;

    End If;

End Sub JohansenTest;


Результат выполнения примера: для всех переменных, которые содержатся
 в цепочке расчёта метамодели, рассчитан тест Йохансена. Результаты выведены
 в окно консоли.


См. также:


[IMsMetaModelVisualController](IMsMetaModelVisualController.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
