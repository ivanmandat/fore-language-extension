# ISmBinaryModel.Forecast

ISmBinaryModel.Forecast
-


# ISmBinaryModel.Forecast


## Синтаксис


Forecast: [IForecast](../IForecast/IForecast.htm);


## Описание


Свойство Forecast возвращает
 прогнозный ряд.


## Комментарии


Вероятность прогнозного ряда возвращает свойство [ISmBinaryModel.ProbabilityForecast](ISmBinaryModel.ProbabilityForecast.htm).


Для бинарной регрессии не рассчитываются следующие компоненты прогнозного
 ряда:


	- [IForecast.LowerConfidenceLevel](../IForecast/IForecast.LowerConfidenceLevel.htm).
	 Значение нижней доверительной границы;


	- [IForecast.StandardError](../IForecast/IForecast.StandardError.htm).
	 Стандартная ошибка;


	- [IForecast.UpperConfidenceLevel](../IForecast/IForecast.UpperConfidenceLevel.htm).
	 Значение верхней доверительной границы.


## Пример


Использование свойства приведено в примере для [ISmBinaryModel.BinaryForecast](ISmBinaryModel.BinaryForecast.htm).


См. также:


[ISmBinaryModel](ISmBinaryModel.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
