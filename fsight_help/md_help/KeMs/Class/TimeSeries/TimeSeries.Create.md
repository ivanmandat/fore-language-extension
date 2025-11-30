# TimeSeries.Create

TimeSeries.Create
-


# TimeSeries.Create


## Синтаксис


Create;


## Описание


Конструктор Create создаёт
 ряд данных.


## Комментарии


Для создания ряда данных с учётом дополнительных параметров используйте
 конструкторы [TimeSeries.CreateEx](TimeSeries.CreateEx.htm)
 и [TimeSeries.CreateLevel](TimeSeries.CreateLevel.htm).


## Пример


В примере приведен пользовательский векторный метод расчета. Для выполнения
 примера добавьте ссылки на системную сборку «Ms».


			Function TimeFunc(Input: ITimeSeries): ITimeSeries;

Var

    i: Integer;

    pSeries: ITimeSeries;

Begin

    pSeries := New TimeSeries.Create;

    If pSeries.CheckCompatible(Input, True) Then

        For i := pSeries.StartIndex To pSeries.EndIndex Do

            pSeries.Item(i) := 1 + Input.Item(i);

        End For;

    End If;

    Return pSeries;

End Function TimeFunc;


Метод выполняет увеличение значений входного ряда, если он совместим
 с контекстом пользовательского метода расчета.


См. также:


[TimeSeries](TimeSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
