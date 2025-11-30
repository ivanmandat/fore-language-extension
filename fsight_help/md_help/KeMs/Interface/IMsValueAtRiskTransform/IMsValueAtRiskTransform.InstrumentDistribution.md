# IMsValueAtRiskTransform.InstrumentDistribution

IMsValueAtRiskTransform.InstrumentDistribution
-


# IMsValueAtRiskTransform.InstrumentDistribution


## Синтаксис


InstrumentDistribution(Element: Integer): [MsValueAtRiskDistributionType](../../Enums/MsValueAtRiskDistributionType.htm);


## Параметры


Element. Индекс элемента измерения, соответствующий финансовому инструменту.


## Описание


Свойство InstrumentDistribution определяет распределение по финансовым инструментам.


## Комментарии


Распределение должно быть задано для каждого финансового инструмента, участвующего в расчёте модели. Различные инструменты могут иметь различное распределение.


Свойство InstrumentDistribution используется только в методе «Монте-Карло», т.е. [IMsValueAtRiskTransform.MethodType](IMsValueAtRiskTransform.MethodType.htm) = MsValueAtRiskMethodType.MonteCarlo.


## Пример


Использование свойства приведено в [IMsValueAtRiskTransform.Portfolio](IMsValueAtRiskTransform.Portfolio.htm).


См. также:


[IMsValueAtRiskTransform](IMsValueAtRiskTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
