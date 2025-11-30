# ArimaWizardView.CurrentState

ArimaWizardView.CurrentState
-


# ArimaWizardView.CurrentState


## Синтаксис


CurrentState: Object;


## Описание


Свойство CurrentState определяет
 текущее состояние мастера расчета «ARIMA».


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике
 события открытия документа добавить следующий код:


var getCurrentStateButt = new PP.Ui.Button({
	ParentNode: document.body, //Родительский узел DOM
	Content: "Get Current State", //Подпись
	Click: PP.Delegate(onClickGetCurrentState)
});
function onClickGetCurrentState()
	{
		//Получаем панель, где должна находиться панель мастера настройки параметров метода расчёта «ARIMA»
		var parametersPanel = workbookBox.getPropertyBarView().getParametersPanel();
		//Получаем панель мастера настройки параметров метода расчёта «ARIMA»
		var arimaWizard = parametersPanel._ArimaWizard;
		//Если тип формулы у выбранного ряда отличный от «ARIMA», то при нажатии на кнопку с надписью
		//"Get Current State" будет выведено сообщение о том, что панель мастера настройки параметров метода расчёта «ARIMA» не применима к выбранному ряду
		if (!arimaWizard) return alert('Панель мастера настройки параметров метода расчёта «ARIMA» не применима к выбранному ряду. \n Выберите другой ряд.');
		//Получаем CurrentState панель мастера настройки параметров метода расчёта «ARIMA»
		var state = arimaWizard.getCurrentState();
		alert(JSON.stringify(state));
	}

После выполнения примера на html-странице будет размещен компонент [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 и кнопка с наименованием «Get Current State». На вкладке ленты «Вычисление»
 необходимо нажать на кнопку «Прогнозирование» и из раскрывающегося меню
 выбрать пункт «ARIMA», а на вкладке панели свойств «Ряд» раскрыть панель
 «Параметры» и затем нажать на кнопку «Get Current State». После чего на
 экран будет выведено сообщение с заданными параметрами метода расчёта
 «ARIMA». Если тип формулы у выбранного ряда отличный от «ARIMA», то при
 нажатии на кнопку «Get Current State» будет выведено сообщение: «Панель
 мастера настройки параметров метода расчёта «ARIMA» не применима к выбранному
 ряду. Выберите другой ряд».


См. также:


[ArimaWizardView](ArimaWizardView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
