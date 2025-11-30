# MapChart.Background

MapChart.Background
-


# MapChart.Background


## Синтаксис


Background: PP.[Brush](dhtmlCommon.chm::/Classes/PP/Brush/Brush.htm)


## Описание


Свойство Background устанавливает кисть для фона карты.


## Пример


Для выполнения примера необходимо наличие [html-страницы](../../../Components/MapChart/MapChart_Example.htm), на которой размещен компонент [MapChart](../../../Components/MapChart/MapChart.htm) с наименованием «map», [xml-файла](../../../Components/MapChart/xml_specification/xml-specification.htm) с настройками карты и топоосновы Russia.svg.


Изменить фон карты можно двумя способами:


-
в качестве значения установить кисть:


map.setBackground(new PP.SolidColorBrush({Color: "fff000"}));


-
в качестве значения установить цвет в формате HTML:


map.setBackground("fff000");


После выполнения примера цвет фона карты будет изменен на желтый.


См. также:


[MapChart](MapChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
