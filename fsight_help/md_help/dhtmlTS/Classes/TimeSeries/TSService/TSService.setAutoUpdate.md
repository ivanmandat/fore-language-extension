# TSService.setAutoUpdate

TSService.setAutoUpdate
-


# TSService.setAutoUpdate


## Синтаксис


setAutoUpdate (wbk, series, callback);


## Параметры


wbk. Задает значение [рабочей книги](../Workbook/Workbook.htm);


series. Задает ряды;


callback. Задает обработчик завершения операции.


## Описание


Метод setAutoUpdate устанавливает автообновление.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


	var setAutoUpdateButt = new PP.Ui.Button({
		ParentNode: document.body, //родительский узел DOM
		Content: "Автообновление", //подпись
		Click: PP.Delegate(onClickAutoUpdate)
	});

	function onClickAutoUpdate()
	{
		//Задаем значение рабочей книги
		var wbk = args.Workbook;
		var series = {};
		series.autoRecalc = true;
		series.its = {it : []};
		tsService.setAutoUpdate(wbk, series, PP.Delegate(onResponse));
		function onResponse()
		{
			workbookBox.refreshAll();
			alert("Установлено автообновление");
		}
	}

После выполнения примера на html-странице будет размещен компонент [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) и кнопка с наименованием «Автообновление». После нажатия на кнопку для рабочей книги устанавливается автообновление, а на экран выводится соответствующее сообщение.


См. также:


[TSService](TSService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
