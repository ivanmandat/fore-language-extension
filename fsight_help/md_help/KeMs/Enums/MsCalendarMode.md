# MsCalendarMode

MsCalendarMode
-


# MsCalendarMode


## Описание


Перечисление MsCalendarMode
 используется для определения способа расчета календарных элементов в табличном
 визуализаторе.


Используется следующими свойствами:


	- [IMsFormulaTransform.CalendarMode](../Interface/IMsFormulaTransform/IMsFormulaTransform.CalendarMode.htm);


	- [IMsFormulaTransformSlice.CalendarMode](../Interface/IMsFormulaTransformSlice/IMsFormulaTransformSlice.CalendarMode.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 Normal. Стандартный
		 расчет по датам. Итерации выполняются с даты начала до даты конца
		 расчета.


		 1
		 IterateElements. Используется,
		 если в календарном измерении есть вычисляемые элементы. Итерации
		 выполняются не по датам, а по элементам календарного измерения.


		 2
		 CalendarElement. Рассчитывается
		 вычисляемый элемент календаря. Расчет выполняется как в Normal или как в IterateElements, но для
		 результата берётся только одна календарная точка.


		 4
		 ManualRemovedCalendar.
		 Не используется. Пользователь указал, что календаря нет и календарь
		 используется в качестве обычного измерения.


См. также:


[Перечисления
 сборки Ms](KeMs_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
