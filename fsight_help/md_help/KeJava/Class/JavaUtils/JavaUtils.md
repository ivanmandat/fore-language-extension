# JavaUtils

JavaUtils
-


# JavaUtils


Сборка: Java;


## Описание


Класс JavaUtils реализует объект,
 предназначенный для выполнения функций на языке Java.


## Комментарии


Для выполнения функции на языке Java:


	- Создайте экземпляр класса JavaUtils.


	- С помощью метода [IJavaUtils.Compile](../../Interface/IJavaUtils/IJavaUtils.Compile.htm)
	 скомпилируйте файл с классами/архив.


	- Если ошибки компиляции отсутствуют, то с помощью метода [IJavaUtils.Invoke](../../Interface/IJavaUtils/IJavaUtils.Invoke.htm)
	 выполните функцию Java и получите результат.


## Методы объекта класса, унаследованные от [IJavaUtils](../../Interface/IJavaUtils/IJavaUtils.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Compile](../../Interface/IJavaUtils/IJavaUtils.Compile.htm)
		 Метод Compile компилирует
		 указанный файл с Java-кодом.


		 ![](../../Sub_Image.gif)
		 [Invoke](../../Interface/IJavaUtils/IJavaUtils.Invoke.htm)
		 Метод Invoke выполняет
		 статический Java-метод и возвращает результат его работы.


		 ![](../../Sub_Image.gif)
		 [InvokeModule](../../Interface/IJavaUtils/IJavaUtils.InvokeModule.htm)
		 Метод InvokeModule
		 выполняет статический метод, хранящийся в [Java-модуле](UiDevEnv.chm::/01_Development_Environment/02_Work_in_Development_Environment/DevEnv_Object/Java_module.htm),
		 и возвращает результат его работы.


См. также:


[Классы
 сборки Java](../KeJava_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
