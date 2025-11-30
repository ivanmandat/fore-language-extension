# IRepositoryScriptManager.Operation

IRepositoryScriptManager.Operation
-


# IRepositoryScriptManager.Operation


## Синтаксис


		Operation: [RepositoryOperationType](../../Enums/RepositoryOperationType.htm);


## Описание


Свойство Operation определяет
 операцию, которую необходимо произвести над репозиторием.


## Комментарии


Операция будет применена для репозитория, указанного в свойстве [Repository](IRepositoryScriptManager.Repository.htm),
 после вызова метода [Execute](IRepositoryScriptManager.Execute.htm).


## Пример


Для выполнения примера предполагается наличие сервера ORCL с наименованием
 Test. На сервере в рамках схемы TestSchema создан репозиторий платформы.
 В корневом каталоге диска С имеются файлы current.rm4 и current_rds.rm4,
 содержащий скрипт для создания и обновления репозитория и репозитория
 НСИ.


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

		    Rsm.Operation := RepositoryOperationType.Update;

		    //Обновление репозитория

		    Rsm.Repository := RepositoryType.Metabase;

		    Rsm.LoadScript(New FileStream.Create("c:\current.rm4", FileOpenMode.Read, FileShare.Exclusive));

		    Rsm.Execute(Null);

		    //Обновление репозитория НСИ

		    Rsm.Repository := RepositoryType.RDS;

		    Rsm.LoadScript(New FileStream.Create("c:\current_rds.rm4", FileOpenMode.Read, FileShare.Exclusive));

		    Rsm.Execute(Null);

		End Sub UserProc;


После выполнения примера будет осуществлено обновление версии репозитория
 и репозитория НСИ в соответствии с содержимым файлов «current.rm4» и «current_rds.rm4».


См. также:


[IRepositoryScriptManager](IRepositoryScriptManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
