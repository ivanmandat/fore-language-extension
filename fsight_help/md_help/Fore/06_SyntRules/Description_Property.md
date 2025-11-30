# Свойства: Fore

Свойства: Fore
-


# Свойства


Свойство - это отдельный вид членов класса, который предоставляют механизм
 доступа и изменения внутренних полей с данными.


Доступ к свойствам объекта определяется спецификаторами свойства - Get (свойство доступно на чтение)
 или Set (свойство доступно на
 запись). В языке Fore поддерживается
 два синтаксиса для описания свойств (смотрите пример ниже). При использовании
 нового способа объявления, для изменения значения свойства в процедуре
 Set необходимо использовать ключевое
 слово Value. Если свойство имеет
 параметры, то их значения также могут использоваться при получении/изменении
 значения свойства. Также учитываются значения параметров по умолчанию.
 Доступ к свойству может переадресовываться к полю объекта (если в качестве
 идентификатора указано имя поля) или инициировать вызов метода объекта
 (если в качестве идентификатора указано имя метода). Если при записи в
 свойство происходит вызов метода, то методу последним параметром передаётся
 значение для записи. При переопределении свойства в дочерних классах Get и Set
 часть базового свойства может быть вызвана с помощью ключевого слова [Inherited](../02_GeneralInfo/Fore_ClassesAndObjects.htm#inherited).


Также свойство может быть индексированным. В этом случае в качестве
 идентификаторов доступа к свойству должны быть указаны имена методов.
 При обращении к индексированному свойству первыми параметрами методу передаются
 значения индексов.


Директива Default устанавливается
 только для индексированных свойств и указывает, что данное свойство используется
 по умолчанию. То есть вместо обращения ClsObj.Prop(Index)
 можно использовать обращение ClsObj(Index).
 В рамках класса может быть только одно свойство по умолчанию.


## Пример


В примере объявляются два класса, реализующих пользовательские коллекции
 строковых данных. Размер коллекции будет указываться при инициализации
 новой переменной. Для доступа к элементам коллекции используется свойство
 Item. Данное свойство доступно
 на чтение и запись, и объявлено свойством по умолчанию (доступ к данному
 свойству возможен без указания самого свойства, при указании только индекса
 необходимого элемента). Для доступа ко всей коллекции используется свойство
 Items, доступное только для чтения.
 Все значения будут храниться во внутреннем символьном массиве PropValue.
 В классе OldArray используется
 старый способ объявления свойств, в классе NewArray
 - новый. Работа с данными коллекциями в коде ни чем не отличается.


	 Новый
	 способ
	 Старый
	 способ


			Class NewArray: Object

			    Private PropValue: Array Of String;


			    Public Constructor Create(Length: Integer);

			    Begin

			        PropValue := New String[Length];

			    End Constructor Create;


			    Public Property Item(i: Integer): String

			        Get

			        Begin

			            Return PropValue[i];

			        End Get

			        Set

			        Begin

			            PropValue[i] := Value;

			        End Set

			    End Property Item; Default; //Свойство по умолчанию


			    Public Property Items: Array Of String

			        Get

			        Begin

			            Return PropValue;

			        End Get

			    End Property Items;

			End Class NewArray;


			Class OldArray: Object

			     Private PropValue: Array Of String;


			     Public Constructor Create(Length: Integer);

			     Begin

			         PropValue := New String[Length];

			     End Constructor Create;


			     Sub Set_Item(i: Integer; s: String);

			     Begin

			         PropValue[i] := s;

			     End Sub Set_Item;


			     Function Get_Item(i: Integer): String;

			     Begin

			         Return PropValue[i];

			     End Function Get_Item;


			     //Свойство по умолчанию

			    Public Property Item(i: Integer): String Get Get_Item Set Set_Item; Default;


			     Function Get_Items: Array Of String;

			     Begin

			         Return PropValue;

			     End Function Get_Items;


			     Public Property Items: Array Of String Get Get_Items;

			End Class OldArray;


Пример использования классов с новым и старым способом объявления свойств:


	Sub Main;

	Var

	    Arr: NewArray;

	    Arr1: OldArray;

	    s: String;

	    i: Integer;

	Begin

	    Arr := New NewArray.Create(2);

	    Arr1 := New OldArray.Create(2);

	    Arr(0) := "Первый элемент";

	    Arr.Item(1) := "Второй элемент";

	    Arr1(0) := "Первый элемент второго массива";

	    Arr1.Item(1) := "Второй элемент второго массива";

	    //Элементы первого массива

	    For i := 0 To Arr.Items.Length - 1 Do

	        Debug.WriteLine(Arr.Item(i));

	    End For;

	    //Элементы второго массива

	    For Each s In Arr1.Items Do

	        Debug.WriteLine(s);

	    End For;

	End Sub Main;


После запуска процедуры Main будут созданы два экземпляра пользовательских
 коллекций: один экземпляр коллекции NewArray и один OldArray. Размер каждой
 коллекции - два элемента. Так как свойство Item установлено свойством
 по умолчанию, то установка его значений возможна без указания наименования
 самого свойства. Значения элементов будут установлены различными способами.
 Для проверки установленные значения элементов коллекций будут выведены
 в консоль среды разработки.


Пример переопределения свойства в дочернем классе с вызовом Get/Set-частей
 базового свойства:


	Class BaseClass: Object

	    Private PropValue: Double;

	    // Базовое свойство

	    Public Property Size: Double

	        Get

	        Begin

	            Return PropValue;

	        End Get

	        Set

	        Begin

	            PropValue := Value;

	        End Set

	    End Property Size;

	End Class BaseClass;


	Class MainClass: BaseClass

	    //Переопределённое свойство, вызывающее Get и Set базового свойства

	    Public Property Size: Double

	        Get

	        Begin

	            Return Inherited Size

	        End Get

	        Set

	        Begin

	            Inherited Size := Value;

	        End Set

	    End Property Size;

	End Class MainClass;


Пример использования ключевого слова Value и параметров свойства:


	Public Class PropertyClass: Object

	    _val: variant = Null;


	    Public Property DefaultValue(DefValue: Variant = Null): Variant

	    Get

	    Begin

	        // Если текущее сохранённое значение свойства Null, то вернём значение параметра DefValue в качестве значения свойства

	        Return _val = Null ? DefValue : _val;

	    End Get

	    Set

	    Begin

	        // Если устанавливаемое значение свойства Null, то сохраним значения параметра DefValue в качестве значения свойства

	        _val := Value = Null ? DefValue : Value;

	    End Set

	    End Property DefaultValue;

	End Class PropertyClass;


См. также:


[Классы
 и объекты](../02_GeneralInfo/Fore_ClassesAndObjects.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
