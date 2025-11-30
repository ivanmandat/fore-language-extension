# ILaner.StartDateParamId

ILaner.StartDateParamId
-


# ILaner.StartDateParamId


## Синтаксис


StartDateParamId: String;


## Описание


Свойство StartDateParamId определяет
 идентификатор параметра, задающего дату начала отображения данных в рабочей
 книге.


## Комментарии


Для корректной работы параметр, указанный в свойстве StartDateParamId,
 должен иметь тип «Дата и время» ([DbDataType.DateTime](Dal.chm::/Enums/DbDataType.htm))
 или «Дата» ([DbDataType.Date](Dal.chm::/Enums/DbDataType.htm)).
 Для определения типа параметра используйте свойство [IMetabaseObjectParam.DataType](KeSom.chm::/Interface/IMetabaseObjectParam/IMetabaseObjectParam.DataType.htm).


Если значение StartDateParamId
 не задано, то дату начала отображения данных в рабочей книге определяет
 свойство [ILaner.StartDate](ILaner.StartDate.htm).


Если заданы свойства StartDateParamId
 и [ILaner.StartDate](ILaner.StartDate.htm),
 то дату начала отображения данных в рабочей книге определяет то свойство,
 которое задано последним.


Дата начала отображения данных должна быть меньше, чем дата окончания
 отображения данных. Для задания параметра, определяющего дату окончания
 отображения данных в рабочей книге, используйте свойство [ILaner.EndDateParamId](ILaner.EndDateParamId.htm).


StartDateParamId влияет только
 на отображение данных в рабочей книге. Для определения параметров расчета
 конкретного ряда используйте интерфейс [ILanerTransformPeriod](../ILanerTransformPeriod/ILanerTransformPeriod.htm).


## Пример


Использование свойства приведено в примере для [ILaner.EndDateParamId](ILaner.EndDateParamId.htm).


См. также:


[ILaner](ILaner.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
