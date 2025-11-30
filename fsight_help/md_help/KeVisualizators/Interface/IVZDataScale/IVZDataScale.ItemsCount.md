# IVZDataScale.ItemsCount

IVZDataScale.ItemsCount
-


# IVZDataScale.ItemsCount


## Синтаксис


ItemsCount: Integer;


## Описание


Свойство ItemsCount определяет
 количество элементов шкалы визуализатора.


## Комментарии


Под элементами шкалы понимается совокупное количество интервалов и равенств.
 В количество элементов шкалы не входит элемент «Нет данных».


Количество элементов шкалы (ItemsCount) равно количеству интервалов
 [(IntervalsCount](IVZDataScale.IntervalsCount.htm)), если свойство
 [EnableEquality](IVZDataScale.EnableEquality.htm) установлено
 в False.


Количество элементов шкалы (ItemsCount) равно сумме интервалов [(IntervalsCount](IVZDataScale.IntervalsCount.htm))
 и значений шкалы ([ValuesCount](IVZDataScale.ValuesCount.htm)),
 если свойство [EnableEquality](IVZDataScale.EnableEquality.htm)
 установлено в True.


Для приведенной ниже шкалы, которая была рассчитана с EnableEquality=
 True, значения будут следующими:


	- ItemsCount: 7


	- IntervalsCount: 4


	- ValuesCount: 3


![](IVZDataScale.ItemsCount.png)


Количество элементов шкалы следует задавать перед вычислением шкалы
 ([ConstructScaleElements](IVZDataScale.ConstructScaleElements.htm),
 [AutoSetupScaleItems](IVZDataScale.AutoSetupScaleItems.htm)),
 при этом расчет [IntervalsCount](IVZDataScale.IntervalsCount.htm)
 и [ValuesCount](IVZDataScale.ValuesCount.htm) будет произведен
 автоматически.


## Пример


Пример использования приведён на странице описания свойства [IVZDataScale.Item](IVZDataScale.Item.htm).


См. также:


[IVZDataScale](IVZDataScale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
