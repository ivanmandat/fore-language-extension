# IMDCalculationCalculateArgs.RecursionEnabled

IMDCalculationCalculateArgs.RecursionEnabled
-


# IMDCalculationCalculateArgs.RecursionEnabled


## Синтаксис


RecursionEnabled: [TriState](ForeSys.chm::/Enums/TriState.htm);


## Описание


Свойство RecursionEnabled возвращает
 признак доступности использовать рекурсию в формулах.


## Комментарии


Рекурсия в формулах доступна, в случае если:


	- значения источника и приёмника хранятся в одной и
	 той же таблице;


	- источник и приёмник имеют одинаковую структуру;


	- в настройках многомерного расчета для источника и
	 приёмника фиксированные и свободные измерения совпадают.


Примечание.
 Нельзя рассчитать рекурсию, если в качестве источника данных выбран запрос.


## Пример


Использование свойства приведено в примере для [IMDCalculationCalculateArgs.Recursion](IMDCalculationCalculateArgs.Recursion.htm).


См. также:


[IMDCalculationCalculateArgs](IMDCalculationCalculateArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
