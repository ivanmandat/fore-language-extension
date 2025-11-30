# MetabaseObjectsView.clear

MetabaseObjectsView.clear
-


# MetabaseObjectsView.clear


## Синтаксис


clear();


## Описание


Метод clear очищает список от
 всех объектов.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox.htm)
 с наименованием «navbox» (см. «[Пример
 создания компонента NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox_Example.htm)»).


// Получим представление объектов
view = navbox.getObjectsView();
// Очистим список объектов
view.clear();
В результате выполнения примера был очищен текущий список объектов.


См. также:


[MetabaseObjectsView](MetabaseObjectsView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
