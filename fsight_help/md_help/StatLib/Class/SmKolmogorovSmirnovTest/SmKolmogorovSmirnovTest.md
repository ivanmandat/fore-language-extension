# SmKolmogorovSmirnovTest

SmKolmogorovSmirnovTest
-


# SmKolmogorovSmirnovTest


## Описание


Класс SmKolmogorovSmirnovTest
 реализует алгоритм [теста
 Колмогорова-Смирнова](Lib.chm::/05_Statistics/UiModelling_KolmogorovSmirnovTest.htm).


## Свойства, унаследованные от [ISmKolmogorovSmirnovTest](../../Interface/ISmKolmogorovSmirnovTest/ISmKolmogorovSmirnovTest.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [D](../../Interface/ISmKolmogorovSmirnovTest/ISmKolmogorovSmirnovTest.D.htm)


		 Свойство D вычисляет
		 статистику Колмогорова-Смирнова ![](../../Interface/ISmKolmogorovSmirnovTest/Dn.gif), ![](../../Interface/ISmKolmogorovSmirnovTest/DnPlus.gif)
		 или ![](../../Interface/ISmKolmogorovSmirnovTest/DnMinus.gif), согласно значению параметра [Hypothesis](../../Interface/ISmKolmogorovSmirnovTest/ISmKolmogorovSmirnovTest.Hypothesis.htm).


		 ![](../../Property.gif)
		 [Distribution](../../Interface/ISmKolmogorovSmirnovTest/ISmKolmogorovSmirnovTest.Distribution.htm)


		 Свойство Distribution
		 определяет закон распределения наблюдаемой случайной величины.


		 ![](../../Property.gif)
		 [Hypothesis](../../Interface/ISmKolmogorovSmirnovTest/ISmKolmogorovSmirnovTest.Hypothesis.htm)


		 Свойство Hypothesis
		 определяет альтернативную гипотезу.


		 ![](../../Property.gif)
		 [MissingData](../../Interface/ISmKolmogorovSmirnovTest/ISmKolmogorovSmirnovTest.MissingData.htm)


		 Свойство MissingData
		 определяет параметры обработки пропусков.


		 ![](../../Property.gif)
		 [ModelPeriod](../../Interface/ISmKolmogorovSmirnovTest/ISmKolmogorovSmirnovTest.ModelPeriod.htm)


		 Свойство ModelPeriod
		 определяет параметры периода идентификации.


		 ![](../../Property.gif)
		 [P](../../Interface/ISmKolmogorovSmirnovTest/ISmKolmogorovSmirnovTest.P.htm)


		 Свойство P возвращает
		 вероятность, связанную с полученным значением [D](../../Interface/ISmKolmogorovSmirnovTest/ISmKolmogorovSmirnovTest.D.htm).


		 ![](../../Property.gif)
		 [Parameter1](../../Interface/ISmKolmogorovSmirnovTest/ISmKolmogorovSmirnovTest.Parameter1.htm)


		 Свойство Parameter1
		 определяет значение параметра 1.


		 ![](../../Property.gif)
		 [Parameter2](../../Interface/ISmKolmogorovSmirnovTest/ISmKolmogorovSmirnovTest.Parameter2.htm)


		 Свойство Parameter2
		 определяет значение параметра 2.


		 ![](../../Property.gif)
		 [Sample1](../../Interface/ISmKolmogorovSmirnovTest/ISmKolmogorovSmirnovTest.Sample1.htm)


		 Свойство Sample1 определяет
		 рассматриваемый ряд.


		 ![](../../Property.gif)
		 [Sample2](../../Interface/ISmKolmogorovSmirnovTest/ISmKolmogorovSmirnovTest.Sample2.htm)


		 Свойство Sample2 определяет
		 второй рассматриваемый ряд.


		 ![](../../Property.gif)
		 [SuppliedParameters](../../Interface/ISmKolmogorovSmirnovTest/ISmKolmogorovSmirnovTest.SuppliedParameters.htm)


		 Свойство SuppliedParameters
		 определяет, будут ли параметры заданы пользователем или вычислены
		 автоматически.


		 ![](../../Property.gif)
		 [Z](../../Interface/ISmKolmogorovSmirnovTest/ISmKolmogorovSmirnovTest.Z.htm)


		 Свойство Z возвращает
		 стандартизованное значение тестовой статистики [D](../../Interface/ISmKolmogorovSmirnovTest/ISmKolmogorovSmirnovTest.D.htm)
		 без применения коррекции непрерывности.


