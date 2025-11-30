# WbkDataView.getBreadcrumb

WbkDataView.getBreadcrumb
-


# WbkDataView.getBreadcrumb


## Синтаксис


getBreadcrumb ();


## Описание


Метод getBreadcrumb возвращает
 экземпляр класса [MetaAttributeBreadCrumbView](../MetaAttributeBreadCrumbView/MetaAttributeBreadCrumbView.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике
 события открытия документа добавить следующий код:


//Получаем компонент для отображения и управления атрибутами рабочей книги
var breadcrumb = workbookBox.getDataView().getBreadcrumb();
//Получаем первый элемент из коллекции метааттрибутов
var mattr = breadcrumb.getMetaAttributes().getItem(0);
//Получаем идентификатор атрибута иерархии у первого аттрибута цепочки навигации
var attrId  = mattr.getAttributeId();
//Получаем дерево измерения атрибута
var dimTree = mattr.getTree();
//Получаем текущее отображаемое измерение
var dim = dimTree.getSource();
//Выделяем все элементы измерения
dimTree.getDimTreeCtrl().getService().selectAll(dim, function (sender, asrgs)
	{
		//Обновляем выделение в деревьях измерений всех атрибутов
		breadcrumb.refreshSelections();
	});

После выполнения кода на html-странице отобразится компонент [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm),а
 в звене первого атрибута в навигационной цепочке будет отмечено 6 элементоы.


![](getBreadcr.PNG)


См. также:


[WbkDataView](WbkDataView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
