# ITargetControlVariable

ITargetControlVariable
-


# ITargetControlVariable


Сборка: Cp;


## Описание


Интерфейс ITargetControlVariable
 предназначен для работы с управляющей переменной.


## Иерархия наследования


           ITargetControlVariable


## Комментарии


Управляющие переменные - это переменные, значения которых могут изменяться
 в процессе поиска решения до тех пор, пока не будут выполнены ограничения,
 наложенные на управляющие переменные и целевую функцию, и не будет выполнено
 условие оптимизации целевой функции.


Для работы со всеми управляющими переменными используйте интерфейс [ITargetControlVariablesArray](../ITargetControlVariablesArray/ITargetControlVariablesArray.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CoefficientsOrder](ITargetControlVariable.CoefficientsOrder.htm)
		 Свойство CoefficientsOrder
		 определяет порядок коэффициентов переменной.


		 ![](../../Property_Image.gif)
		 [Constraints](ITargetControlVariable.Constraints.htm)
		 Свойство Constraints
		 определяет коллекцию ограничений на управляющую переменную.


		 ![](../../Property_Image.gif)
		 [Id](ITargetControlVariable.Id.htm)
		 Свойство Id возвращает
		 идентификатор управляющей переменной.


		 ![](../../Property_Image.gif)
		 [InitApproximation](ITargetControlVariable.InitApproximation.htm)
		 Свойство InitApproximation
		 определяет начальные приближения управляющей переменной.


		 ![](../../Property_Image.gif)
		 [Name](ITargetControlVariable.Name.htm)
		 Свойство Name
		 определяет наименование переменной.


		 ![](../../Property_Image.gif)
		 [Retrospective](ITargetControlVariable.Retrospective.htm)
		 Свойство Retrospective
		 определяет начальные значения управляющей переменной до начала
		 расчета целевой задачи.


См. также:


[Интерфейсы
 сборки Cp](../KeCp_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
