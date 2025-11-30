# IMsModelCalendarBreakpoint

IMsModelCalendarBreakpoint
-


# IMsModelCalendarBreakpoint


## Описание


Интерфейс IMsModelCalendarBreakpoint
 содержит свойства и методы для работы с точкой останова, срабатывающей
 на заданную календарную точку расчета.


## Комментарии


Точка останова срабатывает, если модель, определяемая свойством [IMsModelCalendarBreakpoint.Model](IMsModelCalendarBreakpoint.Model.htm),
 рассчитывается в календарной точке, заданной свойством [IMsModelCalendarBreakpoint.CalendarPoint](IMsModelCalendarBreakpoint.CalendarPoint.htm).
 Если точка останова сработала, то генерируется событие [IMsProblemCalculationCallback.OnBreak](../IMsProblemCalculationCallback/IMsProblemCalculationCallback.OnBreak.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CalendarPoint](IMsModelCalendarBreakpoint.CalendarPoint.htm)
		 Свойство CalendarPoint
		 определяет календарную точку срабатывания точки останова.


		 ![](../../Property_Image.gif)
		 [IsCalendarPointFixed](IMsModelCalendarBreakpoint.IsCalendarPointFixed.htm)
		 Свойство IsCalendarPointFixed
		 возвращает признак того, определена ли календарная точка для точки
		 останова.


		 ![](../../Property_Image.gif)
		 [Model](IMsModelCalendarBreakpoint.Model.htm)
		 Свойство Model определяет
		 модель, для которой устанавливается точка останова.


## Методы


		 Имя свойства
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [RemoveCalendarPointFix](IMsModelCalendarBreakpoint.RemoveCalendarPointFix.htm)
		 Метод RemoveCalendarPointFix
		 сбрасывает календарную точку для точки останова.


## Свойства, унаследованные от [IMsBreakpoint](../IMsBreakpoint/IMsBreakpoint.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Enable](../IMsBreakpoint/IMsBreakpoint.Enable.htm)


		 Свойство Enable определяет
		 признак доступности точки останова.


		 ![](../../Property_Image.gif)
		 [Key](../IMsBreakpoint/IMsBreakpoint.Key.htm)


		 Свойство Key возвращает
		 ключ точки останова.


		 ![](../../Property_Image.gif)
		 [Kind](../IMsBreakpoint/IMsBreakpoint.Kind.htm)


		 Свойство Kind возвращает
		 тип точки останова.


		 ![](../../Property_Image.gif)
		 [Name](../IMsBreakpoint/IMsBreakpoint.Name.htm)


		 Свойство Name определяет
		 наименование точки останова.


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
