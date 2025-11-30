# MapLabel.setBorderColor

MapLabel.setBorderColor
-


# MapLabel.setBorderColor


## Синтаксис


setBorderColor(color: [PP.Color](dhtmlCommon.chm::/Classes/PP/Color/Color.htm)
 || string);


## Параметры


color. Устанавливаемый цвет.


## Описание


Метод setBorderColor устанавливает
 цвет границы подписи данных.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [MapChart](../../../Components/MapChart/MapChart.htm) с наименованием
 «map» (см. «[Пример
 создания компонента MapChart](../../../Components/MapChart/MapChart_Example.htm)»). Зададим цвет границы подписи данных:


// Получим область карты: Тверская область
shape = map.getShape("RU-TVE");
// Включим отображение подписи данных
shape.toggleLabel(true);
// Получим подпись данных
label = shape.getLabel();
// Установим цвет границы подписи данных
label.setBorderColor("#FF0000");
В результате выполнения был задан цвет границы подписи данных.


См. также:


[MapChart](../MapChart/MapChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
