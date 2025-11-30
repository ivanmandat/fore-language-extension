# IMetabaseUpdate.Constraint

IMetabaseUpdate.Constraint
-


# IMetabaseUpdate.Constraint


## Синтаксис


Constraint: [MetabaseObjectUpdateConstraint](../../Enums/MetabaseObjectUpdateConstraint.htm);


## Описание


Свойство Constraint определяет
 способ обновления объектов репозитория.


## Комментарии


Установленное значение будет использоваться для всех объектов, способ
 обновления которых не выставлен явно, т.е. [IMetabaseUpdateObjectNode.Constraint](../IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.Constraint.htm)
 = MetabaseObjectUpdateConstraint.Inherit.


Constraint и [IMetabaseUpdate.BoundType](IMetabaseUpdate.BoundType.htm)
 следует использовать вместо свойства [IMetabaseUpdate.UpdateType](IMetabaseUpdate.UpdateType.htm).


## Пример


Использование свойства приведено в примере для [IMetabaseUpdate.BoundType](IMetabaseUpdate.BoundType.htm).


См. также:


[IMetabaseUpdate](IMetabaseUpdate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
