# Классы: Fore

Классы: Fore
-


# Классы


	Язык программирования Fore является объектно-ориентированным. Классы
	 используются для описания объектов, хранения их данных и реализации
	 алгоритма работы. Определение класса включает в себя константы и поля,
	 в которых хранятся данные объекта, и члены класса, которые оперируют
	 этими данными: [конструкторы](../05_Classes/NewObject.htm),
	 [свойства](../06_SyntRules/Description_Property.htm), методы
	 ([процедуры/функции](../06_SyntRules/Fore_Synt_ProcAndFunc.htm))
	 и [события](../06_SyntRules/Fore_Deleg.htm).


	Каждый член класса, а также сам класс, может иметь [модификатор
	 доступа](../06_SyntRules/Fore_Synt_Visible.htm), определяющий возможность его использования в других блоках
	 кода.


		Public Class TUserInfo: Object

		    //Поля для хранения значений внутри объекта класса

		    _FirstName, _LastName: String;


		    //Конструктор объекта

		    Public Constructor Create(Name: String = "");

		    Begin

		        _FirstName := Name;

		    End Constructor Create;


		    //Свойства объекта

		    Public Property FirstName: String

		        Get

		        Begin

		            Return _FirstName

		        End Get

		        Set

		        Begin

		            _FirstName := Value

		        End Set

		    End Property FirstName;


		    Public Property LastName: String

		        Get

		        Begin

		            Return _LastName

		        End Get

		        Set

		        Begin

		            _LastName := Value

		        End Set

		    End Property LastName;


		    //Методы, доступные только внутри класса

		    Sub Serialize;

		    Begin

		        //...

		    End Sub Serialize;


		    Sub Deserialize;

		    Begin

		        //...

		    End Sub Deserialize;

		End Class TUserInfo;


## Наследование классов


	Для определения пользовательских классов необходимо их наследовать
	 от некоторого класса. В качестве родительского класса может выступать
	 базовый класс [Object](ForeSys.chm::/Class/Object/Object.htm)
	 или уже определённый пользовательский. По умолчанию класс имеет модификатор
	 доступа [Private](../06_SyntRules/Fore_Synt_Visible.htm).
	 Класс может реализовывать ряд интерфейсов. Это означает, что класс
	 должен содержать реализацию всех членов, описанных в интерфейсах.
	 Класс, наследуемый от какого-либо класса, также наследует всего члены
	 родительского класса. Наследуется также и область видимости.


	Предварительное описание классов отсутствует. Любой класс может
	 быть использован, если его описание встречается в данном модуле или
	 в одном из импортируемых. Но при этом, предок любого класса должен
	 быть определен до того, как от него будут наследоваться классы-потомки.


## Inherited


	Когда дочерний класс содержит член (метод или свойство) с той же
	 сигнатурой, что и в родительском классе, этот член считается переопределённым.
	 Это значит, что при обращении к этому члену через объект дочернего
	 класса будет использоваться новая, переопределённая версия, а не та,
	 которая определена в родительском классе. При переопределении член
	 класса должен иметь [уровень
	 доступа](../06_SyntRules/Fore_Synt_Visible.htm) не меньше, чем уровень доступа в родительском классе.


	Если в дочернем классе нужно вызвать реализацию члена из родительского
	 класса, то для этого используют ключевое слово Inherited.


		Sub Main;

		Var

		    cA, cB: A;

		Begin

		    // Класс A

		    cA := New A.Create;

		    cA.TestSub;

		    cA := New A.CreateA(50);

		    Debug.WriteLine("cA.TestProp = " + cA.TestProp.ToString);

		    cA.TestProp := 150;

		    Debug.WriteLine("------------");

		    // Класс B

		    cB := New B.CreateB(200);

		    cB.TestSub;

		    Debug.WriteLine("cB.TestProp = " + cB.TestProp.ToString);

		    cB.TestProp := 250;

		End Sub Main;


		Public Class A: Object

		    _TestProp: Integer;


		    Public Constructor Create;

		    Begin

		        Debug.WriteLine("Constructor Create. Class A");

		    End Constructor Create;


		    Public Constructor CreateA(A: Integer);

		    Begin

		        Create; // Вызов конструктора Create

		        _TestProp := A;

		        Debug.WriteLine("Constructor CreateA. Class A. Param = " + A.ToString);

		    End Constructor CreateA;


		    Public Property TestProp: Integer

		        Get

		        Begin

		            Debug.WriteLine("Get TestProp. Class A");

		            Return _TestProp;

		        End Get

		        Set

		        Begin

		            Debug.WriteLine("Set TestProp. Class A");

		            _TestProp := Value;

		        End Set

		    End Property TestProp;


		    Public Sub TestSub;

		    Begin

		        Debug.WriteLine("TestSub. Class A");

		    End Sub TestSub;

		End Class A;


		Public Class B: A

		    _TestProp: Integer;


		    Public Constructor CreateB(B: Integer);

		    Begin

		        Inherited CreateA(100); // Вызов конструктора из класса A

		        _TestProp := B;

		        Debug.WriteLine("Constructor CreateB. Class B. Param = " + B.ToString);

		    End Constructor CreateB;


		    Public Property TestProp: Integer

		        Get

		        Begin

		            Inherited TestProp; // Вызов get-части свойства из класса A

		            Debug.WriteLine("Get TestProp. Class B");

		            Return _TestProp;

		        End Get

		        Set

		        Begin

		            Inherited TestProp(Value); // Вызов set-части свойства из класса A

		            Debug.WriteLine("Set TestProp. Class B");

		            _TestProp := Value;

		        End Set

		    End Property TestProp;


		    Public Sub TestSub;

		    Begin

		        Inherited TestSub; // Вызов процедуры TestSub из класса A

		        Debug.WriteLine("TestSub. Class B");

		    End Sub TestSub;

		End Class B;


