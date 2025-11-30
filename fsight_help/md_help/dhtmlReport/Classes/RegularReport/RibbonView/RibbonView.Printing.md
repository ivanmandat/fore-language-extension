# RibbonView.Printing

RibbonView.Printing
-


# RibbonView.Printing


## Синтаксис


Printing: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие Printing наступает при выборе пункта главного меню регламентного отчета «Печать».


## Пример


Для выполнения примера предполагается наличие на html-странице компонента [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm) с наименованием «reportBox», источником для которого является регламентный отчет с наименованием «prxReport» (см. «[Пример размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). Добавим обработчик события Printing:


       reportBox.getRibbonView().Printing.add(function (sender, args) {
           reportBox.showPrintPreview(prxReport)
       })

После выполнения примера при выборе пункта главного меню «Печать» откроется страница для предварительного просмотра печатной версии отчета.


См. также:


[RibbonView](RibbonView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
