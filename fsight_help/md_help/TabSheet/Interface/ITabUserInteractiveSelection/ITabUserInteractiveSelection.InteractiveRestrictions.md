# ITabUserInteractiveSelection.InteractiveRestrictions

ITabUserInteractiveSelection.InteractiveRestrictions
-


# ITabUserInteractiveSelection.InteractiveRestrictions


## Синтаксис


InteractiveRestrictions: [TabUserInteractiveSelectionChangeType](../../Enums/TabUserInteractiveSelectionChangeType.htm);


## Описание


Свойство InteractiveRestrictions
 определяет ограничения по возможности изменения границ интерактивного
 диапазона.


## Комментарии


По умолчанию свойству установлено значение [TabUserInteractiveSelectionChangeType.None](../../Enums/TabUserInteractiveSelectionChangeType.htm),
 при этом отсутствуют какие-либо ограничения по изменению границ интерактивного
 диапазона. В качестве значения свойства InteractiveRestrictions
 можно указать какое-либо одно значение или комбинацию значений из элементов
 перечисления [TabUserInteractiveSelectionChangeType](../../Enums/TabUserInteractiveSelectionChangeType.htm).
 Значения в комбинации разделяются ключевым словом Or.
 Если свойство задано, то при работе в таблице с интерактивным диапазоном
 для него будут наложены соответствующие ограничения.


## Пример


Пример использования приведён в описании метода [ITabUserInteractiveSelections.Add](../ITabUserInteractiveSelections/ITabUserInteractiveSelections.Add.htm).


См. также:


[ITabUserInteractiveSelection](ITabUserInteractiveSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
