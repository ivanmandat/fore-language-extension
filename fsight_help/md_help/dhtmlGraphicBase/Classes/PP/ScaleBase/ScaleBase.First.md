# ScaleBase.First

ScaleBase.First
-


# ScaleBase.First


## Синтаксис


First: Object


## Описание


Свойство First устанавливает первый элемент шкалы.


## Комментарии


Свойство используется для автоматического расчета элементов шкалы.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [MapChart](dhtmlMapChart.chm::/Components/MapChart/MapChart.htm) (см. «[Размещение карты на HTML странице](dhtmlMapChart.chm::/Components/MapChart/HTML_layout.htm)») с наименованием «map», [xml-файла](dhtmlMapChart.chm::/Components/MapChart/xml_specification/xml-specification.htm)») с наименованием «map», [xml-файла](dhtmlMapChart.chm::/Components/MapChart/xml_specification/xml-specification.htm) с настройками карты и топоосновы Russia.svg.


Xml-файл должен содержать настройку показателя заливки, который расположен первым в списке показателей карты. Фон заливки - объект зависимости, для которого настроена шкала.


Создадим функцию scaleSet() для изменения цветов шкалы:


function scaleSet() {


   scale = map.getFirstVisual().getBackground().getMapScale();


   if (scale.getItemsMode() = "Array") {//Если ранее была установлена коллекция элементов шкалы, то будут применяться следующие настройки


      scale.setFirst("White");


      scale.setLast("Red");


      scale.setIntervalsCount(4);


      map.draw();


   }


}


map.Loaded.add(scaleSet);


После выполнения примера, если ранее была установлена [коллекция элементов шкалы](ScaleBase.Items.htm), изменится заливка карты:


См. также:


[ScaleBase](ScaleBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
