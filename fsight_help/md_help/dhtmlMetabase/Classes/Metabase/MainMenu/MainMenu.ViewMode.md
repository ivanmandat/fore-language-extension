# MainMenu.ViewMode

MainMenu.ViewMode
-


# MainMenu.ViewMode


## Синтаксис


ViewMode: PP.Mb.Ui.MainMenuViewMode;


## Описание


Свойство ViewMode определяет
 доступность пунктов меню.


## Комментарии


По умолчанию содержит значение PP.Mb.Ui.MainMenuViewMode.Default - все
 пункты меню доступны.


Значение свойства устанавливается из JSON и с помощью метода setViewMode,
 а возвращается с помощью метода getViewMode.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox_Example.htm)»). Получим раскрывающееся
 меню:


// Получим экземпляр главного меню
rib = expressBox.getRibbonView();
menu = rib.getMainMenu();
//
После выполнения примера .


См. также:


[MainMenu](MainMenu.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
