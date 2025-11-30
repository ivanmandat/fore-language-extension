# IMsMetaModelVisualController.GetVariableValues

IMsMetaModelVisualController.GetVariableValues
-


# IMsMetaModelVisualController.GetVariableValues


## Синтаксис


GetVariableValues(

                  Slice:
 [IMsFormulaTransformSlice](../IMsFormulaTransformSlice/IMsFormulaTransformSlice.htm);

                  EntryKey:
 Integer;

                  ScenarioKeys:
 Array;

                  CleanIdentification:
 Boolean;

                  Calculation:
 [IMsMethodCalculation](../IMsMethodCalculation/IMsMethodCalculation.htm);

                  Coord:
 [IMsFormulaTransformCoord](../IMsFormulaTransformCoord/IMsFormulaTransformCoord.htm);

                  FillType:
 [MsFillBoundType](../../Enums/MsFillBoundType.htm);

                  Transform:
 [IMsFormulaTransform](../IMsFormulaTransform/IMsFormulaTransform.htm);

                  Var
 Dates: Array;

                  Var
 FilledDates: Array;

                  Var
 FilledCount: Integer;

                  Var
 Level: Integer;

                  Var
 Result: Array);


## Параметры


Slice. Срез переменной;


EntryKey. Ключ переменной;


ScenarioKeys. Массив ключей
 сценариев моделирования;


CleanIdentification. Признак
 того, очищать ли период идентификации;


Calculation. Параметры расчёта
 модели, содержащей переменную;


Coord. Параметры координаты
 переменной;


FillType. Период получения
 данных;


Transform. Параметры модели,
 содержащей переменную;


Dates. Массив дат для значений
 переменной;


FilledDates. Массив признаков
 того, содержит ли переменная значение на определенную дату;


FilledCount. Количество непустых
 значений переменной;


Level. Календарная динамика
 переменной;


Result. Значения переменной.


## Описание


Метод GetVariableValues возвращает
 значения переменной с указанием дат по заданным сценариям.


## Комментарии


Допустимые значения параметра CleanIdentification:


	- True. Очищать период
	 идентификации;


	- False. Не очищать период
	 идентификации.


Метод возвращает результат выполнения в параметрах Dates,
 FilledDates, FilledCount,
 Level, Result.
 Каждый элемент в массиве Dates
 соответствует элементам в массивах FilledDates
 и Result.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MS», содержащим задачу моделирования
 с идентификатором «MODEL_RESETTEST_WEB». Данная задача должна содержать
 внутреннюю метамодель, в цепочке расчёта которой присутствует хотя бы
 одна модель.


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserProc;

Var

    mb: IMetabase;

    MsObj: IMetabaseObjectDescriptor;

    Problem: IMsProblem;

    Meta: IMsMetaModel;

    MetaVisual: IMsMetaModelVisualController;

    ChainEnts: IMsCalculationChainEntries;

    ChainEl: IMsCalculationChainEntry;

    i: Integer;

    Model: IMsModel;

    Transform: IMsFormulaTransform;

    Vars: IMsFormulaTransformVariables;

    OutputVar: IMsFormulaTransformVariable;

    Slice: IMsFormulaTransformSlice;

    VarKey: Integer;

    Coord: IMsFormulaTransformCoord;

    Calc: IMsMethodCalculation;

    ScenKeys: Array Of Integer;

    Dates: Array Of DateTime;

    FilledDates: Array Of Boolean;

    FilledCount: Integer;

    Level: Integer;

    Result: Array Of Double;

Begin

    mb := MetabaseClass.Active;

    // Получаем контейнер моделирования

    MsObj := mb.ItemById("MS");

    // Получаем задачу моделирования

    Problem := mb.ItemByIdNamespace("MODEL_RESETTEST_WEB", MsObj.Key).Bind As IMsProblem;

    // Получаем метамодель

    Meta := Problem.MetaModel;

    MetaVisual := Meta.VisualController;

    // Получаем 1-ю модель в цепочке расчёта

    ChainEnts := Meta.CalculationChain;

    For i := 0 To ChainEnts.Count - 1 Do

        ChainEl := ChainEnts.Item(i);

        If ChainEl.Type = MsCalculationChainEntryType.Model Then

            Model := (ChainEl As IMsCalculationChainModel).Model;

            Break;

        End If;

    End For;

    // Получаем входную переменную модели

    Transform := Model.Transform;

    Vars := Transform.Outputs;

    OutputVar := Vars.Item(0);

    VarKey := OutputVar.Key;

    Slice := OutputVar.Slices.Item(0);

    // Получаем параметры метода расчета модели

    Coord := Transform.CreateCoord(OutputVar);

    // Задаем параметры периода расчёта модели

    Calc := Transform.CreateCalculation;

    Calc.Period.IdentificationStartDate := model.Transform.Period.IdentificationStartDate;

    Calc.Period.IdentificationEndDate := model.Transform.Period.IdentificationEndDate;

    Calc.Period.ForecastStartDate := model.Transform.Period.ForecastStartDate;

    Calc.Period.ForecastEndDate := model.Transform.Period.ForecastEndDate;

    // Создаем массив ключей сценариев и указываем там сценарий «Факт»

    ScenKeys := New Integer[1];

    ScenKeys[0] := -1;

    // Получаем значения входной переменной

    MetaVisual.GetVariableValues(Slice, VarKey, ScenKeys, True, Calc, Coord,

        MsFillBoundType.EndForecast, Transform, Dates, FilledDates, FilledCount, Level, Result);

    // Выводим значения в окно консоли

    For i := 0 To Dates.Length - 1 Do

        Debug.Write(Dates[i]);

        Debug.Write(" - ");

        Debug.WriteLine(Result[i])

    End For;

End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены значения
 входной переменной для первой модели в цепочке расчета задачи.


См. также:


[IMsMetaModelVisualController](IMsMetaModelVisualController.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
