# IMsMetaModelVisualController.GrangerTest

IMsMetaModelVisualController.GrangerTest
-


# IMsMetaModelVisualController.GrangerTest


## Синтаксис


GrangerTest: [IMsVariableTest](../IMsVariableTest/IMsVariableTest.htm);


## Описание


Свойство GrangerTest возвращает
 параметры расчёта теста Гранжера.


## Комментарии


Для настройки параметров расчёта используйте интерфейс [IMsGrangerTestSettings](../IMsGrangerTestSettings/IMsGrangerTestSettings.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MS», содержащего задачу моделирования
 с идентификатором «WEB_PROBLEM». Задача должна содержать внутреннюю метамодель.


Добавьте ссылки на системные сборки: Dimensions, Metabase, Ms, Stat.


			Sub GrangerTest;

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

    Granger: IMsGrangerTestSettings;

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

    // Задаем общие параметры расчёта описательных статистик

    Test := MetaVisual.GrangerTest;

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

        End If;

    End For;

    // Задаем параметры расчёта теста Гранжера

    Granger := CommonSett As IMsGrangerTestSettings;

    // Задаем уровень значимости

    Granger.ConfidenceLevel := 0.1;

    // Задаем лаг

    Granger.Lag := 3;

    // Выполняем расчёт теста

    TestRes := Test.Execute;

    // Выводим результаты

    If TestRes.Error <> "" Then

        Debug.WriteLine(TestRes.Error);

    Else

        Res := TestRes.PValueMatrix;

        Debug.WriteLine("Тест Гранжера"); Debug.WriteLine("");

        Debug.WriteLine("Матрица вероятностей:");

        For i := 0 To Res.GetUpperBound(1) Do

            For j := 0 To Res.GetUpperBound(2) Do

                Debug.Write(Res[i, j]); Debug.Write(";    ");

            End For;

            Debug.WriteLine("");

        End For;

        Debug.WriteLine("");

        Res := TestRes.TStatMatrix;

        Debug.WriteLine("Матрица статистик:");

        For i := 0 To Res.GetUpperBound(1) Do

            For j := 0 To Res.GetUpperBound(2) Do

                Debug.Write(Res[i, j]); Debug.Write(";    ");

            End For;

            Debug.WriteLine("");

        End For;

        Debug.WriteLine("");

        Res := TestRes.ResValueMatrix;

        Debug.WriteLine("Зависимость переменных:");

        For i := 0 To InclSrc.Count - 1 Do

            Debug.WriteLine("X" + (i + 1).ToString + " - " + InclSrc.Item(i).Name);

        End For;

        For i := 0 To Res.GetUpperBound(1) Do

            For j := 0 To Res.GetUpperBound(2) Do

                If i <> j Then

                    Debug.Write("X" + (i + 1).ToString + "," + "X" + (j + 1).ToString);

                    If (Res[i, j] As Boolean) Then

                        Debug.WriteLine(" - есть обусловленность по Гранжеру");

                    Else

                        Debug.WriteLine(" - нет обусловленности по Гранжеру");

                    End If;

                End If;

            End For;

            Debug.WriteLine("");

        End For;

    End If;

End Sub GrangerTest;


Результат выполнения примера: для всех переменных годовой динамики,
 которые содержатся в цепочке расчёта метамодели, рассчитан тест Гранжера.
 Результаты выведены в окно консоли.


См. также:


[IMsMetaModelVisualController](IMsMetaModelVisualController.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
