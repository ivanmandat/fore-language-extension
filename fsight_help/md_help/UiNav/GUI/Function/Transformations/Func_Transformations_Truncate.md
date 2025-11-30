# Truncate

Truncate
-


# Truncate


## Синтаксис


Truncate(Input: [ITimeSeries](kems.chm::/Interface/itimeseries/itimeseries.htm),

         Period: [IMsPeriod](kems.chm::/Interface/IMsPeriod/IMsPeriod.htm),

         Mode: [MsTruncateMode](kems.chm::/enums/mstruncatemode.htm))


## Параметры


Input. Усекаемая переменная;


Period. Период усечения;


Mode. Режим усечения.


## Описание


Осуществляет усечение переменной по
 заданным параметрам.


## Комментарии


Если параметр Period имеет
 значение Null, то усечение выполняется
 на всём временном периоде.


## Пример


		 Формула
		 Результат
		 Применение


		 = Truncate({Brazil|BCA[t]}, SetPeriod("2006A",
		 "2009A"), MsTruncateMode.Remove)
		 Ряд Brazil|BCA усечен
		 (отброшены значения с 2006 года по 2009 год).


		 Можно использовать в формулах вычисляемых рядов базы данных
		 временных рядов и в формулах моделей контейнера моделирования,
		 основанных на атрибутах.


		 = Truncate(X1,SetPeriod("2006A", "2009A",
		 MsTruncateMode.Keep)
		 Фактор X1 усечен
		 (оставлены значения с 2006 года по 2009 год).


		 Можно использовать в формулах моделей контейнера моделирования,
		 основанных на переменных.


См. также:


[Функции, доступные в редакторе
 выражения](../../Expression_editor_func.htm) │ [Преобразования](Func_Transformations.htm)
 │ [IModelling.Truncate](kems.chm::/interface/imodelling/Imodelling.Truncate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
