# TargetAdjustment

TargetAdjustment
-


# TargetAdjustment


Сборка: Cp;


## Описание


Класс TargetAdjustment предназначен
 для расчета целевой задачи.


## Комментарий


Целевая задача состоит в отыскании таких значений управляющих переменных,
 при которых значение целевой функции будет максимально соответствовать
 заданной траектории. Целевая функция - это функция, связывающая целевую
 переменную с управляющими переменными в задаче оптимизации. Задача оптимизации
 - это задача нахождения максимума или минимума целевой функции.


Для корректного расчета целевой задачи должна быть проведена [интеграция
 с LPSolve](UiNav.chm::/02_Navigator/CommonSettings/Integration.htm#lpsolve) или задан путь до библиотеки lpsolve55.dll
 с помощью свойства [ISmLPSolveManager.UserLPSolvePath](StatLib.chm::/Interface/ISmLPSolveManager/ISmLPSolveManager.UserLPSolvePath.htm).


## Свойства объекта класса, унаследованные от [ICpTargetAdjustment](../../Interface/ICpTargetAdjustment/ICpTargetAdjustment.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AutoAdjustMaxIter](../../Interface/ICpTargetAdjustment/ICpTargetAdjustment.AutoAdjustMaxIter.htm)
		 Свойство AutoAdjustMaxIter
		 определяет количество циклов для автоматического подбора границ.


		 ![](../../Property_Image.gif)
		 [AutoAdjustRemoveCount](../../Interface/ICpTargetAdjustment/ICpTargetAdjustment.AutoAdjustRemoveCount.htm)
		 Свойство AutoAdjustRemoveCount
		 определяет количество ограничений, удаленных за одну итерацию
		 при автоматическом подборе границ.


		 ![](../../Property_Image.gif)
		 [AutoAdjustSatisfactoryTolerance](../../Interface/ICpTargetAdjustment/ICpTargetAdjustment.AutoAdjustSatisfactoryTolerance.htm)
		 Свойство AutoAdjustSatisfactoryTolerance
		 определяет приемлемую точность автоматического подбора границ.


		 ![](../../Property_Image.gif)
		 [AutoSearchType](../../Interface/ICpTargetAdjustment/ICpTargetAdjustment.AutoSearchType.htm)
		 Свойство AutoSearchType
		 определяет тип целевой задачи.


		 ![](../../Property_Image.gif)
		 [CalcWithNonLinConstraints](../../Interface/ICpTargetAdjustment/ICpTargetAdjustment.CalcWithNonLinConstraints.htm)
		 Свойство CalcWithNonLinConstraints
		 определяет, использовать ли в расчете нелинейные ограничения.


		 ![](../../Property_Image.gif)
		 [CallbackCycle](../../Interface/ICpTargetAdjustment/ICpTargetAdjustment.CallbackCycle.htm)
		 Свойство CallbackCycle
		 определяет обработчик, используемый для расчета управляющих переменных.


		 ![](../../Property_Image.gif)
		 [Constraints](../../Interface/ICpTargetAdjustment/ICpTargetAdjustment.Constraints.htm)
		 Свойство Constraints
		 возвращает коллекцию ограничений нелинейной оптимизации.


		 ![](../../Property_Image.gif)
		 [ControlVariables](../../Interface/ICpTargetAdjustment/ICpTargetAdjustment.ControlVariables.htm)
		 Свойство ControlVariables
		 возвращает коллекцию управляющих переменных.


		 ![](../../Property_Image.gif)
		 [CriterionFunction](../../Interface/ICpTargetAdjustment/ICpTargetAdjustment.CriterionFunction.htm)


		 Свойство CriterionFunction
		 определяет целевую функцию.


		 ![](../../Property_Image.gif)
		 [Explanatories](../../Interface/ICpTargetAdjustment/ICpTargetAdjustment.Explanatories.htm)
		 Свойство Explanatories
		 возвращает коллекцию объясняющих переменных.


		 ![](../../Property_Image.gif)
		 [MaxIterationsCount](../../Interface/ICpTargetAdjustment/ICpTargetAdjustment.MaxIterationsCount.htm)
		 Свойство MaxIterationsCount
		 определяет количество итераций расчета.


		 ![](../../Property_Image.gif)
		 [PhaseVariables](../../Interface/ICpTargetAdjustment/ICpTargetAdjustment.PhaseVariables.htm)
		 Свойство PhaseVariables
		 возвращает коллекцию фазовых переменных.


		 ![](../../Property_Image.gif)
		 [TargetTrajectory](../../Interface/ICpTargetAdjustment/ICpTargetAdjustment.TargetTrajectory.htm)
		 Свойство TargetTrajectory
		 определяет траекторию, которой должна соответствовать целевая
		 функция.


		 ![](../../Property_Image.gif)
		 [Tolerance](../../Interface/ICpTargetAdjustment/ICpTargetAdjustment.Tolerance.htm)


		 Свойство Tolerance
		 определяет точность решения.


## Свойства объекта класса, унаследованные от [ICpMethod](../../Interface/ICpMethod/ICpMethod.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Extremum](../../Interface/ICpMethod/ICpMethod.Extremum.htm)
		 Свойство Extremum определяет
		 тип экстремума, который будет искаться при нахождении оптимального
		 значения.


## Методы объекта класса, унаследованные от [ICpMethod](../../Interface/ICpMethod/ICpMethod.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Evaluate](../../Interface/ICpMethod/ICpMethod.Evaluate.htm)
		 Метод Evaluate осуществляет
		 расчет метода.


См. также:


[Классы
 сборки Cp](../KeCp_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
