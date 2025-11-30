# SerieRevisionsPanel.NeedRefresh

SerieRevisionsPanel.NeedRefresh
-


# SerieRevisionsPanel.NeedRefresh


## Синтаксис


NeedRefresh: Boolean;


## Описание


Свойство NeedRefresh определяет, необходимо ли получать запросы с сервера нового списка ревизий и обновления панели.


## Комментарии


Если установлено значение свойства true, то при сохранении данных рабочей книги на сервере панель с ревизиями отправит запрос на получение новых ревизий при изменении отметки в электронной таблице. Если значение свойства false - не отправит.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


//Получаем панель свойств рабочей книги
var propertyBar = workbookBox.getPropertyBarView();
//Получаем панель «Ревизии» вкладки «Ряд»
var serieRevisionsPanel =  propertyBar.getSerieRevisionsPanel();
var updateSerieListSelectionButt = new PP.Ui.Button({
	ParentNode: document.body, //Родительский узел DOM
	Content: "Обновляем выделение в списке ревизий", //Подпись
	Click: PP.Delegate(onClickUpdateSerieListSelection)
});
function onClickUpdateSerieListSelection(){
	serieRevisionsPanel.updateSerieListSelection();
	alert(serieRevisionsPanel.getNeedRefresh());
}

После выполнения примера на html-странице будет размещена кнопка с наименованием «Обновляем выделение в списке ревизий», при нажатии на которую выделение в списке ревизий будет обновлено и будет выведено значение свойства NeedRefresh. По умолчанию для свойств установлено значение false. При изменении данных рабочей книги, например, при изменении значения в ячейке таблицы и при последующем нажатии на кнопку «Сохранить изменения» на вкладке ленты «Данные», для свойства будет установлено значение true.


См. также:


[SerieRevisionsPanel](SerieRevisionsPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
