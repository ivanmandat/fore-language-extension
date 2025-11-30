# ISecurityLabels.BitCount

ISecurityLabels.BitCount
-


# ISecurityLabels.BitCount


## Синтаксис


BitCount: Integer;


## Описание


Свойство BitCount определяет
 количество субъектов безопасности, для которых могут быть сопоставлены
 биты в маске доступа. По умолчанию свойству установлено значение 32. Максимальное
 количество - 2048.


## Пример


Для выполнения примера предполагается наличие табличного справочника
 с идентификатором Dim_1. В текущем репозитории создано не менее пяти пользователей.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MDesc: IMetabaseObjectDescriptor;

	    Users: IMetabaseUsers;

	    SecDesc: ISecurityDescriptor;

	    SecLab: ISecurityLabels;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    MDesc := MB.ItemById("Dim_1");

	    Users := MB.Security.Users;

	    SecDesc := MDesc.SecurityDescriptor;

	    SecDesc.Edit;

	    SecLab := SecDesc.LabelSecurity;

	    For i := 0 To SecLab.BitCount - 1 Do

	        If SecLab.Mapping(i) <> Null Then

	            SecLab.Mapping(i) := Null;

	        End If;

	    End For;

	    Debug.WriteLine(MB.Security.Users.Count);

	    Debug.WriteLine(MB.Security.Groups.Count);

	    SecLab.BitCount := 97;

	    SecLab.Mapping(0) := Users.Item(0);

	    SecLab.Mapping(16) := Users.Item(1);

	    SecLab.Mapping(32) := Users.Item(2);

	    SecLab.Mapping(64) := Users.Item(3);

	    SecLab.Mapping(96) := Users.Item(4);

	    SecDesc.Apply(False);

	    For i := 0 To MB.Security.Users.Count - 1 Do

	        Debug.WriteLine(SecLab.ValueStr(Users.Item(i)));

	    End For;

	End Sub UserProc;


После выполнения примера для табличного справочника будут изменены метки
 безопасности. Для указанных битов маски будут сопоставлены первые пять
 пользователей, созданных для текущего репозитория. После этого в консоль
 среды разработки будут выведены значения маски для всех пользователей
 репозитория.


См. также:


[ISecurityLabels](ISecurityLabels.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
