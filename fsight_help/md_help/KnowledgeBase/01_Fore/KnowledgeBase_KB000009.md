# Примеры фрагментов кода, после выполнения которых в памяти остаются объекты

Примеры фрагментов кода, после выполнения которых в памяти остаются объекты
-


# Примеры фрагментов кода, после выполнения которых в памяти остаются
	 объекты


	Номер статьи: KB000009


## Общие сведения


	Связанные блоки:


		- [Fore](Fore.chm::/Fore_Title.htm)


## Описание


	Особое внимание необходимо обратить прикладным разработчикам на
	 использование в коде циклических ссылок. В прикладном коде нельзя
	 допускать «ссылочное зацикливание» объектов друг на друга, через объекты
	 системных классов. [Сборщик
	 мусора](KB000030/KnowledgeBase_KB000030_2.htm) не имеет информации о ссылках, которые содержат объекты
	 системных классов на другие объекты (как других системных классов,
	 так и объектов Fore), поэтому данные объекты не могут быть удалены
	 из памяти после окончания выполнения приложения.


	При [динамическом создании](KnowledgeBase_KB000028.htm)
	 компонентов, описанных в классе формы, также необходимо учитывать
	 следующие моменты:


		- для компонента должен быть указан родительский компонент;


		- при указании обработчиков событий создаются дополнительные
		 ссылки на эти события.


	Если компонент не поддерживает установку родительского компонента,
	 но имеет какие-либо установленные обработчики событий, то при завершении
	 приложения данный компонент не будет удален из памяти.


	Не используйте в прикладном коде конструкции, подобные описанным
	 ниже примерам, и анализируйте состояние памяти после выполнения приложения
	 с помощью окна [«Объекты
	 в памяти»](uidevenv.chm::/01_development_environment/03_windows_of_development_environment/object_in_memory.htm) в среде разработки.


## Пример 1


		Public Class Cls1: Object

		    Public ArList: ArrayList;

		End Class Cls1;


		Public Class Cls2: Object

		    Public Field: Cls1;

		End Class Cls2;


		Sub Main;

		Var

		    C1: Cls1;

		    C2: Cls2;

		Begin

		    C1 := New Cls1.Create;

		    C2 := New Cls2.Create;

		    C2.Field := C1;

		    C1.ArList := New ArrayList.Create;

		    C1.ArList.Add(C2);

		End Sub Main;


	После выполнения процедуры «Main» в памяти останутся объекты
	 «Cls1», «Cls2» и «ArrayList».


## Пример 2


		Public Class Cls1: Object


		End Class Cls1;


		Sub Main;

		Var ArList1: ArrayList;

		    ArList2: ArrayList;

		    C1: Cls1;

		Begin

		    C1 := New Cls1.Create;

		    ArList1 := New ArrayList.Create;

		    ArList2 := New ArrayList.Create;

		    ArList2.Add(C1);

		    ArList1.Add(ArList2);

		    ArList2.Add(ArList1);

		End Sub Main;


	После выполнения процедуры «Main» в памяти остается экземпляр
	 класса «Cls1». Если в «ArList2» не поместить экземпляр класса «Cls1»,
	 то в памяти останутся только ссылки на системные классы, но их уже
	 видно не будет. Все объекты Fore
	 будут освобождены.


## Пример 3


		Public Class Cls1: Object


		End Class Cls1;


		Class TestForm: Form

		    PopupMenu1: PopupMenu;

		    MenuItem1: MenuItem;

		    MenuItem2: MenuItem;


		    Sub TestFormOnShow(Sender: Object);

		    Var

		        C1: Cls1;

		    Begin

		        C1 := New Cls1.Create;

		        MenuItem2.Data := MenuItem1;

		        MenuItem1.Data := C1;

		    End Sub TestFormOnShow;


		End Class TestForm;


	После окончания работы приложения в памяти остается экземпляр
	 класса «Cls1».


## Пример 4


		Class TestForm: Form

		    Button1: Button;

		    t: Timer;


		    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

		    Begin

		        t := New Timer.Create;

		        t.OnTimer := OnTimer;

		    End Sub Button1OnClick;


		    Sub OnTimer(Sender: Object; Args: IEventArgs);

		    Begin


		    End Sub OnTimer;


		End Class TestForm;


	После окончания работы приложения в памяти останется экземпляр компонента
	 «Timer». Это происходит в результате того, что при динамическом создании
	 для компонента нельзя указать родительский компонент и присутствует
	 привязка к событию.


	См. также:


	[База
	 знаний разработчиков](../KnowledgeBase_Intro.htm) | [Выявление
	 утечек памяти](UiDevEnv.chm::/01_Development_Environment/02_Work_in_Development_Environment/detecting_leaks.htm) | [Окно
	 «Объекты в памяти»](uidevenv.chm::/01_development_environment/03_windows_of_development_environment/object_in_memory.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
