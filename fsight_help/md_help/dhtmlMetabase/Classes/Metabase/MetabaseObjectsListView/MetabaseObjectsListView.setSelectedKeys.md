# MetabaseObjectsListView.setSelectedKeys

MetabaseObjectsListView.setSelectedKeys
-


# MetabaseObjectsListView.setSelectedKeys


## Синтаксис


setSelectedKeys(keys: Array, fireEvent: Boolean,
 clearSelection: Boolean);


## Параметры


keys. Массив ключей объектов
 репозитория.


fireEvent. Генерация события
 на выделение. По умолчанию - true.


clearSelection. Снятие старого
 выделения. По умолчанию - true.


## Описание


Метод setSelectedKeys устанавливает
 массив ключей объектов, которые надо выделить.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [MetabaseObjectsListView](../../../Components/Metabase/MetabaseObjectsListView/MetabaseObjectsListView.htm)
 с наименованием «list» (см. «[Пример
 создания компонента MetabaseObjectsListView](../../../Components/Metabase/MetabaseObjectsListView/Example_MetabaseObjectsListView.htm)»). В репозитории должны
 быть объекты с ключами 66744,67035,66815.


// Выделим объекты с заданными ключами
list.setSelectedKeys([66744,67035,66815]);
// Оставим только выделенные объекты
list.loadFrom(list.getSelectedObjects());
В результате выполнения примера остались объекты с заданным ключом.


См. также:


[MetabaseObjectsListView](MetabaseObjectsListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
