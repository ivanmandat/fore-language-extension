# ICpTargetAdjustment

ICpTargetAdjustment
-


# ICpTargetAdjustment


Сборка: Cp;


## Описание


Интерфейс ICpTargetAdjustment
 предназначен для расчета целевой задачи.


## Иерархия наследования


           [ICpMethod](../ICpMethod/ICpMethod.htm)


           ICpTargetAdjustment


## Комментарии


Целевая задача состоит в отыскании таких значений управляющих переменных,
 при которых значение целевой функции будет максимально соответствовать
 заданной траектории. Целевая функция - это функция, связывающая целевую
 переменную с управляющими переменными в задаче оптимизации. Задача оптимизации
 - это задача нахождения максимума или минимума целевой функции.


Для расчета траектории целевой функции без оптимизации задайте значение
 «0» для свойств [ICpTargetAdjustment.AutoAdjustMaxIter](ICpTargetAdjustment.AutoAdjustMaxIter.htm)
 и [ICpTargetAdjustment.MaxIterationsCount](ICpTargetAdjustment.MaxIterationsCount.htm).
 При этом будут рассчитаны траектории целевой функции и фазовых
 переменных на основе значений начальных приближений управляющих переменных
 без выполнения оптимизации.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AutoAdjustMaxIter](ICpTargetAdjustment.AutoAdjustMaxIter.htm)
		 Свойство AutoAdjustMaxIter
		 определяет количество циклов для автоматического подбора границ.


		 ![](../../Property_Image.gif)
		 [AutoAdjustRemoveCount](ICpTargetAdjustment.AutoAdjustRemoveCount.htm)
		 Свойство AutoAdjustRemoveCount
		 определяет количество ограничений, удаленных за одну итерацию
		 при автоматическом подборе границ.


		 ![](../../Property_Image.gif)
		 [AutoAdjustSatisfactoryTolerance](ICpTargetAdjustment.AutoAdjustSatisfactoryTolerance.htm)
		 Свойство AutoAdjustSatisfactoryTolerance
		 определяет приемлемую точность автоматического подбора границ.


		 ![](../../Property_Image.gif)
		 [AutoSearchType](ICpTargetAdjustment.AutoSearchType.htm)
		 Свойство AutoSearchType
		 определяет тип целевой задачи.


		 ![](../../Property_Image.gif)
		 [CalcWithNonLinConstraints](ICpTargetAdjustment.CalcWithNonLinConstraints.htm)
		 Свойство CalcWithNonLinConstraints
		 определяет, использовать ли в расчете нелинейные ограничения.


		 ![](../../Property_Image.gif)
		 [CallbackCycle](ICpTargetAdjustment.CallbackCycle.htm)
		 Свойство CallbackCycle
		 определяет обработчик, используемый для расчета управляющих переменных.


		 ![](../../Property_Image.gif)
		 [Constraints](ICpTargetAdjustment.Constraints.htm)
		 Свойство Constraints
		 возвращает коллекцию ограничений нелинейной оптимизации.


		 ![](../../Property_Image.gif)
		 [ControlVariables](ICpTargetAdjustment.ControlVariables.htm)
		 Свойство ControlVariables
		 возвращает коллекцию управляющих переменных.


		 ![](../../Property_Image.gif)
		 [CriterionFunction](ICpTargetAdjustment.CriterionFunction.htm)


		 Свойство CriterionFunction
		 определяет целевую функцию.


		 ![](../../Property_Image.gif)
		 [Explanatories](ICpTargetAdjustment.Explanatories.htm)
		 Свойство Explanatories
		 возвращает коллекцию объясняющих переменных.


		 ![](../../Property_Image.gif)
		 [MaxIterationsCount](ICpTargetAdjustment.MaxIterationsCount.htm)
		 Свойство MaxIterationsCount
		 определяет количество итераций расчета.


		 ![](../../Property_Image.gif)
		 [PhaseVariables](ICpTargetAdjustment.PhaseVariables.htm)
		 Свойство PhaseVariables
		 возвращает коллекцию фазовых переменных.


		 ![](../../Property_Image.gif)
		 [TargetTrajectory](ICpTargetAdjustment.TargetTrajectory.htm)
		 Свойство TargetTrajectory
		 определяет траекторию, которой должна соответствовать целевая
		 функция.


		 ![](../../Property_Image.gif)
		 [Tolerance](ICpTargetAdjustment.Tolerance.htm)


		 Свойство Tolerance
		 определяет точность решения.


## Свойства, унаследованные от [ICpMethod](../ICpMethod/ICpMethod.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Extremum](../ICpMethod/ICpMethod.Extremum.htm)
		 Свойство Extremum определяет
		 тип экстремума, который будет искаться при нахождении оптимального
		 значения.


## Методы, унаследованные от [ICpMethod](../ICpMethod/ICpMethod.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Evaluate](../ICpMethod/ICpMethod.Evaluate.htm)
		 Метод Evaluate осуществляет
		 расчет метода.


См. также:


[Интерфейсы
 сборки Cp](../KeCp_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
