# SecurityDescriptorApplyFlags

SecurityDescriptorApplyFlags
-


# SecurityDescriptorApplyFlags


## Описание


Перечисление SecurityDescriptorApplyFlags содержит варианты применения прав для объектов репозитория.


Используется следующим методом:


-
[ISecurityDescriptor.ApplyO](../Interface/ISecurityDescriptor/ISecurityDescriptor.ApplyO.htm).


## Допустимые значения


 Значение
 Краткое описание


 0
 None. Права для текущего объекта не применяются.


 1
 ByHierarchy. Права применяются для всех вложенных объектов по иерархии.


 2
 ToInternal. Права применяются для внутренних объектов и объектов, для которых установлен признак [отложенной загрузки описания](../Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.IsDeferred.htm).


См. также:


[Перечисления сборки Metabase](KeSom_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
