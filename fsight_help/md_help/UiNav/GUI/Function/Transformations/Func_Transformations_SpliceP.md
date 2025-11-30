# SpliceP

SpliceP
-


# SpliceP


## Синтаксис


SpliceP(Input: [ITimeSeries](kems.chm::/Interface/itimeseries/itimeseries.htm),

       SpliceSeries: [ITimeSeries](kems.chm::/Interface/itimeseries/itimeseries.htm),

        ComparatorBaseSeries: [ITimeSeries](kems.chm::/Interface/itimeseries/itimeseries.htm),

        ComparatorSpliceSeries:
 [ITimeSeries](kems.chm::/Interface/itimeseries/itimeseries.htm),

        Direction: [MsSpliceDirection](kems.chm::/enums/mssplicedirection.htm))


## Параметры


Input. Входная переменная;


SpliceSeries. Совмещаемая переменная;


ComparatorBaseSeries. Базовая
 переменная для блока сравнения;


ComparatorSpliceSeries. Совмещенная
 переменная для блока сравнения;


Direction. Направление совмещения.
 Необязательный параметр. По умолчанию параметр имеет значение MsSpliceDirection.Both
 - в обе стороны.


## Описание


Осуществляет преобразование переменной на
 основе совмещенных переменных: SpliceSeries
 / ComparatorSpliceSeries * ComparatorBaseSeries.


## Комментарии


SpliceP выполняет процентное
 сращивание.


## Пример


		 Формула
		 Результат
		 Применение


		 = SpliceP({Japan|TX},{Japan|TM}, {Japan|NX}, {Japan|NM},
		 MsSpliceDirection.Both)


		 Предположим, что показатель Japan|TX
		 содержит данные с января 1960 года по июль 2005 года, а Japan|NX и Japan|NM
		 - с февраля 1940 года по декабрь 2006 года. SpliceP
		 вычислит отношение показателей Japan|NX
		 и Japan|NM с февраля 1940
		 года по декабрь 1959 года и с августа 2005 по декабрь 2006 года.
		 Затем применит данное отношение к показателю Japan|TX,
		 используя Japan|TM как
		 знаменатель.


		 Можно использовать в формулах вычисляемых рядов базы данных
		 временных рядов и в формулах моделей контейнера моделирования,
		 являющегося дочерним по отношению к базе данных временных рядов.


		 =SpliceP(X1,X2,X3,X4, MsSpliceDirection.Forward)
		 Предположим, что фактор X1
		 содержит данные с января 1960 года по июль 2005 года, а X3 и X4
		 - с февраля 2003 года по декабрь 2006 года. SpliceP
		 вычислит отношение факторов X3
		 и X4 с февраля 2003 года
		 по декабрь 2006 года. Затем применит данное отношение рассчитает
		 значения фактора X1, используя
		 X2 как знаменатель.


		 Можно использовать в формулах моделей контейнера моделирования.


См. также:


[Функции, доступные в редакторе
 выражения](../../Expression_editor_func.htm) │ [Преобразования](Func_Transformations.htm)
 │ [IModelling.SpliceP](kems.chm::/interface/imodelling/Imodelling.SpliceP.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
