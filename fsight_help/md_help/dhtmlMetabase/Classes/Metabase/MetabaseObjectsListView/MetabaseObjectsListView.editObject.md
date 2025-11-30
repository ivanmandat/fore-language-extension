# MetabaseObjectsListView.editObject

MetabaseObjectsListView.editObject
-


# MetabaseObjectsListView.editObject


## Синтаксис


editObject(key);


## Параметры


key. Ключ объекта.


## Описание


Метод editObject включает режим
 редактирования для объекта.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [MetabaseObjectsListView](../../../Components/Metabase/MetabaseObjectsListView/MetabaseObjectsListView.htm)
 с наименованием «list» (см. «[Пример
 создания компонента MetabaseObjectsListView](../../../Components/Metabase/MetabaseObjectsListView/Example_MetabaseObjectsListView.htm)»).


// Получим ключ указанного объекта
obj = list.getFocusedObject();
key = obj.getKey();
// Включим для объекта режим редактирования
list.editObject(key);
В результате выполнения примера для выбранного объекта был включен режим
 редактирования.


См. также:


[MetabaseObjectsListView](MetabaseObjectsListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
