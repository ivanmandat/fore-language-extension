# OutputSerieWizardView.refresh

OutputSerieWizardView.refresh
-


# OutputSerieWizardView.refresh


## Синтаксис


refresh ();


## Описание


Метод refresh обновляет компонент.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


var refreshButt = new PP.Ui.Button({
	ParentNode: document.body, //Родительский узел DOM
	Content: "Refresh", //Подпись
	Click: PP.Delegate(onClickRefresh)
});
function onClickRefresh()
	{
		//Получаем панель, где должна находится панель мастера настройки параметров тренда
		var parametersPanel = workbookBox.getPropertyBarView().getParametersPanel();
		//Получаем панель мастера выбора выходного ряда
		var outputSerieWizard = parametersPanel._OutputSerieWizard;
		//Обновляем компонент
		outputSerieWizard.refresh();
	}

После выполнения примера на html-странице будет размещен компонент [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) и кнопка с наименованием «Refresh». Для выполнения примера также необходимо на вкладке панели свойств «Ряд» раскрыть панель «Параметры» и нажать на кнопку «Refresh». В результате чего обновится выходной ряд.


См. также:


[OutputSerieWizardView](OutputSerieWizardView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
