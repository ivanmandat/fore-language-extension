# ExponentialSmoothingWizardView.CurrentState

ExponentialSmoothingWizardView.CurrentState
-


# ExponentialSmoothingWizardView.CurrentState


## Синтаксис


CurrentState: Object;


## Описание


Свойство CurrentState определяет текущие параметры [модели сезонности](../../../Enums/StatSeasonalityType.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


	var parametersPanel = workbookBox.getPropertyBarView().getParametersPanel();
	var exponential = new PP.Ui.Button({
		ParentNode: document.body, //Родительский узел DOM
		Content: "Изменить период", //Подпись
		Click: PP.Delegate(onClickSetSource),
		Enabled: false
	});
	//Устанавливаем кнопку "Изменить период" в состояние, доступное к использованию
	parametersPanel.Toggling.add(PP.Delegate(function(){
		var selSerie = wbk.getActiveSheet().getSelectedSeries()[0];
		if(parametersPanel._isExponentialSmoothingSerie(selSerie))
		{
			exponential.setEnabled(true);
		}
		else
		{
			exponential.setEnabled(false);
		}
	}));
	function onClickSetSource()
	{
		var exponentialSmoothingWizard = parametersPanel._ExponentialSmoothingWizard;
		//Получаем текущее состояние компонента
		var state = exponentialSmoothingWizard.getCurrentState();
		//Изменяем период
		state.exponentialSmoothing.seasonalComponent.cycle = 5;
		//Устанавливаем компоненту новое текущее состояние
		exponentialSmoothingWizard.setCurrentState(state);
	}

После выполнения примера на html-странице будет размещен компонент [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) и кнопка с наименованием «Изменить период». Для выполнения примера необходимо на вкладке ленты инструментов «Вычисление» нажать на кнопку «Прогнозирование» и из раскрывающегося меню выбрать «Экспоненциальное сглаживание», открыть панель «Параметры» на вкладке панели свойств «Ряд». Затем необходимо нажать на кнопку «Изменить период». После этого в графе «Период» панели «Параметры» появится новое значение.


См. также:


[ExponentialSmoothingWizardView](ExponentialSmoothingWizardView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
