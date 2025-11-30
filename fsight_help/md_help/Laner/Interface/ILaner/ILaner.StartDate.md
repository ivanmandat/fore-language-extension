# ILaner.StartDate

ILaner.StartDate
-


# ILaner.StartDate


## Синтаксис


StartDate: DateTime;


## Описание


Свойство StartDate определяет
 дату, начиная с которой отображаются значения в рабочей книге.


## Комментарии


Если значение StartDate не задано,
 то дату начала отображения данных в рабочей книге определяет свойство
 [ILaner.StartDateParamId](ILaner.StartDateParamId.htm).


Если заданы свойства StartDate
 и [ILaner.StartDateParamId](ILaner.StartDateParamId.htm), то
 дату начала отображения данных в рабочей книге определяет то свойство,
 которое задано последним.


Дата начала отображения данных должна быть меньше, чем дата окончания
 отображения данных. Для задания даты окончания отображения данных в рабочей
 книге, используйте свойство [ILaner.EndDate](ILaner.EndDate.htm).


StartDate влияет только на отображение
 данных в рабочей книге. Для определения параметров расчета конкретного
 ряда используйте интерфейс [ILanerTransformPeriod](../ILanerTransformPeriod/ILanerTransformPeriod.htm).


## Пример


Использование свойства приведено в примере для [ILaner.EndDate](ILaner.EndDate.htm).


См. также:


[ILaner](ILaner.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
