# ScaleBase.addValue

ScaleBase.addValue
-


# ScaleBase.addValue


## Синтаксис


addValue (value: Number);


## Параметры


value. Значение шкалы.


## Описание


Метод addValue добавляет значение
 границы интервала шкалы.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [MapChart](dhtmlMapChart.chm::/Components/MapChart/MapChart.htm) (см.
 «[Размещение карты
 на HTML странице](dhtmlMapChart.chm::/Components/MapChart/HTML_layout.htm)») с наименованием «map», [xml-файла](dhtmlMapChart.chm::/Components/MapChart/xml_specification/xml-specification.htm)
 с настройками карты и топоосновы Russia.svg.


Xml-файл должен содержать настройку показателя заливки, который расположен
 первым в списке показателей карты. Фон заливки - объект зависимости, для
 которого настроена шкала, содержащая значения типа [Brush](dhtmlCommon.chm::/Classes/PP/Brush/Brush.htm).


function
 scaleSet() {


          scale
 = map.getFirstVisual().getBackground().getMapScale();


                  scale.clearValues();


                  scale.addValue(1.00);


                  scale.addValue(50.00);


                  scale.addValue(80.00);


          map.draw();


       }


      map.Loaded.add(scaleSet);


После выполнения примера будут изменены значения шкалы, новые значения
 шкалы будут отображаться в легенде карты:


См. также:


[ScaleBase](ScaleBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
