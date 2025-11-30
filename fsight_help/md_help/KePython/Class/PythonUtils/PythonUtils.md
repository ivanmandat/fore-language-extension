# PythonUtils

PythonUtils
-


# PythonUtils


Сборка: Python;


## Описание


Класс PythonUtils реализует
 объект, предназначенный для выполнения функций на языке Python.


## Комментарии


Для выполнения функции на языке Python:


	- Создайте экземпляр класса PythonUtils.


	- У полученного объекта с помощью метода [AddFolderToPythonPath](../../Interface/IPythonUtils/IPythonUtils.AddFolderToPythonPath.htm)
	 задайте путь до модулей Python.


	- С помощью метода [Invoke](../../Interface/IPythonUtils/IPythonUtils.Invoke.htm)
	 выполнить функцию Python и получите результат.


## Методы объекта класса, унаследованные от [IPythonUtils](../../Interface/IPythonUtils/IPythonUtils.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AddFolderToPythonPath](../../Interface/IPythonUtils/IPythonUtils.AddFolderToPythonPath.htm)
		 Метод AddFolderToPythonPath
		 добавляет указанную папку в список папок для поиска модулей Python.


		 ![](../../Sub_Image.gif)
		 [Invoke](../../Interface/IPythonUtils/IPythonUtils.Invoke.htm)
		 Метод Invoke выполняет
		 функцию на языке Python и возвращает результат её работы.


		 ![](../../Sub_Image.gif)
		 [InvokeModule](../../Interface/IPythonUtils/IPythonUtils.InvokeModule.htm)
		 Метод InvokeModule
		 выполняет функцию, хранящуюся в [Python-модуле](UiDevEnv.chm::/01_Development_Environment/02_Work_in_Development_Environment/DevEnv_Object/python_module.htm),
		 и возвращает результат её работы.


См. также:


[Классы
 сборки Python](../KePython_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
