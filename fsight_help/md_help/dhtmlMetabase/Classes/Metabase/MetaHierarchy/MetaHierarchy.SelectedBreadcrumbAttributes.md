# MetaHierarchy.SelectedBreadcrumbAttributes

MetaHierarchy.SelectedBreadcrumbAttributes
-


# MetaHierarchy.SelectedBreadcrumbAttributes


## Синтаксис


SelectedBreadcrumbAttributes: Array;


## Описание


Свойство SelectedBreadcrumbAttributes
 определяет последнюю установленную в навигационной цепочке последовательность
 атрибутов.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](dhtmlTS.chm::/Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](dhtmlTS.chm::/Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)») и в обработчике события
 открытия документа добавить следующий код:


//Получаем компонент для отображения и управления атрибутами рабочей книги
var breadcrumb = workbookBox.getDataView().getBreadcrumb();
//Создаем массив выбранных атрибутов
var selItems = [];
//Получаем текущую иерархию
var hie = breadcrumb.getSource();
var levs = hie.getLevels();
var brCrAtts = hie.getSelectedBreadcrumbAttributes(); //Выбранные в цепочке навигации атрибуты
//Выбираем все атрибуты иерархии
for (var k = 0; k < levs.length; k++)
{
	//Получаем атрибуты уровней
	var atts = levs[k].atts.its.it;
	if (atts.length > 0)
	{
		//Создаем объект, который содержит информацию о выбранных атрибутах
		selItems.push({
			Id: atts[0].id,
			Key: atts[0].k,
			Name: atts[0].n
		});
	}
	break;
}
//Вычисляем порядок выбранных атрибутов для навигационной цепочки
breadcrumb.setSelectedAttributes(selItems, false);
//Обновляем навигационную цепочку
breadcrumb.refreshAll();

После выполнения примера в компоненте [MetaAttributeBreadCrumb](dhtmlTS.chm::/Components/TimeSeries/MetaAttributeBreadCrumb/MetaAttributeBreadCrumb.htm)
 будет содержаться только один атрибут:


См. также:


[MetaHierarchy](MetaHierarchy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
