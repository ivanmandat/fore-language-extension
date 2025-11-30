# ReadonlyCatView.refresh

ReadonlyCatView.refresh
-


# ReadonlyCatView.refresh


## Синтаксис


refresh ();


## Описание


Метод refresh обновляет
 компонент.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»). Необходимо открыть источник экспресс-отчета
 на просмотр при помощи метода [openDocument](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.openDocument.htm)
 и в обработчике события открытия документа добавить следующий код:


	//Получаем вкладку ленты инструментов «Главная» в режиме просмотра
	var readonlyCat = workbookBox.getRibbonView().getReadonlyCategory();
	//Убираем источник данных для вкладки
	readonlyCat._Source = null;
	//Обновляем компонент
	readonlyCat.refresh();

	var refreshReadonlyCategoryButton = new PP.Ui.Button({
		ParentNode: document.body, //родительский узел DOM
		Content: "Обновить", //подпись
		Click: PP.Delegate(refreshReadonlyCategory)
	});

	function refreshReadonlyCategory()
	{
		//Устанавливаем источник данных для вкладки
		readonlyCat._Source = wbk;
		//Обновляем компонент
		readonlyCat.refresh();
	}

После выполнения примера на html-странице будет размещен компонент [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 и кнопка с наименованием «Обновить». При нажатии на кнопку для компонента
 будет установлен источник данных, и будет произведено обновление компонента,
 в результате чего компонент перейдет в состояние, доступное для использования.


См. также:


[ReadonlyCatView](ReadonlyCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
