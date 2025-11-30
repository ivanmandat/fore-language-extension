# MetaAttributeBreadCrumbView.Options

MetaAttributeBreadCrumbView.Options
-


# MetaAttributeBreadCrumbView.Options


## Синтаксис


Options: PP.TS.[MetaAttrBrCrOptionParser](../MetaAttrBrCrOptionParser/MetaAttrBrCrOptionParser.htm);


## Описание


Свойства Options устанавливает настройки первоначального отображения.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


	var demoOptionsButt = new PP.Ui.Button({
		ParentNode: document.body, //Родительский узел DOM
		Content: "Изменить навигационную цепочку", //Подпись
		Click: PP.Delegate(onClickDemoOptions)
	});
	function onClickDemoOptions()
	{
		//Получаем компонент для отображения и управления атрибутами рабочей книги
		var breadcrumb = workbookBox.getDataView().getBreadcrumb();
		//Получаем настройки первоначального отображения
		var opts = breadcrumb.getOptions();
		var items = opts.getItems();
		items.pop();
		opts.setItems(items);
		breadcrumb.refresh();
	}

После выполнения примера на html-странице будет размещен компонент [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) и кнопка с наименованием «Изменить навигационную цепочку». По нажатию на кнопку будет получен компонент для отображения и управления атрибутами рабочей книги, будут установлены настройки первоначального отображения и произведено обновление навигационной цепочки.


См. также:


[MetaAttributeBreadCrumbView](MetaAttributeBreadCrumbView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
