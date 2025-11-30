# IMsModelPeriod

IMsModelPeriod
-


# IMsModelPeriod


Сборка: Ms;


## Описание


Интерфейс IMsModelPeriod содержит
 свойства для установки периодов идентификации и прогнозирования.


## Иерархия наследования


           IMsModelPeriod


## Комментарии


Если границы периодов заданы неверно, то они будут автоматически изменены
 следующим образом:


	- если IdentStart >
	 IdentEnd, то IdentEnd =
	 IdentStart;


	- если IdentStart >
	 ForecastStart, то ForecastStart =
	 IdentStart;


	- если IdentEnd >
	 ForecastStart, то ForecastStart =
	 IdentEnd;


	- если IdentEnd >
	 ForecastEnd, то IdentEnd
	 = ForecastEnd.


	- если ForecastStart
	 > ForecastEnd, то ForecastStart = ForecastEnd.


Где:


	- IdentStart. Дата начала
	 периода идентификации;


	- IdentEnd. Дата окончания
	 периода идентификации;


	- ForecastStart. Дата
	 начала периода прогнозирования;


	- ForecastEnd. Дата окончания
	 периода прогнозирования.


Примечание.
 В вышеперечисленных случаях выдается предупреждение о некорректно заданных
 границах расчёта и модель рассчитывается по изменённым границам периодов.


