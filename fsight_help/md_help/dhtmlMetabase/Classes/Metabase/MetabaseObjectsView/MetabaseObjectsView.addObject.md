# MetabaseObjectsView.addObject

MetabaseObjectsView.addObject
-


# MetabaseObjectsView.addObject


## Синтаксис


addObject(object);


## Параметры


object. [PP.Mb.Object](../Object/Object.htm). Добавляемый
 объект.


## Описание


Метод addObject добавляет объект
 репозитория в компонент.


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
// Добавим удаленный объект
view.addObject(obj);
В результате выполнения примера был добавлен ранее удаленный объект.


См. также:


[MetabaseObjectsView](MetabaseObjectsView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
