# MapChart.getLabelColor

MapChart.getLabelColor
-


# MapChart.getLabelColor


## Синтаксис


getLabelColor(item: [PP.MapArrowBase](../MapArrowBase/MapArrowBase.htm)
 | [PP.MapShape](../MapShape/MapShape.htm) | [PP.MapVisualItem](../MapVisualItem/MapVisualItem.htm),
 color: String);


## Параметры


item. Стрелка, область слоя
 карты или показатель, для подписей данных у которых требуется определить
 цвет границы;


color. Цвет, используемый в
 случае, если цвет границы подписи данных неопределён. Необязательный параметр.


## Описание


Метод getLabelColor возвращает
 цвет границы подписи данных.


## Комментарии


Если свойство MapChart.UseItemColorForLabelBorder
 содержит значение false, то возвращает
 значение null.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [MapChart](../../../Components/MapChart/MapChart.htm) с наименованием
 «map» (см. «[Пример
 создания компонента MapChart](../../../Components/MapChart/MapChart_Example.htm)»). Получим цвет границы подписи данных:


// Получим область карты: Тверская область
shape = map.getShape("RU-TVE");
// Получим цвет границы подписи данных
console.log(map.getLabelColor(shape));
В результате выполнения в консоль был выведен цвет границы подписи данных.


См. также:


[MapChart](MapChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