Если ForecastEnd < IdentStart, то границы периодов
 не изменяются, выдается сообщение о некорректно заданных границах расчёта,
 расчёт модели не прерывается, но выходной ряд остаётся без изменений.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AllowForecastBeforeIdent](IMsModelPeriod.AllowForecastBeforeIdent.htm)


		 Свойство AllowForecastBeforeIdent
		 определяет, допустим ли период прогнозирования до периода идентификации.


		 ![](../../Property_Image.gif)
		 [AutoPeriod](IMsModelPeriod.AutoPeriod.htm)


		 Свойство AutoPeriod
		 определяет условия, которые используются для вычисления дат начала/окончания
		 периодов идентификации и прогнозирования.


		 ![](../../Property_Image.gif)
		 [ForecastAutoEndDate](IMsModelPeriod.ForecastAutoEndDate.htm)


		 Свойство ForecastAutoEndDate
		 возвращает дату окончания периода прогнозирования, если используются
		 условия для вычисления границ периода расчета модели.


		 ![](../../Property_Image.gif)
		 [ForecastAutoStartDate](IMsModelPeriod.ForecastAutoStartDate.htm)


		 Свойство ForecastAutoStartDate
		 возвращает дату начала периода прогнозирования, если используются
		 условия для вычисления границ периода расчета модели.


		 ![](../../Property_Image.gif)
		 [ForecastEndDate](IMsModelPeriod.ForecastEndDate.htm)


		 Свойство ForecastEndDate
		 определяет дату окончания периода прогнозирования.


		 ![](../../Property_Image.gif)
		 [ForecastEndDateCoord](IMsModelPeriod.ForecastEndDateCoord.htm)


		 Свойство ForecastEndDateCoord
		 определяет настройки координаты, задающей дату окончания периода
		 прогнозирования.


		 ![](../../Property_Image.gif)
		 [ForecastEndDateParam](IMsModelPeriod.ForecastEndDateParam.htm)


		 Свойство ForecastEndDateParam
		 определяет настройки привязки к параметру, задающему дату окончания
		 периода прогнозирования.


		 ![](../../Property_Image.gif)
		 [ForecastEndOffset](IMsModelPeriod.ForecastEndOffset.htm)


		 Свойство ForecastEndOffset
		 определяет число периодов, на которое сдвигается дата окончания
		 периода прогнозирования.


		 ![](../../Property_Image.gif)
		 [ForecastStartDate](IMsModelPeriod.ForecastStartDate.htm)


		 Свойство ForecastStartDate
		 определяет дату начала периода прогнозирования.


		 ![](../../Property_Image.gif)
		 [ForecastStartDateCoord](IMsModelPeriod.ForecastStartDateCoord.htm)


		 Свойство ForecastStartDateCoord
		 определяет настройки координаты, задающей дату начала периода
		 прогнозирования.


		 ![](../../Property_Image.gif)
		 [ForecastStartDateParam](IMsModelPeriod.ForecastStartDateParam.htm)


		 Свойство ForecastStartDateParam
		 определяет настройки привязки к параметру, задающему дату начала
		 периода прогнозирования.


		 ![](../../Property_Image.gif)
		 [ForecastStartOffset](IMsModelPeriod.ForecastStartOffset.htm)


		 Свойство ForecastStartOffset
		 определяет число периодов, на которое сдвигается дата начала периода
		 прогнозирования.


		 ![](../../Property_Image.gif)
		 [IdentificationAutoEndDate](IMsModelPeriod.IdentificationAutoEndDate.htm)


		 Свойство IdentificationAutoEndDate
		 возвращает дату окончания периода идентификации, если используются
		 условия для вычисления границ периода расчета модели.


		 ![](../../Property_Image.gif)
		 [IdentificationAutoStartDate](IMsModelPeriod.IdentificationAutoStartDate.htm)


		 Свойство IdentificationAutoStartDate
		 возвращает дату начала периода идентификации, если используются
		 условия для вычисления границ периода расчета модели.


		 ![](../../Property_Image.gif)
		 [IdentificationEndDate](IMsModelPeriod.IdentificationEndDate.htm)


		 Свойство IdentificationEndDate
		 определяет дату окончания периода идентификации.


		 ![](../../Property_Image.gif)
		 [IdentificationEndDateCoord](IMsModelPeriod.IdentificationEndDateCoord.htm)


		 Свойство IdentificationEndDateCoord
		 определяет настройки координаты, задающей дату окончания периода
		 идентификации.


		 ![](../../Property_Image.gif)
		 [IdentificationEndDateParam](IMsModelPeriod.IdentificationEndDateParam.htm)


		 Свойство IdentificationEndDateParam
		 определяет настройки привязки к параметру, задающему дату окончания
		 периода идентификации.


		 ![](../../Property_Image.gif)
		 [IdentificationEndOffset](IMsModelPeriod.IdentificationEndOffset.htm)


		 Свойство IdentificationEndOffset
		 определяет число периодов, на которое сдвигается дата окончания
		 периода идентификации.


		 ![](../../Property_Image.gif)
		 [IdentificationStartDate](IMsModelPeriod.IdentificationStartDate.htm)


		 Свойство IdentificationStartDate
		 определяет дату начала периода идентификации.


		 ![](../../Property_Image.gif)
		 [IdentificationStartDateCoord](IMsModelPeriod.IdentificationStartDateCoord.htm)


		 Свойство IdentificationStartDateCoord
		 определяет настройки координаты, задающей дату начала периода
		 идентификации.


		 ![](../../Property_Image.gif)
		 [IdentificationStartDateParam](IMsModelPeriod.IdentificationStartDateParam.htm)


		 Свойство IdentificationStartDateParam
		 определяет настройки привязки к параметру, задающему дату начала
		 периода идентификации.


		 ![](../../Property_Image.gif)
		 [IdentificationStartOffset](IMsModelPeriod.IdentificationStartOffset.htm)


		 Свойство IdentificationStartOffset
		 определяет число периодов, на которое сдвигается дата начала периода
		 идентификации.


		 ![](../../Property_Image.gif)
		 [UseForecastStart](IMsModelPeriod.UseForecastStart.htm)


		 Свойство UseForecastStart
		 определяет, использовать ли дату начала прогнозирования.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Assign](IMsModelPeriod.Assign.htm)


		 Метод Assign
		 копирует параметры указанного периода в текущий период.


		 ![](../../Sub_Image.gif)
		 [AutoPeriodDates](IMsModelPeriod.AutoPeriodDates.htm)


		 Метод AutoPeriodDates
		 возвращает границы периода расчета модели, если используются условия
		 для вычисления дат начала/окончания периодов идентификации и прогнозирования.


		 ![](../../Sub_Image.gif)
		 [GetLevelDate](IMsModelPeriod.GetLevelDate.htm)


		 Метод GetLevelDate
		 возвращает дату и время начала заданного периода.


		 ![](../../Sub_Image.gif)
		 [GetPeriodSize](IMsModelPeriod.GetPeriodSize.htm)


		 Метод GetPeriodSize
		 возвращает число периодов в заданном временном интервале.


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
