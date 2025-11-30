# IForeRuntime.BindToAssembly

IForeRuntime.BindToAssembly
-


# IForeRuntime.BindToAssembly


## Синтаксис


		BindToAssembly(AssamblyName: String): [IForeAssembly](../IForeAssembly/IForeAssembly.htm);


## Параметры


AssamblyName.
 Сборка, к конструкциям которой необходимо получить доступ.


## Описание


Метод BindToAssembly предоставляет
 доступ к конструкциям сборки.


## Комментарии


В качестве значения параметра AssamblyName
 указывается наименование системной сборки среды разработки (ABAC, Adhoc
 и другие) или идентификатор сборки//формы/модуля в репозитории. Если сборка
 репозитория реализована внутри контейнера, то в параметре AssamblyName
 указывается следующее значение: <идентификатор
 контейнера>.<идентификатор сборки>.


## Пример


Для выполнения примера предполагается наличие в репозитории сборки с
 идентификатором «ASSM_TEST».


Добавьте ссылку на системную сборку Fore, Metabase.


					Sub UserProc;

		Var

		    ForeService: IForeServices;

		    Runtime: IForeRuntime;

		    Assm: IForeAssembly;

		    FClass: IForeClass;

		    FSub: IForeSub;

		    i, j: Integer;

		Begin

		    ForeService := MetabaseClass.Active As IForeServices;

		    Runtime := ForeService.GetRuntime;

		    //Загрузка сборки

		    Assm := Runtime.BindToAssembly("ASSM_TEST");

		    //Получение информации о интерфейсах, классах, перечислениях

		    j := Assm.ClassesCount - 1;

		    For i := 0 To j Do

		        FClass := Assm.ClassItem(i);

		        Select Case FClass.ClassType

		            Case ForeClassType.Class_: Debug.Write("Класс: ");

		            Case ForeClassType.Interface_: Debug.Write("Интерфейс: ");

		            Case ForeClassType.Enum_: Debug.Write("Перечисление: ");

		        End Select;

		        Debug.WriteLine(FClass.Name);

		    End For;

		    //Получение информации о процедурах/функциях, реализованных в глобальном пространстве имён сборки

		    j := Assm.SubsCount - 1;

		    For i := 0 To j Do

		        FSub := Assm.SubItem(i);

		        If FSub.IsResult Then

		            Debug.Write("Функция: ");

		        Else

		            Debug.Write("Процедура: ");

		        End If;

		        Debug.WriteLine(FSub.Name);

		    End For;

		End Sub UserProc;


При выполнении примера в среду выполнения будет загружена сборка репозитория
 с указанным идентификатором. В консоль среды разработки будет выведен
 список конструкций, которые реализованы в сборке.


См. также:


[IForeRuntime](IForeRuntime.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
