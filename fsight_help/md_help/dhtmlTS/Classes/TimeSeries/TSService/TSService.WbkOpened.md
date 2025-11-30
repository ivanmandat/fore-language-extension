# TSService.WbkOpened

TSService.WbkOpened
-


# TSService.WbkOpened


## Синтаксис


WbkOpened: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие WbkOpened наступает
 при открытии рабочей книги.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике
 события открытия документа добавить следующий код:


	//К событию открытия рабочей книги добавим обработчик
	tsService.WbkOpened.add(function(){
		alert("Рабочая книга открыта")
	});

После выполнения примера при загрузке страницы, когда рабочая книга
 откроется, на экран выведется сообщение: «Рабочая книга открыта».


[TSService](TSService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
