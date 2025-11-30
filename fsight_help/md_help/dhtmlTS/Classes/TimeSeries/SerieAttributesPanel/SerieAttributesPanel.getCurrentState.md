# SerieAttributesPanel.getCurrentState

SerieAttributesPanel.getCurrentState
-


# SerieAttributesPanel.getCurrentState


## Синтаксис


getCurrentState (changedCtrl);


## Описание


Метод getCurrentState возвращает объект текущего состояния компонента панели для редактирования значений атрибутов выделенных рядов.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


//Получаем панель для редактирования значений атрибутов выделенных рядов
var serieAttributesPanel = workbookBox.getPropertyBarView().getSerieAttributesPanel();
var getCurrentStateButt = new PP.Ui.Button({
ParentNode: document.body, //Родительский узел DOM
Content: "Получить текущее состояние", //Подпись
Click: PP.Delegate(onClickGetCurrentState)
});
function onClickGetCurrentState()
{
	serieAttributesPanel.expand();
	serieAttributesPanel._update();
	//Возвращаем состояние компонента
	currentState = serieAttributesPanel.getCurrentState();
	//Выводим id
	alert(currentState[0].id);
}

После выполнения примера на html-странице будет размещена кнопка с наименованием «Получить текущее состояние», при нажатии на которую выведется на экран окно, в котором содержится информация о текущем состоянии компонента панели для редактирования значений атрибутов выделенных рядов.


См. также:


[SerieAttributesPanel](SerieAttributesPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
