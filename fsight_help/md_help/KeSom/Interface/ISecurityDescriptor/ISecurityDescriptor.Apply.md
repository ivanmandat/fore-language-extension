# ISecurityDescriptor.Apply

ISecurityDescriptor.Apply
-


# ISecurityDescriptor.Apply


## Синтаксис


		Apply(ApplyByHierarchy: Boolean);


## Параметры


ApplyByHierarchy. Параметр,
 определяющий будут ли установлены параметры безопасности всех дочерних
 объектов в соответствии с параметрами безопасности текущего объекта.


Если передавать значение True,
 то для всех дочерних объектов параметры безопасности будут установлены
 в соответствии с параметрами текущего объекта.


Если передавать значение False,
 то параметры будут применены только для текущего объекта, но они будут
 распространяться на все дочерние объекты, для которых флагу [Flags](ISecurityDescriptor.Flags.htm)
 установлено значение [SecurityDescriptorFlags.AutoInherited](../../Enums/SecurityDescriptorFlags.htm).


## Описание


Метод Apply осуществляет выход
 из режима редактирования с сохранением всех изменений параметров безопасности
 объекта.


## Пример


Использование метода приведено в примере для [IMetabaseObjectDescriptor.SecurityDescriptor](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.SecurityDescriptor.htm).


См. также:


[ISecurityDescriptor](ISecurityDescriptor.htm)
 | [ISecurityDescriptor.Edit](ISecurityDescriptor.Edit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
