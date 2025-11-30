# IVZDataScale.IntervalsCount

IVZDataScale.IntervalsCount
-


# IVZDataScale.IntervalsCount


## Синтаксис


IntervalsCount: Integer;


## Описание


Свойство IntervalsCount определяет
 количество интервалов шкалы визуализатора.


## Комментарии


Количество интервалов (IntervalsCount) будет равно количеству элементов
 шкалы ([ItemsCount](IVZDataScale.ItemsCount.htm)), если свойство
 [IVZDataScale.EnableEquality](IVZDataScale.EnableEquality.htm)
 установлено в False.


Количество интервалов следует задавать перед вычислением шкалы ([ConstructScaleElements](IVZDataScale.ConstructScaleElements.htm),
 [AutoSetupScaleItems](IVZDataScale.AutoSetupScaleItems.htm)),
 при этом расчет [ItemsCount](IVZDataScale.ItemsCount.htm) и
 [ValuesCount](IVZDataScale.ValuesCount.htm) будет произведен
 автоматически.


## Пример


Пример использования приведён на странице для [IVZDataScale.AutoSetupScaleItems](IVZDataScale.AutoSetupScaleItems.htm).


 [IVZDataScale.Less](IVZDataScale.Less.htm).


См. также:


[IVZDataScale](IVZDataScale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
