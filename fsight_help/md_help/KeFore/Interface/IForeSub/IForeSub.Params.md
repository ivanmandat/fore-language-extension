# IForeSub.Params

IForeSub.Params
-


# IForeSub.Params


## Синтаксис


Params: [IForeSubParams](../IForeSubParams/IForeSubParams.htm);


## Описание


Свойство Params возвращает коллекцию
 параметров метода.


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

	Begin

	    ForeService := MetabaseClass.Active As IForeServices;

	    Runtime := ForeService.GetRuntime;

	    //Загрузка сборки

	    Assm := Runtime.BindToAssembly("MODULE");

	    //Получение функции

	    FSub := Assm.BindToSub("Calculate");

	    //Задание значений параметров

	    Params := FSub.Params;

	    Param := Params.ParamByName("a");

	    Param.Value := 1;

	    Param := Params.ParamByName("b");

	    Param.Value := 2;

	    Param := Params.ParamByName("c");

	    Param.Value := 3.14;

	    //Выполнение

	    FSub.Invoke;

	    //Получение информации о результате

	    Debug.WriteLine(FSub.ResultName);

	    Debug.WriteLine(FSub.ResultType);

	    Debug.WriteLine(FSub.ResultValue);

	End Sub UserProc;


При выполнении примера в среду выполнения будет загружен указанный модуль.
 Будет получена функция «Calculate» и заданы значения её параметров. После
 этого функция будет выполнена. Информация о полученном результате будет
 выведена в консоль среды разработки.


См. также:


[IForeSub](IForeSub.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
