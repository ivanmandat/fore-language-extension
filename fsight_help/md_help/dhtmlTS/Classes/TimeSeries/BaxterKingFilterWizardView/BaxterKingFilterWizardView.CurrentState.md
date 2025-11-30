# BaxterKingFilterWizardView.CurrentState

BaxterKingFilterWizardView.CurrentState
-


# BaxterKingFilterWizardView.CurrentState


## Синтаксис


CurrentState: Object;


## Описание


Свойство CurrentState определяет текущее состояние компонента мастера настройки параметров фильтра Бакстера-Кинга.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), необходимо наличие в рабочей книге ряда с типом формулы «Фильтр Бакстера-Кинга». А в обработчике события открытия документа добавить следующий код:


	var baxterKingFilterWizardView;
	//Получаем панель, где должен находиться мастер настройки параметров фильтра Бакстера-Кинга
	var parametersPanel = workbookBox.getPropertyBarView().getParametersPanel();
	// Создаем экземпляр панели мастера настройки параметров фильтра Бакстера-Кинга
	var baxterKingFilterWizardViewButt = new PP.Ui.Button({
		ParentNode: document.body, //Родительский узел DOM
		Content: "Изменить нижнее значение", //Подпись
		Click: PP.Delegate(onClickBaxterKingFilterWizardView),
		Enabled:false
		});
	//Устанавливаем кнопку «Изменить нижнее значение» в состояние, доступное к использованию
	parametersPanel.Toggling.add(PP.Delegate(function(){
	var selSerie = wbk.getActiveSheet().getSelectedSeries()[0];
	if(parametersPanel._isBaxterKingFilterSerie(selSerie))
	{
		baxterKingFilterWizardViewButt.setEnabled(true);
	}
	else
	{
		baxterKingFilterWizardViewButt.setEnabled(false);
	}
	}));
	function onClickBaxterKingFilterWizardView() {
		//Получаем мастер настройки параметров «Фильтра Бакстера-Кинга»
		baxterKingFilterWizardView = parametersPanel._BaxterKingFilterWizard;
		//Получаем текущее состояние компонента
		var state = baxterKingFilterWizardView.getCurrentState();
		//Изменяем нижнее значение
		state.bandpassFilter.frequencyLow = 666777;
		//Устанавливаем компоненту новое текущее состояние
		baxterKingFilterWizardView.setCurrentState(state);
	}

После выполнения примера на html-странице будет размещена кнопка с наименованием «Изменить нижнее значение». Выделите ряд с типом формулы «Фильтр Бакстера-Кинга», на боковой панели откройте панель «Параметры» вкладки «Ряд». После этого кнопка «Изменить нижнее значение» будет разблокирована. При нажатии на кнопку на панели «Параметры» в графе «Нижнее значение» будет установлено новое значение- 666777.


См. также:


[BaxterKingFilterWizardView](BaxterKingFilterWizardView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
