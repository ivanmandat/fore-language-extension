# ReadonlyCatView.getDiscussButton

ReadonlyCatView.getDiscussButton
-


# ReadonlyCatView.getDiscussButton


## Синтаксис


getDiscussButton ();


## Описание


Метод getDiscussButton возвращает
 кнопку «Поделиться».


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»). Необходимо открыть источник экспресс-отчета
 на просмотр при помощи метода [openDocument](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.openDocument.htm)
 и в обработчике события открытия документа добавить следующий код:


	//Возвращаем вкладку ленты «Главная» в режиме просмотра
	var readonlyCat = workbookBox.getRibbonView().getReadonlyCategory();

	//Возвращаем кнопку «Поделиться»
	var discussButton = readonlyCat.getDiscussButton();
	var state = true;
	var discussButtonToggle = new PP.Ui.Button({
		ParentNode: document.getElementById("params")
		Content: "Показать/скрыть кнопку", //текст
		Click: PP.Delegate(toggleDiscussButton)
	});

	function toggleDiscussButton()
	{
		//Показываем или скрываем кнопку «Поделиться»
		state ? discussButton.hide() : discussButton.show();
		state = !state;
	}

После выполнения примера на html-странице будет размещен компонент [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 и кнопка с наименованием «Показать/скрыть кнопку». По нажатию на кнопку
 будет отображаться/скрываться кнопка «Поделиться»:


![](getDiscussButton_1.png)


или:


![](getDiscussButton.png)


См. также:


[ReadonlyCatView](ReadonlyCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
