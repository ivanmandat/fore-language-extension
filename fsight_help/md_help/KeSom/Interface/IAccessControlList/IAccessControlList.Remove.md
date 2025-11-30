# IAccessControlList.Remove

IAccessControlList.Remove
-


# IAccessControlList.Remove


## Синтаксис


Remove(Index: Integer): Boolean;


## Параметры


Index.
 Индекс элемента контроля доступа.


## Описание


Метод Remove удаляет элемент
 контроля доступа и возвращает признак удачного удаления.


## Комментарии


Метод возвращает True, если
 удаление дополнительного параметра прошло удачно.


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

	    ACE: IAccessControlEntry;

	    s: String;

	Begin

	    MB := MetabaseClass.Active;

	    ObjDesc := MB.ItemById("Obj_1");

	    SecDesc := ObjDesc.SecurityDescriptor;

	    SecDesc.Edit;

	    AcessCL := SecDesc.Acl;

	    If AcessCL.Remove(2) Then

	        s := "Yes";

	    Else

	        s := "No";

	    End If;

	    SecDesc.Apply(True);

	End Sub UserProc;


В результате выполнения примера в переменной s будет содержаться "Yes",
 если удаление третьего элемента контроля доступа прошло удачно.


См. также:


[IAccessControlList](IAccessControlList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
