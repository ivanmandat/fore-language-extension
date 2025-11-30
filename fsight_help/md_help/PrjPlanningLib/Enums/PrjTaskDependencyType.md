# PrjTaskDependencyType

PrjTaskDependencyType
-


# PrjTaskDependencyType


## Описание


Перечисление PrjTaskDependencyType
 используется для выбора типа связи между задачами.


Используется свойством [IPrjTaskDependency.Type](../Interface/IPrjTaskDependency/IPrjTaskDependency.Type.htm).


## Комментарии


Типы связи между задачами:


	- окончание-начало. По
	 умолчанию. Начало задачи Б зависит от завершения задачи А:


![](FinishToStart.png)


	- начало-начало. Начало
	 задачи Б зависит от начала задачи А и выполняется одновременно:


![](StartToStart.png)


	- окончание-окончание.
	 Завершение задачи Б зависит от завершения задачи А и выполняется одновременно:


![](FinishToFinish.png)


	- начало-окончание. Завершение
	 задачи Б зависит от начала задачи А:


![](StartToFinish.png)


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 FinishToStart. Тип
		 связи «окончание-начало».


		 1
		 StartToStart. Тип связи
		 «начало-начало».


		 2
		 FinishToFinish. Тип
		 связи «окончание-окончание».


		 3
		 StartToFinish. Тип
		 связи «начало-окончание».


См. также:


[Перечисления
 сборки ProjectPlanning](ProjectPlanning_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
