# TreeList.EnableKeyNavigation

TreeList.EnableKeyNavigation
-


# TreeList.EnableKeyNavigation


## Синтаксис


EnableKeyNavigation: Boolean


## Описание


Свойство EnableKeyNavigation определяет возможность перемещения по списку при помощи клавиатуры.


## Комментарии


Если для свойства установлено значение true, доступен выбор элементов списка при помощи клавиатуры. Если установлено значение false, выбирать элемент списка можно только при помощи мыши.


По умолчанию установлено значение true.


## Пример


Для выполнения примера [создайте компонент TreeList](../../Components/TreeList/TreeList_example.htm) с наименованием «treeListSett».


Значение свойства можно установить через JSON-объект:


EnableKeyNavigation: false


или на уровне API:


treeListSett.setEnableKeyNavigation(false);


После выполнения примера будет недоступен выбор элемента при помощи клавиатуры.


См. также:


[TreeList](TreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
