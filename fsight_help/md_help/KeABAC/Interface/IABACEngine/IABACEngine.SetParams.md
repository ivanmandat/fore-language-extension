# IABACEngine.SetParams

IABACEngine.SetParams
-


# IABACEngine.SetParams


## Синтаксис


SetParams(SubjAttrs: [IABACAttributeInstances](../IABACAttributeInstances/IABACAttributeInstances.htm);
 ObjAttrs: [IABACAttributeInstances](../IABACAttributeInstances/IABACAttributeInstances.htm));


## Параметры


SubjAttrs. Коллекция атрибутов
 субъекта;


ObjAttrs. Коллекция атрибутов
 объекта.


## Описание


Метод SetParams задает коллекцию
 атрибутов субъекта и объекта, для которого определяется атрибутный доступ.


## Комментарии


Метод используется с методом [IABACEngine.Evaluate](IABACEngine.Evaluate.htm)
 для вычисления доступа субъекта к объекту. Коллекции атрибутов субъектов
 и объектов задаются вручную с помощью интерфейсов [IMetabaseUser](KeSom.chm::/Interface/IMetabaseUser/IMetabaseUser.htm),
 [IMetabaseGroup](KeSom.chm::/Interface/IMetabaseGroup/IMetabaseGroup.htm),
 [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm),
 [IMetabase](KeSom.chm::/Interface/IMetabase/IMetabase.htm),
 [IMetabaseSecurity](KeSom.chm::/Interface/IMetabaseSecurity/IMetabaseSecurity.htm).


## Пример


Использование метода приведено в примере для [IABACEngine.Evaluate](IABACEngine.Evaluate.htm).


См. также:


[IABACEngine](IABACEngine.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
