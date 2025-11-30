# AutoRefreshMenu.ViewerUpdateSettings

AutoRefreshMenu.ViewerUpdateSettings
-


# AutoRefreshMenu.ViewerUpdateSettings


## Синтаксис


ViewerUpdateSettings: object;


## Описание


Свойство ViewerUpdateSettings
 определяет параметры автообновления.


## Комментарии


Значение свойства устанавливается с помощью метода setViewerUpdateSettings,
 а возвращается с помощью метода getViewerUpdateSettings.
 Из JSON значение свойства установить нельзя.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox_Example.htm)»). Изменим период автообновления
 отчета:


// По шагам получим меню автообновления отчета
ribbonView = expressBox.getRibbonView();
control = ribbonView.getControl();
auReMenuControl = control.getControlById("MainAutoRefreshButton");
autoRefreshMenu = auReMenuControl.getMenu();
// Получим параметры автообновления
updSettings = autoRefreshMenu.getViewerUpdateSettings()
// -> Object {updateByIntervalEnabled: false, autoUpdateByData: false, AutoUpdateInterval: 5, autoUpdateIntervalUnits: "Seconds"}
// Изменим период автообновления отчета
updSettings.AutoUpdateInterval = 2
// Применим новые настройки
autoRefreshMenu.setViewerUpdateSettings(updSettings)
В результате выполнения примера будет изменен период автообновления
 отчета.


См. также:


[AutoRefreshMenu](AutoRefreshMenu.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
