# NonLinearRegressionEquationWizardView.CurrentState

NonLinearRegressionEquationWizardView.CurrentState
-


# NonLinearRegressionEquationWizardView.CurrentState


## Синтаксис


CurrentState: Object;


## Описание


Свойство CurrentState возвращает
 параметры линейной регрессии.


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
		//Получаем панель, где должен находится мастер настройки параметров нелинейной регрессии
		var parametersPanel = workbookBox.getPropertyBarView().getParametersPanel();
		console.log(parametersPanel);
		//Получаем мастер настройки параметров нелинейной регрессии
		var nonLinearRegressionWizard = parametersPanel._NonLinearRegressionWizard;
		//Если тип формулы у выбранного ряда отличный от "[Нелинейная регрессия](../../../Enums/TsFormulaKind.htm)", то при нажатии на кнопку с надписью
		//"Get Current State" будет выведено сообщение о том, что панель параметров "Нелинейная регрессия" не применима к выбранному ряду
		if (!nonLinearRegressionWizard) return alert('Мастер настройки параметров нелинейной регрессии не применим к выбранному ряду. \n Выберите другой ряд');
		//Получаем CurrentState мастера настройки параметров нелинейной регрессии
		var state = nonLinearRegressionWizard.getCurrentState();
		alert(JSON.stringify(state));
	}

После выполнения примера на html-странице будет размещен компонент [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 и кнопка с наименованием «Get Current State». На вкладке ленты «Вычисление»
 следует нажать на кнопку «Нелинейная регрессия», а в открывшемся окне
 «Параметры расчета» нажмите на кнопку «Ок». На вкладке панели свойств
 «Ряд» раскройте панель «Параметры» и выберите любой из доступных параметров,
 затем нажмите на кнопку «Get Current State». После чего на экран будет
 выведено сообщение с заданными параметрами нелинейной регрессии. Если
 будет выбран тип отличный от «Нелинейная регрессия», то при нажатии на
 кнопку будет выведено сообщение:«Мастер настройки параметров нелинейной
 регрессии не применим к выбранному ряду. Выберите другой ряд».


См. также:


[NonLinearRegressionEquationWizardView](NonLinearRegressionEquationWizardView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
