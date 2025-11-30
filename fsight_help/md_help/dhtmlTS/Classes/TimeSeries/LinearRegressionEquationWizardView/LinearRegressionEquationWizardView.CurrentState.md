# LinearRegressionEquationWizardView.CurrentState

LinearRegressionEquationWizardView.CurrentState
-


# LinearRegressionEquationWizardView.CurrentState


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
		 //Получаем панель, где должен находится мастер настройки параметров линейной регрессии
		var parametersPanel = workbookBox.getPropertyBarView().getParametersPanel();
		//Получаем мастер настройки параметров линейной регрессии
		var linearRegressionWizard = parametersPanel._LinearRegressionWizard;
		//Если тип формулы у выбранного ряда отличный от "[Линейная регрессия](../../../Enums/TsFormulaKind.htm)", то при нажатии на кнопку с надписью
		//"Get Current State" будет выведено сообщение о том, что панель параметров "Линейная регрессия" не применима к выбранному ряду
		if (!linearRegressionWizard) return alert('Мастер настройки параметров нелинейной регрессии не применим к выбранному ряду. \n Выберите другой ряд');
		//Получаем CurrentState мастера настройки параметров линейной регрессии
		var state = linearRegressionWizard.getCurrentState();
		alert(JSON.stringify(state));
		//Выводим активность полей AR (авторегрессия) и MA (скользящее среднее)
		alert(linearRegressionWizard.getIsArmaEnabled());
	}

После выполнения примера на html-странице будет размещен компонент [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 и кнопка с наименованием «Get Current State». Для выполнения примера также
 необходимо выбрать несколько рядов в рабочей книге, на вкладке ленты «Вычисление»
 нажать на кнопку «Регрессия» и из раскрывающегося меню выбрать «Линейная
 регрессия», на вкладке панели свойств «Ряд» раскрыть панель «Параметры»
 и выбрать любой из доступных параметров, затем нажать на кнопку «Get Current
 State». После чего на экран будет выведено сообщение с заданными
 параметрами линейной регрессии. Если будет выбран тип отличный от «Линейная
 регрессия», то при нажатии на кнопку будет выведено сообщение: «Мастер
 настройки параметров линейной регрессии не применим к выбранному ряду.
 Выберите другой ряд».


См. также:


[LinearRegressionEquationWizardView](LinearRegressionEquationWizardView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
