# CointegrationEquationWizardView.CurrentState

CointegrationEquationWizardView.CurrentState
-


# CointegrationEquationWizardView.CurrentState


## Синтаксис


CurrentState: Object;


## Описание


Свойство CurrentState определяет текущее состояние компонента панели настроек метода «Модель коррекции ошибок».


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


var getCurrentStateButt = new PP.Ui.Button({
	ParentNode: document.body, //Родительский узел DOM
	Content: "Get Current State", //Текст
	Click: PP.Delegate(onClickGetCurrentState)
});
function onClickGetCurrentState()
	{
		//Получаем панель, где должна находиться панель настроек метода «Модель коррекции ошибок»
		var parametersPanel = workbookBox.getPropertyBarView().getParametersPanel();
		//Получаем панель настроек метода «Модель коррекции ошибок»
		var cointegrationEquationWizard = parametersPanel._CointegrationEquationWizard;
		if (!cointegrationEquationWizard) return alert('панель настроек метода «Модель коррекции ошибок» не применим к выбранному ряду \n выберите другой ряд');
		//Получаем CurrentState панель настроек метода «Модель коррекции ошибок»
		var state = cointegrationEquationWizard.getCurrentState();
		alert(JSON.stringify(state));
	}

После выполнения примера на html-странице будет размещен компонент [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) и кнопка с наименованием «Get Current State». Для выполнения примера также необходимо в таблице выбрать несколько рядов, затем на вкладке ленты инструментов «Вычисления» нажать кнопку «Регрессия» и из раскрывающегося меню выбрать пункт «Модель коррекции ошибок». Затем нужно нажать на кнопку «Get Current State». В результате выведется сообщение с текущими параметрами метода «Модель коррекции ошибок».


См. также:


[CointegrationEquationWizardView](CointegrationEquationWizardView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
