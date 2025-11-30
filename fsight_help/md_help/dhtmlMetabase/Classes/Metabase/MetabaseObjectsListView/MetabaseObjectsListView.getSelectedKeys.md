# MetabaseObjectsListView.getSelectedKeys

MetabaseObjectsListView.getSelectedKeys
-


# MetabaseObjectsListView.getSelectedKeys


## Синтаксис


getSelectedKeys();


## Описание


Метод getSelectedKeys возвращает
 массив ключей выделенных объектов.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [MetabaseObjectsListView](../../../Components/Metabase/MetabaseObjectsListView/MetabaseObjectsListView.htm)
 с наименованием «list» (см. «[Пример
 создания компонента MetabaseObjectsListView](../../../Components/Metabase/MetabaseObjectsListView/Example_MetabaseObjectsListView.htm)»).


// Выделим все объекты репозитория
list.selectAll();
// Получим ключи объектов
console.log(list.getSelectedKeys());
В результате выполнения примера в окно консоли были выведены ключи всех
 объектов.


См. также:


[MetabaseObjectsListView](MetabaseObjectsListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
