# Workbook.updateSeriesList

Workbook.updateSeriesList
-


# Workbook.updateSeriesList


## Синтаксис


updateSeriesList (series, removed);


## Параметры


series. Задает
 изменяемые ряды;


removed. Признак
 удаления рядов из коллекции.


## Описание


Метод updateSeriesList обновляет
 список рядов.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике
 события открытия документа добавить следующий код:


	//Переменная, в которой будут храниться выбранные ряды
	var selSeries;

	//Обработчик окончания взаимодействия с репозиторием. Служит для установки доступности кнопки
	//"Разгруппировать ряды" в зависимости от выбранного ряда
	metabase.EndRequest.add(PP.Delegate(function(){
		//Получим выбранные ряды рабочей книги
		selSeries = wbk.getActiveSheet().getSelectedSeries();
		//Установим доступность кнопки
		if (selSeries.length == 1 && PP.TS.isGroupSerie(selSeries[0]))
		{
			ungroupSeriesButt.setEnabled(true);
		}
		else
		{
			ungroupSeriesButt.setEnabled(false);
		}
		}));

	var ungroupSeriesButt = new PP.Ui.Button({
		ParentNode: document.body, //родительский узел DOM
		Content: "Разгруппировать ряды", //подпись
		Click: PP.Delegate(onClickUngroupSeries)
		});

	function onClickUngroupSeries()
	{
		//Получаем и сортируем массив выделенных рядов
		var j;
		var Series = selSeries.sort(tsService._sorting.bind(wbk));
		var realIndex = wbk.getRealIndex(undefined, Series[0]);
		var lastIndex = wbk.getRealIndex(undefined, Series[Series.length - 1]);
		//Получаем индекс последнего ряда в группе
		for (var i = 0; i < Series.length; i++)
		{
			lastIndex += wbk.getLoadedChildrenCount(Series[i]);
		}
		//Устанавливаем свойства элементов массива рядов
		for (j = 0; j < Series.length; j++)
		{
			Series[j].expanded = true;
			Series[j].atts = { its: { it: []} };
			delete Series[j].calc;
		}

		//Получаем тело запроса к серверу для редактирования рядов рабочей книги
		var body = tsService.getEditSeriesSettings(wbk, Series);
		//Вносим информацию о выделенных рядах в тело запроса
		body.SetWbkMd.tArg.metaGet.seriesFilter = {
			range: {
					start: realIndex,
					count: lastIndex - realIndex + 1
					}
			};
		//Устанавливаем признак того, что рабочая книга изменена
		wbk.setIsChanged(true);
		//Посылаем запрос на сервер
		tsService._send(body, onUngroupSeries);
		// Обработчик события окончания выполнения метода UnGroupSeries
		function onUngroupSeries(sender, args){
		//Получаем объект JSON из ответа сервера
		var res = JSON.parse(args.ResponseText);
		var groupSeries = Series;
		//Получаем ряды рабочей книги
		var wbkSeries = res.SetWbkMdResult.meta.series.its.it;
		var series = [];
		var k = 1;
		//Обновляем список рядов
		wbk.updateSeriesList(wbkSeries);
		//Получаем количество строк в группе
		var count = wbk.getLoadedChildrenCount(wbkSeries[0]);

		//Создаем объект, содержащий информацию о рядах в группе
		for (var j = 0; j < groupSeries.length; j++)
		{
			for (var i = 0; i < wbkSeries.length; i++)
			{
				if (wbkSeries[i].parent && wbkSeries[i].parent.k == groupSeries[j].k)
				{
					wbkSeries[i].atts = { its: { it: []} };
					wbkSeries[i].index = Series[0].index + k;
					delete wbkSeries[i].calc;
					if (groupSeries[j].parent)
						wbkSeries[i].parent = groupSeries[j].parent;
					else
					{
						wbkSeries[i].parent = { k: -1, id: "" };
						for (var kk = 0; kk < groupSeries.length; kk++)
						{
							if (wbkSeries[i].k == groupSeries[kk].k)
							{
								groupSeries[kk].parent = undefined;
							}
						}
					}
					series.push(wbkSeries[i]);
					k++;
				}
			}
		}
		//Получаем тело запроса к серверу на изменение рядов
		var body = tsService.getEditSeriesSettings(wbk, series);
		//Получаем индекс первого ряда в группе
		var start = wbk.getRealIndex(undefined, wbkSeries[0]);
		//Устанавливаем родительский ряд для каждого ряда в группе
		if (wbkSeries[0].parent)
		{
			var parentSerie = wbk.getSerie(wbkSeries[0].parent.k);
			start = wbk.getRealIndex(undefined, parentSerie);
			count = wbk.getLoadedChildrenCount(parentSerie) + 1;
		}
		//Вносим информацию о группе в тело запроса
		body.SetWbkMd.tArg.metaGet.seriesFilter = {
			range: {
					start: start,
					count: count
					}
			};
			//Устанавливаем признак того, что рабочая книга изменена
			wbk.setIsChanged(true);
			//Посылаем запрос к серверу
			tsService._send(body, refresh);
			//Удаляем ряд, который был группой
			tsService.removeSeries(wbk, groupSeries, refresh);
			}
		}
		function refresh()
		{
			//Обновляем весь компонент для отображения рабочей книги
			workbookBox.refreshAll();
		}

После выполнения примера на html-странице будет размещена кнопка с наименованием
 «Разгруппировать ряды». Необходимо выбрать ряд, который является группой
 и нажать на данную кнопку. После этого сгруппированный ряд рабочей книги
 будет разгруппирован.


См. также:


[Workbook](Workbook.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
