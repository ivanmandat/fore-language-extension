# IAccessToken.Assign

IAccessToken.Assign
-


# IAccessToken.Assign


## Синтаксис


IAccessToken.Assign(Source: [IAccessToken](IAccessToken.htm));


## Параметры


Source. Метка доступа объекта-источника.


## Описание


Метод Assign заменяет метку доступа объекта.


## Комментарии


Актуально при включенном мандатном контроле доступа.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта с идентификатором «OBJ1» и «OBJ2».


			Sub UserProc;

    Var

        MB: IMetabase;

        Tok: IAccessToken;

        Tok2: IAccessToken;

        ObjDesc: IMetabaseObjectDescriptor;

        ObjDesc2: IMetabaseObjectDescriptor;

        SecDesc: ISecurityDescriptor;

        SecDesc2: ISecurityDescriptor;

    Begin

        MB:=MetabaseClass.Active;

        ObjDesc:=MB.ItemById("OBJ1");

        SecDesc:=ObjDesc.SecurityDescriptor;

        SecDesc.Edit;

        Tok := SecDesc.AccessToken;

        ObjDesc2:=MB.ItemById("NSI");

        SecDesc2:=ObjDesc2.SecurityDescriptor;

        Tok2:=SecDesc2.AccessToken;

        Tok.Assign(Tok2);

        SecDesc.Apply(True);

End Sub UserProc;


После выполнения примера метка доступа объекта «OBJ1» заменится на метку доступа объекта «OBJ2».


См. также:


[IAccessToken](IAccessToken.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
