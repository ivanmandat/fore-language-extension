# WbkPropertyBarView.showGroup

WbkPropertyBarView.showGroup
-


# WbkPropertyBarView.showGroup


## Синтаксис


showGroup(groups: [PP.TS.Ui.PropertyGroups](../../../Enums/PP.TS.Ui.PropertyGroups.htm));


## Параметры


groups. Идентификатор
 группы панели свойств.


## Описание


Метод showGroup отображает группу
 панели свойств по идентификатору.


## Комментарии


Идентификаторы всех групп панели свойств содержатся в перечислении [PP.TS.Ui.PropertyGroups](../../../Enums/PP.TS.Ui.PropertyGroups.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), так же необходимо отображение всех
 представлений рабочей книги. Отобразим основную группу панели свойств:


// Получим панель свойств рабочей книги
propertyBarView = workbookBox.getPropertyBarView();
// Скроем все мастера
propertyBarView.hideAllMasters();
// Отобразим основную группу панели свойств
propertyBarView.showGroup(PP.TS.Ui.PropertyGroups.Main);

В результате выполнения примера в панели свойств будет отображена основная
 группа свойств.


См. также:


[WbkPropertyBarView](WbkPropertyBarView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
