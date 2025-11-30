# ISmQuadraticProgramming

ISmQuadraticProgramming
-


# ISmQuadraticProgramming


Сборка: Stat;


## Описание


Интерфейс ISmQuadraticProgramming
 реализует задачу [квадратичного
 программирования](Lib.chm::/04_Other_models/QuadraticProgramming.htm).


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmQuadraticProgramming


## Комментарий


Квадратичное программирование - это задача оптимизации квадратичной
 функции нескольких переменных при линейных ограничениях на эти переменные.


Для решения задачи квадратичного программирования должна быть проведена
 [интеграция
 с LPSolve](UiNav.chm::/02_Navigator/CommonSettings/Integration.htm#lpsolve) или задан путь до библиотеки lpsolve55.dll
 с помощью свойства [ISmLPSolveManager.UserLPSolvePath](StatLib.chm::/Interface/ISmLPSolveManager/ISmLPSolveManager.UserLPSolvePath.htm).


## Свойства


		 Имя свойства


		 Краткое описание


		 ![](../../Property.gif)
		 [Boundary](ISmQuadraticProgramming.Boundary.htm)
		 Свойство Boundary определяет
		 параметры области определения.


		 ![](../../Property.gif)
		 [CriterionFunction](ISmQuadraticProgramming.CriterionFunction.htm)
		 Свойство CriterionFunction
		 определяет линейную часть целевой функции.


		 ![](../../Property.gif)
		 [ExtraSettings](ISmQuadraticProgramming.ExtraSettings.htm)
		 Свойство ExtraSettings
		 возвращает дополнительные настройки, используемые при расчёте
		 с помощью внешнего модуля решений Gurobi.


		 ![](../../Property.gif)
		 [InitialApproximation](ISmQuadraticProgramming.InitalApproximation.htm)
		 Свойство InitialApproximation
		 определяет параметры расчета начальных приближений.


		 ![](../../Property.gif)
		 [IntVec](ISmQuadraticProgramming.IntVec.htm)
		 Свойство IntVec определяет
		 числовой массив, в котором задается, какие переменные являются
		 целочисленными.


		 ![](../../Property.gif)
		 [LinearConstraints](ISmQuadraticProgramming.LinearConstraints.htm)
		 Свойство LinearConstraints
		 определяет параметры линейных ограничений.


		 ![](../../Property.gif)
		 [OptimalFunctionValue](ISmQuadraticProgramming.OptimalFunctionValue.htm)
		 Свойство OptimalFunctionValue
		 возвращает значение целевой функции, отвечающее найденному решению.


		 ![](../../Property.gif)
		 [PerformanceInfo](ISmQuadraticProgramming.PerformanceInfo.htm)
		 Свойство PerformanceInfo
		 возвращает информацию о выполненной оптимизации.


		 ![](../../Property.gif)
		 [QuadraticForm](ISmQuadraticProgramming.QuadraticForm.htm)
		 Свойство QuadraticForm
		 определяет квадратичную часть целевой функции (квадратичную форму).


		 ![](../../Property.gif)
		 [Solution](ISmQuadraticProgramming.Solution.htm)
		 Свойство Solution возвращает
		 найденное решение.


		 ![](../../Property.gif)
		 [SolverType](ISmQuadraticProgramming.SolverType.htm)
		 Свойство SolverType
		 определяет тип модуля решений, который будет использоваться для
		 решения задачи квадратичного программирования.


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
 | [Задача
 квадратичного программирования](Lib.chm::/04_Other_models/QuadraticProgramming.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
