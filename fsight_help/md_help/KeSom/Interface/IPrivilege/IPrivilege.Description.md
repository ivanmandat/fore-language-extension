# IPrivilege.Description

IPrivilege.Description
-


# IPrivilege.Description


## Синтаксис


		Description: String;


## Описание


Свойство Description возвращает
 описание привилегии.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MS: IMetabaseSecurity;

		    MP: IMetabasePolicy;

		    Priv: IPrivilege;

		    S: String;

		Begin

		    MB := MetabaseClass.Active;

		    MS := MB.Security;

		    MP := MS.Policy;

		    Priv := MP.Privilege("ВХОД");

		    Debug.WriteLine(Priv.Description);

		End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведено описание
 привилегии с наименованием «ВХОД».


См. также:


[IPrivilege](IPrivilege.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
