# MetabaseObjectsView.Metabase

MetabaseObjectsView.Metabase
-


# MetabaseObjectsView.Metabase


## Синтаксис


Metabase: [PP.Mb.Metabase](../Metabase/Metabase.htm);


## Описание


Свойство Metabase определяет
 репозиторий, предоставляющий данные компоненту.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setMetabase,
 а возвращается с помощью метода getMetabase.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox.htm)
 с наименованием «navbox» (см. «[Пример
 создания компонента NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox_Example.htm)».


// Получим представление объектов
view = navbox.getObjectsView();
// Получим экземпляр репозитория
view.getMetabase();
// -> PP.Mb.Metabase {_Events: Object, _typeName: "PP.Mb.Metabase", Closed: PP.Delegate, Refreshed: PP.Delegate, Opened: PP.Delegate…}
В результате выполнения примера был получен экземпляр репозитория.


См. также:


[MetabaseObjectsView](MetabaseObjectsView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
