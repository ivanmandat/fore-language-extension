# IMetabaseUpdateContext.RegisterAttributeIdChange

IMetabaseUpdateContext.RegisterAttributeIdChange
-


# IMetabaseUpdateContext.RegisterAttributeIdChange


## Синтаксис


RegisterAttributeIdChange(newObjKey: Integer;

                         AttributeType:
 [MetabaseUpdateRemappingType](../../Enums/MetabaseUpdateRemappingType.htm);

                         oldAttributeId:
 String;

                         newAttributeId:
 String);


## Параметры


newObjKey. Ключ объекта репозитория
 после обновления;


AttributeType. Тип повторного
 сопоставления атрибутов. Используйте значения [MetabaseUpdateRemappingType.MetafactsAttribute](../../Enums/MetabaseUpdateRemappingType.htm)
 и [MetabaseUpdateRemappingType.MetavalsAttribute](../../Enums/MetabaseUpdateRemappingType.htm);


oldAttributeId. Идентификатор
 атрибута объекта до обновления;


newAttributeld. Идентификатор
 атрибута объекта после обновления.


## Описание


Метод RegisterAttributeIdChange
 переопределяет идентификаторы атрибутов объекта обновления.


## Комментарии


Метод RegisterAttributeIdChange
 используется для изменения привязки атрибутов объектов экспорта/импорта
 в базе данных временных рядов путем замены их идентификаторов.


## Пример


Для выполнения примера в репозитории необходимо:


	- наличие базы данных временных рядов. База данных временных рядов
	 имеет ключ «39512». Она содержит два добавленных атрибута рядов. Идентификаторы
	 атрибутов «ATTR1» и «ATTR2»;


	- наличие файла обновления с наименованием «AttrRemap.pefx» в
	 корне диска C. Данный файл является обновлением для указанной выше
	 базы данных временных рядов.


Добавьте ссылки на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    Update: IMetabaseUpdate;

    Context: IMetabaseUpdateContext;

Begin

    // Получим репозиторий

    MB := MetabaseClass.Active;

    // Создадим обновление из файла

    Update := Mb.CreateUpdate;

    Update.LoadFromFileNF("C:\AttrRemap.pefx", UpdateLoadMode.Replace);

    Context := Update.CreateUpdateContext;

    // Переименуем идентификаторы атрибутов рядов базы данных временных рядов

    Context.RegisterAttributeIdChange(39512, MetabaseUpdateRemappingType.MetafactsAttribute, "ATTR2", "ATTR1");

    Context.RegisterAttributeIdChange(39512, MetabaseUpdateRemappingType.MetafactsAttribute, "ATTR1", "ATTR2");

    // Применим обновление

    Update.ApplyEx(Null, Context);

End Sub UserProc;


После выполнения примера в репозитории будет обновлена база данных временных
 рядов с указанным ключом, будут переименованы указанные идентификаторы
 атрибутов.


См. также:


[IMetabaseUpdateContext](IMetabaseUpdateContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
