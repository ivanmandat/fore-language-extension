# RibbonView.PropertyChanged

RibbonView.PropertyChanged
-


# RibbonView.PropertyChanged


## Синтаксис


PropertyChanged: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие PropertyChanged наступает после нажатия на кнопки ленты инструментов.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm) с наименованием «reportBox», источником для которого является регламентный отчет с наименованием «prxReport» (см. «[Пример размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). Добавим обработчик события PropertyChanged:


       reportBox.getRibbonView().PropertyChanged.add(function (sender, args) {
           if (prxReport.isAnyControlVisible(prxReport.getActiveSheetKey()) == true) {
               reportBox.getRibbonView().setPropertyValue("ClosedState", false)
           }
       });

После выполнения примера при нажатии на любую кнопку ленты инструментов, если для открытого листа отчета имеются элементы управления, все кнопки ленты и все команды главного меню, кроме «Открыть», «Выход» и «Поделиться» будут неактивны.


См. также:


[RibbonView](RibbonView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
