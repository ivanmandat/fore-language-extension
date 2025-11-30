# IMetabaseObject.CachingMode

IMetabaseObject.CachingMode
-


# IMetabaseObject.CachingMode


## Синтаксис


		CachingMode: [MetabaseObjectCachingMode](../../Enums/MetabaseObjectCachingMode.htm);


## Описание


Свойство CachingMode определяет
 режим кеширования.


## Комментарии


Изменение режима кеширования доступно только для справочников, в том
 числе, для справочников НСИ любого типа.


## Пример


Для выполнения примера предполагается наличие справочника с ключом «16009».


Добавьте ссылку на системную сборку Metabase.


		Sub  UserProc;

		Var

		    MB: IMetabase;

		    MDesc: IMetabaseObjectDescriptor;

		    MObj: IMetabaseObject;

		Begin

		    MB := MetabaseClass.Active;

		    MDesc := MB.Item(16009);

		    MObj := MDesc.Edit;

		    MObj.CachingMode := MetabaseObjectCachingMode.FlushCacheByTimestamp;

		    MDesc.UpdateTimestamp;

		    MObj.Save;

		End  Sub  UserProc;


В результате выполнения примера для выбранного справочника будет установлен
 режим кеширования [FlushCacheByTimestamp](../../Enums/MetabaseObjectCachingMode.htm).


См. также:


[IMetabaseObject](IMetabaseObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
