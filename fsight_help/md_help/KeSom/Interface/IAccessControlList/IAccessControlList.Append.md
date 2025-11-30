# IAccessControlList.Append

IAccessControlList.Append
-


# IAccessControlList.Append


## Синтаксис


Append(Source: [IAccessControlList](IAccessControlList.htm));


## Параметры


Source. Элементы контроля доступа
 объекта-источника.


## Описание


Метод Append добавляет элемент
 контроля доступа из другого списка.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором OBJ1 и OBJ2.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	    Var

	        MB: IMetabase;

	        ObjDesc: IMetabaseObjectDescriptor;

	        ObjDesc2: IMetabaseObjectDescriptor;

	        SecDesc: ISecurityDescriptor;

	        SecDesc2: ISecurityDescriptor;

	        AcessCL: IAccessControlList;

	        AcessCL2: IAccessControlList;

	    Begin

	        MB:=MetabaseClass.Active;

	        ObjDesc:=MB.ItemById("OBJ1");

	        SecDesc:=ObjDesc.SecurityDescriptor;

	        SecDesc.Edit;

	        AcessCL:=SecDesc.Acl;

	        ObjDesc2:=MB.ItemById("OBJ2");

	        SecDesc2:=ObjDesc2.SecurityDescriptor;

	        AcessCL2:=SecDesc2.Acl;

	        AcessCL.Append(AcessCL2);

	        SecDesc.Apply(True);

	End Sub UserProc;


После выполнения примера элементы контроля доступа OBJ1 дополнятся элементами
 контроля доступа OBJ2.


См. также:


[IAccessControlList](IAccessControlList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
