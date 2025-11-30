# ISmLinearProgramming

ISmLinearProgramming
-


# ISmLinearProgramming


Сборка: Stat;


## Описание


Интерфейс ISmLinearProgramming
 определяет параметры линейного программирования (симплекс-метод).


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmLinearProgramming


## Комментарий


Для определения параметров линейного программирования должна быть проведена
 [интеграция
 с LPSolve](UiNav.chm::/02_Navigator/CommonSettings/Integration.htm#lpsolve) или задан путь до библиотеки lpsolve55.dll
 с помощью свойства [ISmLPSolveManager.UserLPSolvePath](StatLib.chm::/Interface/ISmLPSolveManager/ISmLPSolveManager.UserLPSolvePath.htm).


Решается задача на минимум.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [Boundary](ISmLinearProgramming.Boundary.htm)


		 Свойство Boundary определяет
		 параметры области определения.


		 ![](../../Property.gif)
		 [CriterionFunction](ISmLinearProgramming.CriterionFunction.htm)


		 Свойство CriterionFunction
		 определяет целевую функцию.


		 ![](../../Property.gif)
		 [InitialApproximation](ISmLinearProgramming.InitialApproximation.htm)


		 Свойство InitialApproximation
		 определяет начальные приближения.


		 ![](../../Property.gif)
		 [IntVec](ISmLinearProgramming.IntVec.htm)


		 Свойство IntVec определяет
		 числовой массив, в котором задается, какие переменные являются
		 целочисленными.


		 ![](../../Property.gif)
		 [LinearConstraints](ISmLinearProgramming.LinearConstraints.htm)


		 Свойство LinearConstraints
		 определяет параметры линейных ограничений.


		 ![](../../Property.gif)
		 [MethodType](ISmLinearProgramming.MethodType.htm)


		 Свойство MethodType
		 определяет метод решения задачи линейного программирования.


		 ![](../../Property.gif)
		 [OptimalFunctionValue](ISmLinearProgramming.OptimalFunctionValue.htm)


		 Свойство OptimalFunctionValue
		 возвращает значение целевой функции, отвечающее найденному решению.


		 ![](../../Property.gif)
		 [Solution](ISmLinearProgramming.Solution.htm)


		 Свойство Solution возвращает
		 найденное решение.


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
