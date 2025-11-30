# IForeAssembly.SubItem

IForeAssembly.SubItem
-


# IForeAssembly.SubItem


## Синтаксис


		SubItem(SubIndex: Integer): [IForeSub](../IForeSub/IForeSub.htm);


## Параметры


SubIndex. Индекс процедуры/функции.
 Значение индекса указывается в диапазоне [0, [SubsCount](IForeAssembly.SubsCount.htm)-1].


## Описание


Метод SubItem возвращает информацию
 о процедуре/функции с указанным индексом.


## Пример


Для выполнения примера предполагается наличие в репозитории сборки с
 идентификатором «ASSM_TEST».


Добавьте ссылку на системную сборку Fore, Metabase.


					Sub UserProc;

		Var

		    ForeService: IForeServices;

		    Runtime: IForeRuntime;

		    Assm: IForeAssembly;

		    FSub: IForeSub;

		    i, j: Integer;

		Begin

		    ForeService := MetabaseClass.Active As IForeServices;

		    Runtime := ForeService.GetRuntime;

		    //Загрузка сборки

		    Assm := Runtime.BindToAssembly("ASSM_TEST");

		    //Получение информации о процедурах/функциях, реализованных в глобальном пространстве имён сборки

		    j := Assm.SubsCount - 1;

		    For i := 0 To j Do

		        FSub := Assm.SubItem(i);

		        If FSub.IsResult Then

		            Debug.Write("Функция: ");

		        Else

		            Debug.Write("Процедура: ");

		        End If;

		        Debug.Write(FSub.Name);

		        Debug.Write("; Модификатор доступа: ");

		        Select Case FSub.SubAccessSpecificatorKind

		            Case AccessSpecificatorKind.Public_: Debug.WriteLine("Public");

		            Case AccessSpecificatorKind.Private_: Debug.WriteLine("Private");

		            Case AccessSpecificatorKind.Protected_: Debug.WriteLine("Protected");

		            Case AccessSpecificatorKind.Friend_: Debug.WriteLine("Friend");

		            Case AccessSpecificatorKind.ProtectedFriend: Debug.WriteLine("ProtectedFriend");

		        End Select;

		    End For;

		End Sub UserProc;


При выполнении примера в среду выполнения будет загружена сборка репозитория
 с указанным идентификатором. В консоль среды разработки будет выведен
 список процедур/функций, реализованных в глобальном пространстве имён
 сборки.


См. также:


[IForeAssembly](IForeAssembly.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
