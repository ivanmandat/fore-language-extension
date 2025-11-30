# Sparkline.UsePeakValuesToColumns

Sparkline.UsePeakValuesToColumns
-


# Sparkline.UsePeakValuesToColumns


## Синтаксис


UsePeakValuesToColumns: Boolean


## Описание


Свойство UsePeakValuesToColumns
 определяет отрисовку столбцов спарклайна.


## Комментарии


Допустимые значения:


	- true.
	 Столбцы будут отрисовываться для максимальных
	 значений (по умолчанию);


	- false.
	 Столбцы будут отрисовываться для всех значений.


Все точки спарклайна разделяются на несколько групп, из каждой группы
 берется максимальное значение, для которого строится столбец. Столбец
 будет построен согласно точкам группы, которые он объединяет.


Значение свойства устанавливается из JSON и с помощью метода setUsePeakValuesToColumns,
 а возвращается с помощью метода getUsePeakValuesToColumns.


## Пример


Пример использования свойства приведен на странице «[Пример
 создания компонента Sparkline](../../Components/Sparkline/Example_Sparkline.htm)».


См. также:


[Sparkline](Sparkline.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
