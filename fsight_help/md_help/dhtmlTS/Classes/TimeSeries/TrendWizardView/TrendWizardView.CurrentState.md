# TrendWizardView.CurrentState

TrendWizardView.CurrentState
-


# TrendWizardView.CurrentState


## Синтаксис


CurrentState: Object;


## Описание


Свойство CurrentState определяет
 текущее состояние параметров тренда.


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
		//Получаем панель, где должна находится панель мастера настройки параметров тренда
		var parametersPanel = workbookBox.getPropertyBarView().getParametersPanel();
		//Получаем панель мастера настройки параметров тренда
		var trendWizard = parametersPanel._TrendWizard;
		//Получаем CurrentState панели мастера настройки параметров тренда
		var state = trendWizard.getCurrentState();
		alert(JSON.stringify(state));
		//Получаем тип метода
		var methodType = trendWizard.getMethodType()
		alert('Тип метода: ' + methodType);
	}

После выполнения примера на html-странице будет размещена кнопка с наименованием
 «Get Current State». На вкладке ленты «Вычисление» необходимо нажать на
 кнопку «Прогнозирование» и из раскрывающегося меню выбрать пункт «Геометрический
 тренд», а на вкладке панели свойств «Ряд» раскрыть панель «Параметры»
 и затем нажать на кнопку «Get Current State». После чего на экран будет
 выведено сообщение с типом метода расчета для выбранного ряда и JSON-объект
 с текущими параметрами тренда.


См. также:


[TrendWizardView](TrendWizardView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
