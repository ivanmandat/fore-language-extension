# IActionList.RemoveAction

IActionList.RemoveAction
-


# IActionList.RemoveAction


## Синтаксис


RemoveAction(Action: [IActionItem](../IActionItem/IActionItem.htm));


## Параметры


Action. Действие, которое необходимо
 удалить из списка действий данного компонента.


## Описание


Метод RemoveAction осуществляет
 удаление указанного действия из списка действий данного компонента.


## Комментарии


После удаления действия из коллекции оно все равно остается доступным
 для использования. Для повторного использования действия необходимо его
 добавить в коллекцию какого-либо компонента [ActionList](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/ActionList.htm)
 с помощью метода [IActionList.AddAction](IActionList.AddAction.htm).


См.также:


[IActionList](IActionList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
