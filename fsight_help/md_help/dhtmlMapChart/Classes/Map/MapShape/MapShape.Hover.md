# MapShape.Hover

MapShape.Hover
-


# MapShape.Hover


## Синтаксис


Hover: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие Hover наступает при наведении курсора на область карты.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [MapChart](../../../Components/MapChart/MapChart.htm) (см. «[Размещение карты на HTML странице](../../../Components/MapChart/HTML_layout.htm)») с наименованием «map», [xml-файла](../../../Components/MapChart/xml_specification/xml-specification.htm) с настройками карты и топоосновы Russia.svg.


Добавим функцию, при выполнении которой для области карты с идентификатором «RU-KHM» будет добавлен обработчик события Hover.


function hover() {


                shape = map.getShape("RU-KHM");


                shape.Hover.add(function (sender, args) {


                    shape.draw(new PP.SolidColorBrush({ Color: "Red" }));


                })


            }


            map.Loaded.add(hover);


После выполнения примера при наведении курсора на Ханты-Мансийский округ данная область карты будет выделена красным цветом.


См. также:


[MapShape](MapShape.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
