# Конструкторы: Fore

Конструкторы: Fore
-


# Конструкторы


Конструкторы - это члены класса,
 которые предназначены для инициализации новых объектов класса. При каждом
 вызове конструктора создаётся новый объект и возвращается ссылка на него.
 Конструктор может иметь параметры, набор параметров определяет его сигнатуру.
 Использование ключевого слова [Inherited](../02_GeneralInfo/Fore_ClassesAndObjects.htm#inherited)
 в теле конструктора приведёт к вызову указанного конструктора базового
 класса при создании объекта производного класса. Если ключевое слово [Inherited](../02_GeneralInfo/Fore_ClassesAndObjects.htm#inherited)
 не указано, то можно указать один из конструкторов текущего класса. При
 создании объектов перед конструктором указывается ключевое слово New.


Также при определение конструкторов необходимо учитывать ряд имеющихся
 особенностей:


	- Если в классе не определёны собственные конструкторы, то используется
	 стандартный конструктор Create.


	- Если в производном классе не определено ни одного конструктора,
	 то будут наследоваться и использоваться конструкторы родительского
	 класса.


	- Если в производном классе определён конструктор(ы), то для инициализации
	 объектов может использоваться только конструктор(ы) этого класса.
	 Конструкторы родительского класса будут недоступны.


	- В производном классе могут быть переопределены конструкторы
	 родительского класса.


	- Допускается вызов конструктора для уже созданного объекта, при
	 этом будет выполняться только код конструктора без выделения памяти
	 и инициализации полей объекта.


	Class TestObject1: Object

	    _a: Integer;


	    Public Constructor Create(a: Integer = 0);

	    Begin

	        _a := a;

	    End Constructor Create;


	    Public Property A: Integer

	    Get

	    Begin

	        Return _a;

	    End Get

	    End Property A;

	End Class TestObject1;


	Class TestObject2: TestObject1

	    _b: Integer;


	    Public Constructor Create(b: Integer = 0);

	    Begin

	        Inherited Create(100);

	        _b := b;

	    End Constructor Create;


	    Public Property B: Integer

	    Get

	    Begin

	        Return _b;

	    End Get

	    End Property B;

	End Class TestObject2;


	Sub Main;

	Var

	    Obj1: TestObject1;

	    Obj2: TestObject2;

	Begin

	    Obj1 := New TestObject1.Create(100);

	    Obj2 := New TestObject2.Create(Obj1.A + 100);

	    Debug.WriteLine("A: " + Obj2.A.ToString);

	    Debug.WriteLine("B: " + Obj2.B.ToString);

	End Sub Main;


Операция New не требуется для
 классов, которые предоставляют типы данных Boolean, Char,
 Currency, DateTime, Decimal, Double,
 Integer, TimeSpan, Variant,
 String. Переменные этих типов представляют собой не ссылки на объекты,
 а сами объекты. Таким образом, обыкновенное присваивание будет выглядеть:


	Sub Main;

	Var

	    a: Integer;

	Begin

	    a := 100;

	End Sub Main;


См. также:


[Классы
 и объекты](../02_GeneralInfo/Fore_ClassesAndObjects.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
