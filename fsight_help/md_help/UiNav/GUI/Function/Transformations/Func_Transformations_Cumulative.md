# Cumulative

Cumulative
-


# Cumulative


## Синтаксис


Cumulative(Input: [ITimeSeries](kems.chm::/Interface/itimeseries/itimeseries.htm),

           Method:
 [MsCumulativeMethodType](kems.chm::/enums/mscumulativemethodtype.htm),

           Period:
 [IMsPeriod](kems.chm::/Interface/IMsPeriod/IMsPeriod.htm),

           IgnoreMissing:
 Boolean,

           Frequency:
 [MsFrequency](kems.chm::/Enums/MsFrequency.htm),

           Offset:
 Integer)


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
 умолчанию параметр имеет значение False;


Frequency. Календарная динамика,
 в рамках которой рассчитывается метод. Необязательный параметр. По умолчанию
 параметр имеет значение MsFrequency.Undefined;


Offset. Смещение последней
 точки ряда, до которой считается накопление. Необязательный параметр.
 По умолчанию параметр равен 0.


## Описание


Осуществляет преобразование переменной с
 применением указанного метода накопления.


## Комментарии


Допустимые значения параметра IgnoreMissing:


	- True. Расчёт ведётся
	 без учёта пустых значений;


	- False. Расчёт ведётся
	 с учётом пустых значений.


Если параметр Frequency имеет
 значение:


	- [MsFrequency.Undefined](kems.chm::/Enums/MsFrequency.htm).
	 Накопление выполняется с начала ряда;


	- [MsFrequency.Annual](kems.chm::/Enums/MsFrequency.htm).
	 Поведение метода Cumulative
	 аналогично поведению функции [CumulativeYTD](Func_Transformations_CumulativeYTD.htm).


Для корректного расчёта динамика, указанная в параметре Frequency,
 должна быть больше динамики моделируемой переменной.


Значение параметра Offset указывается
 в динамике моделируемой переменной.


## Пример


		 Формула
		 Результат
		 Применение


		 = Cumulative({Brazil|BCA[t]}, MsCumulativeMethodType.Average,
		 SetPeriod("01.01.2000","01.01.2015"))
		 Для показателя Brazil|BCA
		 будет рассчитано накопленное среднее на периоде с 2000 по 2015
		 год.
		 Можно использовать в формулах вычисляемых рядов базы данных
		 временных рядов и в формулах моделей контейнера моделирования,
		 основанных на атрибутах.


		 = Cumulative(X1,MsCumulativeMethodType.Sum)
		 Для фактора X1 будет
		 рассчитана накопленная сумма на всем временном периоде.


		 Можно использовать в формулах моделей контейнера моделирования,
		 основанных на переменных.


См. также:


[Функции, доступные в редакторе
 выражения](../../Expression_editor_func.htm) │ [Преобразования](Func_Transformations.htm)
 │ [IModelling.Cumulative](kems.chm::/interface/imodelling/Imodelling.Cumulative.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
