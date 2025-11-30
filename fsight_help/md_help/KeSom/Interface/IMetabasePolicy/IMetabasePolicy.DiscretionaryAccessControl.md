# IMetabasePolicy.DiscretionaryAccessControl

IMetabasePolicy.DiscretionaryAccessControl
-


# IMetabasePolicy.DiscretionaryAccessControl


## Синтаксис


		DiscretionaryAccessControl: Boolean;


## Описание


Свойство DiscretionaryAccessControl
 определяет признак использования дискреционного контроля доступа к объектам.


## Комментарии


По умолчанию свойство принимает значение True,
 используется дискреционный контроль доступа к объектам.


Дискреционный контроль доступен для одновременного использования с [мандатным методом](IMetabasePolicy.MandatoryAccessControl.htm)
 или [атрибутным
 методом](IMetabasePolicy.AttributeBasedAccessControl.htm). При одновременном использовании дискреционного метода с атрибутным
 методом доступен [алгоритм
 комбинации прав](IMetabasePolicy.MethodsCombineAlgorithm.htm) в контроле доступа.


Для настройки прав доступа используйте свойство [SecurityDescriptor](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.SecurityDescriptor.htm).


## Пример


Использование свойства приведено в примере для [IMetabasePolicy.MethodsCombineAlgorithm](IMetabasePolicy.MethodsCombineAlgorithm.htm).


См. также:


[IMetabasePolicy](IMetabasePolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
