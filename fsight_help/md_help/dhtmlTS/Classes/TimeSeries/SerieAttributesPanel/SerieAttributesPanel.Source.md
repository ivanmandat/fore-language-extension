# SerieAttributesPanel.Source

SerieAttributesPanel.Source
-


# SerieAttributesPanel.Source


## Синтаксис


Source: PP.TS.[WbkDocument](../WbkDocument/WbkDocument.htm);


## Описание


Свойство Source определяет источник
 данных, установленный для панели атрибутов.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике
 события открытия документа добавить следующий код:


//Получаем панель для редактирования значений атрибутов выделенных рядов
var serieAttributesPanel = workbookBox.getPropertyBarView().getSerieAttributesPanel();
var getSourceButt = new PP.Ui.Button({
ParentNode: document.body, //Родительский узел DOM
Content: "Источник данных", //Подпись
Click: PP.Delegate(onClickGetSource)
});
function onClickGetSource()
{
	//Получаем рабочую книгу данные которой отображаются в компоненте
	var WBK = serieAttributesPanel.getSource();
	//Получаем номер текущего листа
	var sheetKey = WBK.getActiveSheetKey();
	//Выводим номер текущего листа
	alert('Номер текущего листа ' + sheetKey);
}

Для получения источника данных, установленного для панели атрибутов,
 нужно нажать на кнопку «Источник данных», которая находится под панелью
 навигации.


См. также:


[SerieAttributesPanel](SerieAttributesPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
