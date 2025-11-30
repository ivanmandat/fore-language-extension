# MetabaseObjectsListView.getClassName

MetabaseObjectsListView.getClassName
-


# MetabaseObjectsListView.getClassName


## Синтаксис


getClassName(obj);


## Параметры


obj. Объект репозитория.


## Описание


Метод getClassName возвращает
 наименование класса объекта репозитория.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [MetabaseObjectsListView](../../../Components/Metabase/MetabaseObjectsListView/MetabaseObjectsListView.htm)
 с наименованием «list» (см. «[Пример
 создания компонента MetabaseObjectsListView](../../../Components/Metabase/MetabaseObjectsListView/Example_MetabaseObjectsListView.htm)»). В репозитории должен
 быть объект с ключом 65737.


// Выделим объект с ключом 65737
list.setSelectedKeys(65737);
// Выведем в консоль наименование класса объекта
obj = list.getFocusedObject();
console.log(list.getClassName(obj));
В результате выполнения примера в окно консоли было выведено наименование
 класса заданного объекта.


См. также:


[MetabaseObjectsListView](MetabaseObjectsListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
