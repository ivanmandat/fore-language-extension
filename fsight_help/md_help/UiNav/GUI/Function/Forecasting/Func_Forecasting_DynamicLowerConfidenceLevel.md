# DynamicLowerConfidenceLevel

DynamicLowerConfidenceLevel
-


# DynamicLowerConfidenceLevel


## Синтаксис


DynamicLowerConfidenceLevel(Forecast: [IMsForecast](kems.chm::/Interface/IMsForecast/IMsForecast.htm))


## Параметры


Forecast. Прогнозный ряд.


## Описание


Возвращает нижнюю динамическую доверительную
 границу прогнозного ряда.


## Пример


		 Формула
		 Результат
		 Применение


		 = DynamicLowerConfidenceLevel((Arima({ВВП|Анкоридж[t]}, Null, "",
		 "1", 0, Estimate) as ms.IMsForecastObject).Forecast(Null))
		 Для модели «ARIMA»
		 будут получены значения нижней динамической доверительной границы.
		 Можно использовать в формулах вычисляемых рядов базы данных
		 временных рядов и в формулах моделей контейнера моделирования,
		 основанных на атрибутах.


		 = DynamicLowerConfidenceLevel((Arima(X1, Null, "", "1",
		 0, Estimate) as ms.IMsForecastObject).Forecast(Null))
		 Для модели «ARIMA»
		 будут получены значения нижней динамической доверительной границы.
		 Можно использовать в формулах моделей контейнера моделирования,
		 основанных на переменных.


См. также:


[Функции, доступные в редакторе
 выражения](../../Expression_editor_func.htm) │ [Прогнозирование](Func_Forecasting.htm)
 │ [IModelling.DynamicLowerConfidenceLevel](kems.chm::/interface/imodelling/imodelling.DynamicLowerConfidenceLevel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
