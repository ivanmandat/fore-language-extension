# AutoRefreshMenu.getMarkChangedItem

AutoRefreshMenu.getMarkChangedItem
-


# AutoRefreshMenu.getMarkChangedItem


## Синтаксис


getMarkChangedItem(): [PP.Ui.MenuItem](../MenuItem/MenuItem.htm);


## Описание


Метод getMarkChangedItem возвращает
 пункт меню, отвечающий за настройку автообновления при смене отметки.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox_Example.htm)»). Настроим ширину пунктов
 меню автообновления, установим заголовок окна настройки периода
 обновления:


// По шагам получим меню автообновления отчета
ribbonView = expressBox.getRibbonView();
control = ribbonView.getControl();
auReMenuControl = control.getControlById("MainAutoRefreshButton");
autoRefreshMenu = auReMenuControl.getMenu();
// Получим пункт меню «При смене отметки»
markChanged = autoRefreshMenu.getMarkChangedItem();
// Изменим ширину пункта меню
markChanged.setWidth(250);
// Получим пункт меню «Не использовать»
periodicalDisable = autoRefreshMenu.getPeriodicalDisableItem();
// Изменим ширину пункта меню
periodicalDisable.setWidth(250);
// Получим пункт меню, включающий периодическое обновление
periodicalInterval = autoRefreshMenu.getPeriodicalIntervalItem();
// Изменим ширину пункта меню
periodicalInterval.setWidth(250);
// Получим окно настройки периода обновления
periodicalDialog = autoRefreshMenu.getPeriodDialog();
// Установим заголовок окна
periodicalDialog.setCaption("Окно определения периода обновления");
В результате выполнения примера будет изменена ширина пунктов меню автообновления,
 после чего будет установлен заголовок окна настройки периода
 обновления.


См. также:


[AutoRefreshMenu](AutoRefreshMenu.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
