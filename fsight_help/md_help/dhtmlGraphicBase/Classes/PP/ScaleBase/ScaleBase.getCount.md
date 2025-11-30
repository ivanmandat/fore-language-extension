# ScaleBase.getCount

ScaleBase.getCount
-


# ScaleBase.getCount


## Синтаксис


getCount ()


## Описание


Метод getCount возвращает количество
 интервалов шкалы.


## Комментарии


Нумерация начинается с 0.


## Пример


Для выполнения примера необходимо наличие на html-странице компонентов
 [MapChart](dhtmlMapChart.chm::/Components/MapChart/MapChart.htm)
 с наименованием «map» и [MapMaster](dhtmlMapChart.chm::/Components/MapMaster/MapMaster.htm)
 (см. «[Пример
 размещения компонентов MapMaster и MapChart](dhtmlMapChart.chm::/Components/MapMaster/MapMaster_and_MapChart.htm)»), [xml-файла](dhtmlMapChart.chm::/Components/MapChart/xml_specification/xml-specification.htm)
 с настройками карты и топоосновы Russia.svg.


Xml-файл должен содержать настройку показателя заливки, который расположен
 первым в списке показателей карты. Фон заливки - объект зависимости, для
 которого настроена шкала.


Добавим функцию scaleSet(), которая будет выполняться при загрузке карты:


        function scaleSet()
 {


           scale
 = map.getFirstVisual().getBackground().getMapScale();


           scale.ItemsChanged.add(function (sender,
 args) {


              console.log(scale.getCount())


           })


        }


        map.Loaded.add(scaleSet);


После выполнения примера при изменении значения в числовом редакторе
 «Делений:» мастера карты в консоль браузера будет возвращаться количество
 интервалов шкалы.


См. также:


[ScaleBase](ScaleBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
