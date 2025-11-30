# IJavaClassObject.Invoke

IJavaClassObject.Invoke
-


# IJavaClassObject.Invoke


## Синтаксис


Invoke(MethodName: String, MethodSig: String, Params:
 Array): Variant;


## Параметры


MethodName.
 Наименование выполняемого метода. Значение параметра является регистрозависимым;


MethodSig. JNI-сигнатура метода;


Params. Массив значений параметров,
 передаваемых в метод.


## Описание


Метод Invoke выполняет метод
 для экземпляра Java-класса и возвращает результат его работы.


## Комментарии


Для выполнения метода файл с расширением *.class должен быть расположен
 по пути, который задается с помощью строкового параметра Options в ветке
 реестра [HKEY_CURRENT_USER\SOFTWARE\Foresight\Foresight Analytics Platform\10.0\DevEnv\Java]. Для
 получения подробной информации обратитесь к разделу «[Подключение
 дополнительных модулей к «Форсайт. Аналитическая платформа](UiNav.chm::/02_Navigator/CommonSettings/Integration.htm#java)».


Для получения Java-класса в файловой системе и конвертации файла с расширением
 *.java в файл с расширением *.class используйте метод [IJavaUtils.Compile](../IJavaUtils/IJavaUtils.Compile.htm).


## Пример


Для выполнения примера предполагается наличие файла Test.class. Файл
 должен быть расположен в файловой системе по заданному пути в реестре
 и содержать скомпилированную версию следующего кода на Java:


public class Test {

    public int nonStaticFunc(int a, int b){

        return a + b;

    }

}


Добавьте ссылку на системную сборку Java.


			Sub UserProc;

Var

    Cls: IJavaClass;

    ObjCls: IJavaClassObject;

    Result: Variant;

Begin

    Cls := New JavaClass.Create("Test");

    ObjCls := Cls.CreateObject("()V");

    Result := ObjCls.Invoke("nonStaticFunc", "(II)I", 7, 8);

    Debug.WriteLine(Result);

End Sub UserProc;


При выполнении примера будет создан экземпляр Java-класса. Для этого
 класса будет выполнена функция, осуществляющая математическое вычисление
 на основании значений, переданных в параметрах. Результат выполнения функции
 будет выведен в консоль среды разработки.


См. также:


[IJavaClassObject](IJavaClassObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
