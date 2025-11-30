# TSService.editSeries

TSService.editSeries
-


# TSService.editSeries


## Синтаксис


editSeries (wbk, series, callback, expanding, grouping, args);


## Параметры


wbk. Задает [рабочую книгу](../Workbook/Workbook.htm);


series. Задает массив рядов;


callback. Задает обработчик окончания выполнения операции;


expanding. Задает признак того, что меняется раскрытие экспандера рядов;


grouping. Задает признак того, что меняется группировка рядов;


args. Задает аргументы с метаданными.


## Описание


Метод editSeries изменяет значение рядов.


## Комментарии


Праметр expanding может принимать следующие значения:


-
true - экспандер распахивается;


-
false - экспандер схлапывается;


-
undefined - раскрытие экспандера не меняется.


Параметр grouping может принимать следующие значения:


-
true - ряды группируются;


-
false - группировка отменяется;


-
undefined - группировка не меняется.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


	var editSeriesButt = new PP.Ui.Button({
		ParentNode: document.body, //Родительский узел DOM
		Content: "Откатить ревизию", //Подпись
		Click: PP.Delegate(onClickEditSeries)
	});

	var serie;
	function onClickEditSeries(){
		serie = wbk.getSelectedSeries()[0];
		//Получаем ревизии ряда
		tsService.getSerieRevisions(wbk, serie, PP.Delegate(onResponse));
	}
	function onResponse(sender, args)
	{
		var revs = args.Revs;
		//Получаем ключи последней и предпоследней ревизий
		var lastRevKey = PP.Mb.UINT32MAXVALUE;
		var prevRevKey = revs[revs.length - 2].k;
		serie.atts = { its: { it: []} };
		//Устанавливаем ключ ревизий ряду
		if (serie.calc.revKey == PP.Mb.UINT32MAXVALUE)
		{
			serie.calc.revKey = prevRevKey;
		}
		else
		{
			serie.calc.revKey = PP.Mb.UINT32MAXVALUE;
		}
		series = [serie];
		//Изменяем ряды
		tsService.editSeries(wbk, series, PP.Delegate(function()
		{
			//Обновляем отображение рабочей книги
			workbookBox.refreshAll();
		}));
	}

После выполнения примера на html-странице будет размещен компонент [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) и кнопка с наименованием «Откатить ревизию». Необходимо изменить значения одной или нескольких ячеек ряда, затем сохранить изменения с помощью кнопки «Сохранить изменения» на вкладке «Данные» ленты инструментов. В открывшемся окне нажать на кнопку «Ок». Таким образом мы добавляем ревизию к ряду. После этого нужно выделить ряд, в котором были сделаны изменения. После чего при нажатии на кнопку новые значения будут заменены прежними.


См. также:


[TSService](TSService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
