# IMsBreakpoint

IMsBreakpoint
-


# IMsBreakpoint


Сборка: Ms;


## Описание


Интерфейс IMsBreakpoint содержит
 свойства для работы с точкой останова.


## Иерархия наследования


           IMsBreakpoint


## Комментарии


Точки останова используются при расчёте задачи моделирования для её
 отладки. Данный интерфейс является базовым для следующих, реализующих
 различные виды точек останова:


	- [IMsModelCalendarBreakpoint](../IMsModelCalendarBreakpoint/IMsModelCalendarBreakpoint.htm).
	 Предназначен для работы с календарными точками останова.


	- [IMsDataBreakpoint](../IMsDataBreakpoint/IMsDataBreakpoint.htm).
	 Предназначен для работы с точками останова в данных.


Тип точки останова задаётся при её создании (метод [IMsBreakpoints.Add](../IMsBreakpoints/IMsBreakpoints.Add.htm))
 и в дальнейшем не может быть изменён.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Enable](IMsBreakpoint.Enable.htm)


		 Свойство Enable определяет
		 признак доступности точки останова.


		 ![](../../Property_Image.gif)
		 [Key](IMsBreakpoint.Key.htm)


		 Свойство Key возвращает
		 ключ точки останова.


		 ![](../../Property_Image.gif)
		 [Kind](IMsBreakpoint.Kind.htm)


		 Свойство Kind возвращает
		 тип точки останова.


		 ![](../../Property_Image.gif)
		 [Name](IMsBreakpoint.Name.htm)


		 Свойство Name определяет
		 наименование точки останова.


См. также:


[Интерфейсы
 сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
