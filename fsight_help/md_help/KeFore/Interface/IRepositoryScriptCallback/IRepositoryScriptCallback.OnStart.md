# IRepositoryScriptCallback.OnStart

IRepositoryScriptCallback.OnStart
-


# IRepositoryScriptCallback.OnStart


## Синтаксис


		OnStart(Error: [RepsitoryScriptInitError](../../Enums/RepsitoryScriptInitError.htm);
		 FilesToProcess: Integer);


## Параметры


Error. Параметр, возвращающий
 ошибку, которая может возникнуть при подготовке к выполнению скрипта,
 и не позволяющую произвести дальнейшее выполнение скрипта.


FilesToProcess. Количество
 запросов, которые будут выполнены. Данный параметр возвращает значение
 0, если при подготовке скрипта возникли какие-либо ошибки, либо репозиторий
 уже имеет последнюю версию.


## Описание


Метод OnStart реализует событие,
 происходящее при подготовке скрипта к выполнению.


## Пример


Для выполнения примера предполагается наличие сервера Oracle с наименованием
 «Test». На сервере в рамках схемы «TestSchema» создан репозиторий платформы.
 В корневом каталоге диска «С» имеется файл «current.rm4», содержащий скрип
 для создания и обновления репозитория.


Добавьте ссылки на системные сборки: Dal, Fore, IO.


					Sub Main;

		Var

		    Rsm: IRepositoryScriptManager;

		    Driv: IDalDriver;

		    ConDesc: IDalConnectionDescriptor;

		    Params: IDalConnectionDescriptorParams;

		    Con: IDalConnection;

		    CallBack: IRepositoryScriptCallback;

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

		    CallBack := New ScrCallback.Create;

		    Rsm.Execute(CallBack);

		End Sub Main;


		Class ScrCallback: RepositoryScriptCallback

		    s: String;


		    Public Sub OnStart(Error: RepsitoryScriptInitError; FilesToProcess: Integer);

		    Begin

		        Debug.WriteLine("Начало обновления");

		        Select Case Error

		        Case RepsitoryScriptInitError.None:

		            Debug.WriteLine("Количество запросов, которые будут выполнены: " + FilesToProcess.ToString);

		        Case RepsitoryScriptInitError.NoTables:

		            Debug.WriteLine("В указанной базе нет таблиц репозитория");

		        Case RepsitoryScriptInitError.TablesAlreadyExist:

		            Debug.WriteLine("В указанной базе уже есть таблицы репозитория");

		        Case RepsitoryScriptInitError.EmptyRepository:

		            Debug.WriteLine("Пустой репозиторий для обновления");

		        Case RepsitoryScriptInitError.CannotUpdateVers:

		            Debug.WriteLine("Версию репозитория обновить нельзя");

		        Case RepsitoryScriptInitError.UnicodeMismatch:

		            Debug.WriteLine("Юникод версии репозитория в базе и файле обновления не совпадает");

		        End Select;

		    End Sub OnStart;


		    Public Sub BeginStatement(Statement: String);

		    Begin

		        s := Statement;

		    End Sub BeginStatement;


		    Public Sub EndStatement(bError: Boolean; Message: String; Var Cancel: Boolean);

		    Begin

		        If bError = True Then

		            Debug.WriteLine("При выполнении кода возникла ошибка!");

		            Debug.Indent;

		            Debug.WriteLine("Запрос: " + s);

		            Debug.WriteLine("Ошибка: " + Message);

		            Debug.Unindent;

		            Cancel := False;

		        End If;

		    End Sub EndStatement;


		    Public Sub OnFinish;

		    Begin

		        Debug.WriteLine("Обновление окончено");

		    End Sub OnFinish;

		End Class ScrCallback;


После выполнения примера будет осуществлено обновление версии репозитория
 в соответствии с содержимым файла «current.rm4». Для отслеживания процесса
 обновления используется пользовательский класс «ScrCallback». Информация
 о готовности к обновлению, а также об ошибках, которые могут возникнуть
 при выполнении запросов, будет выведена в консоль среды разработки.


См. также:


[IRepositoryScriptCallback](IRepositoryScriptCallback.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
