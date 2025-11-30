# ISmCurveEstimation.ForecastConfidenceLevel

ISmCurveEstimation.ForecastConfidenceLevel
-


# ISmCurveEstimation.ForecastConfidenceLevel


## Синтаксис


ForecastConfidenceLevel: Double;


## Описание


Свойство ForecastConfidenceLevel
 определяет значимость доверительных границ прогнозного ряда, то есть вероятность
 того, что неизвестное значение параметра будет накрыто доверительным интервалом.


## Комментарии


Как правило, значимость доверительных границ задается величиной 1-alpha, где alpha
 - уровень значимости. Для alpha=0,05
 доверительный уровень равен 0,95, что соответствует 95%.


Значимость доверительных границ может принимать значения из интервала
 (0, 1). По умолчанию принимает значение 0,95.


Свойство задаётся сразу для всех форм зависимости.


## Пример


Использование свойства приведено в примере для [ISmCurveEstimation.MissingData](ISmCurveEstimation.MissingData.htm).


См. также:


[ISmCurveEstimation](ISmCurveEstimation.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
