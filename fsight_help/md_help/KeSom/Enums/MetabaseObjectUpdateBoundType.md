# MetabaseObjectUpdateBoundType

MetabaseObjectUpdateBoundType
-


# MetabaseObjectUpdateBoundType


## Описание


Перечисление MetabaseObjectUpdateBoundType определяет тип обновления объектов.


Используется следующими свойствами и методами:


-
[IMetabaseUpdate.BoundType](../Interface/IMetabaseUpdate/IMetabaseUpdate.BoundType.htm);


-
[IMetabaseUpdateObjectNode.BoundType](../Interface/IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.BoundType.htm).


## Комментарии


None. Значение используется только для объекта репликации.


Inherit. Тип обновления для всего обновления определяется свойством [IMetabaseUpdate.BoundType](../Interface/IMetabaseUpdate/IMetabaseUpdate.BoundType.htm).


MetabaseObjectUpdateBoundType и [MetabaseObjectUpdateConstraint](MetabaseObjectUpdateConstraint.htm) следует использовать вместо [MetabaseObjectUpdateType](MetabaseObjectUpdateType.htm).


## Допустимые значения


 Значение
 Краткое описание


 0
 None. Тип обновления не задан.


 1
 ByKey. Обновление объектов по ключам.


 2
 ById. Обновление объектов по идентификаторам.


 3
 Inherit. Обновление объекта будет производиться так, как указано для всего обновления.


См. также:


[Перечисления сборки Metabase](KeSom_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
