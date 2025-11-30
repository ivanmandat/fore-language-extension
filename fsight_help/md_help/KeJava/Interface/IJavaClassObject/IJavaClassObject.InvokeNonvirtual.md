# IJavaClassObject.InvokeNonvirtual

IJavaClassObject.InvokeNonvirtual
-


# IJavaClassObject.InvokeNonvirtual


## Синтаксис


InvokeNonvirtual(Class_: [IJavaClass](../IJavaClass/IJavaClass.htm),
 MethodName: String, MethodSig: String, Params: Array): Variant;


## Параметры


Class_. Класс, в котором расположена
 реализация вызываемого метода;


MethodName. Наименование выполняемого
 метода;


MethodSig. JNI-сигнатура метода;


Params. Массив значений параметров,
 передаваемых в метод.


## Описание


Метод InvokeNonvirtual выполняет
 невиртуальный метод, реализация которого находится в указанном Java-классе
 и возвращает результат его работы.


См. также:


[IJavaClassObject](IJavaClassObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
