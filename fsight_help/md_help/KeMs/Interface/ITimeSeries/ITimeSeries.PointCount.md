# ITimeSeries.PointCount

ITimeSeries.PointCount
-


# ITimeSeries.PointCount


## Синтаксис


PointCount: Integer;


## Описание


Свойство PointCount
 возвращает количество точек ряда.


## Комментарии


Свойство PointCount рассчитывается
 как m-1, где m
 - это максимальное число точек, которое загружается перед расчетом задачи.
 Перед загрузкой даты расчета задачи расширяются на один год с обеих сторон,
 поэтому свойство PointCount не
 предназначено для получения количества дат расчета.


Для получения количества дат расчета ряда используйте формулу: [ITimeSeries.EndIndex](ITimeSeries.EndIndex.htm) - [ITimeSeries.StartIndex](ITimeSeries.StartIndex.htm) + 1.


## Пример


В данном примере описан пользовательский метод. Ряд данных передается
 поточечно.


Добавьте ссылки на системные сборки: MathFin, Ms.


	Public Function UserFuncP(Input: ITimeSeries): Double;

	Var

	    i: Integer;

	Begin

	    If Input.PointCount > 0 Then

	        i := Input.CurrentIndex;

	        Return Math.Log10(Input.Item(i));

	    Else Return Double.Nan;

	    End If;

	End Function UserFuncP;


Метод возвращает десятичный логарифм ряда.


См. также:


[ITimeSeries](ITimeSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
