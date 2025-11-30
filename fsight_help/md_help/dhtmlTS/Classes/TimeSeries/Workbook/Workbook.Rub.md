# Workbook.Rub

Workbook.Rub
-


# Workbook.Rub


## Синтаксис


Rub: Object;


## Описание


Свойство Rub устанавливает базу данных временных рядов, которая является источником рабочей книги.


## Комментарии


Свойство Rub представляет собой объект, который содержит информацию о базе данных временных рядов, из которой была создана рабочая книга.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


	var addSerieButton = new PP.Ui.Button({
		ParentNode: document.body, //Родительский узел DOM
		Content: "Добавить ряд", //Подпись
		Click: PP.Delegate(onClickAddSerie)
		});

	function onClickAddSerie()
	{
		var source = wbk.getActiveSheet();
		//Для установки периода необходимо уравнять начальный и конечный периоды
		source.getWbkMetadata().period.start = source.getWbkMetadata().period.end;
		//Получим базу данных временных рядов
		var rub = wbk.getRub();
		//Установим начальный и конечный периоды
		rub.meta.period.endYear = 1991;
		rub.meta.period.startYear = 1990;
		//Получим индекс ряда, который будет добавлен
		var index = wbk.getActiveSheet().getSeries().length;
		//Добавляем ряды в рабочую книгу.
		tsService.addWbkSeries(source, source.getHier(), undefined, {"Index": index, "PeriodLvl": "Month"}, PP.Delegate(onResponse));
	}

	function onResponse()
	{
		//Обновляем весь компонент для отображения рабочей книги
		workbookBox.refreshAll();
	}

После выполнения примера на html-странице будет размещена кнопка с наименованием «Добавить ряд». При нажатии на нее в рабочую книгу будет добавлен ряд и установится период отображения с 1990 по 1991 годы.


См. также:


[Workbook](Workbook.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
