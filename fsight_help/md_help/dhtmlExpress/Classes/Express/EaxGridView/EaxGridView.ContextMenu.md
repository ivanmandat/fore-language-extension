# EaxGridView.ContextMenu

EaxGridView.ContextMenu
-


**


# EaxGridView.ContextMenu


## Синтаксис


ContextMenu: PP.Ui.[Menu](dhtmlUi.chm::/Classes/menu/menu.htm)


## Описание


Свойство ContextMenu**
 устанавливает контекстное меню для таблицы.


## Комментарии


Значение свойства **ContextMenu**
 задается при помощи метода setContextMenu
 и возвращается при помощи метода getContextMenu.
 Из JSON значение свойства задать нельзя


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 EaxGrid с наименованием «eaxGrid»
 (см. «[Пример
 создания компонента EaxGrid](../../../Components/Express/EaxGrid/EaxGrid_Example.htm)»). Далее установим контекстное меню для
 таблицы:


// Создаем простейшее меню
var menu = new PP.Ui.Menu({
    ParentNode: null,
    ShowIcons: true,
});
// Добавляем пункт в меню
menu.addItem(new PP.Ui.MenuItem({
    ResourceKey: "eStatistics",
    Data: PP.Exp.Ui.GridDefaultCMenu.Statistics
}));
// Установим контекстное меню для таблицы
eaxGrid.setContextMenu(menu);

В результате выполнения данного примера для таблицы будет установлено
 контекстное меню.


См. также:


[EaxGridView](EaxGridView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
