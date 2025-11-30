# IMsDataBreakpoint

IMsDataBreakpoint
-


# IMsDataBreakpoint


Сборка: Ms;


## Описание


Интерфейс IMsDataBreakpoint
 содержит свойства для работы с точкой останова, срабатывающей на определённое
 значение в данных.


## Иерархия наследования


           [IMsBreakpoint](../IMsBreakpoint/IMsBreakpoint.htm)


           IMsDataBreakpoint


## Комментарии


Точка останова срабатывает, если данные в определённой точке удовлетворяют
 заданному условию. Точки данных, в которых проверяется условие, определяются
 значениями свойств [IMsDataBreakpoint.Variable](IMsDataBreakpoint.Variable.htm)
 и [IMsDataBreakpoint.Selection](IMsDataBreakpoint.Selection.htm).
 Если точка останова сработала, то генерируется событие [IMsProblemCalculationCallback.OnBreak](../IMsProblemCalculationCallback/IMsProblemCalculationCallback.OnBreak.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Condition](IMsDataBreakpoint.Condition.htm)
		 Свойство Condition
		 возвращает условие срабатывания точки останова.


		 ![](../../Property_Image.gif)
		 [Selection](IMsDataBreakpoint.Selection.htm)
		 Свойство Selection
		 определяет отметку элементов источника данных.


		 ![](../../Property_Image.gif)
		 [Variable](IMsDataBreakpoint.Variable.htm)
		 Свойство Variable определяет
		 источник данных.


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
