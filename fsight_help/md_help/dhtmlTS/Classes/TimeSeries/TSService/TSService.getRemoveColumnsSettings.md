# TSService.getRemoveColumnsSettings

TSService.getRemoveColumnsSettings
-


# TSService.getRemoveColumnsSettings


## Синтаксис


getRemoveColumnsSettings (wbk, columns);


## Параметры


wbk. Задает значение [рабочей книги](../Workbook/Workbook.htm);


columns. Задает столбцы.


## Описание


Метод getRemoveColumnsSettings возвращает тело запроса удаления столбцов рабочей книги.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


	var source = workbookBox.getSource();////возвращаем экземпляр класса PP.TS.Workbook
	var columns = [{
		k: 1,
		type: "Scenario",
		vis: true,
		readOnly: false
		}];
	//Добавляем столбцы в рабочую книгу
	tsService.addColumns(source, columns);
	var removeColumnButt = new PP.Ui.Button({
		ParentNode: document.body, //Родительский узел DOM
		Content: "Удалить столбец", //Подпись
		Click: PP.Delegate(onClickRemoveColumn)
		});

	function onClickRemoveColumn()
	{
		var wbk = args.Workbook;
		//Получаем тело запроса удаления столбцов
		var body = tsService.getRemoveColumnsSettings(wbk, columns);
		wbk.setIsChanged(true);
		tsService._invokeRemoteProc(wbk, body, PP.Delegate(onResponse));
		function onResponse(sender, args)
		{
			workbookBox.refreshAll();
		}
		removeColumnButt.setEnabled(false);
	}

После выполнения примера на html-странице будет размещена кнопка с наименованием «Удалить столбец» и будет добавлен новый столбец в таблицу рабочей книги. После нажатия на кнопку, добавленный столбец будет удален.


См. также:


[TSService](TSService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
