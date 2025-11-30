# IActionItem.GroupIndex

IActionItem.GroupIndex
-


# IActionItem.GroupIndex


## Синтаксис


GroupIndex: Integer;


## Описание


Свойство GroupIndex задает индекс
 группы, в которую входит данное действие.


## Комментарии


Свойство GroupIndex используется
 для создания группы действий, работающих по принципам переключателей.


Для создания группы у соответствующих действий установите свойству [IMenuItem.RadioItem](../IMenuItem/IMenuItem.RadioItem.htm)
 значение True и задайте одинаковое
 значение свойства GroupIndex.
 Выбор пользователем одного из элементов, связанных с действиями входящими
 в одну группу, будет снимать выделение с остальных элементов.


Для действий, объединенных в группу, также может быть актуальна установка
 свойству [IActionItem.AutoCheck](IActionItem.AutoCheck.htm)
 значения True.


По умолчанию свойству GroupIndex
 установлено значение 0, при этом действие не входит в группу.


Примечание.
 В «Форсайт. Аналитическая платформа»
 организация групп поддерживается только для действий, связанных с пунктами
 [главного
 меню](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/MainMenu.htm), либо с пунктами [контекстного
 меню](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/PopupMenu.htm).


См.
 также:


[IActionItem](IActionItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
