# MetaAttributeBreadCrumbView.updateitemContent

MetaAttributeBreadCrumbView.updateitemContent
-


# MetaAttributeBreadCrumbView.updateitemContent


## Синтаксис


updateItemContent (attrId);


## Параметры


attrId. Идентификатор атрибута.


## Описание


Метод updateltemContent обновляет надпись на элементе цепочки навигации в зависимости от отметки в измерении атрибута.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


//Получаем компонент для отображения и управления атрибутами рабочей книги
var breadcrumb = workbookBox.getDataView().getBreadcrumb();
//Получаем первый элемент из коллекции метааттрибутов
var mattr = breadcrumb.getMetaAttributes().getItem(0);
//Получаем идентификатор атрибута иерархии у первого атрибута навигационной цепочки
var attrId  = mattr.getAttributeId();
//Получаем дерево измерения атрибута
var dimTree = mattr.getTree();
//Получаем текущее отображаемое измерение
var dim = dimTree.getSource();
//Выделяем все элементы измерения
dimTree.getDimTreeCtrl().getService().selectAll(dim, function (sender, asrgs)
	{
	//Устанавливаем надпись на элементе цепочки навигации в зависимости от отметки в измерении атрибута.
	breadcrumb.updateItemContent(attrId);
	});

После выполнения примера на html-странице будет размещен компонент [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) и будет установлена надпись в звене навигационной цепочки с количеством отображаемых измерений, имеющая следующий вид:


![](mabcv.PNG)


См. также:


[MetaAttributeBreadCrumbView](MetaAttributeBreadCrumbView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
