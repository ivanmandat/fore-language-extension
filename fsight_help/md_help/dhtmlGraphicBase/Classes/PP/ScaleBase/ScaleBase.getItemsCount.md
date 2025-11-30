# ScaleBase.getItemsCount

ScaleBase.getItemsCount
-


# ScaleBase.getItemsCount


## Синтаксис


getItemsCount ();


## Описание


Метод getItemsCount возвращает
 количество элементов шкалы.


## Комментарии


Нумерация элементов начинается с 0.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [MapChart](dhtmlMapChart.chm::/Components/MapChart/MapChart.htm) (см.
 «[Размещение карты
 на HTML странице](dhtmlMapChart.chm::/Components/MapChart/HTML_layout.htm)») с наименованием «map», [xml-файла](dhtmlMapChart.chm::/Components/MapChart/xml_specification/xml-specification.htm)
 с настройками карты и топоосновы Russia.svg.


Xml-файл должен содержать настройку показателя
 заливки, который расположен первым в списке показателей карты. Фон заливки
 - объект зависимости, для которого настроена шкала.


function
 scaleSet() {


                scale
 = map.getFirstVisual().getBackground().getMapScale();


                count
 = scale.getItemsCount();


                alert("Настроено "+ count + " элементов шкалы." )


                map.draw();


            }


            map.Loaded.add(scaleSet);


После выполнения примера при загрузке карты на экран будет выведено
 сообщение с информацией о количестве элементов шкалы.


См. также:


[ScaleBase](ScaleBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
