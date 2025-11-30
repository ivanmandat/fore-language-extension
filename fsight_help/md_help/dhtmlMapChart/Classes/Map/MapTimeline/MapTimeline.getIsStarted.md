# MapTimeline.getIsStarted

MapTimeline.getIsStarted
-


# MapTimeline.getIsStarted


## Синтаксис


getIsStarted ()


## Описание


Метод getIsStarted определяет, началась ли анимация временной шкалы.


## Комментарии


Метод возвращает значение true, если анимация началась, иначе false.


## Пример


Для выполнения примера предполагается наличие на странице компонента [MapChart](../../../Components/MapChart/MapChart.htm) с наименованием «map» (см. «[Размещение карты на HTML странице](../../../Components/MapChart/HTML_layout.htm)»), для которого настроена временная линия (см. «[Пример настройки временной линии](../../../Components/MapChart/xml_specification/MapChart/MapTimeline/TimeLine_exmpl.htm)»). Добавим кнопку, при нажатии на которую будут удалены все подписи временной шкалы, если ее анимация включена:


var button = new PP.Ui.Button({


    ParentNode: document.getElementById("div2"),


    Content: "Hide ticks",


    Click: function (sender, args) {


        var tl = map.getTimeline()


        if (tl.getIsStarted() == true) { tl.getMapSlider().getSlider().removeTicks() }


    }


})


После выполнения примера нажмите на кнопку ![](play.gif) - запустите анимацию временной шкалы. Затем нажмите на кнопку «Hide ticks» -будут удалены все подписи шкалы.


См. также:


[MapTimeline](MapTimeline.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
