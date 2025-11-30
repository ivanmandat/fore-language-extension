# TransformModelAutoPeriodOptions

TransformModelAutoPeriodOptions
-


# TransformModelAutoPeriodOptions


## Описание


Перечисление TransformModelAutoPeriodOptions
 содержит условия, задающие период расчёта.


Используется следующими свойствами и методами:


	- [IFormulaTransformModel.AutoPeriod](../Interface/IFormulaTransformModel/IFormulaTransformModel.AutoPeriod.htm);


	- [ILanerTransformPeriod.AutoPeriod](Laner.chm::/Interface/ILanerTransformPeriod/ILanerTransformPeriod.AutoPeriod.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 None. Сбрасывает условия,
		 задающие период расчета.


		 1
		 IdentStartByFact. Дата
		 начала периода идентификации равна первой фактической дате входного
		 ряда плюс заданное число периодов.


		 2
		 IdentStartByIdentEnd.
		 Дата начала периода идентификации равна дате окончания периода
		 идентификации минус заданное число периодов.


		 4
		 IdentEndByFact. Дата
		 окончания периода идентификации равна последней фактической дате
		 входного ряда плюс заданное число периодов. Дата начала периода
		 прогнозирования равна дате окончания периода идентификации + один
		 период.


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


		 42
		 UseNowAndIdentEndOffsets.
		 Комбинация значений IdentEndAsNow,
		 IdentStartByIdentEnd и
		 ForecastEndByIdentEnd.
		 Даты начала идентификации и конца прогноза берутся со смещением
		 от конца периода идентификации.


		 64
		 IdentStartAsNow. Дата
		 начала периода идентификации равна текущему числу плюс заданное
		 число периодов.


		 128
		 ForecastEndAsNow. Дата
		 окончания периода прогнозирования равна текущему числу плюс заданное
		 число периодов.


		 224
		 UseNowAndOffsets. Комбинация
		 флагов IdentEndAsNow,
		 IdentStartAsNow и ForecastEndAsNow.


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


		 5187
		 IdentStartAll. Комбинация
		 значений IdentStartByOwner,
		 IdentStartByFact, IdentStartByIdentEnd, IdentStartAsNow, IdentStartByForecastEnd.


		 8192
		 IdentEndByOwner. Дата
		 окончания периода идентификации определяется датой окончания периода
		 идентификации владельца рассчитываемого объекта.


		 8996
		 IdentEndAll. Комбинация
		 значений dentEndByOwner,
		 IdentEndByFact, IdentEndAsNow, IdentEndByFactStart,
		 IdentEndByIdentStart.


		 16384
		 ForecastEndByOwner.
		 Дата окончания периода прогнозирования определяется датой окончания
		 периода прогнозирования владельца рассчитываемого объекта.


		 18584
		 ForecastEndAll. Комбинация
		 значений ForecastEndByIdentEnd,
		 ForecastEndByFact, ForecastEndAsNow, ForecastEndByIdentStart,
		 ForecastEndByOwner.


		 32768
		 ForecastStartAsNow.
		 Дата начала периода прогнозирования равна текущему числу плюс
		 заданное число периодов.


		 65536
		 ForecastStartbyIdentStart.
		 Дата начала периода прогнозирования равна дате начала периода
		 идентификации плюс заданное число периодов.


		 131072
		 ForecastStartByIdentEnd.
		 Дата начала периода прогнозирования равна дате окончания периода
		 идентификации плюс заданное число периодов.


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


## Комментарии


Для задания числа добавляемых/вычитаемых периодов используйте следующие
 свойства для даты:


	- начала идентификации - [IFormulaTransformModel.IdentificationStartOffset](../Interface/IFormulaTransformModel/IFormulaTransformModel.IdentificationStartOffset.htm);


	- окончания идентификации - [IFormulaTransformModel.IdentificationEndOffset](../Interface/IFormulaTransformModel/IFormulaTransformModel.IdentificationEndOffset.htm);


	- начала прогнозирования - [IFormulaTransformModel.ForecastStartDateOffset](../Interface/IFormulaTransformModel/IFormulaTransformModel.ForecastStartDateOffset.htm);


	- окончания прогнозирования - [IFormulaTransformModel.ForecastEndOffset](../Interface/IFormulaTransformModel/IFormulaTransformModel.ForecastEndOffset.htm).


См. также:


[Перечисления
 сборки Cubes](KeCubes_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
