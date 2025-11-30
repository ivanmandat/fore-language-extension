# ISmDerivative

ISmDerivative
-


# ISmDerivative


Сборка: Stat;


## Описание


Интерфейс ISmDerivative предназначен
 для расчёта производных.


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmDerivative


## Комментарии


С помощью данного интерфейса можно рассчитывать как аналитические производные
 выражений, так и приближенные значения частных производных в заданной
 точке. Метод расчёта определяет свойство [ISmDerivative.UseAnalyticCalc](ISmDerivative.UseAnalyticCalc.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [CoefficientsOrder](ISmDerivative.CoefficientsOrder.htm)
		 Свойство CoefficientsOrder
		 определяет переменные, используемые в функции.


		 ![](../../Property.gif)
		 [DerivativeExpressions](ISmDerivative.DerivativeExpressions.htm)
		 Свойство DerivativeExpressions
		 возвращает массив выражений производных.


		 ![](../../Property.gif)
		 [DerivativeValues](ISmDerivative.DerivativeValues.htm)
		 Свойство DerivativeValues
		 возвращает массив значений производных.


		 ![](../../Property.gif)
		 [DiffVariables](ISmDerivative.DiffVariables.htm)
		 Свойство DiffVariables
		 определяет набор переменных дифференцирования.


		 ![](../../Property.gif)
		 [Expression](ISmDerivative.Expression.htm)
		 Свойство Expression
		 определяет выражение для дифференцирования.


		 ![](../../Property.gif)
		 [FunctionValue](ISmDerivative.FunctionValue.htm)
		 Свойство FunctionValue
		 возвращает значение функции в заданной точке.


		 ![](../../Property.gif)
		 [Increment](ISmDerivative.Increment.htm)
		 Свойство Increment
		 определяет приращение аргумента для расчёта приближенных значений
		 частных производных.


		 ![](../../Property.gif)
		 [UseAnalyticCalc](ISmDerivative.UseAnalyticCalc.htm)
		 Свойство UseAnalyticCalc
		 определяет, рассчитывать ли аналитические производные выражений.


		 ![](../../Property.gif)
		 [VariablesValues](ISmDerivative.VariablesValues.htm)
		 Свойство VariablesValues
		 определяет значения аргументов в точке, в которой будет рассчитана
		 производная.


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
