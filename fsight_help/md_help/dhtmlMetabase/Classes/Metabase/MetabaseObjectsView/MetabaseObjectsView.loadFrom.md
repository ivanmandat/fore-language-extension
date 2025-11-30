# MetabaseObjectsView.loadFrom

MetabaseObjectsView.loadFrom
-


# MetabaseObjectsView.loadFrom


## Синтаксис


loadFrom(objects);


## Параметры


objects. Array of [PP.Mb.Object](../Object/Object.htm).
 Массив объектов репозитория.


## Описание


Метод loadFrom очищает компонент
 и загружает только указанные объекты.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox.htm)
 с наименованием «navbox» (см. «[Пример
 создания компонента NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox_Example.htm)»).


// Получим представление объектов
view = navbox.getObjectsView();
// Выделим мышкой несколько объектов и оставим видимыми только их
view.loadFrom(view.getSelectedObjects());
В результате выполнения примера были оставлены только выделенные объекты.


См. также:


[MetabaseObjectsView](MetabaseObjectsView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
