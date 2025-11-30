# JavaInvokeModule_

JavaInvokeModule_
-


# JavaInvokeModule_


## Синтаксис


JavaInvokeModule_(ModuleId: String, ClassName: String,
 MethodName: String, MethodSig: String, Params: Array)


## Параметры


ModuleId. Идентификатор Java-модуля
 в репозитории;


ClassName. Наименование класса.
 Значение параметра является регистрозависимым;


MethodName. Наименование выполняемого
 метода. Значение параметра является регистрозависимым;


MethodSig. JNI-сигнатура метода;


Params. Параметры, передаваемые
 в метод. Значения параметров метода могут быть переданы в виде отдельного
 массива или перечислены через запятую. Если выполняемый метод не содержит
 входных параметров, то Params
 можно не указывать.


## Описание


Метод JavaInvokeModule_
 выполняет статический метод, хранящийся в [Java-модуле](UiDevEnv.chm::/01_Development_Environment/02_Work_in_Development_Environment/DevEnv_Object/Java_module.htm),
 и возвращает результат его работы.


## Пример


Рассмотрим код на Java, содержащийся в Java-модуле с идентификатором
 MOD_JAVA:


public class math {

    public static double staticFunc(double a, double b){

        return (a + b)/2;

    }

}


В таблице приведены примеры формул с использованием метода JavaInvokeModule_:


		 Формула
		 Результат
		 Описание


		 =JavaInvokeModule_("MOD_JAVA", "math",
		 "staticFunc", "(DD)D", 4.0, 2.0)
		 3.0
		 В классе с наименованием «math» выполняется арифметическая
		 функция «staticFunc». В функции заданы параметры вещественного
		 типа - переменная а принимает значение 4.0, переменная b принимает
		 значение 2.0. Метод возвращает результат расчёта арифметической
		 функции.


		 =JavaInvokeModule_("MOD_JAVA", "math",
		 "staticFunc", "(DD)D", С3, С4)
		 5.0
		 В классе с наименованием «math» выполняется арифметическая
		 функция «staticFunc». В функции заданы параметры вещественного
		 типа - переменная а принимает значение, указанное в ячейке С3,
		 переменная b принимает значение, указанное в ячейке С4. В ячейке
		 С3 содержится значение 4.0, в ячейке С4 - 6.0. Метод возвращает
		 результат расчёта арифметической функции.


См. также:


[Функции, доступные в редакторе
 выражения](../../Expression_editor_func.htm) | [Работа с Java](Methods_Java.htm)
 | [Java.InvokeModule](KeJava.chm::/Class/Java/Java.InvokeModule.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
