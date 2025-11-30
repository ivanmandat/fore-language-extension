# MetaHierarchy.FilterMode

MetaHierarchy.FilterMode
-


# MetaHierarchy.FilterMode


## Синтаксис


FilterMode: PP.TS.[HieFilterMode](dhtmlTS.chm::/Enums/HieFilterMode.htm);


## Описание


Свойство FilterMode определяет
 тип фильтрации рядов в иерархии.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](dhtmlTS.chm::/Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](dhtmlTS.chm::/Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)») и в обработчике события
 открытия документа добавить следующий код:


var filterModeButton = new PP.Ui.Button({
	ParentNode: document.body, //родительский узел DOM
	Content: "Фильтрация", //Текст
	Click: PP.Delegate(filterModeClick)
});

function filterModeClick()
{
	//Получаем компонент для отображения и управления атрибутами рабочей книги
	var breadcrumb = workbookBox.getDataView().getBreadcrumb();
	//Получаем текущую иерархию
	var hie = breadcrumb.getHierarchy();
	if(hie.getFilterMode() == PP.TS.HieFilterMode.All)
	{
		//Устанавливаем тип фильтрации рядов в иерархии
		hie.setFilterMode(PP.TS.HieFilterMode.None);
	}
	else
	{
		hie.setFilterMode(PP.TS.HieFilterMode.All);
	}
	var metaAttrTree = workbookBox.getDataView().getMetaAttrTree();
	metaAttrTree.refreshAll();
}

После выполнения примера на html-странице будет размещена кнопка с наименованием
 «Фильтрация». Также по умолчанию будет установлен фильтр по пустым рядам
 и папкам, для отображения которого необходимо выбрать пункт «Скрывать»
 контекстного меню дерева рядов. После нажатия на кнопку «Фильтрация» тип
 фильтрации рядов в иерархии будет изменен на «Нет фильтра».


См. также:


[MetaHierarchy](MetaHierarchy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
