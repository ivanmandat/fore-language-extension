# ITsCalculationContext.ParamValues

ITsCalculationContext.ParamValues
-


# ITsCalculationContext.ParamValues


## Синтаксис


ParamValues: [ITsModelParamValues](../ITsModelParamValues/ITsModelParamValues.htm);


## Описание


Свойство ParamValues возвращает
 коллекцию значений параметров, доступных в пользовательском методе расчета.


## Комментарии


Параметры доступны, если их содержит рассчитываемая модель.


## Пример


В пример приведен пользовательский метод расчета.


Добавьте ссылки на системные сборки: Dal, Ms, Transform.


			Function UserFunction(Input: ITimeSeries): Variant;

Var

    pContext: ITsCalculationContext;

    i, k: Integer;

    pParVals: ITsModelParamValues;

    pParVal: ITsModelParamValue;

Begin

    // Получаем контекст пользовательского метода расчета

    pContext := TsCalculation.Current;

    pParVals := pContext.ParamValues;

    // Если в расчете доступны числовые параметры,

    // то увеличиваем значение наблюдений на значение параметра

    If (pParVals <> Null) And (pParVals.Count > 0) Then

        For i := 0 To pParVals.Count - 1 Do

            pParVal := pParVals.Item(i);

            If (pParVal.DataType = DbDataType.Float) Or (pParVal.DataType = DbDataType.Integer) Then

                For k := Input.StartIndex To Input.EndIndex Do

                    Input.Item(k) := Input.Item(k) + pParVal.Value;

                End For;

            End If;

        End For;

    // Если параметры отсутствуют, то заполняем ряд нулями

    Else

        For k := Input.StartIndex To Input.EndIndex Do

            Input.Item(k) := 0;

        End For;

    End If;

    // Возвращаем изменённый ряд

    Return Input;

End Function UserFunction;


Если в расчете доступны числовые параметры,
 то метод увеличивает значение наблюдений входного ряда на значение параметра,
 если параметры отсутствуют, то заполняет ряд нулями.


См. также:


[ITsCalculationContext](ITsCalculationContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
