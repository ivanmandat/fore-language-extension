# IROCcurve

IROCcurve
-


# IROCcurve


Сборка: Stat;


## Описание


Интерфейс IROCcurve предназначен
 для работы с ROC-кривой.


## Иерархия наследования


           IROCcurve


## Комментарии


ROC-кривая - это график, позволяющий оценить качество бинарной классификации.
 ROC-кривая отображает соотношение между долей объектов от общего количества
 носителей признака, верно классифицированных как несущих признак, и долей
 объектов от общего количества объектов, не несущих признака, ошибочно
 классифицированных как несущих признак при варьировании порога решающего
 правила.


Таким образом, ROC-кривая рассчитывается, если объясняемый ряд является
 бинарным.


Для построения ROC-кривой по оси Y откладываются полученные значения
 [чувствительности](IROCcurve.Sensitivity.htm),
 а по оси X - [(1 - специфичность)](IROCcurve.OneMinusSpecificity.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [Area](IROCcurve.Area.htm)
		 Свойство Area
		 возвращает площадь под кривой.


		 ![](../../Property.gif)
		 [ConfidenceIntervalLower](IROCcurve.ConfidenceIntervalLower.htm)
		 Свойство ConfidenceIntervalLower
		 возвращает нижнюю границу асимптотического доверительного
		 интервала площади под кривой.


		 ![](../../Property.gif)
		 [ConfidenceIntervalUpper](IROCcurve.ConfidenceIntervalUpper.htm)
		 Свойство ConfidenceIntervalUpper
		 возвращает верхнюю границу асимптотического доверительного интервала
		 площади под кривой.


		 ![](../../Property.gif)
		 [ConfidenceLevel](IROCcurve.ConfidenceLevel.htm)
		 Свойство ConfidenceLevel определяет
		 значимость доверительных границ.


		 ![](../../Property.gif)
		 [CutOffPoints](IROCcurve.CutOffPoints.htm)
		 Свойство CutOffPoints
		 возвращает значения порога отсечения.


		 ![](../../Property.gif)
		 [OneMinusSpecificity](IROCcurve.OneMinusSpecificity.htm)
		 Свойство OneMinusSpecificity
		 возвращает значение 1 - специфичность.


		 ![](../../Property.gif)
		 [Sensitivity](IROCcurve.Sensitivity.htm)


		 Свойство Sensitivity
		 возвращает значения чувствительности.


		 ![](../../Property.gif)
		 [StdError](IROCcurve.StdError.htm)


		 Свойство StdError
		 возвращает стандартную ошибку площади под кривой.


См. также:


[Интерфейсы
 сборки Stat](../Interfaces.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
