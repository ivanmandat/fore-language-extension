# ISecurityPackageLogonData.ParamCount

ISecurityPackageLogonData.ParamCount
-


# ISecurityPackageLogonData.ParamCount


## Синтаксис


ParamCount: Integer;


## Описание


Свойство ParamCount возвращает
 количество параметров модуля безопасности.


## Пример


	Sub UserProc;

	Var

	    Package: ISecurityPackage;

	    SPLD: ISecurityPackageLogonData;

	    i, c: Integer;

	Begin

	    Package := New StandardSecurityPackage.Create;

	    SPLD := Package.CreateLogonData("POSTGRES");

	    c := SPLD.ParamCount;

	    For i := 0 To c - 1 Do

	        Debug.WriteLine(SPLD.ParamName(i));

	    End For;

	End Sub UserProc;


При выполнении примера будет создан модуль безопасности, используемый
 при подключении к серверам на базе СУБД PostgreSQL. Список параметров
 модуля безопасности будет выведен в консоль среды разработки.


См. также:


[ISecurityPackageLogonData](ISecurityPackageLogonData.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
