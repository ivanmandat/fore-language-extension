# IMsMethod.Series

IMsMethod.Series
-


# IMsMethod.Series


## Синтаксис


Series: [IMsMethodSeries](../IMsMethodSeries/IMsMethodSeries.htm);


## Описание


Свойство Series возвращает
 набор возможных рядов, используемых методом при расчете.


## Комментарии


Для определения, участвовал ли определённый ряд в расчете используйте
 свойство [IMsMethodSeries.IsAvailable](../IMsMethodSeries/IMsMethodSeries.IsAvailable.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором OBJ_MS, содержащим модель с идентификатором
 MODEL_GREY. Модель рассчитывается [Грей-методом](../IMsGreyForecastTransform/IMsGreyForecastTransform.htm).
 Идентификатор задачи для расчета модели - PROBLEM_GREY. В контейнере моделирования
 должны содержаться переменные со следующими идентификаторами: VAR_INPUT,
 VAR_FITTED, VAR_FORECAST, VAR_RESIDUALS, VAR_LOWER_CONF_LEVEL, VAR_UPPER_CONF_LEVEL,
 VAR_DYN_LOWER_CONF_LEVEL, VAR_DYN_UPPER_CONF_LEVEL.


Данная процедура задает переменные, в которые будут выгружены ряды,
 используемые моделью MODEL_GREY при расчете.


Добавьте ссылки на системные сборки: Cubes, Metabase, Ms.


			Sub UserProc;

Var

    Mb: IMetabase;

    MsDescrKey: Integer;

    SerFitted, SerForecast, SerResiduals, SerInput: IMsVariableStub;

    SerLowerConfLevel, SerUpperConfLevel: IMsVariableStub;

    SerDynLowerConfLevel, SerDynUpperConfLevel: IMsVariableStub;

    Model: IMsModel;

    ModelTrans: IMsFormulaTransform;

    Formula: IMsFormula;

    Grey: IMsGreyForecastTransform;

    MethodSeries: IMsMethodSeries;

    TermInfo: IMsFormulaTermInfo;

    Series: IMsFormulaTransformVariables;

    Ser: IMsFormulaTransformVariable;

    ModelCalc: IMsMethodCalculation;

    CalcPeriod: IMsModelPeriod;

    Coord: IMsFormulaTransformCoord;

    Problem: IMsProblem;

    CalcSett: IMsProblemCalculationSettings;

    Calculation: IMsProblemCalculation;

    TermText: String;

Begin

    Mb := MetabaseClass.Active;

    MsDescrKey := Mb.ItemById("OBJ_MS").Key;

    // Получение переменных

    SerInput := MB.ItemByIdNamespace("VAR_INPUT", MsDescrKey).Edit As IMsVariableStub;

    SerResiduals := MB.ItemByIdNamespace("VAR_RESIDUALS", MsDescrKey).Edit As IMsVariableStub;

    SerForecast := MB.ItemByIdNamespace("VAR_FORECAST", MsDescrKey).Edit As IMsVariableStub;

    SerFitted := MB.ItemByIdNamespace("VAR_FITTED", MsDescrKey).Edit As IMsVariableStub;

    SerLowerConfLevel := MB.ItemByIdNamespace("VAR_LOWER_CONF_LEVEL", MsDescrKey).Edit As IMsVariableStub;

    SerUpperConfLevel := MB.ItemByIdNamespace("VAR_UPPER_CONF_LEVEL", MsDescrKey).Edit As IMsVariableStub;

    SerDynLowerConfLevel := MB.ItemByIdNamespace("VAR_DYN_LOWER_CONF_LEVEL", MsDescrKey).Edit As IMsVariableStub;

    SerDynUpperConfLevel := MB.ItemByIdNamespace("VAR_DYN_UPPER_CONF_LEVEL", MsDescrKey).Edit As IMsVariableStub;

    // Получение модели

    Model := MB.ItemByIdNamespace("MODEL_GREY", MsDescrKey).Edit As IMsModel;

    ModelTrans := Model.Transform;

    // Настройка параметров расчета модели

    Formula := ModelTrans.FormulaItem(0);

    Grey := Formula.Method As IMsGreyForecastTransform;

    MethodSeries := Grey.Series;

    TermInfo := ModelTrans.CreateTermInfo;

    // Задаем ряды, в которые будут выгружаться результаты расчета

    Series := ModelTrans.Series;

    // Входной ряд

    Ser := Series.Add(SerInput As IVariableStub);

    TermInfo.Slice := Ser.Slices.Add(Null);

    MethodSeries.Input := TermInfo;

    // Ряд остатков

    Ser := Series.Add(SerResiduals As IVariableStub);

    TermInfo.Slice := Ser.Slices.Add(Null);

    MethodSeries.Residuals := TermInfo;

    // Прогнозный ряд

    Ser := Series.Add(SerForecast As IVariableStub);

    TermInfo.Slice := Ser.Slices.Add(Null);

    MethodSeries.Forecast := TermInfo;

    // Модельный ряд

    Ser := Series.Add(SerFitted As IVariableStub);

    TermInfo.Slice := Ser.Slices.Add(Null);

    MethodSeries.Fitted := TermInfo;

    // Нижняя доверительная граница

    Ser := Series.Add(SerLowerConfLevel As IVariableStub);

    TermInfo.Slice := Ser.Slices.Add(Null);

    MethodSeries.LowerConfidenceLevel := TermInfo;

    // Верхняя доверительная граница

    Ser := Series.Add(SerUpperConfLevel As IVariableStub);

    TermInfo.Slice := Ser.Slices.Add(Null);

    MethodSeries.UpperConfidenceLevel := TermInfo;

    // Нижняя динамическая доверительная граница

    Ser := Series.Add(SerDynLowerConfLevel As IVariableStub);

    TermInfo.Slice := Ser.Slices.Add(Null);

    MethodSeries.DynamicLowerConfidenceLevel := TermInfo;

    // Верхняя динамическая доверительная граница

    Ser := Series.Add(SerDynUpperConfLevel As IVariableStub);

    TermInfo.Slice := Ser.Slices.Add(Null);

    MethodSeries.DynamicUpperConfidenceLevel := TermInfo;

    // Сохраняем параметры расчета модели

    (Model As IMetabaseObject).Save;

    // Рассчитываем модель

    ModelCalc := ModelTrans.CreateCalculation;

    CalcPeriod := ModelCalc.Period;

    CalcPeriod.IdentificationStartDate := Model.Transform.Period.IdentificationStartDate;

    CalcPeriod.IdentificationEndDate := Model.Transform.Period.IdentificationEndDate;

    CalcPeriod.ForecastStartDate := Model.Transform.Period.ForecastStartDate;

    CalcPeriod.ForecastEndDate := Model.Transform.Period.ForecastEndDate;

    Coord := ModelTrans.CreateCoord(Null);

    Grey.Execute(ModelCalc, Coord);

    Problem := MB.ItemByIdNamespace("PROBLEM_GREY", MsDescrKey).Bind As IMsProblem;

    CalcSett := Problem.CreateCalculationSettings;

    Calculation := Problem.Calculate(CalcSett);

    Calculation.Run;

    // Выводим ряды, которые были рассчитаны

    Debug.WriteLine("Для модели доступны следующие ряды:");

    If MethodSeries.IsAvailable(MsMethodSeriesType.Input) Then

        TermText := MethodSeries.SeriesByType(MsMethodSeriesType.Input).TermText;

        Debug.WriteLine("    Входной ряд - " + TermText);

    End If;

    If MethodSeries.IsAvailable(MsMethodSeriesType.Fitted) Then

        TermText := MethodSeries.SeriesByType(MsMethodSeriesType.Fitted).TermText;

        Debug.WriteLine("    Модельный ряд - " + TermText);

    End If;

    If MethodSeries.IsAvailable(MsMethodSeriesType.Forecast) Then

        TermText := MethodSeries.SeriesByType(MsMethodSeriesType.Forecast).TermText;

        Debug.WriteLine("    Прогнозный ряд - " + TermText);

    End If;

    If MethodSeries.IsAvailable(MsMethodSeriesType.Residuals) Then

        TermText := MethodSeries.SeriesByType(MsMethodSeriesType.Residuals).TermText;

        Debug.WriteLine("    Ряд остатков - " + TermText);

    End If;

    If MethodSeries.IsAvailable(MsMethodSeriesType.LowerConfidenceLevel) Then

        TermText := MethodSeries.SeriesByType(MsMethodSeriesType.LowerConfidenceLevel).TermText;

        Debug.WriteLine("    Нижняя доверительная граница - " + TermText);

    End If;

    If MethodSeries.IsAvailable(MsMethodSeriesType.UpperConfidenceLevel) Then

        TermText := MethodSeries.SeriesByType(MsMethodSeriesType.UpperConfidenceLevel).TermText;

        Debug.WriteLine("    Верхняя доверительная граница - " + TermText);

    End If;

    If MethodSeries.IsAvailable(MsMethodSeriesType.DynamicLowerConfidenceLevel) Then

        TermText := MethodSeries.SeriesByType(MsMethodSeriesType.DynamicLowerConfidenceLevel).TermText;

        Debug.WriteLine("    Нижняя дин. доверительная граница - " + TermText);

    End If;

    If MethodSeries.IsAvailable(MsMethodSeriesType.DynamicUpperConfidenceLevel) Then

        TermText := MethodSeries.SeriesByType(MsMethodSeriesType.DynamicUpperConfidenceLevel).TermText;

        Debug.WriteLine("    Верхняя дин. доверительная граница - " + TermText);

    End If;

End Sub UserProc;


В результате выполнения примера будут определены переменные, в которые
 выгружаются ряды, используемые при расчете модели. Модель будет рассчитана.
 Наименования рядов, полученных после расчета, будут выведены в окно консоли.
 Например:


    Для модели доступны следующие ряды:

        Входной ряд - VAR_INPUT[t]

        Модельный ряд - VAR_FITTED[t]

        Прогнозный ряд - VAR_FORECAST[t]

        Ряд остатков - VAR_RESIDUALS[t]

        Нижняя доверительная граница - VAR_LOWER_CONF_LEVEL[t]

        Верхняя доверительная граница - VAR_UPPER_CONF_LEVEL[t]


См. также:


[IMsMethod](IMsMethod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
