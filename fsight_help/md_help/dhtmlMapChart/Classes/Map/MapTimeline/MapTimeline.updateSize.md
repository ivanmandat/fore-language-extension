# MapTimeline.updateSize

MapTimeline.updateSize
-


# MapTimeline.updateSize


## Синтаксис


updateSize ()


## Описание


Метод updateSize устанавливает
 размеры временной линии в соответствии с размером [карты](../MapChart/MapChart.htm).


## Комментарии


При изменении размеров карты метод срабатывает автоматически.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [MapChart](../../../Components/MapChart/MapChart.htm) с наименованием
 «map» (см. «[Размещение
 карты на HTML странице](../../../Components/MapChart/HTML_layout.htm)»), для которого настроена временная линия (см.
 «[Пример
 настройки временной линии](../../../Components/MapChart/xml_specification/MapChart/MapTimeline/TimeLine_exmpl.htm)»). Добавим [числовой
 редактор](dhtmlUi.chm::/Classes/NumberEdit/NumberEdit.htm), в котором будет устанавливаться ширина временной линии,
 а точнее ширина ,базового компонента [Slider](dhtmlUi.chm::/Components/Slider/Slider.htm),
 и кнопку, при нажатии которой ширина временной линии будет обновлена по
 ширине карты:


var numbers
 = new PP.Ui.NumberEdit(


{


    Width: 50,


    ParentNode: document.getElementById("div1"),


    AfterValueChange:
 function (sender, args)


    {


        var
 tl = map.getTimeline()


        tl.[getMapSlider](MapTimeline.getMapSlider.htm)().getSlider().setWidth(numbers.getValue())


    }


});


var button
 = new PP.Ui.Button(


{


    ParentNode: document.getElementById("div2"),


    Content: "Update",


    Click: function
 (sender, args)


    {


        var tl = map.getTimeline()


        tl.updateSize();


    }


})


После выполнения примера на странице будут добавлены числовой редактор
 и кнопка «Update». Установите значение в числовом редакторе, -в соответствии
 с этим значением изменится ширина временной линии. Если нажать на кнопку
 «Update», то временная линия примет прежнюю ширину.


См. также:


[MapTimeline](MapTimeline.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
