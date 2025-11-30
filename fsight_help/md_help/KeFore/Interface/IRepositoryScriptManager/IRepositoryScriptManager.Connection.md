# IRepositoryScriptManager.Connection

IRepositoryScriptManager.Connection
-


# IRepositoryScriptManager.Connection


## Синтаксис


		Connection: Object;


## Описание


Свойство Connection определяет
 соединение с сервером БД в рамках которого осуществляется работа.


## Комментарии


В качестве значения необходимо указывать соединение, реализуемое интерфейсом
 [ISecurityConnection](KeSom.chm::/Interface/ISecurityConnection/ISecurityConnection.htm),
 либо [IDalConnection](Dal.chm::/Interface/IDalConnection/IDalConnection.htm).


## Пример №1


Для выполнения примера предполагается наличие сервера Oracle с наименованием
 Test. На сервере создана схема TestSchema. В корневом каталоге диска C
 имеется файл current.rm4, содержащий скрип для создания репозитория.


Добавьте ссылки на системные сборки: Dal, Fore, IO.


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

		    Rsm.Operation := RepositoryOperationType.Create;

		    Rsm.Repository := RepositoryType.Metabase;

		    Rsm.LoadScript(New FileStream.Create("c:\Current.rm4", FileOpenMode.Read, FileShare.Exclusive));

		    Rsm.Execute(Null);

		End Sub UserProc;


После выполнения примера на указанном сервере в указанной схеме будет
 создана юникод версия репозитория «Форсайт. Аналитическая платформа».


См. также:


[IRepositoryScriptManager](IRepositoryScriptManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
