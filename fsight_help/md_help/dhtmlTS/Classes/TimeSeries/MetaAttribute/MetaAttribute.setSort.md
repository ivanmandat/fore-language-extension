# MetaAttribute.setSort

MetaAttribute.setSort
-


# MetaAttribute.setSort


## Синтаксис


setSort(method, dimAttrId, fireEvent);


## Параметры


method. Задает тип сортировки.
 Значение параметра – элемент перечисления [PP.SortDirection](dhtmlCommon.chm::/Enums/SortDirection.htm);


dimAttrId. Задает идентификатор
 атрибута измерения по которому нужно выполнить сортировку;


fireEvent. Задает, вызывать
 ли событие [TreeSortChanged](MetaAttribute.TreeSortChanged.htm),
 по умолчанию true.


## Описание


Метод setSort устанавливает
 сортировку.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике
 события открытия документа добавить следующий код:


var brCr = workbookBox.getDataView().getBreadcrumb();
var mattr = brCr.getMetaAttributes().getItem(0);
var item = mattr._BreadcrumbItem;
//Получаем объект PP.TS.Ui.MetaAttribute по идентификатору атрибута
var metaattr = brCr.getMetaAttributeById(item.getId());
//У полученного атрибута получаем раскрывающуюся панель, соответствующую атрибуту
var panel = metaattr.getDropPanel();
//Раскрываем панель
showPanel();

var setSortButt = new PP.Ui.Button({
	ParentNode: document.body, //родительский узел DOM
	Content: "Изменить сортировку", //Текст
	Click: PP.Delegate(onClickSetSort)
});
var order;
var sort = true;
function onClickSetSort(){
	if (sort)
	{
		order = 1;
		//Задаем сортировку
		metaattr.setSort(order, "NAME");
		metaattr.getTree().sort("NAME", order);
	}
	else
	{
		order = 2;
		//Задаем сортировку
		metaattr.setSort(order, "NAME");
		metaattr.getTree().sort("NAME", order);
	}
	sort = !sort;
	showPanel();
}
//При двойном щелчке изменяется сортировка
function showPanel()
{
	//Вычисляем координаты левого верхнего угла раскрывающейся панели
	var visibilityObject = panel.isVisibleArea(0, 0);
	//Вычисляем смещение
	var coords = PP.calculateOffset(item._DomNode);
	//Вычисляем координату по оси Y
	var top = coords.Y + item._DomNode.offsetHeight + 1;
	var left = 0;
	if (brCr.getIsRTL())
	//Вычисляем координату по оси X
	left = coords.X + item._DomNode.offsetWidth - visibilityObject.Width + 1;
	else
	//Вычисляем координату по оси Y
	left = coords.X - 1;
	//Отображаем панель
	panel.show(left, top);
}

После выполнения примера на html-странице будет раскрыта панель первого
 атрибута навигационной цепочки и размещена кнопка с наименованием «Изменить
 сортировку». При двойном нажатии на кнопку будет изменен тип сортировки
 элементов атрибута в раскрытой панели.


См. также:


[MetaAttribute](MetaAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
