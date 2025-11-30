# LnSaveOptions

LnSaveOptions
-


# LnSaveOptions


## Описание


Перечисление LnSaveOptions содержит
 варианты изменений, которые требуется сохранять. Данное перечисление используется
 следующими свойствами и методами:


	- [ILaner.SaveChangedSeries](../Interface/ILaner/ILaner.SaveChangedSeries.htm);


	- [ILanerDerivedSerie.CreateFactor](../Interface/ILanerDerivedSerie/ILanerDerivedSerie.CreateFactor.htm);


	- [ILanerCalculateSerie.CreateFactor](../Interface/ILanerCalculateSerie/ILanerCalculateSerie.CreateFactor.htm);


	- [ILanerCalculateSerie.Save.


## Допустимые значения


		 Значение


		 Краткое описание


		 1


		 Values. Сохранять
		 значения ряда.


		 2


		 Attributes. Сохранять
		 значения атрибутов.


		 4


		 Name. Сохранять
		 наименование ряда.


		 8


		 ObservationAttributes.
		 Сохранять значения атрибутов наблюдения.


		 255


		 All. Сохранять все.


		 256


		 CalculatedValues.
		 Сохранять рассчитанные значения, если они отличаются от значений
		 ряда в БД.


		 511


		 llCalc. Сохранять
		 все, включая рассчитанные значения, отличающиеся от значений ряда
		 в БД.


## Комментарии


Для использования нескольких значений перечисления LnTransformPeriodSet
 указывайте их через «Or».


Значение llCalc равносильно
 указанию значений All и CalculatedValues через «Or».


См. также:


Перечисления сборки Laner](../Interface/ILanerCalculateSerie/ILanerCalculateSerie.Save.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
