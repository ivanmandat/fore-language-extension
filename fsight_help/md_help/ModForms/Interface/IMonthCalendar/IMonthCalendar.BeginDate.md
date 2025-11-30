# IMonthCalendar.BeginDate

IMonthCalendar.BeginDate
-


# IMonthCalendar.BeginDate


## Синтаксис


BeginDate: DateTime;


## Описание


Свойство BeginDate определяет дату, с которой будет начинаться выделение.


## Комментарии


При этом учитывается состояние свойства [MultiSelect](IMonthCalendar.MultiSelect.htm), если ему установлено значение False, изменение значения свойства BeginDate приведет к изменению значений свойств [EndDate](IMonthCalendar.EndDate.htm) и [CurrentDate](../ICommonCalendar/ICommonCalendar.CurrentDate.htm). При установке [MultiSelect](IMonthCalendar.MultiSelect.htm) в True, свойство BeginDate может изменить значение, только в случае изменения значения свойства [CurrentDate](../ICommonCalendar/ICommonCalendar.CurrentDate.htm).


См. также:


[IMonthCalendar](IMonthCalendar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
