# MsAutoPeriodOptions

MsAutoPeriodOptions
-


# MsAutoPeriodOptions


## Описание


Перечисление MsAutoPeriodOptions
 содержит условия, задающие период расчета.


Используется следующими свойствами и методами:


	- [IMsModelPeriod.AutoPeriod](../Interface/IMsModelPeriod/IMsModelPeriod.AutoPeriod.htm).


## Допустимые значения


		 Значение


		 Краткое
		 описание


		 0


		 None. Сбрасывает
		 условия, задающие период расчета.


		 1


		 IdentStartByFact.
		 Дата начала периода идентификации равна первой фактической дате
		 входного ряда плюс заданное число периодов.


		 2


		 IdentStartByIdentEnd.
		 Дата начала периода идентификации равна дате окончания периода
		 идентификации минус заданное число периодов.


		 4


		 IdentEndByFact.
		 Дата окончания периода идентификации равна последней фактической
		 дате входного ряда плюс заданное число периодов. Дата начала
		 периода прогнозирования равна дате окончания периода идентификации
		 + один период.


		 5


		 IdentByFact. Комбинация
		 значений IdentStartByFact
		 и IdentEndByFact.


		 8


		 ForecastEndByIdentEnd.
		 Дата окончания периода прогнозирования равна дате окончания периода
		 идентификации плюс заданное число периодов.


		 16


		 ForecastEndByFact.
		 Дата окончания периода прогнозирования равна последней фактической
		 дате факторов модели плюс заданное число периодов.


		 17


		 AllByFact. Комбинация
		 значений IdentStartByFact
		 и ForecastEndByFact.


		 32


		 IdentEndAsNow. Дата
		 окончания периода идентификации равна текущему числу плюс заданное
		 число периодов. Дата начала периода прогнозирования равна дате
		 окончания периода идентификации плюс один период.


		 64


		 IdentStartAsNow.
		 Дата начала периода идентификации равна текущему числу плюс заданное
		 число периодов.


		 128


		 ForecastEndAsNow. Дата
		 окончания периода прогнозирования равна текущему числу плюс заданное
		 число периодов.


		 256


		 IdentEndByFactStart.
		 Дата окончания периода идентификации равна первой фактической
		 дате входного ряда плюс заданное число периодов.


		 512


		 IdentEndByIdentStart.
		 Дата окончания периода идентификации равна дате начала периода
		 идентификации плюс заданное число периодов.


		 1024


		 IdentStartByForecastEnd.
		 Дата начала периода идентификации равна дате окончания периода
		 прогнозирования минус заданное число периодов.


		 2048


		 ForecastEndByIdentStart.
		 Дата окончания периода прогнозирования равна дате начала периода
		 идентификации плюс заданное число периодов.


		 4096


		 IdentStartByOwner.
		 Дата начала периода идентификации определяется датой начала периода
		 идентификации владельца рассчитываемого объекта.


		 8192


		 IdentEndByOwner.
		 Дата окончания периода идентификации определяется датой окончания
		 периода идентификации владельца рассчитываемого объекта.


		 16384


		 ForecastEndByOwner. Дата
		 окончания периода прогнозирования определяется датой окончания
		 периода прогнозирования владельца рассчитываемого объекта.


		 32768


		 ForecastStartAsNow.
		 Дата начала периода прогнозирования равна текущему числу плюс
		 заданное число периодов.


		 32992


		 UseNowAndOffsets.
		 Комбинация флагов IdentEndAsNow,
		 IdentStartAsNow, ForecastStartAsNow и ForecastEndAsNow.


		 65536


		 ForecastStartByIdentStart.
		 Дата начала периода прогнозирования равна дате начала периода
		 идентификации плюс заданное число периодов.


		 131072


		 ForecastStartByIdentEnd.
		 Дата начала периода прогнозирования равна дате окончания периода
		 идентификации плюс заданное число периодов.


		 131114


		 UseNowAndIdentEndOffsets.
		 Комбинация значений IdentEndAsNow,
		 IdentStartByIdentEnd,
		 ForecastStartByIdentEnd
		 и ForecastEndByIdentEnd.
		 Даты начала идентификации и конца прогноза берутся со смещением
		 от конца периода идентификации.


		 262144


		 ForecastStartByForecastEnd.
		 Дата начала периода прогнозирования равна дате окончания периода
		 прогнозирования минус заданное число периодов.


		 524288


		 ForecastStartByOwner.
		 Дата начала периода прогнозирования определяется датой начала
		 периода прогнозирования владельца рассчитываемого объекта.


		 552960


		 AllByOwner. Комбинация
		 значений IdentStartByOwner,
		 IdentEndByOwner, ForecastStartByOwner, ForecastEndByOwner.


		 1048576


		 ForecastEndByForecastStart.
		 Дата окончания периода прогнозирования равна дате начала периода
		 прогнозирования плюс заданное число периодов.


## Комментарии


Для задания числа добавляемых/вычитаемых периодов используйте следующие
 свойства для даты:


	- начала идентификации
	 - [IMsModelPeriod.IdentificationStartOffset](../Interface/IMsModelPeriod/IMsModelPeriod.IdentificationStartOffset.htm);


	- окончания идентификации
	 - [IMsModelPeriod.IdentificationEndOffset](../Interface/IMsModelPeriod/IMsModelPeriod.IdentificationEndOffset.htm);


	- начала прогнозирования
	 - [IMsModelPeriod.ForecastStartOffset](../Interface/IMsModelPeriod/IMsModelPeriod.ForecastStartOffset.htm);


	- окончания прогнозирования
	 - [IMsModelPeriod.ForecastEndOffset](../Interface/IMsModelPeriod/IMsModelPeriod.ForecastEndOffset.htm).


См. также:


[Перечисления
 сборки Ms](KeMs_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
