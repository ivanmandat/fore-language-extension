# ITimeSeries.IsEmpty

ITimeSeries.IsEmpty
-


# ITimeSeries.IsEmpty


## Синтаксис


IsEmpty: Boolean;


## Описание


Свойство IsEmpty возвращает
 признак пустоты ряда.


## Комментарии


Допустимые значения:


	- True. Ряд пустой;


	- False. Ряд содержит
	 данные.


## Пример


В примере приведен пользовательский векторный метод расчета.


Добавьте ссылки на системные сборки: MathFin, Ms, Transform.


			Function IsEmpty(Input: ITimeSeries): ITimeSeries;

Var

    TsCalc: TsCalculation;

    pContext: ITsCalculationContext;

    i: Integer;

    Output: ITimeSeries;

Begin

    // Проверяем, пустой ли входной ряд

    If Not Input.IsEmpty

        // Если ряд не пустой, то вычисляем его десятичный логарифм

        Then

        TsCalc := New TsCalculation.Create;

            pContext := TsCalc.Current;

            Output := pContext.CreateTimeSeries;

            For i := Input.StartIndex To Input.EndIndex Do

                Output(i) := Math.Log10(Input(i));

            End For;

            // Возвращаем результаты вычислений

            Return Output;

        // Если ряд пустой, то возвращаем его без изменений

        Else

            Return Input;

    End If;

End Function IsEmpty;


Метод вычисляет десятичный логарифм ряда, если ряд содержит данные.


См. также:


[ITimeSeries](ITimeSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
