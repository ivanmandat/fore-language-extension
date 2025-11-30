# MapArrowBase.EndPoint

MapArrowBase.EndPoint
-


# MapArrowBase.EndPoint


## Синтаксис


EndPoint: PP.Point


## Описание


Свойство EndPoint устанавливает конечную точку стрелки.


## Комментарии


Свойство актуально, если значение свойства [EndShape](MapArrowBase.EndShape.htm) не определено.


Координаты точки задаются в пикселях.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [MapChart](../../../Components/MapChart/MapChart.htm) (см. «[Размещение карты на HTML странице](../../../Components/MapChart/HTML_layout.htm)») с наименованием «map», [xml-файла](../../../Components/MapChart/xml_specification/xml-specification.htm) с настройками карты и топоосновы Russia.svg.


Добавим на карту стрелку с заданными координатами начала и конца.


function addSimpleArrow() {


  var simpleArrowSettings = {


    "@Angle": "30",


    "@Color": "Red",


    "@StrokeThickness": "4",


    "@StrokeStyle": "Dash",


    "@PointerWidth": "0.3",


    "@PointerLength": "0.5"


  }


  simpleArrowSettings.Chart = map;


  simpleArrowSettings.Dictionary = map.getItemsDictionary();


  var simpleArrow = new PP.MapSimpleArrow(simpleArrowSettings);


  simpleArrow.setStartPoint(new PP.Point(100, 300));


  simpleArrow.setEndPoint(new PP.Point(300, 300));


  simpleArrow.draw(document.getElementById("ar1"));


}


map.Loaded.add(addSimpleArrow);


После выполнения примера на карту будет добавлена простая стрелка, берущая начало в точке с координатами (100, 300) и заканчивающаяся в точке с координатой (300, 300).


См. также:


[MapArrowBase](MapArrowBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
