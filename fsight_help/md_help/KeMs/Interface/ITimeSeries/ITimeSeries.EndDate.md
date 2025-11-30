# ITimeSeries.EndDate

ITimeSeries.EndDate
-


# ITimeSeries.EndDate


## Синтаксис


EndDate: [DateTime](ForeSys.chm::/Class/DateTime/DateTime.htm);


## Описание


Свойство EndDate
 возвращает конечную календарную точку ряда.


## Пример


В данном примере описан пользовательский метод. Ряд данных передается
 поточечно.


Добавьте ссылки на системные сборки: MathFin, Ms.


			Public Function UserFunc(Input: ITimeSeries): Double;

Begin

    If Input.EndDate > DateTime.Now

        Then Return Math.Log10(Input.CurrentValue);

        Else Return Double.Nan

    End If;

End Function UserFunc;


Метод возвращает натуральный логарифм ряда, если его конечная календарная
 точка больше текущей даты.


См. также:


[ITimeSeries](ITimeSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
