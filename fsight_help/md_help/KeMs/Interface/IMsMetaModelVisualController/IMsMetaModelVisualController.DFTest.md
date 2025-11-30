# IMsMetaModelVisualController.DFTest

IMsMetaModelVisualController.DFTest
-


# IMsMetaModelVisualController.DFTest


## Синтаксис


DFTest: [IMsVariableTest](../IMsVariableTest/IMsVariableTest.htm);


## Описание


Свойство DFTest возвращает параметры
 расчёта расширенного теста Дики-Фуллера.


## Комментарии


Для настройки параметров расчёта используйте интерфейс [IMsDFTestSettings](../IMsDFTestSettings/IMsDFTestSettings.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MS», содержащего задачу моделирования
 с идентификатором «MODEL_DFTEST_WEB». Задача должна быть создана из веб-приложения
 и содержать несколько переменных.


Добавьте ссылки на системные сборки: Dimensions, Metabase, Ms, Stat,
 Transform.


			Sub DFTest;

Var

    mb: IMetabase;

    msKey: Integer;

    Problem: IMsProblem;

    Meta: IMsMetaModel;

    MetaVisual: IMsMetaModelVisualController;

    Test: IMsVariableTest;

    CommonSett: IMsVariableTestSettings;

    InclSrc: IMsVariableTestDataList;

    VarArray: Array;

    i, j: Integer;

    Slice: IMsFormulaTransformSlice;

    TestData: IMsVariableTestData;

    DF: IMsDFTestSettings;

    TestRes: IMsVariableTestResults;

    Res: Array;

Begin

    mb := MetabaseClass.Active;

    // Получаем ключ контейнера моделирования

    msKey := mb.GetObjectKeyById("MS");

    // Получаем задачу моделирования

    Problem := mb.ItemByIdNamespace("MODEL_DFTEST_WEB", msKey).Edit As IMsProblem;

    // Получаем метамодель

    Meta := Problem.MetaModel;

    MetaVisual := Meta.VisualController;

    // Задаем общие параметры расчёта описательных статистик

    Test := MetaVisual.DFTest;

    CommonSett := Test.Settings;

    // Период расчёта

    CommonSett.StartDate := DateTime.Parse("01.01.1990");

    CommonSett.EndDate := DateTime.Parse("01.01.2015");

    // Метод обработки пропусков

    CommonSett.MissingData.Method := MissingDataMethod.LinTrend;

    // Задаем переменные для расчёта

    VarArray := MetaVisual.GetVariables;

    InclSrc := CommonSett.IncludedSources;

    InclSrc.Clear;

    Debug.WriteLine("Тестируемые переменные");

    Debug.WriteLine("");

    For i := 0 To VarArray.Length - 1 Do

        // Добавляем только переменные с годовой динамикой

        Slice := VarArray[i] As IMsFormulaTransformSlice;

        If Slice.Level = DimCalendarLevel.Year Then

            TestData := InclSrc.Add(Slice);

            // Задаем лаг и преобразование 1-й переменной

            If i = 0 Then

                TestData.Lag := "1";

                TestData.InversionInfo.Inversion := TsInversion.Log;

            End If;

            // Выводим информацию о переменной в окно консоли

            Debug.WriteLine("Исходное наименование переменной: " + TestData.Slice.Name);

            Debug.WriteLine("Наименование переменной с учетом преобразований и лага: " + TestData.Name);

            Debug.WriteLine("Ключ переменной: " + TestData.EntryKey.ToString);

            Debug.WriteLine("");

        End If;

    End For;

    // Задаем параметры расчёта теста Дики-Фуллера

    DF := CommonSett As IMsDFTestSettings;

    // Задаем порядок авторегрессии

    DF.AutoRegressionOrder := 1;

    // Задаем параметры дифференцирования ряда

    DF.TestedSeries := ADFTestedSeriesType.FirstDifference;

    // Задаем тип модели

    DF.EquationType := ADFEquationType.ConstantTrend;

    // Проверяем, доступен ли расчет теста с помощью пакета R

    If DF.SupportsR

        Then

            DF.UseR := True;

            Debug.WriteLine("При расчете теста будет использоваться подключение R");

        Else

            Debug.WriteLine("Тест не поддерживает расчет с помощью R");

    End If;

    Debug.WriteLine("");

    // Выполняем расчёт теста

    TestRes := Test.Execute;

    // Выводим результаты

    If TestRes.Error <> "" Then

        Debug.WriteLine(TestRes.Error);

    Else

        Res := TestRes.ResValueMatrix;

        Debug.WriteLine("Расширенный тест Дики-Фуллера");

        Debug.WriteLine("");

        For i := 0 To Res.GetUpperBound(1) Do

            Select Case i

                Case 0: Debug.Write("Переменные:     ");

                Case 1: Debug.Write("ADF-статистика: ");

                Case 2: Debug.Write("1% значимости:  ");

                Case 3: Debug.Write("5% значимости:  ");

                Case 4: Debug.Write("10% значимости: ");

                Case 5: Debug.Write("Стационарность: ");

                Case 6: Debug.Write("Ошибка:         ");

            End Select;

            For j := 0 To Res.GetUpperBound(2) Do

                Debug.Write(Res[i, j]); Debug.Write(";    ");

            End For;

            Debug.WriteLine("");

        End For;

    End If;

End Sub DFTest;


Результат выполнения примера: для всех переменных годовой динамики,
 которые содержатся модели, рассчитан расширенный тест Дики-Фуллера с помощью
 пакета R. Результаты выведены в окно консоли.


См. также:


[IMsMetaModelVisualController](IMsMetaModelVisualController.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
