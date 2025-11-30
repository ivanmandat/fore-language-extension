# ILogonHoursPeriods.FindByDate

ILogonHoursPeriods.FindByDate
-


# ILogonHoursPeriods.FindByDate


## Синтаксис


FindByDate(Current: DateTime): [ILogonHoursPeriod](../ILogonHoursPeriod/ILogonHoursPeriod.htm);


## Параметры


Current - дата, для которой будет искаться период, в который осуществляется ограничение времени доступа пользователя.


## Описание


Метод FindByDate осуществляет поиск периода, содержащего дату, передаваемую посредством параметра Current. Метод возвращает параметры периода в случае удачного поиска, и Null, если указанная дата не попадает ни в один из периодов.


См. также:


[ILogonHoursPeriods](ILogonHoursPeriods.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
