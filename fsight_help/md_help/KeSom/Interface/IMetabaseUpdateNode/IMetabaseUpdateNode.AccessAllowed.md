# IMetabaseUpdateNode.AccessAllowed

IMetabaseUpdateNode.AccessAllowed
-


# IMetabaseUpdateNode.AccessAllowed


## Синтаксис


AccessAllowed([accesstype: [MetabaseUpdateCopyType](../../Enums/MetabaseUpdateCopyType.htm)
 = 1]):[MetabaseUpdateNodeAccessType](../../Enums/MetabaseUpdateNodeAccessType.htm);


## Параметры


accesstype. Тип
 копирования обновления. Необязательный параметр, значение по умолчанию
 - 1 (Available).


## Описание


Свойство AccessAllowed возвращает
 тип доступа к объекту обновления.


## Пример


Для выполнения примера добавьте ссылки на системные сборки «Metabase». Предполагается
 наличие файла обновления «C:\Update.pefx». В репозитории предполагается
 наличие объекта с идентификатором «OBJ1».


			Sub Main;

Var

    MB: IMetabase;

    Update: IMetabaseUpdate;

    UON: IMetabaseUpdateObjectNode;

    obj: IMetabaseObjectDescriptor;

    objkey: integer;

Begin

    MB := MetabaseClass.Active;

    Update := Mb.CreateUpdate;

    Update.LoadFromFileNF("D:\Update.pefx");

    obj := MB.ItemById("OBJ1");

    objkey := obj.Key;

    Update.AllowReplaceSD := True;

    UON := Update.RootFolder.FindObject(objkey);

    UON.UpdatePart := MetabaseObjectUpdatePart.ReplaceSecurityDescriptor;

    debug.WriteLine(UON.AccessAllowed);

End Sub Main;


После выполнения примера в окне консоли отобразится информация с типом
 доступа к объекту с идентификатором «OBJ1».


См. также:


[IMetabaseUpdateNode](IMetabaseUpdateNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
