# IMsProblem.Workspace

IMsProblem.Workspace
-


# IMsProblem.Workspace


## Синтаксис


Workspace: [IWxWorkspace](Andy.chm::/Interface/IWxWorkspace/IWxWorkspace.htm);


## Описание


Свойство Workspace определяет
 рабочее пространство задачи.


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

    Workspace: IWxWorkspace;

Begin

    Mb := MetabaseClass.Active;

    parent := Mb.ItemById("OBJ_TRANSFORM").Bind;

    MsKey := Mb.ItemById("OBJ_TRANSFORM").Key;

    space := Mb.ItemById("OBJ_WORK").Bind;

    obj := MB.ItemByIdNamespace("OBJ_PROBLEM", MsKey).Edit;

    prob := obj As IMsProblem;

    Workspace := space As IWxWorkspace;

    prob.Workspace := Workspace;

    obj.Save;

End Sub UserProc


После выполнения примера, рабочее пространство OBJ_WORK будет включено
 в задачу OBJ_PROBLEM.


См. также:


[IMsProblem](IMsProblem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
