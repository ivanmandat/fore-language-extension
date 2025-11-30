# MainMenu.SharepointEnabled

MainMenu.SharepointEnabled
-


# MainMenu.SharepointEnabled


## Синтаксис


SharepointEnabled: Boolean ;


## Описание


Свойство SharepointEnabled определяет
 доступность пункта меню «Обсудить в SharePoint».


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setSharepointEnabled,
 а возвращается с помощью метода getSharepointEnabled.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox_Example.htm)»). Получим главное меню:


// Получим экземпляр главного меню
rib = expressBox.getRibbonView();
menu = rib.getMainMenu();
// Проверим доступность пункта меню «Обсудить в SharePoint»
console.debug(menu.getSharepointEnabled() ? "Пункт меню Обсудить доступен" : "Пункт меню Обсудить недоступен");
// Установим новый режим отображения пунктов меню
menu.setViewMode(PP.Mb.Ui.MainMenuViewMode.ReadOnly);
После выполнения примера в консоль была выведена информация о доступности
 пункта меню «Обсудить в SharePoint», режим отображения пунктов меню будет
 соответствовать режиму «Только чтение» - пункт меню сохранить будет недоступен.


См. также:


[MainMenu](MainMenu.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
