# EaxDataAreaTransformationCalculationMode

EaxDataAreaTransformationCalculationMode
-


# EaxDataAreaTransformationCalculationMode


## Описание


Перечисление EaxDataAreaTransformationCalculationMode
 используется для определения порядка расчета формул [вычисляемых
 элементов](UiAnalyticalArea.chm::/Work_with_dimensions/Edited_elements.htm) в цепочке расчета.


Используется следующим свойством:


	- [IEaxDataAreaTransformation.CalculationMode](../Interface/IEaxDataAreaTransformation/IEaxDataAreaTransformation.CalculationMode.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 AfterDataSourceExecute.
		 По умолчанию. Формула вычисляется перед расчетом агрегации и итогов.


		 1
		 AfterCalcTotals. Формула
		 вычисляется после расчета итогов.


		 2
		 AfterAggregation. Формула
		 вычисляется после расчета агрегации.


Примечание.
 Расчет итогов выполняется только после расчета агрегации. Изменение порядка
 вычисления формул в пункте «[Расчет
 итогов](UiAnalyticalArea.chm::/Work_with_dimensions/Edited_elements.htm#calculation_chain)» может привести к изменению результата
 итогов.


См. также:


[Перечисления
 сборки Express](KeExpress_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
