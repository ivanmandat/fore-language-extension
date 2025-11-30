# WbkRibbonView.SaveAs

WbkRibbonView.SaveAs
-


# WbkRibbonView.SaveAs


## Синтаксис


SaveAs: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие SaveAs наступает при выборе пункта главного меню «Сохранить как...».


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


//Получаем компонент Ribbon
var ribbonView = workbookBox.getRibbonView();
//Подписываемся на событие выбора пункта меню «Сохранить как...» на ленте инструментов
ribbonView.SaveAs.add(function()
{
	alert("Выбран пункт меню «Сохранить как...» на ленте инструментов");
});

Для выполнения примера нужно выбрать пункт меню «Сохранить как...», после чего на экран будет выведено сообщение: «Выбран пункт меню «Сохранить как...» на ленте инструментов».


См. также:


[WbkRibbonView](WbkRibbonView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
