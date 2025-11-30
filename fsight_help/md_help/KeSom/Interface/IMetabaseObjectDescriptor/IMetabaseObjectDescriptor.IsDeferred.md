# IMetabaseObjectDescriptor.IsDeferred

IMetabaseObjectDescriptor.IsDeferred
-


# IMetabaseObjectDescriptor.IsDeferred


## Синтаксис


		IsDeferred: Boolean;


## Описание


Свойство IsDeferred возвращает
 признак отложенной загрузки описания объекта.


## Комментарии


Описания объектов, для которых данному свойству установлено значение
 True, не загружаются при входе
 в репозиторий. Сами объекты не отображаются в навигаторе объектов. Для
 получения описания таких объектов вместо свойств [IMetabaseObjectDescriptor.Children](IMetabaseObjectDescriptor.Children.htm),
 [IMetabaseObjectDescriptor.Dependencies](IMetabaseObjectDescriptor.Dependencies.htm), [IMetabaseObjectDescriptor.Dependents](IMetabaseObjectDescriptor.Dependents.htm)
 необходимо использовать методы [IMetabaseObjectDescriptor.FetchChildren](IMetabaseObjectDescriptor.FetchChildren.htm),
 [IMetabaseObjectDescriptor.FetchDependencies](IMetabaseObjectDescriptor.FetchDependencies.htm)
 и [IMetabaseObjectDescriptor.FetchDependents](IMetabaseObjectDescriptor.FetchDependents.htm)
 соответственно.


К объектам с отложенной загрузкой описания относятся внутренние модели
 контейнера моделирования.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
