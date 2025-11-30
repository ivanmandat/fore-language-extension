# Workbook.StatWeightsTabSheetSource

Workbook.StatWeightsTabSheetSource
-


# Workbook.StatWeightsTabSheetSource


## Синтаксис


StatWeightsTabSheetSource: PP.Ts.StatTabSheetSource;


## Описание


Свойство StatWeightsTabSheetSource
 устанавливает источник данных для листа на вкладке «Матрица весов» в панели
 статистики.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике
 события открытия документа добавить следующий код:


	//К событию окончания соединения с метабазой добавим обработчик, который
	//устанавливает доступность кнопки  "Добавить фильтр Бакстера - Кинга", в зависимости от выделенных рядов
	metabase.EndRequest.add(PP.Delegate(function(){
		var selectedSeries = wbk.getActiveSheet().getSelectedSeries();
		//Проверяем наличие групповых рядов среди выделенных
		var groupSerieSelected = false;
		for (var i = 0; i < selectedSeries.length; i++)
		{
			if (PP.TS.isGroupSerie(selectedSeries[i]))
			{
				groupSerieSelected = true;
				break;
			}
		}
		//Проверяем наличие дочерних рядов среди выделенных
		var derivedSerieSelected = false;
		for (var i = 0; i < selectedSeries.length; i++)
		{
			if (PP.TS.isDerivedSerie(selectedSeries[i]))
			{
				derivedSerieSelected = true;
				break;
			}
		}
		//Устанавливаем доступность кнопки
		if(selectedSeries.length==1 && !groupSerieSelected && !derivedSerieSelected)
		{
			addLRRowButton.setEnabled(true);
		}
		else
		{
			addLRRowButton.setEnabled(false);
		}
	}));
	var addLRRowButton = new PP.Ui.Button({
		ParentNode: document.body, //Родительский узел DOM
		Content: "Добавить фильтр Бакстера - Кинга", //Подпись
		Click: PP.Delegate(onClickAddLRRow)
	});

	function onClickAddLRRow(){
		//Создаем объект, в котором будет содержаться информация о добавляемом ряде
		var metaData  = {};
		//Присваиваем тип формулы добавляемого ряда "Фильтр Бакстера - Кинга"
		metaData.formulaType = PP.TS.Ui.FormulaTypeEnum.BaxterKingFilter;
		//Получаем выделенные ряды рабочей книги
		var selectedSeries = wbk.getActiveSheet().getSelectedSeries();
		var series = [];
		for (var i = 0; i < selectedSeries.length; i++)
		{
			if (!PP.TS.isGroupSerie(selectedSeries[i]))
				//Создаем массив негрупповых рядов из массива выделенных
				series.push(selectedSeries[i]);
		}
		if (series.length > 0)
		{
			//Получаем индекс последнего выделенного негруппового ряда
			var lastSerieIndex = series[series.length - 1].index;
		}
		metaData.serieFlags = 0;
		metaData.selectedRows = series;
		metaData.index = lastSerieIndex;
		//Устанавливаем уровень
		metaData.formulaLevel = series[0].level;
		//Создаем тело запроса к серверу для добавления вычислимого ряда
		var requestBody = tsService._getSetWbkMdSettings(wbk, metaData, PP.Mb.ListOperation.Add);
		requestBody.SetWbkMd.tArg.metaGet.getTabSheet = {
			pattern: {
				DHTML: true,
				structure: true
			}
		};
		//Устанавливаем признак того, что рабочая книга изменена
		wbk.setIsChanged(true);
		//Отправляем запрос на сервер
		tsService._invokeRemoteProc(wbk, requestBody, PP.Delegate(onResponse));
	}
	function onResponse(sender, args)
	{
		//Получаем информацию
		var res = JSON.parse(args.ResponseText);
		var report = args.Args.Workbook || args.Args.Report;
		var doc = args.Args.Document;
		if (res.SetWbkMdResult.meta)
		{
			var md = res.SetWbkMdResult.meta;
			report.setWbkMetadata(md);
			//Устанавливаем рабочей книге набор временных рядов
			if (md.series && md.series && md.series.its && md.series.its.it && md.series.its.it.length == md.series["@count"])
			{
				report.setSeries(md.series.its.it);
				report.setNeedUpdateSelection(true);
			}
			else
			{
				if (md.series && md.series && md.series.its && md.series.its.it)
				{
					//обновляет список рядов рабочей книги
					report.updateSeriesList(md.series.its.it);
					//Устанавливаем признак необходимости обновления отметки
					report.setNeedUpdateSelection(true);
				}
			}
			//Вычисляем и создаём новую отметку
			var headerSz = tsService._getHeaderSizes(report); //ширина и высота боковика и заголовка
			//Получаем выделенные ячейки в таблице рабочей книги
			var oldsel = report.getSelection();
			//Получаем диапазон выделенных ячеек
			var oldparts = PP.getProperty(oldsel, "range.parts.it") ? PP.getProperty(oldsel, "range.parts.it") : [PP.getProperty(oldsel, "range")];
			var minleft = null;
			var mintop = null;
			var maxright = null;
			var maxbottom = null;
			//Получаем координаты углов выделения
			for (i = 0; i < oldparts.length; i++)
			{
				if (minleft == null || oldparts[i].left < minleft)
					minleft = oldparts[i].left;
				if (mintop == null || oldparts[i].top < mintop)
					mintop = oldparts[i].top;
				var right = oldparts[i].left + oldparts[i].width - 1;
				if (maxright == null || right < maxright)
					maxright = right;
				var bottom = oldparts[i].top + oldparts[i].height - 1;
				if (maxbottom == null || bottom > maxbottom)
					maxbottom = bottom;
			}
			//Получаем признак того, что таблица повернута
			var trans = report.getMetadata().grid.transposed;
			//Создаем объект, в котором будет содержаться информация о выделенных областях
			var part = { type: "Cells" };
			//Инициализируем объект, в котором будет содержится информация о выделенных областях
			if (trans)
			{
				part.left = headerSz.Width + report.getRealIndex(md.series.its.it[0].index);
				part.width = md.series.its.it.length;
				part.top = mintop;
				part.height = maxbottom - mintop + 1;
			}
			else
			{
				part.left = minleft;
				part.width = maxright - minleft + 1;
				part.top = headerSz.Height + report.getRealIndex(md.series.its.it[0].index);
				part.height = md.series.its.it.length;
			}
			//Инициализируем объект, в котором будет содержится информация о выделении в таблице
			var sel = {
				type: "Normal",
				range: {
					left: 0,
					top: 0,
					height: 0,
					width: 0,
					parts: {
						it: [part]
					},
					type: "MultiPart"
				}
			};
		var selSeriesIdxes = [];
		for (i = 0; i < md.series.its.it.length; i++)
			selSeriesIdxes.push(md.series.its.it[i].index);
			//Посылаем запрос на изменение отметки в таблице
			setTableSelection(report, selSeriesIdxes, undefined, undefined, true, sel, part.left, part.top, part.width, part.height);
		}
	}

	function setTableSelection(wbk, selectedIndexSeries, selectedIndexCols, callback, _setSelectedSerieses, selection, left, top, width, height)
	{
		if (selectedIndexSeries && selectedIndexSeries.length > 0)
			//Устанавливаем массив индексов выделенных рядов в таблице
			wbk.setSelectedIndexSeries(selectedIndexSeries);
		else selectedIndexSeries = wbk.getSelectedIndexSeries();
			if (!selectedIndexSeries)
				selectedIndexSeries = [];
			if (selectedIndexCols && selectedIndexCols.length > 0)
				//Устанавливаем индексы выделенных колонок
				wbk.setSelectedIndexCols(selectedIndexCols);
			else selectedIndexCols = wbk.getSelectedIndexCols();
			if (!selectedIndexCols)
				selectedIndexCols = [];
			//Получаем наименьший индекс из индексов выделенных рядов
			var start = tsService._minIndexVal(selectedIndexSeries);
			//Получаем наибольший индекс из индексов выделенных рядов
			var count = tsService._maxIndexVal(selectedIndexSeries) - start + 1;
			if (isNaN(start))
				start = undefined;
			if (isNaN(count))
				count = undefined;
			//Получаем наименьший индекс из индексов выделенных колонок
			var colStart = tsService._minIndexVal(selectedIndexCols);
			//Получаем наибольший индекс из индексов выделенных колонок
			var colCount = tsService._maxIndexVal(selectedIndexCols) - colStart + 1;
			if (isNaN(colStart))
				start = undefined;
			if (isNaN(colCount))
			count = undefined;

			//создаем тело запроса к серверу на выделение добавленного ряда
			var body =
					{
						SetWbkMd:
						{
							tWbk: wbk.getOdId(),
							tArg:
							{
								meta:
								{
								},
								pattern:
								{
									setTabSheet: {
										setPattern: {
											metaData: true,
											selection: true
										},
										metaData: {
											selection: selection
										}
									}
								},
								metaGet:
								{
									seriesFilter: {
										range: {
											start: start,
											count: count
										}
									},
									columnsFilter:
									{
										range: {
											start: selectedIndexCols[0],
											count: selectedIndexCols.length
										}
									},
									statistics: {
										includeAll: true
									},
									lanerFilter: true,
									period: true,
									seriesDependencies: true,
									seriesDependents: true,
									seriesAtts: true,
									seriesDiscrepancies: true,
									seriesDisplayParams: true,
									sorting: true,
									series: PP.Mb.ListOperation.Get,
									columns: PP.Mb.ListOperation.Get
								}
							}
						}
					};
					//В тело запроса к серверу вносим информацию о источниках данных к панели статистик
					if (selectedIndexSeries.length == 1 || wbk.getPinned())
					{
						var res = { it: [] };
						if (wbk.getPinned())
							res.it.push({ k: wbk.getSelectedOrPinnedSeries()[0].k });
						else
						{
							var ser = wbk.getSeries()[selectedIndexSeries[0]];
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
					tsService._send(body, PP.Delegate(onGetMd, undefined, { Workbook: wbk, SetSelectedSerieses: _setSelectedSerieses, Indexes: selectedIndexSeries }));
				}

				function onGetMd(sender, args)
				{
					//Получаем объект JSON из ответа сервера
					var res = JSON.parse(args.ResponseText);
					//Получаем метаданные рабочей книги
					var wbkMd = wbk.getActiveSheet().getWbkMetadata();
					//Создаем объект, в котором будет содержаться информация о данных статистики
					var meta = undefined;
					if (wbkMd)
					{
						//Инициализируем объект, в котором будет содержаться информация о данных статистики из тела ответа сервера
						if (res.GetWbkMdResult)
							meta = res.GetWbkMdResult.meta;
						else meta = res.SetWbkMdResult.meta;
					}
					//Обновляем источники данных для панели статистик
					refreshStatSources(wbkMd, meta);
					//Получаем панель статистик
					var tsPanel = workbookBox.getDataView()._TabStatPanel;
					tsPanel.refresh();
				}

	function refreshStatSources(wbkMd, meta)
	{
		//Присваиваем данные статистики к метаданным рабочей книги
		wbkMd.statistics = meta.statistics;
		if (meta.statistics)
			//Устанавливаем  статистические данные рабочей книге
			wbk.getActiveSheet().setStatData(meta.statistics);
		if (meta.results && meta.results.its && meta.results.its.it.length == 1)
		{
			if (meta.series.its.it)
			{
				//Устанавливаем источники данных панели статистик к рабочей книге
				var result = meta.results.its.it[0];
				if (result.correlation)
				{
					wbk.getActiveSheet().setStatCorrTabSheetSource(new PP.TS.StatTabSheetSource({
						WbkOdId: wbk.getActiveSheet().getOdId().id, //моникёр рабочей книги
						Type: PP.TS.Ui.StatTabSheetType.Corr, //Тип
						Metabase: wbk.getMetabase() //Объект подключания к метабазе
					}));
				}
				else wbk.getActiveSheet().setStatCorrTabSheetSource(undefined);
				if (result.coefficients)
				{
					//Устанавливаем источник данных ко вкладке "Уравнение" панели статистик
					wbk.getActiveSheet().setStatCoeffTabSheetSource(new PP.TS.StatTabSheetSource({
						WbkOdId: wbk.getActiveSheet().getOdId().id, //моникёр рабочей книги
						Type: PP.TS.Ui.StatTabSheetType.Coeff, //Тип
						Metabase: wbk.getMetabase() //Объект подключания к метабазе
					}));
				}
				else wbk.getActiveSheet().setStatCoeffTabSheetSource(undefined);
				if (result.weights)
				{
					//Устанавливаем источник данных ко вкладке "Матрица весов" панели статистик
					wbk.getActiveSheet().setStatWeightsTabSheetSource(new PP.TS.StatTabSheetSource({
						WbkOdId: wbk.getActiveSheet().getOdId().id, //моникёр рабочей книги
						Type: PP.TS.Ui.StatTabSheetType.Weights,  //Тип
						Metabase: wbk.getMetabase() //Объект подключания к метабазе
					}));
				}
				else
					wbk.getActiveSheet().setStatWeightsTabSheetSource(undefined);
				}
		}
		else
		{
			wbk.getActiveSheet().setStatCorrTabSheetSource(undefined);
			wbk.getActiveSheet().setStatCoeffTabSheetSource(undefined);
			wbk.getActiveSheet().setStatWeightsTabSheetSource(undefined);
		}
	}

После выполнения примера на html-странице будет размещена кнопка с наименованием
 «Добавить фильтр Бакстера - Кинга». Необходимо раскрыть панель статистики,
 нажав на кнопку «Статистика». Чтобы кнопка «Добавить фильтр Бакстера -
 Кинга» была доступна, в рабочей книге нужно выделить один ряд, причем
 ряд не должен быть ни групповым ни дочерним. По нажатию на кнопку «Добавить
 фильтр Бакстера - Кинга» в рабочую книгу добавляется ряд с типом формулы
 «Фильтр Бакстера - Кинга». После добавления ряда к рабочей книге будут
 установлены источники данных для вкладки «Матрица весов» на панели статистик,
 и станет доступна кнопка «Матрица весов». Чтобы увидеть ряд, который добавился
 в рабочую книгу, нужно нажать кнопку «Обновить» на вкладке «Главная» ленты
 инструментов.


См. также:


[Workbook](Workbook.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
