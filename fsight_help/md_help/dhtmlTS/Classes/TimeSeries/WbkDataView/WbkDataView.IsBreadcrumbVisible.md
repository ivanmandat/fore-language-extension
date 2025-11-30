# WbkDataView.IsBreadcrumbVisible

WbkDataView.IsBreadcrumbVisible
-


# WbkDataView.IsBreadcrumbVisible


## Синтаксис


IsBreadcrumbVisible: Boolean;


## Описание


Свойство IsBreadcrumbVisible определяет видимость навигационной цепочки и дерева рядов.


## Комментарии


Если установлено значение true - навигационная цепочка и дерево рядов видны, false - скрыты.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


var showBrCrButt = new PP.Ui.Button({
	ParentNode: document.body, //Родительский узел DOM
	Content: "Показать/скрыть", //Текст
	Click: PP.Delegate(onClickShowBrCr)
});
function onClickShowBrCr(){
	var dataView = workbookBox.getDataView();
	dataView.getIsBreadcrumbVisible() ? dataView.setIsBreadcrumbVisible(false) : dataView.setIsBreadcrumbVisible(true);
}

После выполнения примера на html-странице будет размещен компонент [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) и кнопка с наименованием «Показать/скрыть», при нажатии на которую навигационная цепочка и дерево рядов будут скрыты.


См. также:


[WbkDataView](WbkDataView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
