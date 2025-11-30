# IJavaUtils.InvokeModule

IJavaUtils.InvokeModule
-


# IJavaUtils.InvokeModule


## Синтаксис


InvokeModule(ModuleId: String, ClassName: String,
 MethodName: String, MethodSig: String, Params: Array): Variant;


## Параметры


ModuleId. Идентификатор Java-модуля
 в репозитории;


ClassName. Наименование класса.
 Значение параметра является регистрозависимым;


MethodName. Наименование выполняемого
 метода. Значение параметра является регистрозависимым;


MethodSig. JNI-сигнатура метода;


Params. Массив значений параметров,
 передаваемых в метод.


## Описание


Метод InvokeModule выполняет
 статический метод, хранящийся в [Java-модуле](UiDevEnv.chm::/01_Development_Environment/02_Work_in_Development_Environment/DevEnv_Object/Java_module.htm),
 и возвращает результат его работы.


## Пример


Для выполнения примера предполагается наличие в репозитории Java-модуля
 с идентификатором MOD_JAVA. В модуле реализован следующий класс:


public class Test {

    public static double staticFunc(double a, double b){

        return (a + b)/2;

    }

}


Добавьте ссылки на системные сборки: Java, Metabase.


			Sub UserProc;

Var

    jUtils: IJavaUtils;

    Result: Variant;

Begin

    jUtils := New JavaUtils.Create;

    Result := jUtils.InvokeModule("MOD_JAVA", "Test", "staticFunc", "(DD)D", 1.0, 2.0);

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
