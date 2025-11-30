# IMetabaseUpdateDataObjectNode.IsIdentity

IMetabaseUpdateDataObjectNode.IsIdentity
-


# IMetabaseUpdateDataObjectNode.IsIdentity


## Синтаксис


IsIdentity: Boolean;


## Описание


Свойство IsIdentity определяет,
 будут ли корректно обновлены данные в таблице, у которой есть поле Identity.


## Комментарии


По умолчанию свойство имеет значение False
 и при попытке обновить таблицу с полем Identity
 будет сгенерирована ошибка. Для корректного обновления таблицы, имеющей
 поле Identity, установите свойству
 значение True. Если таблица не
 имеет поля Identity, то свойству
 IsIdentity обязательно должно
 быть установлено значение False.


Настройка актуальна только для таблиц и табличных справочников НСИ.


При работе с обновлением через менеджер обновлений свойство устанавливается
 автоматически.


## Пример


Для выполнения примера предполагается наличие в репозитории таблицы
 с идентификатором «Table_1», у которой есть поле Identity. Добавьте ссылку
 на системную сборку Metabase.


			Sub UserProc;

Var

    Mb: IMetabase;

    MBDesc: IMetabaseObjectDescriptor;

    MUpdate: IMetabaseUpdate;

    ObjNode: IMetabaseUpdateDataObjectNode;

Begin

    Mb := MetabaseClass.Active;

    MBDesc := MB.ItemById("Table_1");

    MUpdate := MB.CreateUpdate;

    ObjNode := MUpdate.RootFolder.Add(MetabaseUpdateNodeType.DataObject) As IMetabaseUpdateDataObjectNode;

    ObjNode.Label := MBDesc.Id;

    ObjNode.Method := MetabaseUpdateMethod.All;

    ObjNode.Object := MBDesc;

    ObjNode.BatchMode := ObjectUpdateDataBatchMode.UpdateInsert;

    ObjNode.IsIdentity := True;

    MUpdate.SaveToFileNF("c:\Update.pefx");

End Sub UserProc;


После выполнения примера будет создан файл обновления. При установке
 данного обновления будут корректно обновлены данные в таблице.


См. также:


[IMetabaseUpdateDataObjectNode](IMetabaseUpdateDataObjectNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
