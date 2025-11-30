# ScaleBase.AutoCalculable

ScaleBase.AutoCalculable
-


# ScaleBase.AutoCalculable


## Синтаксис


AutoCalculable: Boolean


## Описание


Свойство AutoCalculable определяет,
 осуществляется ли расчет шкалы автоматически.


## Комментарии


По умолчанию установлено значение true,
 то есть шакала рассчитывается автоматически. Если установлено значение
 false, шкала автоматически рассчитываться
 не будет. Свойство актуально при совместном использовании компонента [MapChart](dhtmlMapChart.chm::/Components/MapChart/MapChart.htm)
 с [мастером
 карты](dhtmlMapChart.chm::/Components/MapMaster/MapMaster.htm) (см. «[Пример
 размещения компонентов MapMaster и MapChart](dhtmlMapChart.chm::/Components/MapMaster/MapMaster_and_MapChart.htm)»).


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


function
 scaleSet() {


       scale
 = map.getFirstVisual().getBackground().getMapScale();


       scale.setAutoCalculable(false)


  };


map.Loaded.add(scaleSet);


После выполнения примера будет отключен автоматический расчет шкалы,
 в мастере карты на вкладке «Цвет» будет снят переключатель «Автоматическая»
 и установлен переключатель «Точные интервалы».


См. также:


[ScaleBase](ScaleBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
