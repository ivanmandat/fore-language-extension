# MetaAttribute.removeFromSelected

MetaAttribute.removeFromSelected
-


# MetaAttribute.removeFromSelected


## Синтаксис


removeFromSelected (callback);


## Параметры


callback. Метод,
 который выполнится после удаления атрибута на сервере.


## Описание


Метод removeFromSelected удаляет
 атрибут из списка выбранных.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике
 события открытия документа добавить следующий код:


	var brCr = workbookBox.getDataView().getBreadcrumb();
	var mattr = brCr.getMetaAttributes().getItem(0);
	var item = mattr._BreadcrumbItem;
	//Получаем  объект PP.TS.Ui.MetaAttribute по идентификатору атрибута
	var metaattr = brCr.getMetaAttributeById(item.getId());
	//У полученного атрибута получаем раскрывающуюся панель, соответствующую атрибуту
	var panel = metaattr.getDropPanel();
	//Раскрываем панель
	showPanel();
	var attr = metaattr.getAttribute();
	alert("Название атрибута, для которого раскрыта панель - " + attr.n);
	//Для демонстрации работы метода getTree() класса PP.TS.Ui.MetaAttribute у объекта с наименованием metaattr получаем
	//дерево измерения атрибута
	var dimTree = metaattr.getTree();
	//Устанавливаем отметку всем вершинам дерева измерения
	dimTree.selectAll();
	//Обновляем всю структуру дерева
	dimTree.refreshAll();
	//На раскрывающейся панели все вершины дерева измерения будут отмечены.

	var removeSelButt = new PP.Ui.Button({
		ParentNode: document.body, //родительский узел DOM
		Content: "Убрать выделение", //Текст
		Click: PP.Delegate(onClickRemoveSel)
	});
	function onClickRemoveSel(){
		//Убираем выбраные атрибуты
		mattr.removeFromSelected();
		showPanel();
	}

	function showPanel()
	{
		//Вычисляем координаты левого верхнего угла раскрывающейся панели
		var visibilityObject = panel.isVisibleArea(0, 0);
		var coords = PP.calculateOffset(item._DomNode);
		var top = coords.Y + item._DomNode.offsetHeight + 1;
		var left = 0;
		if (brCr.getIsRTL())
			left = coords.X + item._DomNode.offsetWidth - visibilityObject.Width + 1;
		else
			left = coords.X - 1;
		//Показываем раскрывающуюся панель в указанном месте
		panel.show(left, top);
	}

После выполнения примера на html-странице будет размещен компонент [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm),
 раскрывающаяся панель, соответствующая метаатрибуту, полученному
 с помощью метода [getMetaAttributeById](../MetaAttributeBreadCrumbView/MetaAttributeBreadCrumbView.getMetaAttributeById.htm)
 и кнопка с наименованием «Убрать выделение». Будет выведено сообщение,
 содержащее название атрибута, для которого раскрыта панель. По двойному
 нажатию на кнопку будет снято выделение со всех вершин дерева измерений.


См. также:


[MetaAttribute](MetaAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
