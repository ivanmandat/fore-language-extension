# NavigatorBox.SelectedKeys

NavigatorBox.SelectedKeys
-


# NavigatorBox.SelectedKeys


## Синтаксис


SelectedKeys: Array;


## Описание


Свойство SelectedKeys устанавливает
 массив ключей отмеченных объектов.


## Комментарии


Свойство возвращается при помощи метода getSelectedKeys()
 и возвращает массив экземпляров класса PP.Mb.[Object](dhtmlCommon.chm::/Classes/object/object.htm).


Свойство задается при помощи метода setSelectedKeys(objectKeys,
 fireEvent, clearSelection ).


Параметры:


objectKeys.
 Array. Массив ключей объектов, которые необходимо выделить в дереве навигатора;


fireEvent.
 Boolean. Определяет, будет ли при выполнении метода генерироваться событие
 ObjectListSelectionChanged: true - будет сгенерировано, false - не будет сгенерировано;


clearSelection.
 Boolean. Определяет, будет ли очищено старое выделение: true
 - будет очищено, false - останется.


## Пример


Пример использования аналогичен примеру для свойства [MetabaseTreeList.SelectedKeys](../MetabaseTreeList/MetabaseTreeList.SelectedKeys.htm).


См. также:


[NavigatorBox](NavigatorBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
