# HodrickPrescottFilterWizardView.CurrentState

HodrickPrescottFilterWizardView.CurrentState
-


# HodrickPrescottFilterWizardView.CurrentState


## Синтаксис


CurrentState: Object;


## Описание


Свойство CurrentState возвращает параметры фильтра Ходрика-Прескотта.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


var getCurrentStateButt = new PP.Ui.Button({
	ParentNode: document.body, //Родительский узел DOM
	Content: "Get Current State", //Подпись
	Click: PP.Delegate(onClickGetCurrentState)
});
function onClickGetCurrentState()
{
	//Получаем панель, где должен находится панель параметров фильтра Ходрика-Прескотта
	var parametersPanel = workbookBox.getPropertyBarView().getParametersPanel();
	console.log(parametersPanel);
	//Получаем мастер настройки параметров нелинейной регрессии
	var hodrickPrescottFilterWizard = parametersPanel._HodrickPrescottFilterWizard;
	//Если тип формулы у выбранного ряда отличный от "[Фильтр Ходрика-Прескотта](../../../Enums/TsFormulaKind.htm)", то при нажатии на кнопку с надписью
	//"Get Current State" будет выведено сообщение о том, что панель параметров фильтра Ходрика-Прескотта не применима к выбранному ряду
	if (!hodrickPrescottFilterWizard) return alert('Панель параметров фильтра Ходрика-Прескотта не применима к выбранному ряду. \n Выберите другой ряд');
	//Получаем CurrentState панели параметров фильтра Ходрика-Прескотта
	var state = hodrickPrescottFilterWizard.getCurrentState();
	alert(JSON.stringify(state));
}

После выполнения примера на html-странице будет размещен компонент [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) и кнопка с наименованием «Get Current State». На вкладке ленты «Вычисление» необходимо нажать на кнопку «Сглаживание» и из раскрывающегося меню выбрать пункт «Фильтр Ходрика-Прескотта», а на вкладке панели свойств «Ряд» раскрыть панель «Параметры» и выбрать любой из доступных параметров, затем нажать на кнопку «Get Current State». После чего на экран будет выведено сообщение с заданными параметрами сглаживания. Если будет выбран тип отличный от «Фильтр Ходрика-Прескотта», то при нажатии на кнопку будет выведено сообщение: «Панель параметров фильтра Ходрика-Прескотта не применима к выбранному ряду. Выберите другой ряд».


См. также:


[HodrickPrescottFilterWizardView](HodrickPrescottFilterWizardView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
