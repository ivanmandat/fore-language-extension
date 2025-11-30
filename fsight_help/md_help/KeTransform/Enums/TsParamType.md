# TsParamType

TsParamType
-


# TsParamType


## Описание


Перечисление TsParamType используется
 для определения типа параметра.


Используется следующими свойствами:


	- [ITsModelParam.ParamType](../Interface/ITsModelParam/ITsModelParam.ParamType.htm);


	- [ITsModelParamValue.ParamType](../Interface/ITsModelParamValue/ITsModelParamValue.ParamType.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 Unknown. Тип не задан.


		 1
		 Simple. Числовое или
		 строковое значение.


		 2
		 Serie. Ряд данных.


		 3
		 Date. Дата.


		 4
		 Period. Период.


		 5
		 Selection. Отметка
		 элементов справочника.


		 6
		 Frequency. Динамика.


		 7
		 Hierarchy. Альтернативная
		 иерархия.


## Комментарий


Особенности задания значений параметра в зависимости от его типа:


		 Тип параметра
		 Особенность


		 Serie
		 В качестве значения параметра может использоваться объект следующих
		 интерфейсов: [ITimeSeries](KeMs.chm::/Interface/ITimeSeries/ITimeSeries.htm),
		 [IMsResultObject](kems.chm::/Interface/IMsResultObject/IMsResultObject.htm),
		 [IMsForecastObject](kems.chm::/Interface/IMsForecastObject/IMsForecastObject.htm).


		 Date
		 В качестве значения параметра может использоваться объект следующих
		 классов: [DateTime](ForeSys.chm::/Class/DateTime/DateTime.htm),
		 [String](ForeSys.chm::/Class/String/String.htm).


		 Period
		 В качестве значения параметра может использоваться объект интерфейса
		 [IMsPeriod](kems.chm::/Interface/IMsPeriod/IMsPeriod.htm)
		 или массив дат.


		 Selection
		 В качестве значения параметра может использоваться объект интерфейса
		 [IDimSelection](KeDims.chm::/Interface/IDimSelection/IDimSelection.htm),
		 массив ключей элементов справочника, число или строка.


		 Hierarchy
		 В качестве значения параметра указывается ключ одной из альтернативных
		 иерархий, доступных в коллекции [IDimensionModel.Hierarchies](KeDims.chm::/interface/IDimensionModel/IDimensionModel.Hierarchies.htm).


См. также:


[Перечисления
 сборки Transform](KeTransform_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
