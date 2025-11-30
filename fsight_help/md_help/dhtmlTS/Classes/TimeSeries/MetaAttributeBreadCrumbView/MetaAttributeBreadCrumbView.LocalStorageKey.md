# MetaAttributeBreadCrumbView.LocalStorageKey

MetaAttributeBreadCrumbView.LocalStorageKey
-


# MetaAttributeBreadCrumbView.LocalStorageKey


## Синтаксис


LocalStorageKey: string;


## Описание


Свойство LocalStorageKey устанавливает
 ключ, под которым в локальном хранилище будут храниться настройки первоначального
 отображения.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике
 события открытия документа добавить следующий код:


	//Получаем компонент для отображения и управления атрибутами рабочей книги
	var breadcrumb = workbookBox.getDataView().getBreadcrumb();
	//Получаем  ключ, под которым в localStorage будут храниться настройки первоначального отображения
	var lsKey = breadcrumb.getLocalStorageKey();
	alert("Ключ: " + lsKey);

После выполнения примера в консоль браузера будет выведено сообщение,
 содержащее ключ, под которым в локальном хранилище будут храниться
 настройки первоначального отображения.


См. также:


[MetaAttributeBreadCrumbView](MetaAttributeBreadCrumbView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
