# ITsCalculationContext.CalculationType

ITsCalculationContext.CalculationType
-


# ITsCalculationContext.CalculationType


## Синтаксис


CalculationType: [TsCalculationType](../../Enums/TsCalculationType.htm);


## Описание


Свойство CalculationType возвращает
 режим расчета пользовательского метода.


## Комментарии


Если применяется поточечный расчет, т.е. CalculationType
 = TsCalculationType.Pointwise, то пользовательский метод выполняется
 для каждого наблюдения ряда. Если используется векторный расчет, т.е.
 CalculationType = TsCalculationType.Series,
 то метод выполняется для всего ряда в целом.


## Пример


В данном примере приведен пользовательский метод расчета. Для выполнения
 примера добавьте ссылки на системные сборки «Metabase», «Ms», «Transform».


			Public Function CalculateSomething: Variant;

Var

    pContext: ITsCalculationContext;

    i: Integer;

    pSeries: ITimeSeries;

Begin

    pContext := TsCalculation.Current;

    pContext.Tag := pContext.ParentObject.Name;

    pSeries := pContext.CreateTimeSeries;

    If pContext.CalculationType = TsCalculationType.Series Then

        pContext.RaiseMessage("Векторный режим");

        If pSeries.CalcPointCount < 25 Then

            If pSeries.CalcPointCount < 15 Then

                pContext.RaiseError("Число наблюдений недостаточно. Расчет не может быть произведен");

            Else

                pContext.RaiseWarning("Число наблюдений мало. Могут быть получены недостоверные данные");

            End If;

        End If;

        For i := pSeries.StartIndex To pSeries.EndIndex Do

            pSeries.Item(i) := 1 / i;

        End For;

        Return pSeries;

    Else

        If pContext.CalculationDirection = TsCalculationDirection.Forward Then

            pContext.RaiseMessage("Поточечный режим (вперед)");

        Else

            pContext.RaiseMessage("Поточечный режим (назад)");

        End If;

        If pSeries.CalcPointCount < 25 Then

            If pSeries.CalcPointCount < 15 Then

                pContext.RaiseError("Число наблюдений недостаточно. Расчет не может быть произведен");

            Else

                pContext.RaiseWarning("Число наблюдений мало. Могут быть получены недостоверные данные");

            End If;

        End If;

        i := pSeries.CurrentIndex;

        pSeries.Item(i) := 1 / i;

        Return pSeries.Item(i);

    End If;

End Function CalculateSomething;


Метод вычисляет значения на основании индекса наблюдения. Метод работает,
 как в векторном, так и в поточечном режимах. Режим расчета выводится в
 сообщении. Если число наблюдений меньше 25, то выводится предупреждение.
 Если число наблюдений меньше 15, то выводится ошибка и метод не рассчитывается.


См. также:


[ITsCalculationContext](ITsCalculationContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
