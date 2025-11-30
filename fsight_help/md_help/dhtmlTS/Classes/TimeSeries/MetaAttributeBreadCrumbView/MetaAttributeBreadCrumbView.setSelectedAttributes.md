# MetaAttributeBreadCrumbView.setSelectedAttributes

MetaAttributeBreadCrumbView.setSelectedAttributes
-


# MetaAttributeBreadCrumbView.setSelectedAttributes


## Синтаксис


setSelectedAttributes (selectedAttrs, fireEvent);


## Параметры


selectedAttrs. Определяет порядок
 атрибутов;


fireEvent. Определяет, будет
 ли генерироваться событие [RequestSelectedItemsChanged](MetaAttributeBreadCrumbView.RequestSelectedItemsChanged.htm).
 Если параметр равен true (по
 умолчанию), то событие будет генерироваться, false
 - не будет.


## Описание


Метод setSelectedAttributes
 вычисляет для навигационной цепочки порядок выбранных атрибутов.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике
 события открытия документа добавить следующий код:


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
		if (brCrAtts != null && k >= brCrAtts.length)
			break;
		var atts = levs[k].atts.its.it;
		if (atts.length > 0)
		{
			selItems.push({
				Id: atts[0].id,
				Key: atts[0].k,
				Name: atts[0].n
				});
		}
	}

	var removeLastButt = new PP.Ui.Button({
		ParentNode: document.body, //Родительский узел DOM
		Content: "Убрать последний атрибут цепочки", //Подпись
		Click: PP.Delegate(onClickRemoveLast)
		});

	function onClickRemoveLast()
	{
		selItems.pop();
		//Вычисляем порядок выбранных атрибутов для навигационной цепочки
		breadcrumb.setSelectedAttributes(selItems, false);
		//Обновляем навигационную цепочку
		breadcrumb.refreshAll();
	}

После выполнения примера на html-странице будет размещена кнопка с наименованием
 «Убрать последний атрибут цепочки». При нажатии на кнопку в навигационной
 цепочке убирается последний выбранный атрибут.


См. также:


[MetaAttributeBreadCrumbView](MetaAttributeBreadCrumbView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
