# MainSeriesPanel.updateViewAsMenu

MainSeriesPanel.updateViewAsMenu
-


# MainSeriesPanel.updateViewAsMenu


## Синтаксис


updateViewAsMenu ();


## Описание


Метод updateViewAsMenu обновляет раскрывающийся список выбора применяемых преобразований.


## Комментарии


Раскрывающийся список выбора применяемых преобразований находится на панели «Основные» вкладки панели свойств «Ряд».


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


var mainSeriesPanel = workbookBox.getPropertyBarView().getMainSeriesPanel();
var updateViewAsMenuButt = new PP.Ui.Button({
	ParentNode: document.body, //Родительский узел DOM
	Content: "Обновить список применяемых преобразований", //Подпись
	Click: PP.Delegate(onClickUpdateViewAsMenu)
});
function onClickUpdateViewAsMenu()
	{
		var selseries = wbk.getSelectedOrPinnedSeries();
		selseries[0].displayParams.inversion = "Diff";
		selseries[0].displayParams.inversionLag = "EndOfPrecedingYear";
		//Обновляем раскрывающийся список "Применить преобразование"
		mainSeriesPanel.updateViewAsMenu();
	}

После выполнения примера на html-странице будет размещена кнопка с наименованием «Обновить список применяемых преобразований». Для выполнения примера также необходимо на вкладке панели свойств «Ряд» раскрыть панель «Основные» и нажать на кнопку «Обновить список применяемых преобразований», после чего будет обновлено значение преобразования.


См. также:


[MainSeriesPanel](MainSeriesPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
