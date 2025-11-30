# MetabaseObjectsView.CustomClasses

MetabaseObjectsView.CustomClasses
-


# MetabaseObjectsView.CustomClasses


## Синтаксис


CustomClasses : Array;


## Описание


Свойство CustomClasses содержит
 массив пользовательских классов объектов.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setCustomClasses,
 а возвращается с помощью метода getCustomClasses.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox.htm)
 с наименованием «navbox» (см. «[Пример
 создания компонента NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox_Example.htm)»).


// Получим представление объектов
view = navbox.getObjectsView();
// Получим текущие пользовательские классы
console.log(view.getCustomClasses());
// Получим выделенный объект
obj = view.getFocusedObject();
// Проверим, является ли выделенный объект экземпляром пользовательского класса
console.log(view.getCustomClassObject(obj));
В результате выполнения примера в консоль были выведены пользовательские
 классы и был получен пользовательский класс выделенного объекта.


См. также:


[MetabaseObjectsView](MetabaseObjectsView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
