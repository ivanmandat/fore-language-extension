# IMetabasePolicy.MandatoryAccessControl

IMetabasePolicy.MandatoryAccessControl
-


# IMetabasePolicy.MandatoryAccessControl


## Синтаксис


		MandatoryAccessControl: Boolean;


## Описание


Свойство MandatoryAccessControl
 определяет признак использования мандатного метода разграничения доступа.


## Комментарии


По умолчанию свойство принимает значение False
 – мандатный доступ не используется. При установке значения True
 будет включено использование мандатного метода разграничения доступа.


Возможно одновременное использование мандатного доступа и [дискреционного
 контроля](IMetabasePolicy.DiscretionaryAccessControl.htm).


Для настройки прав доступа к объектам используйте свойство [SecurityDescriptor](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.SecurityDescriptor.htm).


## Пример


Использование свойства приведено в примере для [IMetabasePolicy.MandatoryAccess](IMetabasePolicy.MandatoryAccess.htm).


См. также:


[IMetabasePolicy](IMetabasePolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
