# MainMenu.DiscussItemSelected

MainMenu.DiscussItemSelected
-


# MainMenu.DiscussItemSelected


## Синтаксис


DiscussItemSelected: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие DiscussItemSelected
 наступает после выбора пункта меню «Обсудить».


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox_Example.htm)»). Получим главное меню:


// Получим экземпляр главного меню
rib = expressBox.getRibbonView();
menu = rib.getMainMenu();
// Добавим обработчики событий
menu.DiscussItemSelected.add(function(){
console.debug("Выбран пункт меню «обсудить»");
});
menu.ExportItemSelected.add(function(sender, args){
console.debug("Выбранный формат экспорта: " + args.format);
});
menu.ItemCreating.add(function(){
console.debug("Создается пункт меню...");
});
menu.ItemCreated.add(function(){
console.debug("Пункт меню создан");
});
После выполнения примера .


См. также:


[MainMenu](MainMenu.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
