# TSService.getSetMetadataSettings

TSService.getSetMetadataSettings
-


# TSService.getSetMetadataSettings


## Синтаксис


getSetMetadataSettings (wbk);


## Параметры


wbk. Задает значение [рабочей книги](../Workbook/Workbook.htm).


## Описание


Метод getSetMetadataSettings возвращает тело запроса сохранения метаданных рабочей книги.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» и сервиса для работы с временными рядами «tsService» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


	var getSetMetadataSettingsButt = new PP.Ui.Button({
		ParentNode: document.body, //родительский узел DOM
		Content: "Параметры метаданных", //подпись
		Click: PP.Delegate(onClickGetSetMetadataSettings)
	});

	function onClickGetSetMetadataSettings()
	{
		var metadataSettings = tsService.getSetMetadataSettings (wbk);
		tsService._invokeRemoteProc(wbk, metadataSettings, PP.Delegate(onResponse, this));
		function onResponse(sender, args){
			alert(args.ResponseText);
		}
	}

После выполнения примера на html-странице будет размещена кнопка с наименованием «Праметры метаданных». При нажатии на кнопку тело запроса сохранения метаданных рабочей книги будет возвращено и выведено в соответствующем сообщении.


См. также:


[TSService](TSService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
