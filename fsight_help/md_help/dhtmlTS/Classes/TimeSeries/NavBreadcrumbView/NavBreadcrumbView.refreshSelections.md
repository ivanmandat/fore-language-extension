# NavBreadcrumbView.refreshSelections

NavBreadcrumbView.refreshSelections
-


# NavBreadcrumbView.refreshSelections


## Синтаксис


refreshSelections (fireEvent);


## Параметры


fireEvent. Определяет, генерировать ли событие DataChanged. Если установлено значение true, нужно генерировать, false - не нужно генерировать. Необязательный параметр.


## Описание


Метод refreshSelections обновляет выделение в деревьях измерений всех атрибутов.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


	var refreshSelectionsButt = new PP.Ui.Button({
		ParentNode: document.body, //Родительский узел DOM
		Content: "ОК", //Текст
		Click: PP.Delegate(onClickRefreshSelections)
		});

	function onClickRefreshSelections()
	{
		//Получаем компонент для отображения и управления атрибутами рабочей книги, основанный на компоненте PP.Ui.[Master](dhtmlUi.chm::/Classes/Master/Master.htm)
		var navbrCr = workbookBox.getPropertyBarView().getNavBreadcrumb();
		//Получаем компонент для отображения и управления атрибутами рабочей книги
		var breadcrumb = workbookBox.getDataView().getBreadcrumb();
		//Получаем первый элемент из коллекции метааттрибутов
		var mattr = breadcrumb.getMetaAttributes().getItem(0);
		//Получаем дерево измерения атрибута
		var dimTree = mattr.getTree();
		//Получаем текущее отображаемое измерение
		var dim = dimTree.getSource();
		//Выделяем все элементы измерения
		dimTree.selectAll();
		//Обновляет выделение в деревьях измерений всех атрибутов
		navbrCr.refreshSelections();
	}

После выполнения примера на html-странице будет размещен компонент [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) и кнопка с наименованием «ОК». Необходимо выбрать вершину дерева рядов, а затем нажать на кнопку. В дереве измерений всех атрибутов будут выделены и обновлены все элементы.


См. также:


[NavBreadcrumbView](NavBreadcrumbView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
