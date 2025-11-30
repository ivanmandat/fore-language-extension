# IMetabaseUpdateObjectNode.AccessToken

IMetabaseUpdateObjectNode.AccessToken
-


# IMetabaseUpdateObjectNode.AccessToken


## Синтаксис


AccessToken: [IAccessToken](../IAccessToken/IAccessToken.htm);


## Описание


Свойство AccessToken возвращает
 метку доступа объекта, сохраняемую в обновлении.


## Комментарии


Актуально при использовании мандатного метода контроля доступа. Условия
 для использования свойства:


	- свойству [IMetabaseUpdateObjectNode.UpdatePart](IMetabaseUpdateObjectNode.UpdatePart.htm)
	 установлено значение [ReplaceSecurityDescriptor](../../Enums/MetabaseObjectUpdatePart.htm);


	- свойству [IMetabaseUpdateObjectNode.AccessTokenOptions](IMetabaseUpdateObjectNode.AccessTokenOptions.htm)
	 установлено значение [Manual](../../Enums/MetabaseUpdateAccessTokenOptions.htm).


При соблюдении указанных условий, используя свойство AccessToken,
 можно изменить параметры метки доступа для объекта. Измененные параметры
 будут сохранены в обновлении.


Параметры метки доступа будут копироваться из исходного объекта ([IMetabaseObjectDescriptor](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm)->[SecurityDescriptor](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.SecurityDescriptor.htm)->[AccessToken](../ISecurityDescriptor/ISecurityDescriptor.AccessToken.htm)),
 если хотя бы одно из условий не выполняется.


## Пример


Для выполнения примера предполагается наличие в репозитории объектов
 с идентификаторами «OBJ1» и «OBJ2». Добавьте ссылку на системную сборку
 «Metabase».


			Sub UserProc;

Var

    Mb: IMetabase;

    Obj: IMetabaseObjectDescriptor;

    Upd: IMetabaseUpdate;

    Nd: IMetabaseUpdateObjectNode;

    RootFolder: IMetabaseUpdateFolderNode;

    ObjDesc: IMetabaseObjectDescriptor;

    SecDesc: ISecurityDescriptor;

    Tok: IAccessToken;

Begin

    Mb := MetabaseClass.Active;

    ObjDesc := MB.ItemById("OBJ1");

    SecDesc := ObjDesc.SecurityDescriptor;

    Tok := SecDesc.AccessToken;

    Upd := Mb.CreateUpdate;

    RootFolder := Upd.RootFolder;

    Nd := RootFolder.Add(MetabaseUpdateNodeType.Object) As IMetabaseUpdateObjectNode;

    Upd.AllowReplaceSD := True;

    Nd.UpdatePart := MetabaseObjectUpdatePart.ReplaceSecurityDescriptor;

    Nd.AccessTokenOptions := MetabaseUpdateAccessTokenOptions.Manual;

    Obj := Mb.ItemById("OBJ2").Bind;

    Nd.Object := Obj;

    Nd.AccessToken.Assign(Tok);

    Upd.SaveToFileNF("С:\Update.pefx");

    Upd := Mb.CreateUpdate;

    Upd.LoadFromFileNF("С:\Update.pefx");

    Upd.Apply;

End Sub UserProc;


При выполнении примера происходит установка созданного обновления. После
 выполнения примера метка доступа объекта «OBJ2» заменится на метку доступа
 объекта «OBJ1».


См. также:


[IMetabaseUpdateObjectNode](IMetabaseUpdateObjectNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
