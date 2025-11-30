# IForeCriticalSection.Enter

IForeCriticalSection.Enter
-


# IForeCriticalSection.Enter


## Синтаксис


		Enter;


## Описание


Метод Enter осуществляет вход
 в критическую секцию.


## Комментарии


После вызова метода Enter, при
 изменении глобальных переменных класса доступ к ним блокируется до вызова
 метода [Leave](IForeCriticalSection.Leave.htm).
 При этом, если из другого потока осуществляется попытка изменить эти же
 переменные, то работа этого потока будет приостановлена до того момента,
 пока не появится доступ к переменным.


## Пример


Для выполнения примера предполагается наличие в репозитории модуля с
 идентификатором «M_THREAD_CALC». В модуле реализованы указанные классы
 и метод.


Добавьте ссылку на системную сборку Fore.


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


		Class CCalculate: Object

		    Public Shared Res: Double;

		    Public Shared Error: String;


		    Public Shared Sub Run;

		    Var

		        Method: IForeMethod;

		        Th1, Th2: IForeThread;

		    Begin

		        Method := New ForeMethod.Create;

		        Method.Assembly := "M_THREAD_CALC";

		        Method.Method := "Calculate";

		        //Создание потоков

		        Th1 := New ForeThread.Create(Method);

		        Th1.Name := "A";

		        Th1.Start(Th1);

		        Th2 := New ForeThread.Create(Method);

		        Th2.Name := "B";

		        Th2.Start(Th2);

		        //...

		        //Продолжение основной программы с возможностью отслеживания состояния потоков

		        //...

		    End Sub Run;

		End Class CCalculate;


		Sub Calculate(Th: Variant);

		Begin

		    //...

		    //Действия по выполнению какого-либо расчёта

		    //...

		    //Вход в критическую секцию

		    CCritSection.CritSection.Enter;

		    If (Th As IForeThread).Name = "A" Then

		        CCalculate.Res := 100;

		        CCalculate.Error := "A";

		        (Th As IForeThread).Sleep(1000);

		    Else

		        CCalculate.Res := 200;

		        CCalculate.Error := "B";

		        (Th As IForeThread).Sleep(2000);

		    End If;

		    //Выход из критической секции

		    CCritSection.CritSection.Leave;

		End Sub Calculate;


В указанном примере при выполнении статического метода «Run» класса
 «CCalculate» создаются два потока, выполняющих пользовательский метод
 «Calculate». Сам метод, в зависимости от каких-либо условий, может менять
 статические поля класса «CCalculate». Для того, чтобы два потока одновременно
 не изменили поля класса, используется критическая секция, которую реализует
 класс «CCritSection».


См. также:


[IForeCriticalSection](IForeCriticalSection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
