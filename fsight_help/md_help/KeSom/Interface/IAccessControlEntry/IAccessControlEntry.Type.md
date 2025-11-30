# IAccessControlEntry.Type

IAccessControlEntry.Type
-


# IAccessControlEntry.Type


## Синтаксис


Type: [AceType](../../Enums/AceType.htm);


## Описание


Свойство Type определяет тип
 доступа к объекту.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором OBJ_1.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    ObjDesc: IMetabaseObjectDescriptor;

	    SecDesc: ISecurityDescriptor;

	    AcessCL: IAccessControlList;

	    ACE: IAccessControlEntry;

	    Type: AceType;

	Begin

	    MB := MetabaseClass.Active;

	    ObjDesc := MB.ItemById("OBJ_1");

	    SecDesc := ObjDesc.SecurityDescriptor;

	    AcessCL := SecDesc.Acl;

	    ACE := AcessCL.Item(0);

	    Type := ACE.Type;

	End Sub UserProc;


После выполнения примера в переменной "Type" будет содержаться
 тип доступа первого дополнительного параметра безопасности объекта.


См. также:


[IAccessControlEntry](IAccessControlEntry.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
