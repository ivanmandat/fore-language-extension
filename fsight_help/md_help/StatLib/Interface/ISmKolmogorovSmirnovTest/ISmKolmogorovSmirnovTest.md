# ISmKolmogorovSmirnovTest

ISmKolmogorovSmirnovTest
-


# ISmKolmogorovSmirnovTest


Сборка: Stat;


## Описание


Интерфейс ISmKolmogorovSmirnovTest
 определяет параметры [теста
 Колмогорова-Смирнова](Lib.chm::/05_Statistics/UiModelling_KolmogorovSmirnovTest.htm).


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmKolmogorovSmirnovTest


## Комментарии


Тест предназначен для определения того, что выборка имеет соответствующее
 распределение. Например, проверяется гипотеза о том, что выборка имеет
 нормальное распределение. Малое значение вероятности означает отклонение
 гипотезы о нормальности. Для выборки, имеющей нормальное распределение,
 значение вероятности стремится к единице.


Также тест может быть применен на случай двух выборок. В этом случае
 распределение одной выборки сравнивается с распределением второй выборки
 и решается: имеют выборки одинаковое или разное распределение. На случай
 двух выборок не требуется задание типа распределения и его параметров.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [D](ISmKolmogorovSmirnovTest.D.htm)


		 Свойство D вычисляет
		 статистику Колмогорова-Смирнова ![](Dn.gif), ![](DnPlus.gif)
		 или ![](DnMinus.gif), согласно значению параметра [Hypothesis](ISmKolmogorovSmirnovTest.Hypothesis.htm).


		 ![](../../Property.gif)
		 [Distribution](ISmKolmogorovSmirnovTest.Distribution.htm)


		 Свойство Distribution
		 определяет закон распределения наблюдаемой случайной величины.


		 ![](../../Property.gif)
		 [Hypothesis](ISmKolmogorovSmirnovTest.Hypothesis.htm)


		 Свойство Hypothesis
		 определяет альтернативную гипотезу.


		 ![](../../Property.gif)
		 [MissingData](ISmKolmogorovSmirnovTest.MissingData.htm)


		 Свойство MissingData
		 определяет параметры обработки пропусков.


		 ![](../../Property.gif)
		 [ModelPeriod](ISmKolmogorovSmirnovTest.ModelPeriod.htm)


		 Свойство ModelPeriod
		 определяет параметры периода идентификации.


		 ![](../../Property.gif)
		 [P](ISmKolmogorovSmirnovTest.P.htm)


		 Свойство P возвращает
		 вероятность, связанную с полученным значением [D](ISmKolmogorovSmirnovTest.D.htm).


		 ![](../../Property.gif)
		 [Parameter1](ISmKolmogorovSmirnovTest.Parameter1.htm)


		 Свойство Parameter1
		 определяет значение параметра 1.


		 ![](../../Property.gif)
		 [Parameter2](ISmKolmogorovSmirnovTest.Parameter2.htm)


		 Свойство Parameter2
		 определяет значение параметра 2.


		 ![](../../Property.gif)
		 [Sample1](ISmKolmogorovSmirnovTest.Sample1.htm)


		 Свойство Sample1 определяет
		 рассматриваемый ряд.


		 ![](../../Property.gif)
		 [Sample2](ISmKolmogorovSmirnovTest.Sample2.htm)


		 Свойство Sample2 определяет
		 второй рассматриваемый ряд.


		 ![](../../Property.gif)
		 [SuppliedParameters](ISmKolmogorovSmirnovTest.SuppliedParameters.htm)


		 Свойство SuppliedParameters
		 определяет, будут ли параметры заданы пользователем или вычислены
		 автоматически.


		 ![](../../Property.gif)
		 [Z](ISmKolmogorovSmirnovTest.Z.htm)


		 Свойство Z возвращает
		 стандартизованное значение тестовой статистики [D](ISmKolmogorovSmirnovTest.D.htm)
		 без применения коррекции непрерывности.


## Свойства, унаследованные от [IStatMethod](../IStatMethod/IStatMethod.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [DisplayName](../IStatMethod/IStatMethod.DisplayName.htm)
		 Свойство DisplayName
		 возвращает внешнее наименование метода.


		 ![](../../Property.gif)
		 [ErrorByStatus](../IStatMethod/IStatMethod.ErrorByStatus.htm)
		 Свойство ErrorByStatus
		 возвращает сообщение об ошибке по ее номеру.


		 ![](../../Property.gif)
		 [Errors](../IStatMethod/IStatMethod.Errors.htm)
		 Свойство Errors возвращает
		 сообщение обо всех ошибках и предупреждениях.


		 ![](../../Property.gif)
		 [Name](../IStatMethod/IStatMethod.Name.htm)
		 Свойство Name возвращает
		 внутреннее наименование метода.


		 ![](../../Property.gif)
		 [PerformanceTime](../IStatMethod/IStatMethod.PerformanceTime.htm)
		 Свойство PerformanceTime
		 возвращает время выполнения метода.


		 ![](../../Property.gif)
		 [Status](../IStatMethod/IStatMethod.Status.htm)
		 Свойство Status возвращает
		 статус выполнения метода.


		 ![](../../Property.gif)
		 [SupportsR](../IStatMethod/IStatMethod.SupportsR.htm)
		 Свойство SupportsR
		 возвращает признак поддержки расчета статистического метода через
		 пакет R.


		 ![](../../Property.gif)
		 [UseR](../IStatMethod/IStatMethod.UseR.htm)
		 Свойство UseR определяет,
		 будет ли расчет статистического метода производиться через
		 пакет R.


		 ![](../../Property.gif)
		 [WarningByStatus](../IStatMethod/IStatMethod.WarningByStatus.htm)
		 Свойство WarningByStatus
		 возвращает текст предупреждения по его номеру.


		 ![](../../Property.gif)
		 [Warnings](../IStatMethod/IStatMethod.Warnings.htm)
		 Свойство Warnings возвращает предупреждения, возникшие при расчёте метода.


		 ![](../../Property.gif)
		 [WarningsCount](../IStatMethod/IStatMethod.WarningsCount.htm)
		 Свойство WarningsCount
		 возвращает число предупреждений, возникших при расчёте метода.


		 ![](../../Property.gif)
		 [WarningsNumbers](../IStatMethod/IStatMethod.WarningsNumbers.htm)
		 Свойство WarningsNumbers возвращает номера предупреждений, возникших при расчёте метода.


## Методы, унаследованные от [IStatMethod](../IStatMethod/IStatMethod.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub.gif)
		 [Clone](../IStatMethod/IStatMethod.Clone.htm)
		 Метод Clone клонирует
		 объект статистического метода.


		 ![](../../Sub.gif)
		 [Execute](../IStatMethod/IStatMethod.Execute.htm)
		 Метод Execute осуществляет
		 выполнение статистического метода.


		 ![](../../Sub.gif)
		 [LoadFromXML](../IStatMethod/IStatMethod.LoadFromXML.htm)
		 Метод LoadFromXML осуществляет
		 загрузку настроек статистического метода из XML-кода.


		 ![](../../Sub.gif)
		 [SaveToXML](../IStatMethod/IStatMethod.SaveToXML.htm)
		 Метод SaveToXML осуществляет
		 выгрузку настроек статистического метода в XML-код.


См. также:


[Интерфейсы сборки Stat](../Interfaces.htm)
 | [Тест
 Колмогорова-Смирнова](Lib.chm::/05_Statistics/UiModelling_KolmogorovSmirnovTest.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
