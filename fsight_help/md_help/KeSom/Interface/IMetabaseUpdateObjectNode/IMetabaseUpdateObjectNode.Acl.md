# IMetabaseUpdateObjectNode.Acl

IMetabaseUpdateObjectNode.Acl
-


# IMetabaseUpdateObjectNode.Acl


## Синтаксис


Acl: [IAccessControlList](../IAccessControlList/IAccessControlList.htm);


## Описание


Свойство Acl возвращает список
 контроля доступа к объекту, сохраняемый в обновлении.


## Комментарии


Актуально при использовании дискреционного метода контроля доступа.
 Условия для использования свойства:


	- свойство [IMetabaseUpdateObjectNode.UpdatePart](IMetabaseUpdateObjectNode.UpdatePart.htm)
	 установлено в значение [ReplaceSecurityDescriptor](../../Enums/MetabaseObjectUpdatePart.htm);


	- задан список контроля доступа.


При соблюдении указанных условий, используя свойство Acl
 , можно изменить параметры контроля доступа к объекту. Измененные
 параметры будут сохранены в обновлении.


Параметры контроля доступа будут копироваться из исходного объекта ([IMetabaseObjectDescriptor](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm)->[SecurityDescriptor](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.SecurityDescriptor.htm)->[Acl](../ISecurityDescriptor/ISecurityDescriptor.Acl.htm)),
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

    AcessCL: IAccessControlList;

Begin

    Mb := MetabaseClass.Active;

    ObjDesc := MB.ItemById("OBJ1");

    SecDesc := ObjDesc.SecurityDescriptor;

    AcessCL := SecDesc.Acl;

    Upd := Mb.CreateUpdate;

    RootFolder := Upd.RootFolder;

    Nd := RootFolder.Add(MetabaseUpdateNodeType.Object) As IMetabaseUpdateObjectNode;

    Upd.AllowReplaceSD := True;

    Nd.UpdatePart := MetabaseObjectUpdatePart.ReplaceSecurityDescriptor;

    Obj := Mb.ItemById("OBJ2").Bind;

    Nd.Object := Obj;

    Nd.Acl.Append(AcessCL);

    Upd.SaveToFileNF("С:\Update.pefx");

    Upd := Mb.CreateUpdate;

    Upd.LoadFromFileNF("С:\Update.pefx");

    Upd.Apply;

End Sub UserProc;


В процессе выполнения примера происходит установка созданного обновления.
 После выполнения примера дополнительные параметры безопасности объекта
 репозитория с идентификаторами «OBJ2» заменятся дополнительными параметрами
 «OBJ1».


См. также:


[IMetabaseUpdateObjectNode](IMetabaseUpdateObjectNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
