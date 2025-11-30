# ISmHyperGeometricDistribution

ISmHyperGeometricDistribution
-


# ISmHyperGeometricDistribution


Сборка: Stat;


## Описание


Интерфейс ISmHyperGeometricDistribution позволяет
 по заданным параметрам генерировать выборку псевдослучайных целых чисел
 из дискретного гипергеометрического распределения количества «успешных
 элементов» в выборке из конечной совокупности, содержащей «успешные элементы».


## Иерархия наследования


           [IDistribution](../IDistribution/IDistribution.htm)


           ISmHyperGeometricDistribution


## Комментарии


Гипергеометрическое распределение
 имеет случайная величина, являющаяся числом «успешных элементов»
 в выборке размера [N](ISmHyperGeometricDistribution.N.htm) из
 совокупности размера [N1](ISmHyperGeometricDistribution.N1.htm), которая
 содержит [M](ISmHyperGeometricDistribution.M.htm) «успешных
 элементов». При оценке параметров гипергеометрического распределения оцениваются
 только параметры [M](ISmHyperGeometricDistribution.M.htm) и
 [N](ISmHyperGeometricDistribution.N.htm). Параметр [N1](ISmHyperGeometricDistribution.N1.htm)
 задаётся пользователем и используется для оценки [M](ISmHyperGeometricDistribution.M.htm)
 и [N](ISmHyperGeometricDistribution.N.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [M](ISmHyperGeometricDistribution.M.htm)


		 Свойство M определяет
		 количество «успешных» элементов во всей совокупности.


		 ![](../../Property.gif)
		 [N](ISmHyperGeometricDistribution.N.htm)


		 Свойство N определяет
		 объем одной выборки.


		 ![](../../Property.gif)
		 [N1](ISmHyperGeometricDistribution.N1.htm)


		 Свойство N1 определяет
		 объем всей совокупности.


## Свойства, унаследованные от [IDistribution](../IDistribution/IDistribution.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [Cumulative](../IDistribution/IDistribution.Cumulative.htm)
		 Свойство Cumulative
		 возвращает функцию распределения.


		 ![](../../Property.gif)
		 [Density](../IDistribution/IDistribution.Density.htm)
		 Свойство Density возвращает
		 плотность.


		 ![](../../Property.gif)
		 [DisplayName](../IDistribution/IDistribution.DisplayName.htm)
		 Свойство DisplayName
		 возвращает наименование распределения.


		 ![](../../Property.gif)
		 [Errors](../IDistribution/IDistribution.Errors.htm)
		 Свойство Errors возвращает
		 сообщение обо всех ошибках и предупреждениях, возникших при расчетах.


		 ![](../../Property.gif)
		 [Name](../IDistribution/IDistribution.Name.htm)
		 Свойство Name возвращает
		 идентификатор распределения.


		 ![](../../Property.gif)
		 [Quantile](../IDistribution/IDistribution.Quantile.htm)
		 Свойство Quantile возвращает
		 квантиль.


		 ![](../../Property.gif)
		 [Random](../IDistribution/IDistribution.Random.htm)
		 Свойство Random возвращает
		 случайное число, соответствующее распределению.


		 ![](../../Property.gif)
		 [Status](../IDistribution/IDistribution.Status.htm)
		 Свойство Status возвращает
		 статус выполнения расчета.


## Методы, унаследованные от [IDistribution](../IDistribution/IDistribution.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub.gif)
		 [MaximumLikelihoodFitting](../IDistribution/IDistribution.MaximumLikelihoodFitting.htm)
		 Метод MaximumLikelihoodFitting
		 возвращает оценки максимального правдоподобия параметров распределения.


		 ![](../../Sub.gif)
		 [RandomVector](../IDistribution/IDistribution.RandomVector.htm)
		 Метод RandomVector
		 возвращает вектор случайных чисел, соответствующих распределению.


См. также:


[Интерфейсы сборки Stat](../Interfaces.htm)
 | [Гипергеометрическое
 распределение](Lib.chm::/05_Statistics/Distribution/Lib_HyperGeometricDistribution.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
