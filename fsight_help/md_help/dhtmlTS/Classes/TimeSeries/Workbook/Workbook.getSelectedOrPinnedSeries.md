# Workbook.getSelectedOrPinnedSeries

Workbook.getSelectedOrPinnedSeries
-


# Workbook.getSelectedOrPinnedSeries


## Синтаксис


getSelectedOrPinnedSeries();


## Описание


Метод getSelectedOrPinnedSeries
 возвращает выделенные ряды или заблокированный ряд, если он есть.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике
 события открытия документа добавить следующий код:


	//Получаем все ряды ряда
	var _Series = wbk.getActiveSheet().getSeries();

	//К событию окончания соединения с метабазой добавим обработчик, который
	//устанавливает доступность кнопки  "Свернуть раскрытые"
	metabase.EndRequest.add(function (){
		collapseSeriesButton.setEnabled(false);
		_Series = wbk.getActiveSheet().getSeries();
		var i;
		//Получаем все раскрытые групповые и вычислимые ряды и сворачиваем их
		for(i = 0; i < _Series.length; i++)
		{
			if(_Series[i].expanded && (_Series[i].expanded === true))
			{
				collapseSeriesButton.setEnabled(true);
				break;
			}
		}
	});

	//Обработчик окончания операции сворачивания рядов
	var callback = PP.Delegate(function(){
		//Обновляем весь компонент для отображения рабочей книги
		workbookBox.refreshAll();
	});
	var collapseSeriesButton = new PP.Ui.Button({
		ParentNode: document.body, //Родительский узел DOM
		Content: "Свернуть раскрытые", //Подпись
		Click: PP.Delegate(onClickCollapseSeries)
	});
	function onClickCollapseSeries()
	{
		var i;
		//Получаем все раскрытые групповые и вычислимые ряды и сворачиваем их
		for(i = 0; i < _Series.length; i++)
		{
			if(_Series[i].expanded && (_Series[i].expanded === true))
			{
				collapeSerie(_Series[i]);
			}
		}
	}
	function collapeSerie(Series)
	{
		var args = undefined;
		//Создаем объект, содержащий информацию о раскрытом ряде
		_series = {
			k: Series.k,
			kind: Series.kind,
			index: Series.index,
			childrenCount: Series.childrenCount
		};
		_series.expanded = false;
		_series.atts = { its: { it: []} };
		series = [_series];
		//Создаем тело запроса к серверу на сворачивание рядов
		var body =
			{
				SetWbkMd:
				{
				  tWbk: wbk.getOdId(),
				  tArg:
				  {
				   pattern:
				   {
				    series: 'Change'
				   },
				   metaGet: tsService._getWbkSeriesPattern(),
				   meta:
				   {
					series:
					{
					 its:
					 {
						it: series
					  }
					}
				   }
				  }
			}
	};
	//Нужно получить структуру табшита чтобы установить правильную ширину и высоту добавленных рядов
	body.SetWbkMd.tArg.metaGet.getTabSheet = {
		pattern: {
			DHTML: true,
			structure: true
			}
	};
	//Добавляем информацию о структуре табшита в тело запроса к серверу
	if (series.length == 1 || wbk.getPinned())
	{
		var res = { it: [] };
		if (wbk.getPinned())
			res.it.push({ k: wbk.getSelectedOrPinnedSeries()[0].k });
		else
		{
			var ser = series[0];
			if (ser)
				res.it.push({ k: ser.k });
		}
		if (res)
		{
			body.SetWbkMd.tArg.metaGet.results = {
				correlation: true,
				coefficients: true,
				tabSheet: true,
				series: res
			};
		}
	}
	tsService._addViewSettings(wbk, body.SetWbkMd);
	//Устанавливаем признак того, что рабочая книга изменена
	wbk.setIsChanged(true);
	//Сортируем массив рядов
	series = series.sort(tsService._sorting.bind(wbk));
	//Получаем индексы первого и последнего ряда группы
	var firstIndex = wbk.getRealIndex(undefined, series[0]);
	var lastIndex = wbk.getRealIndex(undefined, series[series.length - 1]);
	//Удаляем дочерние ряды раскрытого ряда из рабочей книги
	wbk.removeSeries(wbk.getRealIndex(undefined, series[0]) + 1, series[0].childrenCount);
	//Добавляем информацию о дочерних рядах группового ряда
	body.SetWbkMd.tArg.metaGet.seriesFilter = {
		range: {
			start: firstIndex,
			count: (lastIndex - firstIndex + 1)
		}
	};
	//Добавляем процедуры в список рассылки события получения ответа от сервера
	callback = tsService._visitCallback(callback, new PP.Delegate(tsService._editSerieCompleted, tsService, { Workbook: wbk, Expanding: false }));
	callback = tsService._visitCallback(callback, new PP.Delegate(tsService._OnOpened, tsService, { Workbook: wbk, MetaData: args }));
	//Посылаем запрос на сервер
	tsService._send(body, callback);
	}

После выполнения примера на html-странице будет размещена кнопка с наименованием
 «Свернуть раскрытые». Для выполнения примера необходимо наличие в рабочей
 книге раскрытого ряда. Нужно выделить такой ряд и нажать на кнопку «Свернуть
 раскрытые». При нажатии на эту кнопку выделенный ряд будет свернут.


См. также:


[Workbook](Workbook.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
