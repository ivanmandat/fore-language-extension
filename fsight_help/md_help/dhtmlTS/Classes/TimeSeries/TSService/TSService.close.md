# TSService.close

TSService.close
-


# TSService.close


## Синтаксис


close (wbk);


## Параметры


wbk. Задает значение [рабочей книги](../Workbook/Workbook.htm).


## Описание


Метод close закрывает рабочую
 книгу.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике
 события открытия документа добавить следующий код:


	var closeButt = new PP.Ui.Button({
		ParentNode: document.body, //родительский узел DOM
		Content: "Закрыть рабочую книгу", //подпись
		Click: PP.Delegate(onClickCloseButt)
		});
	function onClickCloseButt()
	{
		//Создаем и отображаем диалог запроса подтверждения сохранения объекта
		if (wbk && wbk.getIsChanged())
		{
			var dialog = new PP.Ui.ConfirmSaveDialog({
				TriState: true,
				ContentAlign: "Left",
				NoButtonClicked: Click,
				OkButtonClicked: Click,
				IsRTL: workbookBox.getIsRTL()
			});
			var md = wbk.getDocumentMetadata();
			var str1 = PP.resourceManager.getString("TSConfirmSaveMessagePart1");
			var str2 = PP.resourceManager.getString("TSConfirmSaveMessagePart2");
			var name = (md && md.obInst && md.obInst.obDesc && md.obInst.obDesc.n) ? md.obInst.obDesc.n : "";
			dialog.setContent(str1 + name + str2);
			dialog.show();
		}
	}

	//Обработчик подтверждения действия
	function Click()
	{
		//Закрываем рабочую книгу
		tsService.close(wbk);
		//Устанавливаем пустой источник данных компоненту для отображения рабочей книги
		workbookBox.setSource(null);
		wbk = null;
	}

После выполнения примера на html-странице будет размещена кнопка с наименованием
 «Закрыть рабочую книгу». По нажатию на кнопку рабочая книга будет закрыта.


См. также:


[TSService](TSService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
