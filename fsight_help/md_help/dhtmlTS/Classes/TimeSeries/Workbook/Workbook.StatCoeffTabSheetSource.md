# Workbook.StatCoeffTabSheetSource

Workbook.StatCoeffTabSheetSource
-


# Workbook.StatCoeffTabSheetSource


## Синтаксис


StatCoeffTabSheetSource: PP.TS.StatTabSheetSource;


## Описание


Свойство StatCoeffTabSheetSource
 устанавливает источник данных для листа на вкладке «Уравнение» в панели
 статистики.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике
 события открытия документа добавить следующий код:


	//К событию окончания соединения с метабазой добавим обработчик, который
	//устанавливает доступность кнопки  "Удалить выбранные ряды"
	metabase.EndRequest.add(PP.Delegate(function(){

	function isButtonEnabled(series)
	{
		for (var i = 0; i < series.length; i++)
		{
			if (series[i].kind == PP.TS.Ui.LnSerieKind.Derived)
			{
				var parentK = series[i].parent.k;
				var parentFound = false;
				for (var j = 0; j < series.length; j++)
				{
					if (series[j].k == parentK)
					{
						parentFound = true;
						break;
					}
				}
				if (!parentFound)
					return false;
			}
		}
		return series.length > 0;
	};

	var series = wbk.getActiveSheet().getSelectedSeries();
	if(isButtonEnabled(series))
	{
		removeSerieButt.setEnabled(true);
	}
	else
	{
		removeSerieButt.setEnabled(false);
	}
	}));

	var removeSerieButt = new PP.Ui.Button({
		ParentNode: document.body, //Родительский узел DOM
		Content: 'Удалить выбранные ряды', //Подпись
		Click: PP.Delegate(onClickRemoveSerie)
	});
	function onClickRemoveSerie()
	{
		//Получаем выбранные ряды рабочей книги
		var series = wbk.getActiveSheet().getSelectedSeries();
		//Создаем тело запроса к серверу на удаление выбранных рядов
		var body =
				{
					SetWbkMd:
					{
						tWbk: wbk.getOdId(),
						tArg:
						{
							meta:
							{
							 series:
							 {
							  its:
							  {
							   it: series
							  }
							 }
							},
							pattern:
							{
								series: "Remove"
							},
							metaGet: tsService._getGeneralSeriesPattern()
						}
					}
				};
	//Нужно получить структуру табшита чтобы установить правильную ширину и высоту оставшихся рядов
	body.SetWbkMd.tArg.metaGet.getTabSheet = {
		pattern: {
				DHTML: true,
				structure: true
				}
	};
	//Получаем данные, которые были изменены
	var tcd = wbk.getTableChangedData();
	if (tcd)
	{
		var newtcd = { c: [] };
		for (var i = 0; i < series.length; i++)
		{
			var index = wbk.getRealIndex(undefined, series[i]);
			for (var j = 0; j < tcd.c.length; j++)
			{
				if (tcd.c[j]["@row"] != index)
				{
					if (tcd.c[j]["@row"] > index)
					{
						tcd.c[j]["@row"]--;
					}
					newtcd.c.push(tcd.c[j]);
				}
			}
		}
		//устанавливаем измененные данные заголовка экспресс-отчета.
		wbk.setTableChangedData(newtcd);
	}
	//Устанавливаем количество рядов в рабочей книге
	wbk.setSeriesCount(wbk.getSeriesCount() - series.length);
	//Обновляем список рядов
	wbk.updateSeriesList(series, true);
	//Проверяем что количество рядов в рабочей книге не равно нулю
	if (wbk.getSeriesCount() == 0)
	{
		wbk.setSelectedSeries([]);
	}
	//Добавляем информацию о родительских рядах в тело запроса к серверу
	if (series[0].parent)
	{
		var parentSerie = wbk.getSerie(series[0].parent.k);
		body.SetWbkMd.tArg.metaGet.seriesFilter = {
		range: {
			start: wbk.getRealIndex(undefined, parentSerie),
			count: wbk.getLoadedChildrenCount(parentSerie) + 1
			}
		};
	}
	else
	{
		body.SetWbkMd.tArg.metaGet.seriesFilter = {
		range: {
			start: -1,
			count: 0
			}
		};
	}
	//Устанавливаем признак того, что рабочая книга изменена
	wbk.setIsChanged(true);
	//Устанавливаем признак необходимости обновления
	wbk.setNeedUpdateSelection(true);
	//Устанавливаем источник данных для листа на вкладке "Матрица корреляции" в панели статистики
	wbk.setStatCorrTabSheetSource(undefined);
	//Устанавливаем источник данных для листа на вкладке "Уравнение" в панели статистики
	wbk.setStatCoeffTabSheetSource(undefined);
	//Устанавливаем источник данных для листа на вкладке  "Матрица весов" в панели статистики
	wbk.setStatWeightsTabSheetSource(undefined);
	tsService._addViewSettings(wbk, body.SetWbkMd);
	//Посылаем запрос на сервер
	tsService._invokeRemoteProc(wbk, body, PP.Delegate(onResponse));
	}
	function onResponse(sender, args)
	{
		//Обновляем компонент workbookBox
		workbookBox.refreshAll();
	}

После выполнения примера на html-странице будет размещена кнопка с наименованием
 «Удалить выбранные ряды». При нажатии на кнопку удаляются выбранные ряды.
 Чтобы кнопка была доступна, необходимо, чтобы в числе выбранных рядов
 не было дочерних рядов, родительский ряд которых не был бы выбран.


См. также:


[Workbook](Workbook.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
