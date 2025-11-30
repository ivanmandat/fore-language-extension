# LanerBoxView.insertSeries

LanerBoxView.insertSeries
-


# LanerBoxView.insertSeries


## Синтаксис


insertSeries (index, seriesCount, addExpander, callback);


## Параметры


index. Позиция вставки ряда;


seriesCount. Количество вставляемых рядов;


addExpander. Нужно ли добавлять экспандер для ряда;


callback. Обработчик окончания выполнения операции.


## Описание


Метод insertSeries вставляет строку в таблицу.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


// Создаем экземпляр класса кнопка
var series;
var btnInsertSerie = new PP.Ui.Button({
	ParentNode: document.body, //родительский узел DOM
	Content: "Добавить строку", //подпись
	Click: PP.Delegate(insertSrs)
});
var lanerbox = workbookBox.getDataView().getGridView();
function insertSrs()
	{
		var source = wbk;//Возвращаем экземпляр класса PP.TS.WbkDocument
		//Создаем объект, который передается в качестве параметров в метод getAddSeriesSettings
		series = [];
		var serie = {};
		//Установим ключ ряда
		serie.k = "0";
		//Установим идентификатор ряда
		serie.id = "";
		//Установим наименование ряда на языке, соответствующем текущей локали
		serie.n = PP.resourceManager.getString("WbkNewSerie") + " " + tsService._NewSeriesCount;
		//Итерируем  счетчик рядов в рабочей книге
		tsService._NewSeriesCount++;
		//Установим видимость ряда
		serie.vis = true;
		//Установим тип ряда
		serie.kind = "Source";
		//Установим всплывающую подсказку ряда
		serie.hint = "";
		//Установим формулу ряда
		serie.calc = {};
		//Получим и установим индекс ряда
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
		tsService._invokeRemoteProc(source, body, function(sender, args)
			{
				//Вставляем строку в таблицу
				lanerbox.insertSeries(0);
			});
		removeSeriesButt.setEnabled(true);
		btnInsertSerie.setEnabled(false);
	}
var removeSeriesButt = new PP.Ui.Button({
	ParentNode: document.body, //Родительский узел DOM
	Content: "Удалить последнюю строку", //Подпись
	Click: PP.Delegate(onClickRemoveSeries),
	Enabled: false
});
function onClickRemoveSeries()
	{
		var wbk = args.Workbook;
		//Получаем последний ряд
		var serie = [wbk.getActiveSheet().getSeries()[wbk.getActiveSheet().getSeries().length - 1]];
		//Удаляем последний ряд рабочей книги
		tsService.removeSeries(wbk, serie, PP.Delegate(onResponse));
		function onResponse(sender, args)
			{
				var seriesTabSheetIndexes = [3];
				var meta = JSON.parse(args.ResponseText);
				//Удаляем ряд из таблицы
				lanerbox.removeSeries(serie, seriesTabSheetIndexes, meta);
			}
		removeSeriesButt.setEnabled(false);
		btnInsertSerie.setEnabled(true);
	}

После выполнения примера на html-странице будет добавлена кнопка «Добавить строку» и «Удалить последнюю строку», при нажатии на кнопку «Добавить строку» в таблице добавится новая строка, а при нажатии на кнопку «Удалить последнюю строку» последняя строка удалится.


См. также:


[LanerBoxView](LanerBoxView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
