# Menu.clearCheckedByGroupName

Menu.clearCheckedByGroupName
-


# Menu.clearCheckedByGroupName


## Синтаксис


clearCheckedByGroupName (groupName)


## Параметры


groupName. [Имя группы](../MenuItem/MenuItem.GroupName.htm).


## Описание


Метод clearCheckedByGroupName сбрасывает отметку с элементов меню по имени группы.


## Комментарии


Имя группы определяется в свойстве [MenuItem.GroupName](../MenuItem/MenuItem.GroupName.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента [Menu](../../Components/Menu/Menu.htm) с наименованием «menu» (см. «[Пример создания компонента Menu](../../Components/Menu/Menu_example.htm)»). Необходимо, чтобы для нескольких элементов меню было определено одно [имя группы](../MenuItem/MenuItem.GroupName.htm) - «gr1». При выборе одного из элементов меню с этим именем группы слева будет появляться [переключатель](../../Components/RadioButton/RadioButton.htm). Чтобы снять отметку с выбранного пункта меню, используйте метод clearCheckedByGroupName:


clearCheckedByGroupName ("gr1");


См. также:


[Menu](Menu.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
