# NavBreadcrumbItem.getDimTreeView

NavBreadcrumbItem.getDimTreeView
-


# NavBreadcrumbItem.getDimTreeView


## Синтаксис


getDimTreeView ();


## Описание


Метод getDimTreeView возвращает дерево измерения атрибута, расположенное в панели.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


	var selectAllButt = new PP.Ui.Button({
		ParentNode: document.body, //Родительский узел DOM
		Content: "Выделить все вершины", //Текст
		Click: PP.Delegate(onClickselectAll)
	});

	function onClickselectAll()
	{
		//Получаем компонент для отображения и управления атрибутами рабочей книги, основанный на компоненте PP.Ui.Master
		var navbrCr = workbookBox.getPropertyBarView().getNavBreadcrumb();
		//Получаем панель, содержащую дерево измерения первого атрибута (PP.TS.Ui.NavBreadcrumbItem)
		var navBrCrItem = navbrCr._selfNavItems[0];
		//Получаем дерево измерения атрибута, расположенное в панели (PP.Mb.Ui.DimTreeView).
		var dimTree = navBrCrItem.getDimTreeView();
		//Устанавливаем отметку всем вершинам дерева измерения
		dimTree.selectAll();
	}

После выполнения примера на html-странице будет размещена кнопка с наименованием «Выделить все вершины». Выберите одну из вершин дерева рядов и нажмите на кнопку «Выделить все вершины». После этого будет установлена отметка для всех элементов дерева рядов:


![](NavBreadcrumbItem.getDimTreeView.png)


См. также:


[NavBreadcrumbItem](NavBreadcrumbItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
