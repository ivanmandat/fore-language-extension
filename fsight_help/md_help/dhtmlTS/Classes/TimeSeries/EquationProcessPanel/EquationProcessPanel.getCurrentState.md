# EquationProcessPanel.getCurrentState

EquationProcessPanel.getCurrentState
-


# EquationProcessPanel.getCurrentState


## Синтаксис


getCurrentState ();


## Описание


Метод getCurrentState возвращает
 объект текущего состояния компонента навигационной панели «Обработка пропусков».


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «Пример создания компонента WorkbookBox»), рабочей
 книги с ключом 5183, а в обработчике события открытия документа необходимо
 добавить следующий код:


//Получаем панель, где должен находиться компонент навигационной панели «Обработка пропусков»
var equationProcessPanel = workbookBox.getPropertyBarView().getEquationProcessPanel();
//Подписываемся на событие запроса загрузки данных для раскрывающегося списка компонента
equationProcessPanel.NeedFillSpecifiedVector.add(function()
	{
		alert('Произошло событие запроса загрузки данных для раскрывающегося списка компонента навигационной панели «Обработка пропусков»')
	});
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
		//Устанавливаем новый источник данных для компонента навигационной панели «Обработка пропусков»
		equationProcessPanel.setSource(wbk2);
		//Обновляем
		equationProcessPanel.refresh();
	}
equationProcessPanel.ControlChanged = new PP.Delegate(onStateChanged);
function onStateChanged(sender, args)
	{
		//Получаем CurrentState из компонента навигационной панели «Обработка пропусков»
		var state = equationProcessPanel.getCurrentState();
		alert(JSON.stringify(state));
	}
}

После выполнения примера на html-странице будет размещен компонент [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 и кнопка с наименованием «Set Source». Для выполнения примера также необходимо
 на [панели свойств
 рабочей книги](../WbkPropertyBarView/WbkPropertyBarView.htm) выбрать Ряд - Обработка пропусков, затем в раскрывающемся
 списке выбрать новый источник и нажать на кнопку «Set Source», после чего,
 источник перейдет в исходное значение.


См. также:


[EquationProcessPanel](EquationProcessPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
