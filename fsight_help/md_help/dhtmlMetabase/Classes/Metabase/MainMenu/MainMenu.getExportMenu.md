# MainMenu.getExportMenu

MainMenu.getExportMenu
-


# MainMenu.getExportMenu


## Синтаксис


getExportMenu(): PP.Mb.Ui.ExportMenu;


## Описание


Метод getExportMenu возвращает
 экземпляр всплывающего меню «Экпорт».


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox_Example.htm)»). Получим главное меню:


// Получим экземпляр главного меню
rib = expressBox.getRibbonView();
menu = rib.getMainMenu();
// Меню Экспорт
export = menu.getExportMenu();
// Отключим отображение пиктограмм в меню Экспорт
export.setShowIcons(false);
После выполнения примера всплывающее меню пункта «Экспорт» будет отображаться
 без пиктограмм.


См. также:


[MainMenu](MainMenu.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
