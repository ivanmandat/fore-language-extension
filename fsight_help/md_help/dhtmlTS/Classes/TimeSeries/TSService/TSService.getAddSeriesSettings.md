# TSService.getAddSeriesSettings

TSService.getAddSeriesSettings
-


# TSService.getAddSeriesSettings


## Синтаксис


getAddSeriesSettings (wbk, series, isFolder, isGroup);


## Параметры


wbk. Задает [рабочую книгу](../Workbook/Workbook.htm);


series. Задает массив рядов рабочей книги;


isFolder. Задает признак того, что добавляется папка;


isGroup. Задает признак, что добавляется группа, рядов с указанием только первого ряда в группе и их количества.


## Описание


Метод getAddSeriesSettings возвращает тело запроса добавления рядов в рабочую книгу.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


	var getSeriesSettingsButt = new PP.Ui.Button({
		ParentNode: document.body, //Родительский узел DOM
		Content: "Добавить ряд", //Подпись
		Click: PP.Delegate(onClickGetAddSeriesSettings)
		});

	function onClickGetAddSeriesSettings()
	{
		var source = workbookBox.getSource();//Возвращаем экземпляр класса PP.TS.WbkDocument
		var series = [];
		var serie = {};
		serie.k = "0";
		serie.id = "";
		serie.n = PP.resourceManager.getString("WbkNewSerie") + " " + tsService._NewSeriesCount;
		tsService._NewSeriesCount++;
		serie.vis = true;
		serie.kind = "Source";
		serie.hint = "";
		serie.calc = {};
		serie.index = tsService._getMaxNonChildSerieIndex(wbk) + 1;
		if (source.getWbkMetadata().rubrs.def)
			serie.calc.rubKey = source.getWbkMetadata().rubrs.def.k;
		else serie.calc.rubKey = source.getHier().getMetadata().obInst.obDesc.k;
			series.push(serie);
			serie.atts = { its: { it: []} };
			serie.level = "Month";

		//Получаем тело запроса добавления рядов в рабочую книгу
		var body = tsService.getAddSeriesSettings(source, series,  true);
		wbk.setIsChanged(true);
		tsService._invokeRemoteProc(source, body, function()
		{
			workbookBox.refreshAll();
		});
	}

После выполнения примера на html-странице будет размещена кнопка с наименованием «Добавить ряд». После нажатия на кнопку в таблицу будет добавлен новый ряд с наименованием «Новый ряд 1».


См. также:


[TSService](TSService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
