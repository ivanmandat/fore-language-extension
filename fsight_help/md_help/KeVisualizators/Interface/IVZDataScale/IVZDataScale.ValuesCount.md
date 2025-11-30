# IVZDataScale.ValuesCount

IVZDataScale.ValuesCount
-


# IVZDataScale.ValuesCount


## Синтаксис


ValuesCount: Integer;


## Описание


Свойство ValuesCount определяет
 количество значений шкалы визуализатора.


## Комментарии


Под значениями шкалы понимаются уникальные крайние значения интервалов.


Количество значений шкалы ValuesCount
 всегда на единицу меньше, чем количество её интервалов, задаваемое свойством
 [IVZDataScale.IntervalsCount](IVZDataScale.IntervalsCount.htm).


Если рассмотреть шкалу, приведенную ниже, то ValuesCount
 будет равно четырем, так как в шкале есть четыре уникальных крайних значения:


	- 6,50


	- 11,50


	- 16,50


	- 21,50


![](IVZDataScale.ValuesCount.png)


Количество значений шкалы следует задавать перед вычислением шкалы ([ConstructScaleElements](IVZDataScale.ConstructScaleElements.htm),
 [AutoSetupScaleItems](IVZDataScale.AutoSetupScaleItems.htm)),
 при этом расчет [IntervalsCount](IVZDataScale.IntervalsCount.htm)
 и [ItemsCount](IVZDataScale.ItemsCount.htm) будет произведен
 автоматически.


## Пример


Пример использования приведён на странице описания свойства [IVZDataScale.Item](IVZDataScale.Item.htm).


См. также:


[IVZDataScale](IVZDataScale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
