# WbkRibbonView.showPrintPreview

WbkRibbonView.showPrintPreview
-


# WbkRibbonView.showPrintPreview


## Синтаксис


showPrintPreview (src);


## Параметры


src. Данные для окна предварительного просмотра.


## Описание


Метод showPrintPreview отображает окно с предварительным просмотром рабочей книги.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также в обработчике события открытия документа необходимо добавить следующий код:


	//Получаем компонент для отображения меню в стиле Ribbon
	var ribbonView = workbookBox.getRibbonView();

	var showPrintPreviewButt = new PP.Ui.Button({
		ParentNode: document.body, //Родительский узел DOM
		Content: "Show Print Preview", //Подпись
		Click: PP.Delegate(onClickShowPrintPreview)
	});

	function onClickShowPrintPreview()
	{
		//Получаем источник данных для рабочей книги анализа временных рядов
		var source = ribbonView.getSource();
		 //Вызываем метод для экспорта отчёта в форматы xls, pdf и т.д.
		tsService.Export(source, { format: PP.Mb.ExportFormat.PDF, IsPrintRequest: true }, _onPrintPreviewReady);
	}

	function _onPrintPreviewReady(sender, args)
	{
		//Получаем url экспорта данных
		var url = metabase.getExportUrl();
		//Получаем данные из текста ответа сервера
		var expData = JSON.parse(args.ResponseText).GetEaxMdResult.meta.exportData;
		var id = expData.storeId.id;
		var format = expData.format;
		if (url.indexOf("?") == -1)
			url += "?";
		else
			url += "&";
		//Получаем идентификатор объекта для отображения
		var src = url + "key=" + id + "&format=" + format + "&d=" + (new Date().getTime()) + "&inline=true";
		//Выводим окно с предварительным просмотром рабочей книги
		ribbonView.showPrintPreview(src);
	}

После выполнения примера на html-странице будет добавлена кнопка с наименованием «Предварительный просмотр», при нажатии на которую будет выведено окно с предварительным просмотром рабочей книги.


См. также:


[WbkRibbonView](WbkRibbonView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
