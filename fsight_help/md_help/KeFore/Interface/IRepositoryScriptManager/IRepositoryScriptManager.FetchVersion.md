# IRepositoryScriptManager.FetchVersion

IRepositoryScriptManager.FetchVersion
-


# IRepositoryScriptManager.FetchVersion


## Синтаксис


		FetchVersion;


## Описание


Метод FetchVersion осуществляет
 получение текущей версии репозитория, указанного в свойстве [Repository](IRepositoryScriptManager.Repository.htm).


## Комментарии


Для просмотра информации о версии репозитория используйте свойства [VersionMajor](IRepositoryScriptManager.VersionMajor.htm),
 [VersionMinor](IRepositoryScriptManager.VersionMinor.htm) и
 [VersionUnicode](IRepositoryScriptManager.VersionUnicode.htm).


## Пример


Для выполнения примера предполагается наличие сервера ORCL с наименованием
 Test. На сервере создана схема TestSchema. В рамках этой схемы созданы
 репозиторий и репозиторий НСИ.


Добавьте ссылки на системные сборки: Dal, Fore.


					Sub UserProc;

		Var

		    Rsm: IRepositoryScriptManager;

		    Driv: IDalDriver;

		    ConDesc: IDalConnectionDescriptor;

		    Params: IDalConnectionDescriptorParams;

		    Con: IDalConnection;

		Begin

		    //Подключение к схеме на сервере Oracle

		    Driv := New DalOrcl8Driver.Create As IDalDriver;

		    ConDesc := Driv.CreateDescriptor;

		    Params := ConDesc.Params;

		    Params.Find("User Name").Value := "TestSchema";

		    Params.Find("Password").Value := "TestSchema";

		    Params.Find("Host BSTR").Value := "Test";

		    Params.Find("Schema").Value := "TestSchema";

		    Con := ConDesc.CreateConnection;

		    //Настройки менеджера репозитория

		    Rsm := New RepositoryScriptManager.Create;

		    Rsm.Connection := Con;

		    Rsm.Driver := RepositoryDriverType.ORCL9;

		    //Получение версии для репозитория

		    Rsm.Repository := RepositoryType.Metabase;

		    Rsm.FetchVersion;

		    Debug.WriteLine("Версия репозитория");

		    Debug.WriteLine(Rsm.VersionMajor.ToString);

		    Debug.WriteLine(Rsm.VersionMinor.ToString);

		    //Получение версии для репозитория НСИ

		    Rsm.Repository := RepositoryType.RDS;

		    Rsm.FetchVersion;

		    Debug.WriteLine("Версия репозитория НСИ");

		    Debug.WriteLine(Rsm.VersionMajor.ToString);

		    Debug.WriteLine(Rsm.VersionMinor.ToString);

		    If Rsm.VersionUnicode Then

		        Debug.WriteLine("Юникод версия репозитория НСИ");

		    Else

		        Debug.WriteLine("Не юникод версия репозитория НСИ");

		    End If;

		End Sub UserProc;


При выполнении примера будет осуществлено подключение к указанной схеме
 на указанном сервере. В консоль среды разработки будут выведены версии,
 которые имеют репозиторий и репозиторий НСИ, созданные в данной схеме.


См. также:


[IRepositoryScriptManager](IRepositoryScriptManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
