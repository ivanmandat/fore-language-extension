# TSService.loadWbkMd

TSService.loadWbkMd
-


# TSService.loadWbkMd


## Синтаксис


loadWbkMd (report, callback);


## Параметры


report. Задает объект, в который загружаются метаданные;


callback. Задает функцию обратного вызова.


## Описание


Метод loadWbkMd загружает метаданные в объект report.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» и сервиса для работы с временными рядами «tsService» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), а в рабочей области должно быть выбрано несколько представлений данных. Затем необходимо в обработчике события открытия документа добавить следующий код:


	var wbkDataBox = workbookBox.getDataView();

	var setHorizontalButt = new PP.Ui.Button({
		ParentNode: document.body, //родительский узел DOM
		Content: "Изменить режим отображения", //подпись
		Click: PP.Delegate(onClickSetHorizontal)
	});
	function onClickSetHorizontal(){
		//Получаем компонент для управления расположением представлений рабочей книги
		var modeSelector = wbkDataBox.getModeSelectorView();
		//Получаем метаданные изменения выбранного режима
		var pos;
		if (wbk.getActiveSheet().getMetadata().windowsPosition == "Horizontal")
		{
			pos = modeSelector.getModeSelectorState(PP.TS.Ui.ModeSelectorType.Vertical);
		}
		else
		{
			pos = modeSelector.getModeSelectorState(PP.TS.Ui.ModeSelectorType.Horizontal);
		}
		//Получаем метаданные рабочей книги
		var md = wbk.getMetadata();
		//Устанавливаем метаданные изменения выбранного режима в метаданные рабочей книги
		for (var prop in pos){
			md[prop] = pos[prop];
		}
		//Обновляем рабочую  книгу
		tsService.loadWbkMd(wbk, PP.Delegate(function(){
			wbkDataBox.refreshAll();
		}));
	}

После выполнения примера на html-странице будет размещена кнопка с наименованием «Изменить режим отображения». При нажатии на кнопку режим отображения представлений данных будет изменен. Если представления размещались вертикально, то будут размещаться горизонтально и наоборот.


См. также:


[TSService](TSService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
