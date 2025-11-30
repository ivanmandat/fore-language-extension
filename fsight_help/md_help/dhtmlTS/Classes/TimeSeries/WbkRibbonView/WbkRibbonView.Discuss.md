# WbkRibbonView.Discuss

WbkRibbonView.Discuss
-


# WbkRibbonView.Discuss


## Синтаксис


Discuss: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие Discuss наступает при
 выборе пункта «Поделиться» главного
 меню рабочей книги.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), открыть документ с помощью функции
 [openDocument](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.openDocument.htm),
 также необходимо в обработчике события открытия документа добавить следующий
 код:


//Возвращаем вкладку «Главная» в режиме просмотра
var readonlyCat = workbookBox.getRibbonView().getReadonlyCategory();
//Возвращаем кнопку «Обсудить в Sharepoint»
var sharePointButton = readonlyCat.getSharePointButton();
var state = true;
//Делаем видимой кнопку «Обсудить в Sharepoint»
sharePointButton.show();
//Получаем компонент для отображения меню в стиле Ribbon
var ribbonView = workbookBox.getRibbonView();
//Подписываемся на событие нажатия кнопки «Обсудить в SharePoint» ленты инструментов
ribbonView.Discuss.add(function()
{
	alert('Нажата кнопка «Обсудить в SharePoint» ленты инструментов');
});

Для выполнения примера нужно выбрать пункт меню «Обсудить в SharePoint»
 или «Поделиться» рабочей книги, после чего на экран будет выведено
 сообщение: «Нажата кнопка «Обсудить в SharePoint» ленты инструментов».


См. также:


[WbkRibbonView](WbkRibbonView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
