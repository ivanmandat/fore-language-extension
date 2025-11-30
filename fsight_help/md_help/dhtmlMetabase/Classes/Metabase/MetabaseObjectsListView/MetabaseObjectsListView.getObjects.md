# MetabaseObjectsListView.getObjects

MetabaseObjectsListView.getObjects
-


# MetabaseObjectsListView.getObjects


## Синтаксис


getObjects();


## Описание


Метод getObjects возвращает
 все объекты репозитория.


## Комментарии


Метод возвращает массив объектов типа [PP.Mb.Object](../Object/Object.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [MetabaseObjectsListView](../../../Components/Metabase/MetabaseObjectsListView/MetabaseObjectsListView.htm)
 с наименованием «list» (см. «[Пример
 создания компонента MetabaseObjectsListView](../../../Components/Metabase/MetabaseObjectsListView/Example_MetabaseObjectsListView.htm)»).


// Получим объекты репозитория
list.getObjects();
// -> [PP.Mb.Object, PP.Mb.Object, PP.Mb.Object ]
В результате выполнения примера в консоль были выведены все объекты
 репозитория.


См. также:


[MetabaseObjectsListView](MetabaseObjectsListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