## Свойства, унаследованные от [IStatMethod](../../Interface/IStatMethod/IStatMethod.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [DisplayName](../../Interface/IStatMethod/IStatMethod.DisplayName.htm)
		 Свойство DisplayName
		 возвращает внешнее наименование метода.


		 ![](../../Property.gif)
		 [ErrorByStatus](../../Interface/IStatMethod/IStatMethod.ErrorByStatus.htm)
		 Свойство ErrorByStatus
		 возвращает сообщение об ошибке по ее номеру.


		 ![](../../Property.gif)
		 [Errors](../../Interface/IStatMethod/IStatMethod.Errors.htm)
		 Свойство Errors возвращает
		 сообщение обо всех ошибках и предупреждениях.


		 ![](../../Property.gif)
		 [Name](../../Interface/IStatMethod/IStatMethod.Name.htm)
		 Свойство Name возвращает
		 внутреннее наименование метода.


		 ![](../../Property.gif)
		 [PerformanceTime](../../Interface/IStatMethod/IStatMethod.PerformanceTime.htm)
		 Свойство PerformanceTime
		 возвращает время выполнения метода.


		 ![](../../Property.gif)
		 [Status](../../Interface/IStatMethod/IStatMethod.Status.htm)
		 Свойство Status возвращает
		 статус выполнения метода.


		 ![](../../Property.gif)
		 [SupportsR](../../Interface/IStatMethod/IStatMethod.SupportsR.htm)
		 Свойство SupportsR
		 возвращает признак поддержки расчета статистического метода через
		 пакет R.


		 ![](../../Property.gif)
		 [UseR](../../Interface/IStatMethod/IStatMethod.UseR.htm)
		 Свойство UseR определяет,
		 будет ли расчет статистического метода производиться через
		 пакет R.


		 ![](../../Property.gif)
		 [WarningByStatus](../../Interface/IStatMethod/IStatMethod.WarningByStatus.htm)
		 Свойство WarningByStatus
		 возвращает текст предупреждения по его номеру.


		 ![](../../Property.gif)
		 [Warnings](../../Interface/IStatMethod/IStatMethod.Warnings.htm)
		 Свойство Warnings возвращает предупреждения, возникшие при расчёте метода.


		 ![](../../Property.gif)
		 [WarningsCount](../../Interface/IStatMethod/IStatMethod.WarningsCount.htm)
		 Свойство WarningsCount
		 возвращает число предупреждений, возникших при расчёте метода.


		 ![](../../Property.gif)
		 [WarningsNumbers](../../Interface/IStatMethod/IStatMethod.WarningsNumbers.htm)
		 Свойство WarningsNumbers возвращает номера предупреждений, возникших при расчёте метода.


## Методы, унаследованные от [IStatMethod](../../Interface/IStatMethod/IStatMethod.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub.gif)
		 [Clone](../../Interface/IStatMethod/IStatMethod.Clone.htm)
		 Метод Clone клонирует
		 объект статистического метода.


		 ![](../../Sub.gif)
		 [Execute](../../Interface/IStatMethod/IStatMethod.Execute.htm)
		 Метод Execute осуществляет
		 выполнение статистического метода.


		 ![](../../Sub.gif)
		 [LoadFromXML](../../Interface/IStatMethod/IStatMethod.LoadFromXML.htm)
		 Метод LoadFromXML осуществляет
		 загрузку настроек статистического метода из XML-кода.


		 ![](../../Sub.gif)
		 [SaveToXML](../../Interface/IStatMethod/IStatMethod.SaveToXML.htm)
		 Метод SaveToXML осуществляет
		 выгрузку настроек статистического метода в XML-код.


См. также:


[Интерфейсы сборки Stat](../../Interface/Interfaces.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
