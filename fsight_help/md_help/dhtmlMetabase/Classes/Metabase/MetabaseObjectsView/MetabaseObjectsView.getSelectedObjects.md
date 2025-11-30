# MetabaseObjectsView.getSelectedObjects

MetabaseObjectsView.getSelectedObjects
-


# MetabaseObjectsView.getSelectedObjects


## Синтаксис


getSelectedObjects();


## Описание


Метод getSelectedObjects возвращает
 выделенные объекты репозитория.


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
view.getSelectedObjects();
// -> [PP.Mb.Object, PP.Mb.Object, PP.Mb.Object ]
В результате выполнения примера были получены выделенные объекты репозитория.


См. также:


[MetabaseObjectsView](MetabaseObjectsView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
