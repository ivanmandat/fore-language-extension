# MapTimeline.isRendered

MapTimeline.isRendered
-


# MapTimeline.isRendered


## Синтаксис


isRendered ()


## Описание


Метод isRendered определяет, отрисована ли временная линия.


## Комментарии


Если временная линия отрисована, возвращает true, иначе false.


## Пример


Для выполнения примера предполагается наличие на странице компонента [MapChart](../../../Components/MapChart/MapChart.htm) с наименованием «map» (см. «[Размещение карты на HTML странице](../../../Components/MapChart/HTML_layout.htm)»), для которого настроена временная линия (см. «[Пример настройки временной линии](../../../Components/MapChart/xml_specification/MapChart/MapTimeline/TimeLine_exmpl.htm)»). Добавим обработчик события [MapChart.Loaded](../MapChart/MapChart.Loaded.htm):


map.Loaded.add(function ()


{


    if (map.getTimeline().isRendered() == true)


    {


        map.getTimeline().play()


    }


})


После выполнения примера после загрузки карты, если временная линия отрисована, то начнется ее анимация.


См. также:


[MapTimeline](MapTimeline.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
