# IForeClass.IsHaveClassOrInterface

IForeClass.IsHaveClassOrInterface
-


# IForeClass.IsHaveClassOrInterface


## Синтаксис


		IsHaveClassOrInterface(Name: String): Boolean;


## Параметры


Name. Наименование класса/интерфейса,
 наследование от которого необходимо проверить.


## Описание


Метод IsHaveClassOrInterface
 осуществляет проверку и возвращает признак наличия наследования текущей
 конструкции от указанного класса/интерфейса.


## Комментарии


Метод возвращает следующие значения:


	- True. Текущая конструкция
	 наследуется от указанного класса/интерфейса;


	- False. Текущая конструкция
	 не наследуется от указанного класса/интерфейса.


## Пример


Для выполнения примера предполагается наличие в репозитории сборки с
 идентификатором «ASSM_TEST». В сборке описан интерфейс «ICalculate». Также
 в сборке реализованы несколько классов.


Добавьте ссылку на системную сборку Fore, Metabase.


					Sub UserProc;

		Var

		    ForeService: IForeServices;

		    Runtime: IForeRuntime;

		    Assm: IForeAssembly;

		    FClass: IForeClass;

		    i, j: Integer;

		Begin

		    ForeService := MetabaseClass.Active As IForeServices;

		    Runtime := ForeService.GetRuntime;

		    //Загрузка сборки

		    Assm := Runtime.BindToAssembly("ASSM_TEST");

		    //Получение информации классах

		    j := Assm.ClassesCount - 1;

		    For i := 0 To j Do

		        FClass := Assm.ClassItem(i);

		        If FClass.ClassType = ForeClassType.Class_ Then

		            //Проверка наследования от интерфейса ICalculate

		            If FClass.IsHaveClassOrInterface("ICalculate") Then

		                Debug.WriteLine("Класс " + FClass.Name + " наследуется от интерфейса ICalculate");

		            Else

		                Debug.WriteLine("Класс " + FClass.Name + " не наследуется от интерфейса ICalculate");

		            End If;

		        End If;

		    End For;

		End Sub UserProc;


При выполнении примера в среду выполнения будет загружена сборка репозитория
 с указанным идентификатором. В консоль среды разработки будет выведена
 информация о наследовании классов, которые реализованы в сборке.


См. также:


[IForeClass](IForeClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
