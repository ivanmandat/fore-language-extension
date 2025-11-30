# IForeAssembly.BindToSub

IForeAssembly.BindToSub
-


# IForeAssembly.BindToSub


## Синтаксис


		BindToSub(SubName: String): [IForeSub](../IForeSub/IForeSub.htm);


## Параметры


SubName. Наименование процедуры/функции,
 реализованной в глобальном пространстве имён сборки.


## Описание


Метод BindToSub возвращает информацию
 о процедуре/функции с указанным именем.


## Комментарии


Метод возвращает Null, если
 процедура/функция с указанным именем не найдена.


## Пример


Для выполнения примера предполагается наличие в репозитории сборки с
 идентификатором «ASSM_TEST». В глобальном пространстве имён сборки реализована
 функция «Run».


Добавьте ссылку на системные сборки Fore, Metabase.


					Sub UserProc;

		Var

		    ForeService: IForeServices;

		    Runtime: IForeRuntime;

		    Assm: IForeAssembly;

		    FSub: IForeSub;

		Begin

		    ForeService := MetabaseClass.Active As IForeServices;

		    Runtime := ForeService.GetRuntime;

		    //Загрузка сборки

		    Assm := Runtime.BindToAssembly("ASSM_TEST");

		    //Получение функции

		    FSub := Assm.BindToSub("Run");

		    FSub.Invoke;

		    If FSub.IsResult Then

		        Debug.WriteLine(FSub.ResultValue);

		    End If;

		End Sub UserProc;


При выполнении примера в среду выполнения будет загружена сборка репозитория
 с указанным идентификатором. В сборке будет получена и запущена на выполнение
 функция «Run». Результат работы функции будет выведен в консоль среды
 разработки.


См. также:


[IForeAssembly](IForeAssembly.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
