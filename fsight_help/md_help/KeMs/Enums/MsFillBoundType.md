# MsFillBoundType

MsFillBoundType
-


# MsFillBoundType


## Описание


Перечисление MsFillBoundType
 используется для определения конечной даты загрузки данных.


Используется следующими свойствами:


	- [IModelling.Fill](../Interface/IModelling/IModelling.Fill.htm);


	- [IMsMetaModelVisualController.GetVariableData](../Interface/IMsMetaModelVisualController/IMsMetaModelVisualController.GetVariableData.htm);


	- [IMsMetaModelVisualController.GetVariableValues](../Interface/IMsMetaModelVisualController/IMsMetaModelVisualController.GetVariableValues.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 EndIdentify. Конец
		 идентификации.


		 1
		 StartForecast. Начало
		 прогноза.


		 2
		 EndForecast. Конец
		 прогноза по дате хранения данных.


		 3
		 EndForecastBelong.
		 Конец прогноза по принадлежности периода.


## Комментарии


Результат использования элементов EndForecast
 и EndForecastBelong зависит от
 параметров хранения данных. Если данные хранятся на конец периода или
 на начало периода без смещения, то элементы работают одинаково. Если данные
 хранятся на начало периода со смещением, то результат использования элементов
 различается.


Например, используется месячная динамика, данные хранятся на начало
 периода со смещением и дата окончания прогноза - 15 января 2013 года.
 Если используется элемент EndForecast,
 то конец прогноза - это декабрь 2012 года, если EndForecastBelong,
 то - январь 2013 года.


См. также:


[Перечисления
 сборки Ms](KeMs_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
