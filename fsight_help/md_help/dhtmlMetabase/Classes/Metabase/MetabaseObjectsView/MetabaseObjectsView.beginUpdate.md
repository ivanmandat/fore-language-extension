# MetabaseObjectsView.beginUpdate

MetabaseObjectsView.beginUpdate
-


# MetabaseObjectsView.beginUpdate


## Синтаксис


beginUpdate();


## Описание


Метод beginUpdate отключает
 перерисовку компонента, используемого для отображения объектов.


## Комментарии


Для возобновления перерисовки компонента используйте метод [MetabaseObjectsView.endUpdate](MetabaseObjectsView.endUpdate.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox.htm)
 с наименованием «navbox» (см. «[Пример
 создания компонента NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox_Example.htm)»).


// Получим представление объектов
view = navbox.getObjectsView();
// Отключим перерисовку дерева
view.beginUpdate();
// Удалим из списка выделенный объект
obj = view.getFocusedObject();
view.deleteObject(obj.getKey());
Возобновим перерисовку дерева:


// Возобновим перерисовку дерева
view.endUpdate();
В результате выполнения примера удаление объекта из списка произошло
 только после выполнения метода [endUpdate](MetabaseObjectsView.endUpdate.htm).


См. также:


[MetabaseObjectsView](MetabaseObjectsView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
