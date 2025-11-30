# ILanerCalculateSerie.HasDiscrepancies

ILanerCalculateSerie.HasDiscrepancies
-


# ILanerCalculateSerie.HasDiscrepancies


## Синтаксис


HasDiscrepancies: Boolean;


## Описание


Свойство HasDiscrepancies возвращает
 признак того, отличаются ли рассчитанные данные ряда от данных, хранящихся
 в БД.


## Комментарии


Допустимые значения:


	- True. Рассчитанные данные
	 ряда отличаются от данных, хранящихся в БД. Для ряда отображаются
	 данные из БД, т.е. [ILanerCalculateSerie.DisplayDataAs](ILanerCalculateSerie.DisplayDataAs.htm)
	 = LnDataDisplayType.SourceValues;


	- False. Рассчитанные
	 данные ряда не отличаются от данных, хранящихся в БД. Ряд еще не хранит
	 свои данные в БД. Для ряда отображаются рассчитанные данные, т.е.
	 [ILanerCalculateSerie.DisplayDataAs](ILanerCalculateSerie.DisplayDataAs.htm)
	 = LnDataDisplayType.CalculatedValues.


## Пример


Использование свойства приведено в примере для [ILanerCalculateSerie.DisplayDataAs](ILanerCalculateSerie.DisplayDataAs.htm).


См. также:


[ILanerCalculateSerie](ILanerCalculateSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
