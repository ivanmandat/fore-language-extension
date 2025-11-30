# Menu.removeItem

Menu.removeItem
-


# Menu.removeItem


## Синтаксис


removeItem (item: PP.Ui.[MenuItem](../MenuItem/MenuItem.htm), withDispose)


## Параметры


item. [Элемент меню](../MenuItem/MenuItem.htm), который необходимо удалить;


withDispose. Определяет, будет ли элемент меню уничтожен (true) или удален и [списка элементов](Menu.Items.htm) (false).


## Описание


Метод removeItem удаляет элемент меню.


## Пример


Для выполнения примера предполагается наличие на странице компонента [Menu](../../Components/Menu/Menu.htm) с наименованием «menu1» (см. [Menu.ImageList](Menu.ImageList.htm)). Для одного из элементов меню установлен идентификатор «itemWithHotKey». Удалим этот элемент:


removeItem(menu1.getMenuItemById("itemWithHotKey"));


См. также:


[Menu](Menu.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
