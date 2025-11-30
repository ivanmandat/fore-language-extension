# IMetabaseUpdateNode.Enabled

IMetabaseUpdateNode.Enabled
-


# IMetabaseUpdateNode.Enabled


## Синтаксис


Enabled: Boolean;


## Описание


Свойство Enabled определяет,
 выполнять ли обновление объекта.


## Комментарии


Допустимые значения:


	- Enabled = True. Значение
	 по умолчанию. Объект будет обновлен;


	- Enabled = False. Объект
	 не будет обновлен, но останется в структуре обновления.


## Пример


Для выполнения примера предполагается наличие файла обновления «C:\Update.pefx».
 В репозитории должен присутствовать объект с идентификатором «OBJ_FOR_PEF».
 Добавьте ссылку на системную сборку Metabase.


			    Sub UserProc;

    Var

        MB: IMetabase;

        Update: IMetabaseUpdate;

        UFN: IMetabaseUpdateFolderNode;

        UpdateObj: IMetabaseUpdateObjectNode;

    Begin

        MB := MetabaseClass.Active;

        Update := Mb.CreateUpdate;

        Update.LoadFromFileNF("C:\Update.pefx");

        UFN := Update.RootFolder;

        UpdateObj := UFN.Add(MetabaseUpdateNodeType.DataObject) As IMetabaseUpdateObjectNode;

        UpdateObj.Object := MB.ItemById("OBJ_FOR_PEF");

        UpdateObj.Enabled := False;

        Update.SaveToFileNF("C:\Update.pefx");

    End Sub UserProc;


После выполнения примера в структуру обновления «C:\Update.pefx» будет
 добавлен объект «OBJ_FOR_PEF». При выполнении обновления данный объект
 будет игнорироваться.


См. также:


[IMetabaseUpdateNode](IMetabaseUpdateNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
