# WbkDataView.setSplitterStatPanelHeight

WbkDataView.setSplitterStatPanelHeight
-


# WbkDataView.setSplitterStatPanelHeight


## Синтаксис


setSplitterStatPanelHeight (isStatPanelExpanded);


## Параметры


isStatPanelExpanded. Определяет,
 раскрыта ли панель.


## Комментарии


Если для параметра установлено значение true,
 панель статистик раскрыта, false
 - скрыта.


## Описание


Метод setSplitterStatPanelHeight
 увеличивает значение положения [разделителя](dhtmlUi.chm::/Components/Splitter/Splitter.htm)
 для отображения и управления данными рабочей книги.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике
 события открытия документа добавить следующий код:


	var setPanelOpen = new PP.Ui.Button({
		ParentNode: document.body, //родительский узел DOM
		Content: "Открыть", //подпись
		Click: PP.Delegate(onClickSetPanelOpen)
	});

	function onClickSetPanelOpen() {
		var dv = workbookBox.getDataView();
		dv.setSplitterStatPanelHeight(true);//для панели статистик устанавливается высота, соответствующая высоте раскрытой панели
	}

	var setPanelClose = new PP.Ui.Button({
		ParentNode: document.body, //родительский узел DOM
		Content: "Закрыть", //подпись
		Click: PP.Delegate(onClickSetPanelClose)
	});

	function onClickSetPanelClose() {
		var dv = workbookBox.getDataView();
		dv.setSplitterStatPanelHeight(false);//для панели статистик устанавливается высота, соответствующая высоте раскрытой панели
	}

После выполнения примера на html-странице будут размещены кнопки с наименованием
 «Открыть» и «Закрыть». При нажатии на кнопку «Открыть» для панели статистик
 будет установлена высота, соответствующая высоте раскрытой панели статистик.
 При нажатии на кнопку «Закрыть» для панели статистик будет установлена
 высота, соответствующая высоте скрытой панели.


См. также:


[WbkDataView](WbkDataView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
