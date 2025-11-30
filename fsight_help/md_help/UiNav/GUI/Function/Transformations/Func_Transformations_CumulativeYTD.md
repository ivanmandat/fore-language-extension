# CumulativeYTD

CumulativeYTD
-


# CumulativeYTD


## Синтаксис


CumulativeYTD(Input: [ITimeSeries](kems.chm::/Interface/itimeseries/itimeseries.htm);

             Method:
 [MsCumulativeMethodType](kems.chm::/enums/mscumulativemethodtype.htm),

             Period:
 [IMsPeriod](kems.chm::/Interface/IMsPeriod/IMsPeriod.htm),

             IgnoreMissing:
 Boolean)


## Параметры


Input. Моделируемая переменная;


Method. Метод накопления. Необязательный
 параметр. По умолчанию параметр имеет значение MsCumulativeMethodType.Sum
 - определяется сумма значений элементов диапазона;


Period. Период, на котором
 рассчитывается метод. Необязательный параметр. Если значение параметра
 Null, то метод рассчитывается
 на всём временном периоде;


IgnoreMissing. Признак того,
 что пустые значения будут игнорироваться. Необязательный параметр. По
 умолчанию параметр имеет значение False.


## Описание


Осуществляет преобразование переменной
 с применением указанного метода накопления к началу года.


## Комментарии


Допустимые значения параметра IgnoreMissing:


	- True. Расчёт ведётся
	 без учёта пустых значений;


	- False. Расчёт ведётся
	 с учётом пустых значений.


## Пример


		 Формула
		 Результат
		 Применение


		 = CumulativeYTD({Brazil|BCA[t]}, MsCumulativeMethodType.Average,
		 SetPeriod("01.01.2000","01.01.2015"))
		 Для показателя Brazil|BCA
		 будет рассчитано накопленное среднее к началу года на периоде
		 с 2000 по 2015 год.
		 Можно использовать в формулах вычисляемых рядов базы данных
		 временных рядов и в формулах моделей контейнера моделирования,
		 основанных на атрибутах.


		 = CumulativeYTD(X1,MsCumulativeMethodType.Sum)
		 Для фактора X1
		 будет рассчитана накопленная сумма к началу года на всем временном
		 периоде.


		 Можно использовать в формулах моделей контейнера моделирования,
		 основанных на переменных.


См. также:


[Функции, доступные в редакторе
 выражения](../../Expression_editor_func.htm) │ [Преобразования](Func_Transformations.htm)
 │ [IModelling.CumulativeYTD](kems.chm::/interface/imodelling/Imodelling.CumulativeYTD.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
