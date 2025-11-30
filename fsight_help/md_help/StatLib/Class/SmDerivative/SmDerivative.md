# SmDerivative

SmDerivative
-


# SmDerivative


Сборка: Stat;


## Описание


Класс SmDerivative предназначен
 для расчёта производных.


## Комментарии


С помощью данного интерфейса можно рассчитывать как аналитические производные
 выражений, так и приближенные значения частных производных в заданной
 точке. Метод расчёта определяет свойство [ISmDerivative.UseAnalyticCalc](../../Interface/ISmDerivative/ISmDerivative.UseAnalyticCalc.htm).


## Свойства объекта класса, унаследованные от [ISmDerivative](../../Interface/ISmDerivative/ISmDerivative.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [CoefficientsOrder](../../Interface/ISmDerivative/ISmDerivative.CoefficientsOrder.htm)
		 Свойство CoefficientsOrder
		 определяет переменные, используемые в функции.


		 ![](../../Property.gif)
		 [DerivativeExpressions](../../Interface/ISmDerivative/ISmDerivative.DerivativeExpressions.htm)
		 Свойство DerivativeExpressions
		 возвращает массив выражений производных.


		 ![](../../Property.gif)
		 [DerivativeValues](../../Interface/ISmDerivative/ISmDerivative.DerivativeValues.htm)
		 Свойство DerivativeValues
		 возвращает массив значений производных.


		 ![](../../Property.gif)
		 [DiffVariables](../../Interface/ISmDerivative/ISmDerivative.DiffVariables.htm)
		 Свойство DiffVariables
		 определяет набор переменных дифференцирования.


		 ![](../../Property.gif)
		 [Expression](../../Interface/ISmDerivative/ISmDerivative.Expression.htm)
		 Свойство Expression
		 определяет выражение для дифференцирования.


		 ![](../../Property.gif)
		 [FunctionValue](../../Interface/ISmDerivative/ISmDerivative.FunctionValue.htm)
		 Свойство FunctionValue
		 возвращает значение функции в заданной точке.


		 ![](../../Property.gif)
		 [Increment](../../Interface/ISmDerivative/ISmDerivative.Increment.htm)
		 Свойство Increment
		 определяет приращение аргумента для расчёта приближенных значений
		 частных производных.


		 ![](../../Property.gif)
		 [UseAnalyticCalc](../../Interface/ISmDerivative/ISmDerivative.UseAnalyticCalc.htm)
		 Свойство UseAnalyticCalc
		 определяет, рассчитывать ли аналитические производные выражений.


		 ![](../../Property.gif)
		 [VariablesValues](../../Interface/ISmDerivative/ISmDerivative.VariablesValues.htm)
		 Свойство VariablesValues
		 определяет значения аргументов в точке, в которой будет рассчитана
		 производная.


## Свойства объекта класса, унаследованные от [IStatMethod](../../Interface/IStatMethod/IStatMethod.htm)


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


## Методы объекта класса, унаследованные от [IStatMethod](../../Interface/IStatMethod/IStatMethod.htm)


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


[Классы
 сборки Stat](../StatClass.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
