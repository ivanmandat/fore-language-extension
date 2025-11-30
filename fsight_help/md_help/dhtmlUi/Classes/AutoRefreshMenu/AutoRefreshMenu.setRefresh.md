# AutoRefreshMenu.setRefresh

AutoRefreshMenu.setRefresh
-


# AutoRefreshMenu.setRefresh


## Синтаксис


setRefresh(markChanged: Boolean, periodical: Boolean);


## Параметры


markChanged. Параметр определяет,
 включить (true) или отключить
 (false) автообновление при смене
 отметки;


periodical. Параметр определяет,
 включить (true) или отключить
 (false) периодическое обновление.


## Описание


Метод setRefresh включает/отключает
 автообновление при смене отметки и периодическое обновление.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox_Example.htm)»). Отключим автообновление
 при смене отметки, включим периодическое обновление отчета:


// По шагам получим меню автообновления отчета
ribbonView = expressBox.getRibbonView();
control = ribbonView.getControl();
auReMenuControl = control.getControlById("MainAutoRefreshButton");
autoRefreshMenu = auReMenuControl.getMenu();
// Отключим автообновление при смене отметки, запустим периодическое обновление отчета
autoRefreshMenu.setRefresh(false, true);
В результате выполнения примера будет отключено автообновление при смене
 отметки и включено периодическое обновление отчета.


См. также:


[AutoRefreshMenu](AutoRefreshMenu.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
