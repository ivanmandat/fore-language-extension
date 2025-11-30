# RubricatorAutoDateType

RubricatorAutoDateType
-


# RubricatorAutoDateType


## Описание


Перечисление RubricatorAutoDateType
 содержит способы задания даты временного периода базы данных временных
 рядов.


Используется следующими свойствами и методами:


	- [IRubricatorAutoPeriodDate.AutoDateType](../Interface/IRubricatorAutoPeriodDate/IRubricatorAutoPeriodDate.AutoDateType.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 Exact. Явно заданная
		 дата.


		 1
		 Now. Дата, заданная
		 относительно текущей даты.


		 2
		 DateStart. Дата, заданная
		 относительно даты начала данных.


		 3
		 DateEnd. Дата, заданная
		 относительно даты окончания данных.


## Комментарии


DateStart и DateEnd
 используются только для [IRubricatorAutoPeriod.Start](../Interface/IRubricatorAutoPeriod/IRubricatorAutoPeriod.Start.htm)
 и [IRubricatorAutoPeriod.End_](../Interface/IRubricatorAutoPeriod/IRubricatorAutoPeriod.End_.htm)
 соответственно.


Для явного задания даты используйте свойство [IRubricatorAutoPeriodDate.ExactDate](../Interface/IRubricatorAutoPeriodDate/IRubricatorAutoPeriodDate.ExactDate.htm),
 для относительного - [IRubricatorAutoPeriodDate.Offset](../Interface/IRubricatorAutoPeriodDate/IRubricatorAutoPeriodDate.Offset.htm).


См. также:


[Перечисления
 сборки Cubes](KeCubes_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
