# ICalendarDimensionClass

ICalendarDimensionClass
-


# ICalendarDimensionClass


Сборка: Cubes;


## Описание


Интерфейс ICalendarDimensionClass
 содержит статические методы класса [CalendarDimension](../../Class/CalendarDimension/CalendarDimension.htm).


## Иерархия наследования


           ICalendarDimensionClass


## Комментарии


Статические методы класса [CalendarDimension](../../Class/CalendarDimension/CalendarDimension.htm)
 предназначены для формирования функций, по которым рассчитываются [отношения](UiNavObj.chm::/Cube/CreateCube/Master_Standart/UiMd_Cube_CreateCube_Master_Standart_4.htm) в
 стандартном кубе. Функция должна возвращать целочисленное значение.


Формат вызова функции: [Идентификатор модуля/формы].[Наименование функции].
 Например:


MyModule.MyFunc(T);


Для выполнения расчёта относительно текущего элемента используйте параметр
 «Т».


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Day](ICalendarDimensionClass.Day.htm)


		 Метод Day возвращает
		 индекс элемента, соответствующий началу календарного периода,
		 в который входит указанный элемент.


		 ![](../../Sub_Image.gif)
		 [DownLevel](ICalendarDimensionClass.DownLevel.htm)


		 Метод DownLevel возвращает
		 индекс элемента, являющегося родительским для указанного элемента.


		 ![](../../Sub_Image.gif)
		 [HalfYear](ICalendarDimensionClass.HalfYear.htm)


		 Метод HalfYear возвращает
		 индекс элемента, соответствующий полугодию, в которое входит указанный
		 элемент.


		 ![](../../Sub_Image.gif)
		 [IifLevel](ICalendarDimensionClass.IifLevel.htm)


		 Метод IifLevel проверяет:
		 принадлежит ли указанный элемент заданному уровню справочника.


		 ![](../../Sub_Image.gif)
		 [Level](ICalendarDimensionClass.Level.htm)


		 Метод Level возвращает
		 уровень справочника, на котором расположен указанный элемент.


		 ![](../../Sub_Image.gif)
		 [Month](ICalendarDimensionClass.Month.htm)


		 Метод Month возвращает
		 индекс элемента, соответствующий месяцу, в который входит указанный
		 элемент.


		 ![](../../Sub_Image.gif)
		 [NineMonths](ICalendarDimensionClass.NineMonths.htm)


		 Метод NineMonths возвращает
		 индекс элемента, соответствующий периоду «9 месяцев», в который
		 входит указанный элемент.


		 ![](../../Sub_Image.gif)
		 [Quarter](ICalendarDimensionClass.Quarter.htm)


		 Метод Quarter возвращает
		 индекс элемента, соответствующий кварталу, в который входит указанный
		 элемент.


		 ![](../../Sub_Image.gif)
		 [Shift](ICalendarDimensionClass.Shift.htm)


		 Метод Shift возвращает
		 индекс элемента, полученного путем смещения относительно указанного
		 элемента.


		 ![](../../Sub_Image.gif)
		 [ShiftLevel](ICalendarDimensionClass.ShiftLevel.htm)


		 Метод ShiftLevel возвращает
		 индекс элемента, полученного путем смещения относительно указанного
		 элемента на заданном уровне.


		 ![](../../Sub_Image.gif)
		 [ToLevel](ICalendarDimensionClass.ToLevel.htm)


		 Метод ToLevel возвращает
		 индекс элемента, соответствующего указанному элементу на заданном
		 уровне.


		 ![](../../Sub_Image.gif)
		 [UpLevel](ICalendarDimensionClass.UpLevel.htm)


		 Метод UpLevel возвращает
		 индекс элемента, являющегося дочерним для указанного элемента.


		 ![](../../Sub_Image.gif)
		 [Year](ICalendarDimensionClass.Year.htm)


		 Метод Year возвращает
		 индекс элемента, соответствующий году, в который входит указанный
		 элемент.


См. также:


[Интерфейсы сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
