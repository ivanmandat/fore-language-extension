# MsHolidayAdjustment

MsHolidayAdjustment
-


# MsHolidayAdjustment


## Описание


Перечисление MsHolidayAdjustment
 содержит типы поправки на праздничные дни.


Используется следующими свойствами и методами:


	- [IModelling.X11](../Interface/IModelling/IModelling.X11.htm).


Примечание.
 Метод X11 поддерживается только в ОС Windows.


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 None. Поправка не производится.


		 1
		 Easter. Поправка только
		 на Пасху.


		 2
		 EasterLaborDayThanksgiving.
		 Поправка на Пасху, День труда, День благодарения.


		 3
		 UseFisherCriterion.
		 Поправка по критерию Фишера.


## Комментарии


Поправка на праздничные дни применяется в методе сезонной декомпозиции
 (X11) и позволяет повысить точность расчетов.


См. также:


[Перечисления сборки Ms](KeMs_Enums.htm) |
 Метод «[X11](Lib.chm::/02_Time_series_analysis/UiModelling_Census2.htm)»


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
