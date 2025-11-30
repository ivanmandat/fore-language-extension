# MapTimeline.getVerticalAlignment

MapTimeline.getVerticalAlignment
-


# MapTimeline.getVerticalAlignment


## Синтаксис


getVerticalAlignment();


## Описание


Метод getVerticalAlignment возвращает
 текущее расположение временной линии по вертикали.


## Комментарии


Возвращает элемент перечисления [VerticalAlignment](dhtmlCommon.chm::/Enums/PP.VerticalAlignment.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [MapChart](../../../Components/MapChart/MapChart.htm) с наименованием
 «map» (см. «[Размещение
 карты на HTML странице](../../../Components/MapChart/HTML_layout.htm)»), для которого настроена временная линия (см.
 «[Пример
 настройки временной линии](../../../Components/MapChart/xml_specification/MapChart/MapTimeline/TimeLine_exmpl.htm)»). Добавим кнопку, при нажатии на которую
 будет отображена легенда карты:


var button
 = new PP.Ui.Button({


    ParentNode: document.getElementById("div2"),


    Content: "Show
 legend",


    Click: function
 (sender, args) {


        var tl = map.getTimeline()


        tlALign
 = tl.getVerticalAlignment();


        var
 legend = map.getLegends().legend1;


        if
 (tlALign = "Bottom") { legend.setVerticalAlignment("Top")
 }


        legend.show()


    }


})


После выполнения примера на странице будет размещена кнопка «Show legend»,
 при нажатии на которую отобразится легенда. Если временная линия расположена
 в нижней части страницы, то легенда будет размещена в верхней части.


[MapTimeline](MapTimeline.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
