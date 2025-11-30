# IMsPairCorrelationTestSettings.BalancedSample

IMsPairCorrelationTestSettings.BalancedSample
-


# IMsPairCorrelationTestSettings.BalancedSample


## Синтаксис


BalancedSample: Boolean;


## Описание


Свойство BalancedSample определяет, по каким наблюдениям рассчитываются коэффициенты корреляции.


## Комментарии


Свойство актуально, если для обработки пропусков используется метод - [MissingDataMethod.Casewise](StatLib.chm::/Enums/MissingDataMethod.htm). Метод обработки пропусков определяет свойство IMsVariableTestSettings.MissingData.


Допустимые значения BalancedSample:


-
True. Значение по умолчанию. Из расчёта исключаются все наблюдения на определенную точку, если на эту точку есть пропуски данных хотя бы в одной переменной;


-
False. Коэффициенты корреляции рассчитываются по всем возможным данным.


## Пример


Для выполнения примера в репозитории должен присутствовать контейнер моделирования с идентификатором «MODEL_SPACE», содержащий задачу моделирования с идентификатором «WEB_PROBLEM». Данная задача должна содержать внутреннюю метамодель, содержащую внутреннюю БД ременных рядов и переменные.


Добавьте ссылки на системные сборки «Metabase», «Ms».


			Sub PairCorrelation;

Var

    mb: IMetabase;

    msKey: Integer;

    Problem: IMsProblem;

    MetaObj: IMetabaseObject;

    Meta: IMsMetaModel;

    MetaVisual: IMsMetaModelVisualController;

    VarTest: IMsVariableTest;

    PairCorr: IMsPairCorrelationTestSettings;

    Sources: IMsVariableTestDataList;

    TestData: IMsVariableTestData;

    i, j: Integer;

    VarArray: Array;

    Slice: IMsFormulaTransformSlice;

    TestRes: IMsVariableTestResults;

    Res: Array;

Begin

    mb := MetabaseClass.Active;

    // Получаем ключ контейнера моделирования
    msKey := mb.GetObjectKeyById("MODEL_SPACE");

    // Получаем задачу моделирования
    Problem := mb.ItemByIdNamespace("WEB_PROBLEM", msKey).Bind As IMsProblem;

    // Получаем метамодель
    MetaObj := Problem.MetaModel As IMetabaseObject;

    Meta := MetaObj.Edit As IMsMetaModel;

    MetaVisual := Meta.VisualController;

    // Получаем параметры расчёта матрицы корреляции
    VarTest := MetaVisual.PairCorrelationTest;

    PairCorr := VarTest.Settings As IMsPairCorrelationTestSettings;

    // Коэффициенты корреляции рассчитываются по всем возможным данным
    PairCorr.BalancedSample := False;

    // Добавляем проверяемые переменные только с годовой динамикой
    Sources := PairCorr.IncludedSources;

    If Sources.Count > 0 Then

        Sources.Clear;

    End If;

    VarArray := MetaVisual.GetVariables;

    For i := 0 To VarArray.Length - 1 Do

        Slice := VarArray[i] As IMsFormulaTransformSlice;

        If Slice.Level = DimCalendarLevel.Year Then

            TestData := Sources.Add(Slice, Slice.Key);

            Debug.WriteLine("Ключ тестируемой переменной: " + TestData.EntryKey.ToString);

        End If;

    End For;

    // Задаем период расчёта
    PairCorr.StartDate := DateTime.Parse("01.01.2000");

    PairCorr.EndDate := DateTime.Parse("01.01.2014");

    // Выполняем расчёт
    TestRes := VarTest.Execute;

    // Выводим матрицу корреляции в окно консоли
    Res := TestRes.ResValueMatrix;

    For i := 0 To Res.GetUpperBound(1) Do

        For j := 0 To Res.GetUpperBound(2) Do

            Debug.Write(Res[i, j]);

            Debug.Write(";  ");

        End For;

        Debug.WriteLine("");

    End For;

End Sub PairCorrelation;


Результат выполнения примера: для всех переменных годовой динамики, которые содержатся в цепочке расчёта метамодели, рассчитана матрица корреляции. Результаты выведены в окно консоли.


См. также:


[IMsPairCorrelationTestSettings](IMsPairCorrelationTestSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
