# TSService.MetadataChangeStart

TSService.MetadataChangeStart
-


# TSService.MetadataChangeStart


## Синтаксис


MetadataChangeStart: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие MetadataChangeStart наступает при начале изменения метаданных.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), сервиса для работы с временными рядами с наименованием «tsService», а также необходимо в обработчике события открытия документа добавить следующий код:


	var wbk = workbookBox.getSource().getActiveSheet();
	var setMetadataButt = new PP.Ui.Button({
		ParentNode: document.body, //родительский узел DOM
		Content: "Установить метаданные", //подпись
		Click: PP.Delegate(onClickSetMetadata)
	});
	function onClickSetMetadata() {
		//Изменяем метаданные
		tsService.setMetadata(wbk);
	}

	//Добавляем обработчик события начала изменения метаданных
	tsService.MetadataChangeStart.add(function () {
		alert('Произошло событие начала загрузки метаданных');
	});

	//Добавляем обработчик события окончания изменения метаданных
	tsService.MetadataChanged.add(function () {
		alert('Произошло окончание изменения метаданных');
	});

После выполнения примера на html-странице будет размещена кнопка с наименованием «Установить метаданные». При нажатии на кнопку произойдет сохранение метаданных рабочей книги на сервере. Сначала на экран выведется оповещение о наступлении события начала изменения метаданных, затем о наступлении события окончания изменения метаданных.


См. также:


[TSService](TSService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
