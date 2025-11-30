# IAccessControlList.Clear

IAccessControlList.Clear
-


# IAccessControlList.Clear


## Синтаксис


Clear;


## Описание


Метод Clear очищает список элементов
 контроля доступа.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором OBJ_1.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    ObjDesc: IMetabaseObjectDescriptor;

	    SecDesc: ISecurityDescriptor;

	    AcessCL: IAccessControlList;

	Begin

	    MB := MetabaseClass.Active;

	    ObjDesc := MB.ItemById("OBJ_1");

	    SecDesc := ObjDesc.SecurityDescriptor;

	    SecDesc.Edit;

	    AcessCL := SecDesc.Acl;

	    AcessCL.Clear;

	    SecDesc.Apply(True);

	End Sub UserProc;


В результате выполнения примера произойдет очистка списка пользователей
 обладающих правами доступа к объекту с идентификатором OBJ_1.


См. также:


[IAccessControlList](IAccessControlList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
