# OutputSerieWizardView.CurrentState

OutputSerieWizardView.CurrentState
-


# OutputSerieWizardView.CurrentState


## Синтаксис


CurrentState (selectedSerie, fireEvent);


## Описание


Свойство CurrentState устанавливает
 состояние компонента мастера выбора выходного ряда.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике
 события открытия документа добавить следующий код:


var outputSerieWizardViewButt = new PP.Ui.Button({
	ParentNode: document.body, //Родительский узел DOM
	Content: "OutputSerieWizardView", //Подпись
	Click: PP.Delegate(onClickOutputSerieWizardView)
});
function onClickOutputSerieWizardView()
	{
		//Получаем панель, где должен находиться мастер выбора выходного ряда
		var parametersPanel = workbookBox.getPropertyBarView().getParametersPanel();
		//Получаем мастер выбора выходного ряда
		var outputSerieWizard = parametersPanel._OutputSerieWizard;
		//Если у выбранного ряда будет тип формулы, отличный от типов формулы из перечисления PP.TS.UI.TsFormulaKind,
		//то на экран будет выведено сообщение о том, что мастер выходного ряда не применим к выбранному ряду
		if (!outputSerieWizard)
			{
				alert('Мастер выбора выходного ряда не применим к выбранному ряду. \n Выберите другой ряд');
			}
		else
			{
				//Получаем CurrentState мастера выбора выходного ряда
				var state = outputSerieWizard.getCurrentState();
				//Выводим имя выходного ряда
				alert('Выходной ряд: ' + state.inputSerie.n);
			}
	}

После выполнения примера на html-странице будет размещен компонент [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 и кнопка с наименованием «OutputSerieWizardView». Для выполнения примера
 необходимо в таблице выбрать ряд, который имеет один из нижеперечисленных
 типов формулы из перечисления PP.TS.UI.[TsFormulaKind](../../../Enums/TsFormulaKind.htm):


	- Линейная регрессия;


	- Линейная регрессия (оценка методом инструментальных переменных);


	- Нелинейная регрессия;


	- Модель коррекции ошибок.


Также на вкладке панели свойств «Ряд» раскрыть панель «Параметры», нажать
 на кнопку «OutputSerieWizardView» и выбрать любой из представленных параметров
 выходного ряда, после чего, будет выведено сообщение с выбранными параметрами. Если
 будет выбран тип отличный от вышеперечисленных, то при нажатии на кнопку
 будет выведено сообщение:«Мастер выбора выходного ряда не применим к выбранному
 ряду. Выберите другой ряд».


См. также:


[OutputSerieWizardView](OutputSerieWizardView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
