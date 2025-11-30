# SmQuadraticProgramming

SmQuadraticProgramming
-


# SmQuadraticProgramming


Сборка: Stat;


## Описание


Класс SmQuadraticProgramming реализует
 задачу [квадратичного
 программирования](Lib.chm::/04_Other_models/QuadraticProgramming.htm).


## Комментарии


Квадратичное программирование - это задача оптимизации квадратичной
 функции нескольких переменных при линейных ограничениях на эти переменные.


## Свойства, унаследованные от [ISmQuadraticProgramming](../../Interface/ISmQuadraticProgramming/ISmQuadraticProgramming.htm)


		 Имя свойства


		 Краткое описание


		 ![](../../Property.gif)
		 [Boundary](../../Interface/ISmQuadraticProgramming/ISmQuadraticProgramming.Boundary.htm)
		 Свойство Boundary определяет
		 параметры области определения.


		 ![](../../Property.gif)
		 [CriterionFunction](../../Interface/ISmQuadraticProgramming/ISmQuadraticProgramming.CriterionFunction.htm)
		 Свойство CriterionFunction
		 определяет линейную часть целевой функции.


		 ![](../../Property.gif)
		 [ExtraSettings](../../Interface/ISmQuadraticProgramming/ISmQuadraticProgramming.ExtraSettings.htm)
		 Свойство ExtraSettings
		 возвращает дополнительные настройки, используемые при расчёте
		 с помощью внешнего модуля решений Gurobi.


		 ![](../../Property.gif)
		 [InitialApproximation](../../Interface/ISmQuadraticProgramming/ISmQuadraticProgramming.InitalApproximation.htm)
		 Свойство InitialApproximation
		 определяет параметры расчета начальных приближений.


		 ![](../../Property.gif)
		 [IntVec](../../Interface/ISmQuadraticProgramming/ISmQuadraticProgramming.IntVec.htm)
		 Свойство IntVec определяет
		 числовой массив, в котором задается, какие переменные являются
		 целочисленными.


		 ![](../../Property.gif)
		 [LinearConstraints](../../Interface/ISmQuadraticProgramming/ISmQuadraticProgramming.LinearConstraints.htm)
		 Свойство LinearConstraints
		 определяет параметры линейных ограничений.


		 ![](../../Property.gif)
		 [OptimalFunctionValue](../../Interface/ISmQuadraticProgramming/ISmQuadraticProgramming.OptimalFunctionValue.htm)
		 Свойство OptimalFunctionValue
		 возвращает значение целевой функции, отвечающее найденному решению.


		 ![](../../Property.gif)
		 [PerformanceInfo](../../Interface/ISmQuadraticProgramming/ISmQuadraticProgramming.PerformanceInfo.htm)
		 Свойство PerformanceInfo
		 возвращает информацию о выполненной оптимизации.


		 ![](../../Property.gif)
		 [QuadraticForm](../../Interface/ISmQuadraticProgramming/ISmQuadraticProgramming.QuadraticForm.htm)
		 Свойство QuadraticForm
		 определяет квадратичную часть целевой функции (квадратичную форму).


		 ![](../../Property.gif)
		 [Solution](../../Interface/ISmQuadraticProgramming/ISmQuadraticProgramming.Solution.htm)
		 Свойство Solution возвращает
		 найденное решение.


		 ![](../../Property.gif)
		 [SolverType](../../Interface/ISmQuadraticProgramming/ISmQuadraticProgramming.SolverType.htm)
		 Свойство SolverType
		 определяет тип модуля решений, который будет использоваться для
		 решения задачи квадратичного программирования.


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


[Классы сборки Stat](../StatClass.htm) | [Задача квадратичного
 программирования](Lib.chm::/04_Other_models/QuadraticProgramming.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
