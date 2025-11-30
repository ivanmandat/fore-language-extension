# Census2HolidayAdjType

Census2HolidayAdjType
-


# Census2HolidayAdjType


## Описание


Перечисление Census2HolidayAdjType
 содержит типы поправки на праздничные дни.


Примечание.
 Метод X12 поддерживается только в ОС Windows.


Используется следующими свойствами и методами:


	- [IMsCensus2Transform.HolidayAdj](KeMs.chm::/Interface/IMsCensus2Transform/IMsCensus2Transform.HolidayAdj.htm);


	- [ISmCensus2.Holday](../Interface/ISmCensus2/ISmCensus2.Holday.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 ![](../Element%20Enums.gif)
		 0
		 C2hatNone. Поправка
		 не производится.


		 ![](../Element%20Enums.gif)
		 1
		 C2hatEaster. Поправка
		 только на Пасху.


		 ![](../Element%20Enums.gif)
		 2
		 C2hatAll. Поправка
		 на Пасху, День труда, День благодарения.


		 ![](../Element%20Enums.gif)
		 3
		 C2hatFactors. Поправка
		 по критерию Фишера.


## Комментарии


Поправка на праздничные дни применяется в методе сезонной декомпозиции
 «X11» и позволяет повысить точность расчетов.


См. также:


[Перечисления
 сборки Stat](StatLib_Enums.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
