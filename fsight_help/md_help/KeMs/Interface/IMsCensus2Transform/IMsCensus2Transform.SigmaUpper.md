# IMsCensus2Transform.SigmaUpper

IMsCensus2Transform.SigmaUpper
-


# IMsCensus2Transform.SigmaUpper


## Синтаксис


		SigmaUpper: Double;


## Описание


Свойство SigmaUpper определяет
 верхнюю границу сигма.


## Комментарии


Большинство реальных временных рядов содержит выбросы. Они могут исказить
 оценки сезонности и тренда. Метод [X11](Lib.chm::/02_Time_series_analysis/UiModelling_Census2.htm)
 даёт возможность уменьшить влияние выбросов, исключив из рассмотрения
 значения, выходящие за определённый диапазон, либо преобразовав такие
 значения. Ширина диапазона задаётся нижней и верхней границей сигма. Нижнюю
 границу сигма определяет свойство [IMsCensus2Transform.SigmaLower](IMsCensus2Transform.SigmaLower.htm).


Метод X11 поддерживается только в ОС Windows.


## Пример


Использование свойства приведено в примере для [IMsCensus2Transform.SigmaLower](IMsCensus2Transform.SigmaLower.htm).


См. также:


[IMsCensus2Transform](IMsCensus2Transform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
