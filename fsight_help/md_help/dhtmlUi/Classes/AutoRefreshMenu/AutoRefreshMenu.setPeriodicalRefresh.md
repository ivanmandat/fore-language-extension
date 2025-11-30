# AutoRefreshMenu.setPeriodicalRefresh

AutoRefreshMenu.setPeriodicalRefresh
-


# AutoRefreshMenu.setPeriodicalRefresh


## Синтаксис


setPeriodicalRefresh(value: Boolean);


## Параметры


value. Параметр определяет,
 включить (true) или отключить
 (false) периодическое обновление.


## Описание


Метод setPeriodicalRefresh включает/отключает
 периодическое обновление.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox_Example.htm)»). Включим периодическое
 обновление отчета:


// По шагам получим меню автообновления отчета
ribbonView = expressBox.getRibbonView();
control = ribbonView.getControl();
auReMenuControl = control.getControlById("MainAutoRefreshButton");
autoRefreshMenu = auReMenuControl.getMenu();
// Запустим периодическое обновление отчета
autoRefreshMenu.setPeriodicalRefresh(true);
В результате выполнения примера будет включено периодическое обновление
 отчета.


См. также:


[AutoRefreshMenu](AutoRefreshMenu.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
