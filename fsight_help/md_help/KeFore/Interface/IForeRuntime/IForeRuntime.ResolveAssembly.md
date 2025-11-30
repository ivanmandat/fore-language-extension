# IForeRuntime.ResolveAssembly

IForeRuntime.ResolveAssembly
-


# IForeRuntime.ResolveAssembly


## Синтаксис


		ResolveAssembly(AssemblyName: String): [IForeAssemblyBinary](../IForeAssemblyBinary/IForeAssemblyBinary.htm);


## Параметры


AssemblyName. Сборка, наличие
 которой необходимо проверить.


## Описание


Метод ResolveAssembly проверяет
 наличие указанной сборки в репозитории.


## Комментарии


Если сборка существует, то метод возвращает её метаданные. Для дальнейшей
 работы со сборкой и её конструкциями используйте метод [IForeRuntime.BindToAssembly](IForeRuntime.BindToAssembly.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории сборки с
 идентификатором «ASSM_TEST».


Добавьте ссылку на системную сборку Fore, Metabase.


					Sub UserProc;

		Var

		    ForeService: IForeServices;

		    Runtime: IForeRuntime;

		    AssmBin: IForeAssemblyBinary;

		Begin

		    ForeService := MetabaseClass.Active As IForeServices;

		    Runtime := ForeService.GetRuntime;

		    //Получение
		 метаданных сборки

		    AssmBin := Runtime.ResolveAssembly("ASSM_TEST");

		    //Просмотр метаданных сборки

		    Debug.WriteLine("Системная сборка: " + AssmBin.Builtin.ToString);

		    Debug.WriteLine("Загружена: " + AssmBin.IsLoaded.ToString);

		    Debug.WriteLine("Наименование
		 сборки: " + AssmBin.Name);

		    Debug.WriteLine("Пространство имён: " + AssmBin.Namespace_);

		    Debug.WriteLine("Исходный объект/файл: " + AssmBin.ObjectName);

		    Debug.WriteLine("Ссылки на другие сборки: " + AssmBin.References);

		    Debug.WriteLine("Дата и время последнего запуска: " + AssmBin.TimeStamp.ToString);

		    Debug.WriteLine("Версия: " + AssmBin.Version.ToString);

		End Sub UserProc;


При выполнении примера в среду выполнения будет загружена сборка репозитория
 с указанным идентификатором. Метаданные сборки будут выведены в консоль
 среды разработки.


См. также:


[IForeRuntime](IForeRuntime.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
