# TSService.WbkDocumentOpened

TSService.WbkDocumentOpened
-


# TSService.WbkDocumentOpened


## Синтаксис


WbkDocumentOpened: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие WbkDocumentOpened наступает при открытии документа рабочей книги.


## Пример


Для выполнения примера необходимо создать сервис для работы с временными рядами (см. «[TSService.getSetSortSettings](TSService.getSetSortSettings.htm)») и в обработчике события открытия документа добавить следующий код:


	// Присоединяем обработчик события загрузки документа
	console.log("Генерируем событие загрузки документа");
	tsService.WbkDocumentOpened.fire(tsService,{});

После выполнения примера будет вызвано событие загрузки имени источника данных, а в консоль браузера будет выведено следующее сообщение:


Генерируем событие загрузки документа


См. также:


[TSService](TSService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
