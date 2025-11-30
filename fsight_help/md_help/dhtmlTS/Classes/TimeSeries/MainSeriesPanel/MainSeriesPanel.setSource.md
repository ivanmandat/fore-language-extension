# MainSeriesPanel.setSource

MainSeriesPanel.setSource
-


# MainSeriesPanel.setSource


## Синтаксис


setSource (value);


## Параметры


value. Задает рабочую книгу, экземпляр класса [Workbook](../Workbook/Workbook.htm).


## Описание


Метод setSource устанавливает рабочую книгу, данные которой отображаются в компоненте.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


	var mainSeriesPanel = workbookBox.getPropertyBarView().getMainSeriesPanel();
	var updateViewAsMenuButt = new PP.Ui.Button({
		ParentNode: document.body, //Родительский узел DOM
		Content: "Убрать источник", //Подпись
		Click: PP.Delegate(onClickUpdateViewAsMenu)
	});
	function onClickUpdateViewAsMenu()
	{
		mainSeriesPanel._Source ? mainSeriesPanel.setSource(null) : mainSeriesPanel.setSource(wbk);
		mainSeriesPanel._Source ? updateViewAsMenuButt.setContent("Убрать источник")  : updateViewAsMenuButt.setContent("Установить источник")
	}

После выполнения примера на html-странице будет размещена кнопка с наименованием «Убрать источник». Необходимо на вкладке панели свойств «Ряд» открыть панель «Основные». При нажатии на кнопку у мастера настройки преобразований панели «Основные» поочередно убирается и устанавливается источник данных. Если источник установлен, то на кнопке будет надпись «Убрать источник», если не установлен - «Установить источник». В случае если источник установлен, при выделении рядов рабочей книги в графе «Изменить название по умолчанию» панели «Основные» отображается наименование выделенного ряда, если не установлен - при выборе другого ряда наименование в графе «Изменить название по умолчанию» меняться не будет.


См. также:


[MainSeriesPanel](MainSeriesPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
