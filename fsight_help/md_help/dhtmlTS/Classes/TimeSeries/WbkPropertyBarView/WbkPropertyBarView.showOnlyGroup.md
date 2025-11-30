# WbkPropertyBarView.showOnlyGroup

WbkPropertyBarView.showOnlyGroup
-


# WbkPropertyBarView.showOnlyGroup


## Синтаксис


showOnlyGroup(groups: [PP.TS.Ui.PropertyGroups](../../../Enums/PP.TS.Ui.PropertyGroups.htm));


## Параметры


groups. Идентификатор
 группы панели свойств.


## Описание


Метод showOnlyGroup отображает
 группу панели свойств по идентификатору и скрывает все остальные.


## Комментарии


Идентификаторы всех групп панели свойств содержатся в перечислении [PP.TS.Ui.PropertyGroups](../../../Enums/PP.TS.Ui.PropertyGroups.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), так же необходимо отображение всех
 представлений рабочей книги. Скроем все группы свойств, кроме основной:


// Получим панель свойств рабочей книги
propertyBarView = workbookBox.getPropertyBarView();
// Оставим основную группу панели свойств и скроем все остальные
propertyBarView.showOnlyGroup(PP.TS.Ui.PropertyGroups.Main);

В результате выполнения примера в панели свойств будет отображена только
 основная группа свойств.


См. также:


[WbkPropertyBarView](WbkPropertyBarView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
