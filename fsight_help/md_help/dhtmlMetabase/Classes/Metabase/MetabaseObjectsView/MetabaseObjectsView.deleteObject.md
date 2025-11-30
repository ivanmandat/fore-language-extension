# MetabaseObjectsView.deleteObject

MetabaseObjectsView.deleteObject
-


# MetabaseObjectsView.deleteObject


## Синтаксис


deleteObject(key);


## Параметры


key. Number. Ключ объекта.


## Описание


Метод addObject удаляет объект
 из списка отображения.


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
// Удалим из списка выбранный объект
view.deleteObject(key);
В результате выполнения примера выбранный объект был удален из списка.


См. также:


[MetabaseObjectsView](MetabaseObjectsView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
