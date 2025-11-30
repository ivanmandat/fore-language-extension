# IPivotHeaderNumbering.ConsiderHeader

IPivotHeaderNumbering.ConsiderHeader
-


# IPivotHeaderNumbering.ConsiderHeader


## Синтаксис


ConsiderHeader: Boolean;


## Описание


Свойство ConsiderHeader определяет,
 будут ли при расчёте номера строки/столбца учитываться строки/столбцы,
 расположенные в уголке.


## Комментарии


Допустимые значения:


	- True. Учитывать количество
	 строк/столбцов, расположенных в заголовке. Например, если заголовок
	 строк состоит из двух измерений, то нумерация строк начнётся с трёх.


	- False. Не учитывать
	 строки/столбцы, расположенные в заголовке. Нумерация всегда начинается
	 с единицы. Значение по умолчанию.


Свойство актуально, если свойству [IsOn](IPivotHeaderNumbering.IsOn.htm)
 установлено значение True.


## Пример


Пример использования приведен в описании свойства [IPivotHeaderNumbering.IsOn](IPivotHeaderNumbering.IsOn.htm).


См. также:


[IPivotHeaderNumbering](IPivotHeaderNumbering.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
