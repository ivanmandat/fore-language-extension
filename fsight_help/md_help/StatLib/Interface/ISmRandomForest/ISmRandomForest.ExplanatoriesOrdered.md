# ISmRandomForest.ExplanatoriesOrdered

ISmRandomForest.ExplanatoriesOrdered
-


# ISmRandomForest.ExplanatoriesOrdered


## Синтаксис


ExplanatoriesOrdered: [ISlSeriesInt](../ISlSeriesInt/ISlSeriesInt.htm);


## Описание


Свойство ExplanatoriesOrdered
 возвращает объясняющие порядковые ряды.


## Комментарии


Для получения объясняющих категориальных рядов используйте свойство
 [ISmRandomForest.ExplanatoriesCategorical](ISmRandomForest.ExplanatoriesCategorical.htm),объясняющих
 количественных рядов - свойство [ISmRandomForest.ExplanatoriesContinuous](ISmRandomForest.ExplanatoriesContinuous.htm).


Порядковый ряд - набор данных, элементы которого можно упорядочить,
 но между которыми нельзя найти расстояние. Например, статус заказа в Интернет-магазине:
 обрабатывается платеж (0), товар отправлен (1), товар доставляется (2),
 товар доставлен (3), товар получен (4), открыт спор (5), спор закрыт (6).
 Порядок понятен, а найти расстояние между элементами такого массива нельзя.


## Пример


Использование свойства приведено в примере для [ISmRandomForest.Forest](ISmRandomForest.Forest.htm).


См. также:


[ISmRandomForest](ISmRandomForest.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
