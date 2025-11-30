# EquationPeriodPanel.getCurrentState

EquationPeriodPanel.getCurrentState
-


# EquationPeriodPanel.getCurrentState


## Синтаксис


getCurrentState ();


## Описание


Метод getCurrentState возвращает объект текущего состояния компонента панели «Периоды расчета».


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)») и рабочей книги с ключом 5183. В обработчике события открытия документа добавить следующий код:


//Получаем панель, где должна находится панель «Периоды расчета»
var equationPeriodPanel = workbookBox.getPropertyBarView().getEquationPeriodPanel();
//Запрашиваем новую рабочую книгу
var NewKEY = 5183;
tsService.editDocument(NewKEY, onSecondOpened);
function onSecondOpened(sender, args)
	{
		//Получаем новый источник данных
		var wbk2 = args.Workbook;
		//Устанавливаем выбранный ряд в новом источнике данных
		tsService.setSelectedSeries(wbk2, [1], [0]);
		var setSourceButt = new PP.Ui.Button({
			ParentNode: document.body, //Родительский узел DOM
			Content: "Set Source", //Подпись
			Click: PP.Delegate(onClickSetSource)
		});
		function onClickSetSource()
			{
				//Устанавливаем новый источник данных для панели «Периоды расчета»
				equationPeriodPanel.setSource(wbk2);
				//Обновляем
				equationPeriodPanel.refresh();
			}
			equationPeriodPanel.ControlChanged = new PP.Delegate(onStateChanged);
			function onStateChanged(sender, args)
			{
				//Получаем CurrentState панели «Периоды расчета»
				var state = equationPeriodPanel.getCurrentState();
				alert(JSON.stringify(state));
			}
	}

После выполнения примера на html-странице будет размещен компонент [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) и кнопка с наименованием «Set Source». Для выполнения примера также необходимо на [панели свойств рабочей книги](../WbkPropertyBarView/WbkPropertyBarView.htm) выбрать вкладку «Ряд» и раскрыть панель «Период расчета». После этого необходимо нажать на кнопку «Set Source». Период расчетов будет изменен: на панели будет установлен период расчетов для рабочей книги с ключом 5183.


См. также:


[EquationPeriodPanel](EquationPeriodPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
