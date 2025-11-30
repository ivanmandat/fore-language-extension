# MetabaseObjectsView.RootKey

MetabaseObjectsView.RootKey
-


# MetabaseObjectsView.RootKey


## Синтаксис


RootKey : Number;


## Описание


Свойство RootKey определяет
 корневой объект, объекты которого отображены в компоненте.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setRootKey,
 а возвращается с помощью метода getRootKey.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox.htm)
 с наименованием «navbox» (см. «[Пример
 создания компонента NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox_Example.htm)».


// Получим представление объектов
view = navbox.getObjectsView();
// Получим ключ корневого объекта
view.getRootKey();
В результате выполнения примера был получен ключ корневого объекта.


См. также:


[MetabaseObjectsView](MetabaseObjectsView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
