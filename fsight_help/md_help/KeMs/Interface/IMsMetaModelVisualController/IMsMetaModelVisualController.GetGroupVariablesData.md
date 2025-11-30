# IMsMetaModelVisualController.GetGroupVariablesData

IMsMetaModelVisualController.GetGroupVariablesData
-


# IMsMetaModelVisualController.GetGroupVariablesData


## Синтаксис


GetGroupVariablesData(

                      EntryKeys:
 Array;

                      ScenarioKeys:
 Array;

                      pCalculation:
 [IMsMethodCalculation](../IMsMethodCalculation/IMsMethodCalculation.htm);

                      Filter:
 Boolean;

                      SuppressEmptyArea:
 [LnSuppressEmptyArea](Laner.chm::/Enums/LnSuppressEmptyArea.htm);

                      Var
 ResDates: Array;

                      Var
 ResLevels: Array;

                      Var
 ResValues: Array);


## Параметры


EntryKeys. Массив ключей переменных;


ScenarioKeys. Массив ключей
 сценариев;


pCalculation. Параметры расчёта
 модели;


Filter. Признак того, что данные
 переменных надо отфильтровать;


SuppressEmptyArea. Метод фильтрации
 данных переменных;


ResDates. Массив дат для значений
 переменных;


ResLevels. Массив календарных
 динамик, используемых переменными;


ResValues. Массив значений
 переменных.


## Описание


Метод GetGroupVariablesData
 возвращает данные нескольких переменных.


## Комментарии


Данный метод позволят получить данные переменных, даже если они имеют
 различную календарную динамику.


Допустимые значения параметра Filter:


	- True. Данные переменных
	 надо фильтровать. Метод фильтрации должен быть указан в параметре
	 SuppressEmptyArea;


	- False. Данные переменных
	 не надо фильтровать.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MS», содержащим задачу моделирования
 с идентификатором «MODEL_VAR_LVL». Данная задача должна содержать внутреннюю
 метамодель, в цепочке расчёта которой присутствует хотя бы одна модель.


Добавьте ссылки на системные сборки: Laner, Metabase, Ms.


			Sub UserProc;

Var

    mb: IMetabase;

    MsObj: IMetabaseObjectDescriptor;

    Problem: IMsProblem;

    Meta: IMsMetaModel;

    MetaVisual: IMsMetaModelVisualController;

    ChainEnts: IMsCalculationChainEntries;

    ChainEl: IMsCalculationChainEntry;

    i, j: Integer;

    Model: IMsModel;

    Transform: IMsFormulaTransform;

    OutVars, InpVars: IMsFormulaTransformVariables;

    VarsKey: Array Of Integer;

    Calc: IMsMethodCalculation;

    ScenKeys: Array Of Integer;

    ResDates: Array Of String;

    ResLevels: Array Of Integer;

    ResValues: Array Of Double;

    Val: Double;

Begin

    mb := MetabaseClass.Active;

    // Получаем контейнер моделирования

    MsObj := mb.ItemById("MS");

    // Получаем задачу моделирования

    Problem := mb.ItemByIdNamespace("MODEL_VAR_LVL", MsObj.Key).Bind As IMsProblem;

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

    // Получаем параметры модели

    Transform := Model.Transform;

    // Получаем количество переменных, входящих в модель

    OutVars := Transform.Outputs;

    InpVars := Transform.Inputs;

    i := OutVars.Count + InpVars.Count;

    // Получаем массив ключей переменных, входящих в модель

    VarsKey := New Integer[i];

    For i := 0 To OutVars.Count - 1 Do

        VarsKey[i] := OutVars.Item(i).Key;

    End For;

    For j := 0 To InpVars.Count - 1 Do

        VarsKey[j + i] := InpVars.Item(j).Key;

    End For;

    // Создаем параметры расчета модели

    Calc := Transform.CreateCalculation;

    Calc.Period.IdentificationStartDate := model.Transform.Period.IdentificationStartDate;

    Calc.Period.IdentificationEndDate := model.Transform.Period.IdentificationEndDate;

    Calc.Period.ForecastStartDate := model.Transform.Period.ForecastStartDate;

    Calc.Period.ForecastEndDate := model.Transform.Period.ForecastEndDate;

    // Создаем массив ключей сценариев и указываем там сценарий «Факт»

    ScenKeys := New Integer[1];

    ScenKeys[0] := -1;

    // Получаем значения входной переменной

    MetaVisual.GetGroupVariablesData(VarsKey, ScenKeys, Calc, True,

        LnSuppressEmptyArea.SerieBounds, ResDates, ResLevels, ResValues);

    // Выводим значения в окно консоли

    Debug.WriteLine("Количество различных календарных динамик: " + ResLevels.Length.ToString);

    Debug.WriteLine("Значения переменных:");

    For i := 0 To ResDates.Length - 1 Do

        Debug.Write(ResDates[i]);

        Debug.Write(" - ");

        Val := ResValues[0, 0, i];

        For j := 0 To VarsKey.Length - 1 Do

            Val := ResValues[0, j, i];

            If Not Double.IsNan(val) Then

                If j > 0 Then

                    Debug.Write("          ");

                End If;

                Debug.Write(Val);

            End If;

        End For;

        Debug.WriteLine("");

    End For;

End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены данных
 переменных, входящих в первую модель в цепочке расчета метамодели.


См. также:


[IMsMetaModelVisualController](IMsMetaModelVisualController.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
