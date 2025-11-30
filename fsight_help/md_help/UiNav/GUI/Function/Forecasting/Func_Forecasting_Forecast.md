# Forecast

Forecast
-


# Forecast


## Синтаксис


Forecast(Forecast: [IMsForecast](kems.chm::/Interface/IMsForecast/IMsForecast.htm);
 Period: [IMsPeriod](kems.chm::/Interface/IMsPeriod/IMsPeriod.htm))


## Параметры


Forecast. Прогнозный ряд;


Period. Период прогнозирования
 данных.


## Описание


Возвращает прогнозные значения для
 указанного ряда.


## Комментарии


Для получения модельного ряда используйте функцию [Fitted](Func_Forecasting_Fitted.htm).


## Пример


		 Формула
		 Результат
		 Применение


		 = Forecast(Arima({ВВП|Анкоридж[t]}, Null, "",
		 "1", 0, Estimate), SetPeriod("01.01.2010",
		 "01.01.2015"))
		 Для модели «ARIMA»
		 будут получены прогнозные значения на период с 2010 по 2015
		 год.
		 Можно использовать в формулах вычисляемых рядов базы данных
		 временных рядов и в формулах моделей контейнера моделирования,
		 основанных на атрибутах.


		 = Forecast(Arima(X1, Null, "", "1",
		 0, Estimate), SetPeriod("01.01.2010", "01.01.2015"))
		 Для модели «ARIMA»
		 будут получены прогнозные значения на период с 2010 по 2015
		 год.
		 Можно использовать в формулах моделей контейнера моделирования,
		 основанных на переменных.


См. также:


[Функции, доступные в редакторе
 выражения](../../Expression_editor_func.htm) │ [Прогнозирование](Func_Forecasting.htm)
 │ [IModelling.Forecast](kems.chm::/interface/imodelling/imodelling.Forecast.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
