# EaxRibbonView.Printing

EaxRibbonView.Printing
-


**


# EaxRibbonView.Printing


## Синтаксис


Printing: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие Printing** наступает при выборе пункта главного меню «Печать».


## Пример


Для выполнения примера предполагается наличие на html-странице компонента ExpressBox с наименованием «expressBox», источником для которого является экспресс-отчет с наименованием «eaxAnalyzer» (см. «[Пример размещения компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Добавим обработчик события Printing:


expressBox.getRibbonView().Printing.add(function (sender, args)
{
    reportBox.showPrintPreview(eaxAnalyzer);
})

После выполнения примера при выборе пункта главного меню «Печать» откроется страница для предварительного просмотра печатной версии отчета.


См. также:


[EaxRibbonView](EaxRibbonView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
