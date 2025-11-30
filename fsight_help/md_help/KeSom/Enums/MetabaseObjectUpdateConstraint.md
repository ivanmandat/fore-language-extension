# MetabaseObjectUpdateConstraint

MetabaseObjectUpdateConstraint
-


# MetabaseObjectUpdateConstraint


## Описание


Перечисление MetabaseObjectUpdateConstraint определяет способ обновления объектов.


Используется следующими свойствами и методами:


-
[IMetabaseUpdate.Constraint](../Interface/IMetabaseUpdate/IMetabaseUpdate.Constraint.htm);


-
[IMetabaseUpdateObjectNode.Constraint](../Interface/IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.Constraint.htm).


## Комментарии


Inherit. Способ обновления для всего обновления определяется свойством [IMetabaseUpdate.Constraint](../Interface/IMetabaseUpdate/IMetabaseUpdate.Constraint.htm).


MetabaseObjectUpdateConstraint и [MetabaseObjectUpdateBoundType](MetabaseObjectUpdateBoundType.htm) следует использовать вместо [MetabaseObjectUpdateType](MetabaseObjectUpdateType.htm).


## Допустимые значения


 Значение
 Краткое описание


 0
 None. Создавать новые и обновлять существующие объекты.


 1
 CreateOnly. Всегда создавать новые объекты.


 2
 UpdateOnly. Только обновлять объекты.


 3
 Inherit. Обновление объекта будет производиться способом, указанным для всего обновления.


См. также:


[Перечисления сборки Metabase](KeSom_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
