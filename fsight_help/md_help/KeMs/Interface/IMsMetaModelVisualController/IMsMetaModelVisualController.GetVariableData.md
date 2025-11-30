# IMsMetaModelVisualController.GetVariableData

IMsMetaModelVisualController.GetVariableData
-


# IMsMetaModelVisualController.GetVariableData


## Синтаксис


GetVariableData(Slice: [IMsFormulaTransformSlice](../IMsFormulaTransformSlice/IMsFormulaTransformSlice.htm);

                EntryKey:
 Integer;

                Calculation:
 [IMsMethodCalculation](../IMsMethodCalculation/IMsMethodCalculation.htm);

                Coord:
 [IMsFormulaTransformCoord](../IMsFormulaTransformCoord/IMsFormulaTransformCoord.htm);

                FillType:
 [MsFillBoundType](../../Enums/MsFillBoundType.htm);

                Var
 IdentificationStartDate: DateTime;

                Var
 ForecastEndDate: DateTime;

                [Transform:
 [IMsFormulaTransform](../IMsFormulaTransform/IMsFormulaTransform.htm)
 = Null;]

                [UseInversion:
 Boolean = False]): Array;


## Параметры


Slice. Срез переменной;


EntryKey. Ключ переменной;


Calculation. Параметры расчёта
 модели, содержащей переменную;


Coord. Параметры координаты
 переменной;


FillType. Период получения
 данных;


IdentificationStartDate. Возвращает
 дату начала расчёта;


ForecastEndDate. Возвращает
 дату окончания расчёта;


Transform. Параметры модели,
 содержащей переменную;


UseInversion. Определяет, применять
 ли к данным переменной преобразование, установленное для неё.


## Описание


Метод GetVariableData возвращает
 данные переменной по заданным параметрам.


## Комментарии


Параметр FillType определяет
 период получения данных следующим образом: начало получения данных всегда
 совпадает с периодом идентификации, окончание получения данных задается
 перечислением [MsFillBoundType](../../Enums/MsFillBoundType.htm).


Параметр UseInversion актуален,
 если для переменной установлено какое-либо преобразование. Допустимые
 значения параметра:


	- True. Метод GetVariableData
	 вернет данные переменной, к которым применено преобразование;


	- False. Метод GetVariableData
	 вернет исходные данные переменной.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MODEL_SPACE, содержащим задачу моделирования
 с идентификатором WEB_PROBLEM. Данная задача должна содержать внутреннюю
 метамодель, в цепочке расчёта которой присутствует хотя бы одна модель.


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub GetData;

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

    StartDate, EndDate: DateTime;

    Data: Array Of Double;

Begin

    mb := MetabaseClass.Active;

    // Получаем контейнер моделирования

    MsObj := mb.ItemById("MODEL_SPACE");

    // Получаем задачу моделирования

    Problem := mb.ItemByIdNamespace("WEB_PROBLEM", MsObj.Key).Bind As IMsProblem;

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

    Calc.Period.IdentificationStartDate := Model.Transform.Period.IdentificationStartDate;

    Calc.Period.IdentificationEndDate := Model.Transform.Period.IdentificationEndDate;

    Calc.Period.ForecastStartDate := Model.Transform.Period.ForecastStartDate;

    Calc.Period.ForecastEndDate := Model.Transform.Period.ForecastEndDate;

    // Получаем данные переменной

    Data := MetaVisual.GetVariableData(Slice, VarKey, Calc, Coord,

        MsFillBoundType.EndIdentify, StartDate, EndDate, Transform, False);

    Debug.WriteLine("Начало расчёта: " + StartDate.ToString);

    Debug.WriteLine("Окончание расчёта: " + EndDate.ToString);

    For i := 0 To Data.Length - 1 Do

        Debug.WriteLine(Data[i]);

    End For;

End Sub GetData;


В результате выполнения примера в окно консоли будут выведены данные
 входной переменной за период идентификации и даты начала/окончания расчёта
 для первой модели в цепочке расчёта.


См. также:


[IMsMetaModelVisualController](IMsMetaModelVisualController.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
