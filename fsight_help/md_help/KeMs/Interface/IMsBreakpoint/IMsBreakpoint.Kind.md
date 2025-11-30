# IMsBreakpoint.Kind

IMsBreakpoint.Kind
-


# IMsBreakpoint.Kind


## Синтаксис


		Kind: [MsBreakpointKind](../../Enums/MsBreakpointKind.htm);


## Описание


Свойство Kind
 возвращает тип точки останова.


## Комментарии


Тип точки останова задается при её создании (метод [IMsBreakpoints.Add](../IMsBreakpoints/IMsBreakpoints.Add.htm))
 и в дальнейшем не может быть изменён. Для работы с различными типами точек
 предусмотрены интерфейсы, являющиеся потомками [IMsBreakpoint](IMsBreakpoint.htm):


	- [IMsModelCalendarBreakpoint](../IMsModelCalendarBreakpoint/IMsModelCalendarBreakpoint.htm).
	 Предназначен для работы с календарными точками останова.


	- [IMsDataBreakpoint](../IMsDataBreakpoint/IMsDataBreakpoint.htm).
	 Предназначен для работы с точками останова в данных.


## Пример


Использование свойства приведено в примере для [IMsProblemCalculationCallback.OnBreak](../IMsProblemCalculationCallback/IMsProblemCalculationCallback.OnBreak.htm).


См. также:


[IMsBreakpoint](IMsBreakpoint.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
