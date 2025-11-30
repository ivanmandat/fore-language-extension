# RibbonView.Discuss

RibbonView.Discuss
-


# RibbonView.Discuss


## Синтаксис


Discuss: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие Discuss наступает после того, как выбран один из элементов пункта главного меню «Поделиться».


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm) с наименованием «reportBox», источника регламентного отчета с наименованием «prxReport» и сервиса для работы с регламентными отчетами с наименованием «prxMbService» (см. «[Пример размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). Добавим обработчик события Discuss:


reportBox.getRibbonView().DiscussMenuOpened.add(function (sender, args) {


      prxMbService.setActiveSheet(prxReport, 3);


      reportBox.refreshAll();


})


После выбора одного из элементов пункта главного меню «Поделиться» третий лист отчета станет активным.


См. также:


[RibbonView](RibbonView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
