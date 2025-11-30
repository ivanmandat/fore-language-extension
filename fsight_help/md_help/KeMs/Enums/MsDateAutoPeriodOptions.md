# MsDateAutoPeriodOptions

MsDateAutoPeriodOptions
-


# MsDateAutoPeriodOptions


## Описание


Перечисление MsDateAutoPeriodOptions
 используется для определения условия, по которому рассчитываются даты
 начала и окончания периода.


Используется следующими свойствами:


	- [ILanerTransformPeriod.OutputAutoPeriod](../../Laner/Interface/ILanerTransformPeriod/ILanerTransformPeriod.OutputAutoPeriod.htm);


	- [IMsDatePeriod.AutoPeriod](../Interface/IMsDatePeriod/IMsDatePeriod.AutoPeriod.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 None. Сбрасывает условия,
		 задающие период расчета.


		 1
		 StartByFact. Дата начала
		 периода определяется фактическими данными.


		 2
		 EndByFact. Дата окончания
		 периода определяется фактическими данными.


		 3
		 AllByFact. Комбинация
		 StartByFact и EndByFact.


		 4
		 StartByEnd. Дата начала
		 периода определяется по дате окончания периода.


		 8
		 EndByStart. Дата окончания
		 периода определяется по дате начала периода.


		 16
		 EndByFactStart. Дата
		 окончания периода определяется по дате начала фактических данных.


		 32
		 StartAsNow. Дата начала
		 периода равна текущей дате.


		 64
		 EndAsNow. Дата окончания
		 периода равна текущей дате.


		 68
		 UseNowAndEndOffsets.
		 Комбинация EndAsNow и
		 StartByEnd плюс
		 смещение на заданное количество периодов.


		 96
		 UseNowAndOffsets. Комбинация
		 EndAsNow и StartAsNow
		 плюс смещение на заданное количество периодов.


		 128
		 StartByOwner. Дата
		 начала периода определяется датой начала периода у владельца рассчитываемого
		 объекта.


		 256
		 EndByOwner. Дата окончания
		 периода определяется датой окончания периода у владельца рассчитываемого
		 объекта.


		 384
		 AllByOwner. Комбинация
		 StartByOwner и EndByOwner.


## Комментарии


Значения перечисления можно комбинировать друг с другом. Для этого указывайте
 необходимые значения через оператор «Or».


См. также:


[Перечисления
 сборки Ms](KeMs_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
