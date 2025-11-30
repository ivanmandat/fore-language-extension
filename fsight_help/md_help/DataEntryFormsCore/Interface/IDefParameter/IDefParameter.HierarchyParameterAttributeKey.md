# IDefParameter.HierarchyParameterAttributeKey

IDefParameter.HierarchyParameterAttributeKey
-


# IDefParameter.HierarchyParameterAttributeKey


## Синтаксис


HierarchyParameterAttributeKey: Integer;


## Описание


Свойство HierarchyParameterAttributeKey
 определяет ключ атрибута, значения которого используются для выбора альтернативной
 иерархии.


## Комментарии


Актуально, если свойству [HierarchyTypeSource](IDefParameter.HierarchyTypeSource.htm)
 установлено значение [AltHierarchySourceEnum.FromParam](../../Enums/AltHierarchySourceEnum.htm).
 В качестве значения свойства укажите ключ атрибута у справочника, на котором
 построен параметр [HierarchyParameterKey](IDefParameter.HierarchyParameterKey.htm).
 Атрибут должен возвращать ключи справочников, являющихся альтернативными
 иерархиями для справочника [Dictionary](IDefParameter.Dictionary.htm).


## Пример


Использование свойства приведено в примере для [IDefParameter.HierarchyParameterKey](IDefParameter.HierarchyParameterKey.htm).


См. также:


[IDefParameter](IDefParameter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
