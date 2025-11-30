# MetabaseObjectsView.SelectedKeys

MetabaseObjectsView.SelectedKeys
-


# MetabaseObjectsView.SelectedKeys


## Синтаксис


SelectedKeys : Array of Number;


## Описание


Свойство SelectedKeys содержит
 массив ключей выделенных объектов.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setSelectedKeys,
 а возвращается с помощью метода getSelectedKeys.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox.htm)
 с наименованием «navbox» (см. «[Пример
 создания компонента NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox_Example.htm)».


// Получим представление объектов
view = navbox.getObjectsView();
// Получим ключи выделенных объектов
view.getSelectedKeys();
// -> [16146, 20240]
В результате выполнения примера были получены ключи выделенных объектов.


См. также:


[MetabaseObjectsView](MetabaseObjectsView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
