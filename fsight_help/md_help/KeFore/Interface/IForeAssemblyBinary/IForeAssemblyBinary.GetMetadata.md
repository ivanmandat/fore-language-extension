# IForeAssemblyBinary.GetMetadata

IForeAssemblyBinary.GetMetadata
-


# IForeAssemblyBinary.GetMetadata


## Синтаксис


		GetMetadata: IXmlDomDocument;


## Описание


Метод GetMetadata возвращает
 метаданные сборки в XML-формате.


## Комментарии


Метаданные включают информацию о всех конструкциях, реализованных в
 сборке, ссылках на другие сборки и другую информацию, которая необходима
 среде выполнения для корректной работы со сборкой.


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

		    //Получение метаданных сборки

		    AssmBin:= Runtime.ResolveAssembly("ASSM_TEST");

		    //Просмотр метаданных в XML-формате

		    Debug.WriteLine(AssmBin.GetMetadata.xml);

		End Sub UserProc;


При выполнении примера в среду выполнения будет загружена сборка репозитория
 с указанным идентификатором. В консоль среды разработки будут выведены
 метаданные сборки в XML-формате.


См. также:


[IForeAssemblyBinary](IForeAssemblyBinary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
