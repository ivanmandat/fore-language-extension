# MetabaseObjectsView.getAllNodesLoaded

MetabaseObjectsView.getAllNodesLoaded
-


# MetabaseObjectsView.getAllNodesLoaded


## Синтаксис


getAllNodesLoaded() : Boolean;


## Описание


Метод getAllNodesLoaded возвращает
 признак загрузки всех вершин.


## Комментарии


Метод вернет значение True,
 если все вершины были загружены.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox.htm)
 с наименованием «navbox» (см. «[Пример
 создания компонента NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox_Example.htm)»).


// Получим представление объектов
view = navbox.getObjectsView();
// Получим признак загрузки всех вершин
console.log(view.getAllNodesLoaded() ? "Вершины загружены" : "Вершины не загружены");
В результате выполнения примера был получен признак загрузки всех вершин.


См. также:


[MetabaseObjectsView](MetabaseObjectsView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
