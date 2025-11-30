# TSService.getEditSeriesSettings

TSService.getEditSeriesSettings
-


# TSService.getEditSeriesSettings


## Синтаксис


getEditSeriesSettings (wbk, series);


## Параметры


wbk. Задает значение [рабочей книги](../Workbook/Workbook.htm);


series. Задает значение ряда.


## Описание


Метод getEditSeriesSettings возвращает тело запроса изменения рядов в рабочей книге.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


	var editSerieButton = new PP.Ui.Button({
		ParentNode: document.body, //Родительский узел DOM
		Content: "Отобразить как темп роста к началу года", //Подпись
		Click: PP.Delegate(onClickEditSerie)
		});

	function onClickEditSerie()
	{
		//Получаем выделенные ряды
		var selseries = wbk.getActiveSheet().getSelectedSeries();
		var series = [];
		var i;
		//Отбираем не групповые и не зависимые ряды
		for (i = 0; i < selseries.length; i++)
		{
			if (!PP.TS.isGroupSerie(selseries[i]) && !PP.TS.isDerivedSerie(selseries[i]))
			series.push(selseries[i]);
		}

		//Формируем параметр, который будет передан в метод getEditSeriesSettings
		if (series && series.length > 0)
		{
			for (i = 0; i < series.length; i++)
			{
				var selserie = series[i];
				selserie.atts.its.it = [];
				delete selserie.calc;
				//Устанавливаем тип преобразования "Темп роста к началу года"
				selserie.displayParams.inversion = "RateOfChange";
				selserie.displayParams.inversionLag = "EndOfPrecedingYear";
				selserie.displayParams.previousInversionLag = 1;
			}
		}
		//Получаем тело запроса к серверу
		var body = tsService.getEditSeriesSettings(wbk, series);
		//Изменяем ряды
		wbk.setIsChanged(true);
		callback = tsService._visitCallback(onRowsEdited, new PP.Delegate(tsService._OnOpened, tsService, { Workbook: wbk }));
		tsService._send(body, callback);
		function onRowsEdited(){
			//Обновляем компонент workbookBox
			workbookBox.refreshAll();
		}
	}

После выполнения примера на html-странице будет размещена кнопка с наименованием «Отобразить как темп роста к началу года». После нажатия на кнопку, в выбранных рядах данные преобразуются к виду «Темп роста к началу года». Так же на вкладке «Ряд» в панели свойств рабочей книги на панели «Основные» в пункте «Применить преобразование» будет выбран пункт «Темп роста к началу года».


См. также:


[TSService](TSService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
