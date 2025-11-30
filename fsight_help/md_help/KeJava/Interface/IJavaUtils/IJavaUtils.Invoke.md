# IJavaUtils.Invoke

IJavaUtils.Invoke
-


# IJavaUtils.Invoke


## Синтаксис


Invoke(ClassName: String, MethodName: String, MethodSig:
 String, Params: Array): Variant;


## Параметры


ClassName. Наименование Java-класса в файловой
 системе или наименование системного модуля в сигнатуре JNI. При указании
 Java-класса в файловой системе используется файл с расширением *.class.
 Значение параметра является регистрозависимым;


MethodName. Наименование выполняемого
 метода. Значение параметра является регистрозависимым;


MethodSig. JNI-сигнатура метода;


Params. Массив значений параметров,
 передаваемых в метод.


## Описание


Метод Invoke выполняет статический
 Java-метод и возвращает результат его работы.


## Комментарии


Для получения Java-класса в файловой системе и конвертации файла с расширением
 *.java в файл с расширением *.class используйте метод [IJavaUtils.Compile](IJavaUtils.Compile.htm).


## Пример


Для выполнения примера предполагается наличие файла Test.java, расположенного
 в файловой системе по пути: D:/Work/Java/src/. В файле должен содержаться
 код на Java, содержащий следующую реализацию класса:


public class Test {

    public static double staticFunc(double a, double b){

        return (a + b)/2;

    }

}


Добавьте ссылку на системную сборку Java.


			Sub UserProc;

Var

    JUtil: IJavaUtils;

    Result: Variant;

Begin

    JUtil := New JavaUtils.Create;

    JUtil.Compile("D:/Work/Java/src/Test.java");

    Result := JUtil.Invoke("Test", "staticFunc", "(DD)D", 1.0, 2.0);

    Debug.WriteLine(Result);

End Sub UserProc;


При выполнении примера будет выполнена функция на языке Java, осуществляющая
 математическое вычисление на основании значений, переданных в параметрах.
 Результат выполнения функции будет выведен в консоль среды разработки.


См. также:


[IJavaUtils](IJavaUtils.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
