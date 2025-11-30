# ILogonHoursPeriods.SetPeriodAccess

ILogonHoursPeriods.SetPeriodAccess
-


# ILogonHoursPeriods.SetPeriodAccess


## Синтаксис


		SetPeriodAccess(Begin_: DateTime, End_:
		 DateTime, Value: [ILogonHours](../ILogonHours/ILogonHours.htm));


## Параметры


Begin_. Начальная дата периода,
 в котором необходимо ограничить время доступа;


End_. Конечная дата периода,
 в котором необходимо ограничить время доступа;


Value. Настройки доступа по
 часам в течение дня.


## Описание


Метод SetPeriodAccess устанавливает
 параметры доступа пользователя для указанного периода.


## Комментарии


Период формируется путем указания в параметрах Begin_
 и End_ начальной и конечной даты
 соответственно. Параметры доступа в течение дня на протяжении всего периода
 передаются в параметре Value.


## Пример


Использование метода приведено в примере для [ILogonHoursPeriods.CreateHours](ILogonHoursPeriods.CreateHours.htm).


См. также:


[ILogonHoursPeriods](ILogonHoursPeriods.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
