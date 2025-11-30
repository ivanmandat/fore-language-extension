# ITimeSeries.CalendarLevel

ITimeSeries.CalendarLevel
-


# ITimeSeries.CalendarLevel


## Синтаксис


CalendarLevel: [DimCalendarLevel](KeDims.chm::/Enums/DimCalendarLevel.htm);


## Описание


Свойство CalendarLevel
 возвращает календарную динамику ряда.


## Пример


В данном примере описан пользовательский метод. Ряд данных передается
 поточечно.


Добавьте ссылки на системные сборки: Dimension, MathFin, Ms.


			Public Function UserFunc(Input: ITimeSeries): Double;

Var

    i: Integer;

Begin

    i := Input.CurrentIndex;

    If Input.CalendarLevel = DimCalendarLevel.Year

        Then Return Math.Log10(Input.Item(i));

        Else Return Double.Nan

    End If;

End Function UserFunc;


Метод возвращает натуральный логарифм ряда, если он содержит годовую
 календарную динамику.


См. также:


[ITimeSeries](ITimeSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
