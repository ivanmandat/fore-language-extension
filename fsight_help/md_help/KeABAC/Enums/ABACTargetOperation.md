# ABACTargetOperation

ABACTargetOperation
-


# ABACTargetOperation


## Описание


Перечисление ABACTargetOperation
 используется для выбора условной операции в [цели](Admin.chm::/04_SecurityPolicy/Target.htm).


Используется следующим свойством:


	- [IABACTarget.Operation](../Interface/IABACTarget/IABACTarget.Operation.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 Empty. Нет операции.


		 1
		 Equal. Равно.


		 2
		 NotEqual. Не равно.


		 3
		 Less. Меньше.


		 4
		 Greater. Больше.


		 5
		 NotLess. Больше или
		 равно.


		 6
		 NotGreater. Меньше
		 или равно.


		 7
		 IN. Операция «IN» используется
		 только для атрибута среды окружения «[OPERATION](Admin.chm::/04_SecurityPolicy/Creating_conditions.htm#environment)».
		 Перед началом использования атрибута с операцией «IN» ознакомьтесь
		 с [особенностями](Admin.chm::/04_SecurityPolicy/Target.htm#in).


См. также:


[Перечисления
 сборки ABAC](KeABAC_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
