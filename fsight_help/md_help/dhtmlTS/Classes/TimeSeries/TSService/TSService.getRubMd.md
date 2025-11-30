# TSService.getRubMd

TSService.getRubMd
-


# TSService.getRubMd


## Синтаксис


getRubMd (wbk, rubKey, callback, pattern);


## Параметры


wbk. Задает рабочую книгу, экземпляр класса [Workbook](../Workbook/Workbook.htm);


rubKey. Задает ключ каталога показателей;


callback. Задает обработчик окончания выполнения операции;


pattern. Задает объект, определяющий какие именно метаданные нужно получить.


## Описание


Метод getRubMd посылает запрос на получение метаданных для источника с ключом rubKey.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


	var wbk = args.Workbook;
	//Получаем ключ каталога показателей
	var rubKey = wbk.getWbkMetadata().rubrs.def.k;
	//Посылаем запрос на получение метаданных
	tsService.getRubMd(wbk, rubKey, PP.Delegate(onGetRubMd, this, { Workbook: wbk, RubKey: rubKey }));
	// Обработчик события окончания выполнения метода getRubMd
	function onGetRubMd(sender, args){
		alert(args.ResponseText);
	}

После выполнения примера на html-странице будет размещен компонент [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm), будет послан запрос на получение метаданных и информация о нем будет выведена в соответствующем сообщении.


См. также:


[TSService](TSService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
