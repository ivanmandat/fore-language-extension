# IMetabaseUpdateObject.ReadUpdate

IMetabaseUpdateObject.ReadUpdate
-


# IMetabaseUpdateObject.ReadUpdate


## Синтаксис


ReadUpdate(Update: [IMetabaseUpdate](../IMetabaseUpdate/IMetabaseUpdate.htm);
 [Mode: [UpdateLoadMode](../../Enums/UpdateLoadMode.htm) = 0]);


## Параметры


Update. Обновление, которое
 будет открываться;


Mode. Режим добавления объектов
 в обновление. Для Fore параметр является необязательным, по умолчанию
 передается значение UpdateLoadMode.Replace: если создаваемое обновление
 содержит объекты, то они будут замещены объектами из открываемого обновления.


## Описание


Метод ReadUpdate открывает обновление
 из репозитория.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.
 В репозитории должно быть обновление с идентификатором «ObjPefx».


			Sub UserProc;

Var

    MB: IMetabase;

    Update: IMetabaseUpdate;

    UpdateObj: IMetabaseUpdateObject;

Begin

    MB := MetabaseClass.Active;

    Update := MB.CreateUpdate;

    UpdateObj := MB.ItemById("ObjPefx").Bind As IMetabaseUpdateObject;

    UpdateObj.ReadUpdate(Update);

    Update.SaveToFileNF("C:\Update.pefx");

End Sub UserProc;


После выполнения примера будет открыто обновление из репозитория и сохранено
 в файл «c:\Update.pefx».


См. также:


[IMetabaseUpdateObject](IMetabaseUpdateObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
