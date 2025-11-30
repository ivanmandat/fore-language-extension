# MetabaseObjectsView.getObjects

MetabaseObjectsView.getObjects
-


# MetabaseObjectsView.getObjects


## Синтаксис


getObjects();


## Описание


Метод getObjects возвращает
 все объекты репозитория.


## Комментарии


Метод возвращает массив объектов типа [PP.Mb.Object](../Object/Object.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox.htm)
 с наименованием «navbox» (см. «[Пример
 создания компонента NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox_Example.htm)»).


// Получим представление объектов
view = navbox.getObjectsView();
// Получим объекты репозитория
view.getObjects();
// -> [PP.Mb.Object, PP.Mb.Object, PP.Mb.Object ]
В результате выполнения примера были получены все объекты репозитория.


См. также:


[MetabaseObjectsView](MetabaseObjectsView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
