# TreeListBase.SelectionMode

TreeListBase.SelectionMode
-


# TreeListBase.SelectionMode


## Синтаксис


SelectionMode: PP.Ui.TreeListSelectionMode;


## Описание


Свойство SelectionMode определяет
 режим выделения.


## Комментарии


Значение по умолчанию PP.Ui.TreeListSelectionMode.MultiSelect.


Значение свойства устанавливается с помощью метода setSelectionMode(value,
 fireEvents), а возвращается с помощью метода getSelectionMode().


Параметры:


value. PP.Ui.TreeListSelectionMode.
 Значение;


fireEvents. Boolean. Определяет,
 нужно ли генерировать событие изменения значения. Boolean. По умолчанию
 true.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Установим режим выделения
Tree.setSelectionMode(PP.Ui.TreeListSelectionMode.SingleSelect);
В результате выполнения примера будет установлен одиночный режим выделения.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
