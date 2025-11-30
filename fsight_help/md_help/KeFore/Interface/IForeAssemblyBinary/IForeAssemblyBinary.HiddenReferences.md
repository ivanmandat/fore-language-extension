# IForeAssemblyBinary.HiddenReferences

IForeAssemblyBinary.HiddenReferences
-


# IForeAssemblyBinary.HiddenReferences


## Синтаксис


		HiddenReferences: Array;


## Описание


Свойство HiddenReferences возвращает
 массив скрытых ссылок.


## Комментарии


Если в текущей сборке вызывается метод класса, который является частью
 иерархии классов, то для сборки добавляются скрытые ссылки на все сборки,
 где содержатся все классы и интерфейсы данной иерархии.


## Пример


Для выполнения примера предполагается наличие в репозитории сборки с
 идентификатором «ASSM_TEST».


Добавьте ссылку на системную сборку Fore, Metabase.


					Sub UserProc;

		Var

		    ForeService: IForeServices;

		    Runtime: IForeRuntime;

		    AssmBin: IForeAssemblyBinary;

		    s: String;

		Begin

		    ForeService := MetabaseClass.Active As IForeServices;

		    Runtime := ForeService.GetRuntime;

		    //Получение метаданных сборки

		    AssmBin := Runtime.ResolveAssembly("ASSM_TEST");

		    Debug.WriteLine(AssmBin.HiddenReferences.Length);

		    For Each s In AssmBin.HiddenReferences Do

		        Debug.WriteLine("Assembly: " + s + ". Compile time: " + AssmBin.GetReferenceTimeStamp(s).ToString);

		    End For;

		End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведен список
 сборок, на которые в указанной сборке имеются скрытые ссылки. Также будут
 выведены дата и время компиляции сборок.


См. также:


[IForeAssemblyBinary](IForeAssemblyBinary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
