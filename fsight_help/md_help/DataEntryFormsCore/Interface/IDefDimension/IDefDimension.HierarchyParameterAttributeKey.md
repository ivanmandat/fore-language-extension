# IDefDimension.HierarchyParameterAttributeKey

IDefDimension.HierarchyParameterAttributeKey
-


# IDefDimension.HierarchyParameterAttributeKey


## Синтаксис


HierarchyParameterAttributeKey: Integer;


## Описание


Свойство HierarchyParameterAttributeKey
 определяет ключ атрибута, значения которого используются для выбора альтернативной
 иерархии.


## Комментарии


Актуально, если свойству [HierarchyTypeSource](IDefDimension.HierarchyTypeSource.htm)
 установлено значение [AltHierarchySourceEnum.FromParam](../../Enums/AltHierarchySourceEnum.htm).
 В качестве значения свойства укажите ключ атрибута у справочника, на котором
 построен параметр [HierarchyParameterKey](../IDefParameter/IDefParameter.HierarchyParameterKey.htm).
 Атрибут должен возвращать ключи справочников, являющихся альтернативными
 иерархиями для справочника, лежащего в основе текущего измерения.


## Пример


Использование свойства приведено в примере для [IDefDimension.HierarchyParameterKey](IDefDimension.HierarchyParameterKey.htm).


См. также:


[IDefDimension](IDefDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
