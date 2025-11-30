# TSService.setTableStyle

TSService.setTableStyle
-


# TSService.setTableStyle


## Синтаксис


setTableStyle (report, metadata, callback);


## Параметры


wbk. Задает значение [рабочей книги](../Workbook/Workbook.htm);


metadata. Задает метаданные с настройками стиля;


callback. Задает обработчик окончания выполнения операции.


## Описание


Метод setTableStyle используется для установки стиля таблицы.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


	var setTableStyleButt = new PP.Ui.Button({
		ParentNode: document.body, //родительский узел DOM
		Content: "Установить стиль таблицы", //подпись
		Click: PP.Delegate(onClickSetTableStyle)
	});

	function onClickSetTableStyle()
	{
		var report = args.Workbook;
		metadata = {
		Name: "EAX table style",
		PredefinedStyle: "ExtRedStriped"
		};
		//Устанавливаем стиль
		tsService.setTableStyle(report, metadata, PP.Delegate(onTableStyle, this));
	}

		// Обработчик завершения метода setTableStyl
		function onTableStyle(sender, args){
		//Обновляем, чтобы увидеть установленный стиль
		workbookBox.refreshAll();
	}

После выполнения примера на html-странице будет размещена кнопка с наименованием «Установить стиль таблицы». При нажатии на кнопку к таблице будет применен новый стиль:


![](setTableStyle.png)


См. также:


[TSService](TSService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
