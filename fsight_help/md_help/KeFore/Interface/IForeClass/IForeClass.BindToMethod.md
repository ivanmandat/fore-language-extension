# IForeClass.BindToMethod

IForeClass.BindToMethod
-


# IForeClass.BindToMethod


## Синтаксис


		BindToMethod(MethodName: String): [IForeSub](../IForeSub/IForeSub.htm);


## Параметры


MethodName. Наименование процедуры/функции.


## Описание


Метод BindToMethod возвращает
 информацию о процедуре/функции с указанным именем.


## Комментарии


Метод возвращает значение Null,
 если процедура/функция с указанным именем в текущей конструкции не найдена.


## Пример


Для выполнения примера предполагается наличие в репозитории сборки с
 идентификатором «ASSM_TEST». В сборке реализован класс «CCalculate», в
 классе имеется функция «Calculate».


Добавьте ссылку на системную сборку Fore, Metabase.


					Sub UserProc;

		Var

		    ForeService: IForeServices;

		    Runtime: IForeRuntime;

		    Assm: IForeAssembly;

		    FClass: IForeClass;

		    FSub: IForeSub;

		Begin

		    ForeService := MetabaseClass.Active As IForeServices;

		    Runtime := ForeService.GetRuntime;

		    //Загрузка сборки

		    Assm := Runtime.BindToAssembly("ASSM_TEST");

		    //Получение класса

		    FClass := Assm.BindToClass("CCalculate");

		    //Получение функции

		    FSub := FClass.BindToMethod("Calculate");

		    //Указание экземпляра класса, для которого будет выполняться функция

		    FSub.Self := FClass.CreateObject;

		    //Выполнение функции

		    FSub.Invoke;

		    //Вывод результата

		    If FSub.IsResult Then

		        Debug.WriteLine(FSub.ResultValue);

		    End If;

		End Sub UserProc;


При выполнении примера в среду выполнения будет загружена сборка репозитория
 с указанным идентификатором. В сборке будет получен доступ к указанной
 функции класса. Функция будет выполнена и результат её работы выведен
 в консоль среды разработки.


См. также:


[IForeClass](IForeClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
