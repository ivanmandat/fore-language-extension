# IMsProblem.WorkspaceDescriptor

IMsProblem.WorkspaceDescriptor
-


# IMsProblem.WorkspaceDescriptor


## Синтаксис


WorkspaceDescriptor: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Свойство WorkspaceDescriptor
 определяет объект, содержащий описание рабочего пространства задачи.


## Пример


Для выполнения примера предполагается наличие в репозитории рабочего
 пространства с идентификатором OBJ_WORK, контейнера моделирования с идентификатором
 OBJ_TRANSFORM. В данном контейнере моделирования должна присутствовать
 задача с идентификатором OBJ_PROBLEM.


			Sub UserProc;

Var

    Mb: IMetabase;

    parent: IMetabaseObject;

    MsKey: Integer;

    prob: IMsProblem;

    space, obj: IMetabaseObject;

    Workspace: IMetabaseObjectDescriptor;

Begin

    Mb := MetabaseClass.Active;

    parent := Mb.ItemById("OBJ_TRANSFORM").Bind;

    MsKey := Mb.ItemById("OBJ_TRANSFORM").Key;

    space := Mb.ItemById("OBJ_WORK").Bind;

    obj := MB.ItemByIdNamespace("OBJ_PROBLEM", MsKey).Edit;

    prob := obj As IMsProblem;

    prob.WorkspaceDescriptor := Workspace;

    obj.Save;

End Sub UserProc;


После выполнения примера, рабочее пространство OBJ_WORK будет включено
 в задачу OBJ_PROBLEM.


См. также:


[IMsProblem](IMsProblem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
