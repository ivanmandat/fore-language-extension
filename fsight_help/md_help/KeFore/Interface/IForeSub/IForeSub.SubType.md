# IForeSub.SubType

IForeSub.SubType
-


# IForeSub.SubType


## Синтаксис


SubType: ForeSubType;


## Описание


Свойство SubType возвращает
 тип структуры метода в коде.


## Пример


Для выполнения примера предполагается наличие в репозитории сборки с
 идентификатором ASSM_TEST. В сборке должен содержаться модуль с несколькими
 разными типами структур (процедура, функция, делегат).


Добавьте ссылки на системные сборки: Fore, Metabase.


	Sub UserProc;

	Var

	    ForeService: IForeServices;

	    Runtime: IForeRuntime;

	    Assm: IForeAssembly;

	    FSub: IForeSub;

	    i, Count: Integer;

	Begin

	    ForeService := MetabaseClass.Active As IForeServices;

	    Runtime := ForeService.GetRuntime;

	    // Загрузим сборку

	    Assm := Runtime.BindToAssembly("ASSM_TEST");

	    // Получим количество структур в модуле

	    Count := Assm.SubsCount;

	    Debug.WriteLine("Количество структур в модуле: " + Count.ToString);

	    For i := 0 To Count - 1 Do

	        // Определим тип каждой структуры

	        FSub := Assm.SubItem(i);

	        If FSub.SubType = ForeSubType.Delegate_ Then

	            Debug.Write("Делегат: ");

	        End If;

	        If FSub.SubType = ForeSubType.Function_ Then

	            Debug.Write("Функция: ");

	        End If;

	        If FSub.SubType = ForeSubType.Sub_ Then

	            Debug.Write("Процедура: ");

	        End If;

	        // Выведем в консоль наименование структуры

	        Debug.WriteLine(FSub.Name);

	    End For;

	End Sub UserProc;


После выполнения примера будет загружена сборка репозитория с указанным
 идентификатором. В консоль среды разработки будет выведено количество
 содержащихся в модуле структур, список процедур, функций и делегатов,
 например:


Количество структур в модуле: 3


Делегат: ChangeStyle


Функция: Function_test


Процедура: Sub_test


См. также:


[IForeSub](IForeSub.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
