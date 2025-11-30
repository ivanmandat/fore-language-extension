# TSService.closeHie

TSService.closeHie
-


# TSService.closeHie


## Синтаксис


closeHie (hie);


## Параметры


hie. Задает иерархию.


## Описание


Метод closeHie закрывает заданную иерархию рядов.


## Комментарии


Если иерархия закрыта, при вызове методов, которые ее используют, будет вызвано исключение.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


	var closeHieButt = new PP.Ui.Button({
		ParentNode: document.body, //родительский узел DOM
		Content: "Закрыть иерархию", //подпись
		Click: PP.Delegate(onClickCloseHie)
		});
	function onClickCloseHie()
	{
		//Получаем ключ текущего листа
		var sheetKey = wbk.getActiveSheet().getKey();
		//Получаем листы рабочей книги
		var sheets = wbk.getDocumentMetadata().sheets.its.it;
		if(sheets.length <= 1) return;
		//Включаем возможность удалять листы рабочей книги
		workbookBox.getDataView()._TabControl.setEnableDelete(sheets.length > 1);
		var newActKey = null; //ключ листа, который нужно сделать активным поле удаления
		//Если удаляется активный лист, то определим, какой лист будет активным поле удаления
		if (sheets.length > 1)
		{
			newActKey = sheets[1].k;
		}
		//Закрываем иерархию рядов удаляемого листа
		tsService.closeHie(wbk.getHier());
		//Удаляем лист рабочей книги
		tsService.removeSheet(wbk, sheetKey, PP.Delegate(onSheetRemoved));
		function onSheetRemoved(sender, args)
		{
			workbookBox.getDataView().setActiveSheet(newActKey);
		}
		workbookBox.getDataView()._TabControl.removeItem(0);
	}

После выполнения примера на html-странице будет размещена кнопка с наименованием «Закрыть иерархию». Необходимо добавить новый лист в рабочую книгу и вернуться к первому листу. По нажатию на кнопку «Закрыть иерархию» активный лист будет удален.


См. также:


[TSService](TSService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
