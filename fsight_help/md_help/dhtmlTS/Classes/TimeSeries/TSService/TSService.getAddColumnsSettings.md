# TSService.getAddColumnsSettings

TSService.getAddColumnsSettings
-


# TSService.getAddColumnsSettings


## Синтаксис


getAddColumnsSettings (wbk, columns);


## Параметры


wbk. Задает значение [рабочей книги](../Workbook/Workbook.htm);


columns. Задает столбцы таблицы.


## Описание


Метод getAddColumnsSettings возвращает тело запроса добавления столбцов в рабочую книгу.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


	var getAddColumnsSettingsButt = new PP.Ui.Button({
		ParentNode: document.body, //Родительский узел DOM
		Content:"Добавить столбец", //Подпись
		Click: PP.Delegate(onClickGetAddColumnsSettings)
		});
	function onClickGetAddColumnsSettings()
	{
		var wbk = workbookBox.getSource();//возвращаем экземпляр класса PP.TS.WbkDocument
		var columns = [{
			k: 10,
			type: "Scenario",
			vis: true,
			readOnly: false
			}];
		//Получаем тело запроса добавления столбцов в рабочую книгу
		var body = tsService.getAddColumnsSettings(wbk, columns);
		wbk.setIsChanged(true);
		tsService._invokeRemoteProc(wbk, body, function()
		{
			workbookBox.refreshAll();
		});
	}

После выполнения примера на html-странице будет размещена кнопка с наименованием «Добавить столбец». После нажатия на кнопку в рабочую книгу будет добавлен новый столбец с наименованием «Сценарий».


См. также:


[TSService](TSService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
