# MetabaseObjectsView.editObject

MetabaseObjectsView.editObject
-


# MetabaseObjectsView.editObject


## Синтаксис


editObject(key);


## Параметры


key. Number. Ключ объекта.


## Описание


Метод editObject включает режим
 редактирования для объекта.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox.htm)
 с наименованием «navbox» (см. «[Пример
 создания компонента NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox_Example.htm)»).


// Получим представление объектов
view = navbox.getObjectsView();
// Получим ключ объекта
obj = view.getFocusedObject();
key = obj.getKey();
// Включим для объекта режим редактирования
view.editObject(key);
В результате выполнения примера для выбранного объекта был включен режим
 редактирования.


См. также:


[MetabaseObjectsView](MetabaseObjectsView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