## Self


	Для того, чтобы внутри метода класса получить ссылку на объект,
	 для которого будет вызван данный метод, можно использовать идентификатор
	 Self. Предопределенный идентификатор
	 Self имеет смысл только для
	 методов класса, попытки его использования в других местах программы
	 будут приводить к ошибке компиляции.


## Статические и завершённые члены класса


	Директива Shared указывает
	 на то, что данный метод или поле являются методом или полем класса
	 (статические члены класса). Статические методы и поля не являются
	 частью определенного экземпляра класса. Вне зависимости от того, какое
	 количество экземпляров класса создано, существует только одна копия
	 статического поля. Статические поля начинают свое существование после
	 первого обращения к ним и прекращает при завершении существования
	 домена приложения.


	Примечание.
	 Значения статических полей уникальны в рамках разных соединений с
	 одним и тем же репозиторием.


	В нестатических членах могут использоваться любые статические и
	 нестатические члены класса. В статических членах могут использоваться
	 только статические члены класса. Для обращение к статическим членам
	 внутри класса можно использовать идентификатор Self
	 или просто указывать наименование статического члена.


	Директива Final указывает
	 на то, что данный метод не может быть переопределён в потомках данного
	 класса.


		Class SampleClass: Object

		    Private Shared Temp: Integer;


		    Public Shared Sub Test;

		    Begin

		        Temp := TestEx(1);

		        //...

		    End Sub Test;


		    Public Shared Function TestEx(Index: Integer): Integer;

		    Var

		        i: Integer;

		    Begin

		        //...

		        Return i;

		    End Function TestEx;


		    Public Sub CreateSettings(Count: Integer);

		    Begin

		        //...

		        If Count < 1 Then

		            //Вызов метода через Self

		            Self.Test;

		        Else

		            //Вызов метода без использования Self

		            Temp := TestEx(Count);

		        End If;

		    End Sub CreateSettings;


		    Public Final Property GetValue: Integer

		        Get

		        Begin

		            //...

		            Temp := Correct(Temp);

		            //...

		            Return Temp;

		        End Get

		    End Property GetValue;


		    Private Function Correct(Value: Integer): Integer;

		    Var

		        i: Integer;

		    Begin

		        //...

		        Return i;

		    End Function Correct;

		End Class SampleClass;


## События класса


	В качестве типа событий могут использоваться только [делегаты](../06_SyntRules/Fore_Deleg.htm).
	 Делегат определяет, какую сигнатуру должен иметь метод, чтобы являться
	 обработчиком данного события. Для событий допустима только операция
	 присваивания, когда в правой части находится имя метода. Сигнатура
	 метода при этом должна совпадать с сигнатурой делегата. Операция присваивания
	 означает назначение нового обработчика события.


См. также:


[Руководство
 по языку Fore](../Fore_Title.htm) | [Создание
 объектов](../05_Classes/NewObject.htm) | [Свойства
 класса](../06_SyntRules/Description_Property.htm) | [Делегаты и события](../06_SyntRules/Fore_Deleg.htm)
 | [Интерфейсы](../06_SyntRules/Fore_Interfaces.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
