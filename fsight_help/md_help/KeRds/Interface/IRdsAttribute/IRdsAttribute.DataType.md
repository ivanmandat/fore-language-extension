# IRdsAttribute.DataType

IRdsAttribute.DataType
-


# IRdsAttribute.DataType


## Синтаксис


DataType: [DbDataType](Dal.chm::/Enums/DbDataType.htm);


## Описание


Свойство DataType определяет
 тип данных, которые могут содержаться в значениях элементов по данному
 атрибуту.


## Комментарии


Если DataType = DbDataType.DateTime,
 то используйте свойство [IRdsAttribute.TimeDependent](IRdsAttribute.TimeDependent.htm)
 для определения: учитывается ли временная составляющая.


Тип данных атрибута в зависимости от значения [IRdsAttribute.TimeDependent](IRdsAttribute.TimeDependent.htm):


	- True. Доля времени учитывается.
	 Тип данных атрибута - дата и время;


	- False. Доля времени
	 не учитывается. Тип данных атрибута - дата без времени.


## Пример


Использование свойства приведено в примере для [IRdsAttribute.Calculated](IRdsAttribute.Calculated.htm).


См. также:


[IRdsAttribute](IRdsAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
