# ITimeSeries.CurrentDate

ITimeSeries.CurrentDate
-


# ITimeSeries.CurrentDate


## Синтаксис


CurrentDate: [DateTime](ForeSys.chm::/Class/DateTime/DateTime.htm);


## Описание


Свойство CurrentDate
 возвращает текущую календарную точку ряда.


## Пример


В данном примере описан пользовательский метод. Ряд данных передается
 поточечно.


Добавьте ссылки на системные сборки: MathFin, Ms.


			Public Function UserFunc(Input: ITimeSeries): Double;

Var

    i: Integer;

Begin

    i := Input.CurrentIndex;

    If Input.CurrentDate < DateTime.Now

        Then Return Math.Log10(Input.Item(i));

        Else Return Double.Nan

    End If;

End Function UserFunc


Метод возвращает натуральный логарифм для точек ряда до текущей даты.


См. также:


[ITimeSeries](ITimeSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
