# IValidationCustom.CalculationType

IValidationCustom.CalculationType
-


# IValidationCustom.CalculationType


## Синтаксис


CalculationType: [MsCalculationType](../../Enums/MsCalculationType.htm);


## Описание


Свойство CalculationType
 определяет режим расчета правила валидации.


## Комментарии


Если значение свойства:


	- [MsCalculationType.Serie](../../Enums/MsCalculationType.htm).
	 То генерируется только одно исключение для ряда, содержащего точки,
	 несоответствующие правилу валидации;


	- [MsCalculationType.Pointwise](../../Enums/MsCalculationType.htm).
	 То исключение генерируется для каждой точки, несоответствующей правилу
	 валидации.


## Пример


Использование свойства приведено в примере для [IValidationCustom.Mappings](IValidationCustom.Mappings.htm).


См. также:


[IValidationCustom](IValidationCustom.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
