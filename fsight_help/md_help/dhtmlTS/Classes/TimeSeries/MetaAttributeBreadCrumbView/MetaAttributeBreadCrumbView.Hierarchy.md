# MetaAttributeBreadCrumbView.Hierarchy

MetaAttributeBreadCrumbView.Hierarchy
-


# MetaAttributeBreadCrumbView.Hierarchy


## Синтаксис


Hierarchy: PP.TS.MetaHierarchy;


## Описание


Свойство Hierarchy устанавливает текущую иерархию.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), а также необходимо в обработчике события открытия документа добавить следующий код:


	var hierButton = new PP.Ui.Button({
		ParentNode: document.body, //Родительский узел DOM
		Content: "Удалить последнее звено", //Подпись
		Click: PP.Delegate(onClickHier)
	});
	function onClickHier()
	{
		//Получаем навигационную цепочку
		var breadCrumb = workbookBox.getDataView().getBreadcrumb();
		//Получаем текущую иерархию навигационной цепочки
		var hie = breadCrumb.getHierarchy();
		//Получаем массив уровней в иерархии навигационной цепочки
		var levels = hie.getLevels();
		//Удаляем один из уровней
		levels.pop();
		//Обновляем навигационную цепочку в соответствии с аргументами
		breadCrumb.refresh(new PP.Mb.Ui.PropertyChangedEventArgs({TypeUpdateData: PP.TS.Ui.ViewTypeUpdate.MetaAttributeBreadcrumb}));
	}

После выполнения примера на html-странице будет размещена кнопка с наименованием «Удалить последнее звено». При нажатии на кнопку будет удаляться последнее звено навигационной цепочки.


См. также:


[MetaAttributeBreadCrumbView](MetaAttributeBreadCrumbView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
