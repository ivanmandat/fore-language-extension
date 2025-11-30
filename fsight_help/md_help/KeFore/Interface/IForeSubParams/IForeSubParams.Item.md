# IForeSubParams.Item

IForeSubParams.Item
-


# IForeSubParams.Item


## Синтаксис


Item(Index: Integer): [IForeSubParam](../IForeSubParam/IForeSubParam.htm);


## Параметры


Index. Индекс параметра в коллекции.


## Описание


Метод Item возвращает параметр
 по индексу.


## Пример


Для выполнения примера предполагается наличие модуля с идентификатором
 «MODULE». В глобальном пространстве имён модуля реализована функция:


	Function Calculate(a, b: Integer; c: Double): Double;

	Var

	    Result: Double;

	Begin

	    //...

	    //Расчёт с учётом значений параметров

	    //...

	    Return Result

	End Function Calculate;


Добавьте ссылку на системную сборку Fore, Metabase.


	Sub UserProc;

	Var

	    ForeService: IForeServices;

	    Runtime: IForeRuntime;

	    Assm: IForeAssembly;

	    FSub: IForeSub;

	    Params: IForeSubParams;

	    Param: IForeSubParam;

	    i, c: Integer;

	Begin

	    ForeService := MetabaseClass.Active As IForeServices;

	    Runtime := ForeService.GetRuntime;

	    //Загрузка сборки

	    Assm := Runtime.BindToAssembly("MODULE");

	    //Получение функции

	    FSub := Assm.BindToSub("Calculate");

	    //Получение информации о параметрах функции

	    Params := FSub.Params;

	    c := Params.Count;

	    For i := 0 To c - 1 Do

	        Param := Params.Item(i);

	        Debug.WriteLine("Параметр: " + Param.Name + "; Тип значения: " + Param.TypeName + "; Передача параметра по ссылке: " + Param.IsVar.ToString);

	    End For;

	End Sub UserProc;


При выполнении примера в среду выполнения будет загружен указанный модуль.
 Будет получена функция «Calculate» и в консоль среды разработки будет
 выведена информация о её параметрах.


См. также:


[IForeSubParams](IForeSubParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
