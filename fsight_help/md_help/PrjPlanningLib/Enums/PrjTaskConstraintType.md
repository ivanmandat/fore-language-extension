# PrjTaskConstraintType

PrjTaskConstraintType
-


# PrjTaskConstraintType


## Описание


Перечисление PrjTaskConstraintType
 используется для определения типа ограничения задачи по времени.


Используется свойством [IPrjTask.ConstraintType](../Interface/IPrjTask/IPrjTask.ConstraintType.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 AsLateAsPossible. Выполнение
		 задачи должно начаться как можно позже.


		 1
		 AsSoonAsPossible. Выполнение
		 задачи должно начаться как можно раньше.


		 2
		 FinishNoEarlierThan.
		 Дата окончания задачи определяется не раньше заданной даты.


		 3
		 FinishNoLaterThan.
		 Дата окончания задачи определяется не позже заданной даты.


		 4
		 MustFinishOn. Дата
		 окончания задачи фиксированная.


		 5
		 MustStartOn. Дата
		 начала задачи фиксированная.


		 6
		 StartNoEarlierThan.
		 Дата начала задачи определяется не раньше заданной даты.


		 7
		 StartNoLaterThan. Дата
		 начала задачи определяется не позже заданной даты.


См. также:


[Перечисления
 сборки ProjectPlanning](ProjectPlanning_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
