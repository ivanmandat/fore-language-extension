# ISmChowTest

ISmChowTest
-


# ISmChowTest


Сборка: Stat;


## Описание


Интерфейс ISmChowTest определяет
 параметры теста Чоу на наличие структурных изменений.


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmChowTest


## Комментарии


Тест на устойчивость Чоу применяется для проверки регрессионной однородности двух выборок данных.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [ARMA](ISmChowTest.ARMA.htm)


		 Свойство ARMA определяет
		 параметры авторегрессии и скользящего среднего.


		 ![](../../Property.gif)
		 [ChiTest](ISmChowTest.ChiTest.htm)


		 Свойство ChiTest возвращает
		 значения статистики хи-квадрат.


		 ![](../../Property.gif)
		 [ChowTestResult](ISmChowTest.ChowTestResult.htm)


		 Свойство ChowTestResult
		 возвращает результат о принятии нулевой гипотезы об отсутствии
		 структурных изменений.


		 ![](../../Property.gif)
		 [ConfidenceLevel](ISmChowTest.ConfidenceLevel.htm)


		 Свойство ConfidenceLevel
		 определяет уровень значимости, при котором гипотеза будет отвергнута.


		 ![](../../Property.gif)
		 [Explained](ISmChowTest.Explained.htm)


		 Свойство Explained
		 определяет объясняемый ряд.


		 ![](../../Property.gif)
		 [Explanatories](ISmChowTest.Explanatories.htm)


		 Свойство Explanatories
		 определяет объясняющие ряды.


		 ![](../../Property.gif)
		 [FTest](ISmChowTest.FTest.htm)


		 Свойство FTest возвращает
		 значения статистики Фишера.


		 ![](../../Property.gif)
		 [GroupSeparator](ISmChowTest.GroupSeparator.htm)


		 Свойство GroupSeparator
		 определяет группы наблюдений.


		 ![](../../Property.gif)
		 [Intercept](ISmChowTest.Intercept.htm)


		 Свойство Intercept
		 определяет параметры константы.


		 ![](../../Property.gif)
		 [LR](ISmChowTest.LR.htm)


		 Свойство LR возвращает
		 общее уравнение линейной регрессии для обеих групп.


		 ![](../../Property.gif)
		 [LR0](ISmChowTest.LR0.htm)


		 Свойство LR0 возвращает
		 уравнение линейной регрессии для первой группы.


		 ![](../../Property.gif)
		 [LR1](ISmChowTest.LR1.htm)


		 Свойство LR1 возвращает
		 уравнение линейной регрессии для второй группы.


		 ![](../../Property.gif)
		 [MissingData](ISmChowTest.MissingData.htm)


		 Свойство MissingData
		 определяет метод обработки пропусков.


		 ![](../../Property.gif)
		 [ModelPeriod](ISmChowTest.ModelPeriod.htm)


		 Свойство ModelPeriod
		 определяет параметры периода идентификации.


		 ![](../../Property.gif)
		 [TestType](ISmChowTest.TestType.htm)


		 Свойство TestType определяет
		 тип теста.


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


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
