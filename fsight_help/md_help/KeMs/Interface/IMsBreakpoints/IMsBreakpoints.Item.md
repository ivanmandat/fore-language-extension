# IMsBreakpoints.Item

IMsBreakpoints.Item
-


# IMsBreakpoints.Item


## Синтаксис


		Item(Index: Integer): [IMsBreakpoint](../IMsBreakpoint/IMsBreakpoint.htm);


## Параметры


Index. Индекс точки останова
 в коллекции.


## Описание


Свойство Item возвращает точку
 из коллекции по её индексу.


## Комментарии


Данное свойство обеспечивает возможность
 доступа к определённой точке из коллекции. Значение параметра Index
 должно быть неотрицательным числом, но меньше значения свойства [IMsBreakpoints.Count](IMsBreakpoints.Count.htm). Индекс первого
 элемента в коллекции - «0», последнего - «[IMsBreakpoints.Count](IMsBreakpoints.Count.htm)
 - 1». Нумерация индексов - сквозная.


## Пример


Использование свойства приведено в примере для [IMsBreakpoint.Enable](../IMsBreakpoint/IMsBreakpoint.Enable.htm).


См. также:


[IMsBreakpoints](IMsBreakpoints.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
