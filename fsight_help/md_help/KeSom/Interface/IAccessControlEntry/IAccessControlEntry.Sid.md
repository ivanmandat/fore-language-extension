# IAccessControlEntry.Sid

IAccessControlEntry.Sid
-


# IAccessControlEntry.Sid


## Синтаксис


Sid: [ISid](../ISid/ISid.htm);


## Описание


Свойство Sid возвращает идентификатор
 субъекта безопасности, к которому относится данный элемент.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором OBJ.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    ObjDesc: IMetabaseObjectDescriptor;

	    SecDesc: ISecurityDescriptor;

	    AcessCL: IAccessControlList;

	    ACE: IAccessControlEntry;

	    SID: String;

	Begin

	    MB := MetabaseClass.Active;

	    ObjDesc := MB.ItemById("OBJ");

	    SecDesc := ObjDesc.SecurityDescriptor;

	    AcessCL := SecDesc.Acl;

	    ACE := AcessCL.Item(0);

	    SID := ACE.Sid.AsString;

	End Sub UserProc;


В результате выполнения примера в переменной SID будет содержаться идентификатор
 субъекта безопасности первого в списке пользователя, к которому относится
 данный элемент.


См. также:


[IAccessControlEntry](IAccessControlEntry.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
