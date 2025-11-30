# Использование сборки Java при разработке

Использование сборки Java при разработке
-


# Использование сборки Java при разработке


Сборка Java предназначена для выполнения функций на языке Java, получения
 результатов их работы и дальнейшей работы с полученными данными. В зависимости
 от сложности и способа реализации выполняемого Java-кода в Fore для выполнения
 можно использовать следующие методы:


	- [Java.Invoke](../Class/Java/Java.Invoke.htm) или
	 [Java.InvokeModule](../Class/Java/Java.InvokeModule.htm);


	- [IJavaUtils.Invoke](../Interface/IJavaUtils/IJavaUtils.Invoke.htm)
	 или [IJavaUtils.InvokeModule](../Interface/IJavaUtils/IJavaUtils.InvokeModule.htm);


	- [IJavaClass.Invoke](../Interface/IJavaClass/IJavaClass.Invoke.htm);


	- [IJavaClassObject.Invoke](../Interface/IJavaClassObject/IJavaClassObject.Invoke.htm)
	 или [IJavaClassObject.InvokeNonvirtual](../Interface/IJavaClassObject/IJavaClassObject.InvokeNonvirtual.htm).


Для выполнения Java-методов потребуется сформировать их JNI-сигнатуру.
 В таблице ниже представлены сигнатуры основных типов, которые используются
 виртуальной машиной Java:


		 Сигнатура
		 Тип Java


		 Z
		 boolean


		 B
		 byte


		 C
		 char


		 S
		 short


		 I
		 int


		 J
		 long


		 F
		 float


		 D
		 double


		 L<идентификатор>;
		 Квалифицированный идентификатор класса


		 [<тип>
		 Массив заданного типа


		 (<типы параметров>)<тип результата>
		 Функция, возвращающая какое-либо значение


		 (<типы параметров>)V
		 Метод, не возвращающий значение


## Выполнение функций Java


Статический метод [Java.Invoke](../Class/Java/Java.Invoke.htm)
 или [Java.InvokeModule](../Class/Java/Java.InvokeModule.htm)
 используется для выполнения статических Java-методов.


Код на Java:


public class Test {

    public static double staticFunc(double a, double b){

        return (a + b)/2;

    }

}


Код на Fore, реализованный с помощью [Java.Invoke](../Class/Java/Java.Invoke.htm):


	Var

	    Result: Variant;

	Begin

	    Result := Java.Invoke("Test", "staticFunc", "(DD)D", 1.0, 2.0);


Для предварительной проверки Java-кода на наличие ошибок компиляции
 можно использовать метод [IJavaUtils.Compile](../Interface/IJavaUtils/IJavaUtils.Compile.htm).


	Var

	    JUtil: IJavaUtils;

	    Result: Variant;

	Begin

	    JUtil := New JavaUtils.Create;

	    Try

	        JUtil.Compile("c:/Work/Java/src/Test.java");

	    Except On e: Exception Do

	        Debug.WriteLine("Ошибка компиляции: " + e.Message);

	    End Try;

	    Result := JUtil.Invoke("Test", "staticFunc", "(DD)D", 3.0, 4.0);


## Обработка исключительных ситуаций


Обработка всех исключительных ситуаций осуществляются с помощью оператора
 [Try…Except…Finally…End
 Try](Fore.chm::/10_Processing_Exceptions/processing_the_exceptions.htm).
 Для обработки ошибок, которые могут возникнуть при компиляции или выполнении
 Java-метода, используется класс [JavaException](../Class/JavaException/JavaException.htm).


Для примера изменим код выше указанной функции следующим образом:


Код на Java:


public class Test {

    public static double staticFunc(double a, double b, double c){

        if (c==0)

        {

            throw new java.lang.ArithmeticException("Division by zero (parameter c=0)");

        }

        return (a + b)/c;

    }

}


Код на Fore:


	Var

	    JUtil: IJavaUtils;

	    Result: Variant;

	Begin

	    JUtil := New JavaUtils.Create;

	    Try

	        Result := JUtil.Invoke("Test", "staticFunc", "(DDD)D", 1.0, 2.0, 0.0);

	        Debug.WriteLine(Result);

	    Except On e: JavaException Do

	        Debug.WriteLine(e.Message);

	    End Try;


Данный код выполняет указанную выше функцию staticFunc с набором параметров.
 При выполнении кода осуществляется обработка возможных исключительных
 ситуаций с помощью оператора Try…Except…Finally…End Try. Если возникнет
 ошибка, то текст ошибки будет выведен в консоль среды разработки.


См. также:


[Введение
 в сборку Java](Java_Intro.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
