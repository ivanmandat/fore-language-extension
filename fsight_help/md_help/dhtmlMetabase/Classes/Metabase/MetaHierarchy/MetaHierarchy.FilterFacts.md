# MetaHierarchy.FilterFacts

MetaHierarchy.FilterFacts
-


# MetaHierarchy.FilterFacts


## Синтаксис


FilterFacts: Array;


## Описание


Свойство FilterFacts определяет
 массив ключей рядов, которые нужно отобразить в иерархии.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](dhtmlTS.chm::/Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](dhtmlTS.chm::/Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также в базе данных
 временных рядов должны содержаться ряды с ключами 643251, 1234785, 643262.
 Необходимо в обработчике события открытия документа добавить следующий
 код:


//Возвращаем сервис для работы с иерархией рядов рабочей книги
var hieService = tsService.getHieService();
//Возвращаем иерархию дерева рядов
var hie = wbk.getHier();
var setFilterFactsButt = new PP.Ui.Button({
	ParentNode: document.body, //Родительский узел DOM
	Content: "Set Filter Facts", //Подпись
	Click: PP.Delegate(onClickSetFilterFacts)
});
var state = false;
function onClickSetFilterFacts() {
	hie.setFilterFacts(state ? [643251, 1234785, 643262] : []); //В дереве будут отображаться только ряды с этими ключами/все ряды
	state = !state;
	hieService.setMetadata(hie); //Отправляем метаданные в сервис
}

После выполнения примера на html-странице будет размещен компонент [WorkbookBox](dhtmlTS.chm::/Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 и кнопка с наименованием «Set Filter Facts». По нажатию на кнопку в дереве
 будут отображаться только ряды с ключами 643251, 1234785, 643262 или все
 ряды при повторном нажатии.


См. также:


[MetaHierarchy](MetaHierarchy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
