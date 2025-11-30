# Работа с потоками: Разработка прикладного приложения

Работа с потоками: Разработка прикладного приложения
-


# Работа с потоками


Основной код, который формирует логику работы приложения и в котором
 реализуются различные алгоритмы, пишется в процедурах или функциях. При
 запуске процедур/функций их код выполняется последовательно, при этом
 если в коде производится какое-либо длительное действие, то приложение
 будет ожидать его завершения, элементы управления форм буду недоступны.
 Для того чтобы была возможность продолжать работать в приложении, запуск
 длительных операций осуществляют в отдельных потоках. Потоки позволяют
 выполнять операции параллельно основному коду приложения, при этом из
 приложения можно отслеживать и управлять состоянием потока.


В языке Fore потоки реализует класс [ForeThread](KeFore.chm::/Class/ForeThread/ForeThread.htm).
 Поток создаётся на базе пользовательского метода, реализуемого классом
 [ForeMethod](KeFore.chm::/Class/ForeMethod/ForeMethod.htm).
 Пользовательский метод должен быть связан с процедурой/функцией, находящейся
 в глобальном пространстве имён сборки. Для выполнения указанных ниже примеров
 предполагается наличие модуля с идентификатором M_THREAD. В модуле должен
 быть реализован метод Calculate, код которого представлен ниже. Добавьте
 ссылки на системные сборки Fore и MathFin.


	Sub StartThread;

	Var

	    Method: IForeMethod;

	    Th: IForeThread;

	Begin

	    Method := New ForeMethod.Create;

	    Method.Assembly := "M_Thread";

	    Method.Method := "Calculate";

	    Th := New ForeThread.Create(Method);

	    Th.Start(Th);

	End Sub StartThread;


	Sub Calculate(Param: Variant);

	Var

	    Th: IForeThread;

	    i: Integer;

	Begin

	    Th := Param As IForeThread;

	    For i := 1 To 100 Do

	        //...

	        Debug.WriteLine("Working thread..." + i.ToString);

	        Th.Sleep(100);

	        //...

	    End For;

	End Sub Calculate;


При выполнении процедуры StartThread в отдельном потоке будет запущено
 выполнение процедуры Calculate.


Взаимодействие с потоками может осуществляться через глобальные переменные,
 статические поля или свойства классов. Чтобы не возникло конфликтов, когда
 различные потоки одновременно пытаются изменить значение какого-либо одного
 общего ресурса, используются критические секции. Критическую секцию реализует
 класс [ForeCriticalSection](KeFore.chm::/Class/ForeCriticalSection/ForeCriticalSection.htm).
 Доступ к общим ресурсам должен осуществляться между вызовами методов [Enter](KeFore.chm::/Interface/IForeCriticalSection/IForeCriticalSection.Enter.htm) и [Leave](KeFore.chm::/Interface/IForeCriticalSection/IForeCriticalSection.Leave.htm). Если один из
 потоков входит в критическую секцию и работает с общими ресурсами, то
 попытка обращения к этим же ресурсам из второго потока вызовет приостановку
 его выполнения до освобождения критической секции первым потоком.


Добавьте ссылки на системные сборки Fore и MathFin.


	Var Value: Integer;


	Class CCritSection: Object

	    Shared fcs: IForeCriticalSection;

	    Public Shared Property CritSection: IForeCriticalSection

	        Get

	        Begin

	            If IsNull(fcs) Then

	                fcs := New ForeCriticalSection.Create;

	            End If;

	            Return fcs;

	        End Get

	    End Property CritSection;

	End Class CCritSection;


	Sub StartThread;

	Var

	    Method: IForeMethod;

	    Th1, Th2: IForeThread;

	Begin

	    Method := New ForeMethod.Create;

	    Method.Assembly := "M_Thread";

	    Method.Method := "Calculate";

	    //Создание потоков

	    Th1 := New ForeThread.Create(Method);

	    Th1.Name := "A";

	    Th1.Start(Th1);

	    Th2 := New ForeThread.Create(Method);

	    Th2.Name := "B";

	    Th2.Start(Th2);

	End Sub StartThread;


	Sub Calculate(Th: Variant);

	Var

	    i: Integer;

	Begin

	    // Вход в критическую секцию

	    CCritSection.CritSection.Enter;

	    For i := 0 To 100 Do

	        If Math.RandBetweenI(0, 100) > 50 Then

	            Value := Value + 1

	        Else

	            Value := Value - 1

	        End If;

	    End For;

	    // Выход из критической секции

	    CCritSection.CritSection.Leave;

	End Sub Calculate;


При выполнении процедуры StartThread в двух отдельных потоках будет
 запущено параллельное выполнение двух процедур Calculate. Для того, чтобы
 не возник конфликт при изменении переменной Value, которая объявлена в
 глобальном пространстве имён, будет использоваться критическая секция.
 Доступ к критической секции предоставляет статическое свойство CritSection
 класса CCritSection.


См. также:


[Разработка
 прикладного приложения](../01_Development_Environment/01_Purpose_of_the_constructor/Purpose_of_the_constructor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
