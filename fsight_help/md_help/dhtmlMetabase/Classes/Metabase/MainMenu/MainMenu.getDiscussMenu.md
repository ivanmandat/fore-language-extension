# MainMenu.getDiscussMenu

MainMenu.getDiscussMenu
-


# MainMenu.getDiscussMenu


## Синтаксис


getDiscussMenu(): [PP.Ui.DiscussMenu](dhtmlUi.chm::/Classes/DiscussMenu/DiscussMenu.htm)
 ;


## Описание


Метод getDiscussMenu возвращает
 экземпляр всплывающего меню «Поделиться».


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox_Example.htm)»). Проверим наличие
 пункта меню «Поделиться»:


// Получим экземпляр главного меню
rib = expressBox.getRibbonView();
menu = rib.getMainMenu();
// Проверим наличие меню «Поделиться»
console.debug(menu.getDiscussMenu() ? "Пункт меню Поделиться доступен" : "Пункт меню Поделиться недоступен" );
После выполнения примера в консоль было выведено сообщение, в зависимости
 от наличия кнопки «Поделиться».


См. также:


[MainMenu](MainMenu.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
