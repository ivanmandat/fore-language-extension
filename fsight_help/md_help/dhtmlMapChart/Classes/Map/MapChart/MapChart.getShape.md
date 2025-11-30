# MapChart.getShape

MapChart.getShape
-


# MapChart.getShape


## Синтаксис


getShape (sId);


## Параметры


sId. Идентификатор области.


## Описание


Метод getShape возвращает [область карты](../MapShape/MapShape.htm) по ее идентификатору.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [MapChart](../../../Components/MapChart/MapChart.htm) с наименованием «map» (см. «[Пример создания компонента MapChart](../../../Components/MapChart/MapChart_Example.htm)»).


map.getShape("RU-LEN").getToolTip().setBackground(new PP.SolidColorBrush({Color:"Yellow"}));


После выполнения примера для фона всплывающей подсказки Ленинградской области будет установлен желтый цвет.


См. также:


[MapChart](MapChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
