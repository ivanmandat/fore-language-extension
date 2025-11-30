# ReadonlyCatView.getSharePointButton

ReadonlyCatView.getSharePointButton
-


# ReadonlyCatView.getSharePointButton


## Синтаксис


getSharePointButton ();


## Описание


Метод getSharePointButton возвращает
 кнопку «Обсудить в SharePoint».


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»). Необходимо открыть источник экспресс-отчета
 на просмотр при помощи метода [openDocument](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.openDocument.htm)
 и в обработчике события открытия документа добавить следующий код:


	//Возвращаем вкладку ленты «Главная» в режиме просмотра
	var readonlyCat = workbookBox.getRibbonView().getReadonlyCategory();

	//Возвращаем кнопку «Обсудить в SharePoint»
	var sharePointButton = readonlyCat.getSharePointButton();
	var state = true;
	var sharePointToggle = new PP.Ui.Button({
		ParentNode: document.body, //родительский узел DOM
		Content: "Показать/скрыть кнопку", //текст
		Click: PP.Delegate(toggleSharePointButton)
	});

	function toggleSharePointButton()
	{
		//Показываем или скрываем кнопку «Обсудить в SharePoint»
		state ? sharePointButton.hide() : sharePointButton.show();
		state = !state;
	}

После выполнения примера на html-странице будет размещен компонент [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 и кнопка с наименованием «Показать/скрыть кнопку». По нажатию на кнопку
 будет отображаться/скрываться кнопка «Обсудить в SharePoint»:


![](getSharePointButton.png)


или:


![](getDiscussButton_1.png)


См. также:


[ReadonlyCatView](ReadonlyCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
