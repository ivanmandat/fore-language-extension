# IMsBreakpoints.Add

IMsBreakpoints.Add
-


# IMsBreakpoints.Add


## Синтаксис


		Add(Kind: [MsBreakpointKind](../../Enums/MsBreakpointKind.htm)):
		 [IMsBreakpoint](../IMsBreakpoint/IMsBreakpoint.htm);


## Параметры


Kind. Тип добавляемой точки
 останова.


## Описание


Метод Add осуществляет добавление
 точки в коллекцию.


## Комментарии


После выполнения метод возвращает добавленную точку останова. Точка
 добавляется в конец коллекции, при этом значение свойства [IMsBreakpoints.Count](IMsBreakpoints.Count.htm) увеличивается
 на единицу.


Для работы с основными параметрами точки останова можно использовать
 базовый интерфейс [IMsBreakpoint](../IMsBreakpoint/IMsBreakpoint.htm).
 Чтобы настроить специфические параметры календарной точки останова приведите
 базовый интерфейс к интерфейсу [IMsModelCalendarBreakpoint](../IMsModelCalendarBreakpoint/IMsModelCalendarBreakpoint.htm)
 (значение параметра Kind - [MsBreakpointKind.ModelCalendar](../../Enums/MsBreakpointKind.htm)).
 Для работы с точкой останова, установленной в данных, приведите базовый
 интерфейс к интерфейсу [IMsDataBreakpoint](../IMsDataBreakpoint/IMsDataBreakpoint.htm)
 (значение параметра Kind - [MsBreakpointKind.Data](../../Enums/MsBreakpointKind.htm)).


## Пример


Использование свойства приведено в примере для [IMsDataBreakpoint.Condition](../IMsDataBreakpoint/IMsDataBreakpoint.Condition.htm).


См. также:


[IMsBreakpoints](IMsBreakpoints.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
