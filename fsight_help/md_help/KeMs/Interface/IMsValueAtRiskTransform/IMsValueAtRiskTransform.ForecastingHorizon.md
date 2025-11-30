# IMsValueAtRiskTransform.ForecastingHorizon

IMsValueAtRiskTransform.ForecastingHorizon
-


# IMsValueAtRiskTransform.ForecastingHorizon


## Синтаксис


ForecastingHorizon: Integer;


## Описание


Свойство ForecastingHorizon определяет временной горизонт прогнозирования.


## Комментарии


Значение ForecastingHorizon должно быть положительным.


Временной горизонт зависит от рассматриваемой ситуации. По базельским документам - 10 дней, по методике Risk Metrics - 1 день. Чаще распространен расчет с временным горизонтом 1 день. 10 дней используется для расчета величины капитала, покрывающего возможные убытки.


## Пример


Использование свойства приведено в [IMsValueAtRiskTransform.Portfolio](IMsValueAtRiskTransform.Portfolio.htm).


См. также:


[IMsValueAtRiskTransform](IMsValueAtRiskTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
