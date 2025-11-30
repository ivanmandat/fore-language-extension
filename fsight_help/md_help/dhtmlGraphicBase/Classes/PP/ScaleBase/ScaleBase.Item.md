# ScaleBase.Item

ScaleBase.Item
-


# ScaleBase.Item


## Синтаксис


getItem(index);


setItem(index, value);


## Параметры


index. Индекс элемента шкалы;


value. Значение элемента шкалы.


## Описание


Свойство Item устанавливает значение для элемента шкалы по его индексу.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [MapChart](dhtmlMapChart.chm::/Components/MapChart/MapChart.htm) (см. «[Размещение карты на HTML странице](dhtmlMapChart.chm::/Components/MapChart/HTML_layout.htm)») с наименованием «map», [xml-файла](dhtmlMapChart.chm::/Components/MapChart/xml_specification/xml-specification.htm)») с наименованием «map», [xml-файла](dhtmlMapChart.chm::/Components/MapChart/xml_specification/xml-specification.htm) с настройками карты и топоосновы Russia.svg.


Xml-файл должен содержать настройку показателя заливки, который расположен первым в списке показателей карты. Фон заливки - объект зависимости, для которого настроена шкала.


Изменим значение третьего элемента шкалы:


 function scaleSet() {


                scale = map.getFirstVisual().getBackground().getMapScale();


                scale.setItem(2, new PP.SolidColorBrush({Color:"Green"}));


                map.draw();


            };


 map.Loaded.add(scaleSet);


После выполнения примера при загрузке карты будет изменена заливка карты: регионы, показатель которых попадает в третий интервал, будут выделены зеленым цветом:


См. также:


[ScaleBase](ScaleBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
