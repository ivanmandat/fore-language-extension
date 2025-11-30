# IPythonUtils

IPythonUtils
-


# IPythonUtils


Сборка: Python;


## Описание


Интерфейс IPythonUtils предназначен
 для выполнения функций на языке Python.


## Иерархия наследования


IPythonUtils


## Комментарии


Для выполнения функций на языке Python выполните следующие действия:


	- Создайте экземпляр класса [PythonUtils](../../Class/PythonUtils/PythonUtils.htm).


	- Для полученного объекта с помощью метода [AddFolderToPythonPath](IPythonUtils.AddFolderToPythonPath.htm)
	 добавьте папки, в которых расположены модули Python.


	- Выполните метод [Invoke](IPythonUtils.Invoke.htm),
	 указав наименование модуля, функции и необходимые параметры. Результатом
	 метода [Invoke](IPythonUtils.Invoke.htm) будет результат
	 выполняемой функции Python. Полученный результат может использоваться
	 в дальнейшем в прикладном коде на Fore.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AddFolderToPythonPath](IPythonUtils.AddFolderToPythonPath.htm)
		 Метод AddFolderToPythonPath
		 добавляет указанную папку в список папок для поиска модулей Python.


		 ![](../../Sub_Image.gif)
		 [Invoke](IPythonUtils.Invoke.htm)
		 Метод Invoke выполняет
		 функцию на языке Python и возвращает результат её работы.


		 ![](../../Sub_Image.gif)
		 [InvokeModule](IPythonUtils.InvokeModule.htm)
		 Метод InvokeModule
		 выполняет функцию, хранящуюся в [Python-модуле](UiDevEnv.chm::/01_Development_Environment/02_Work_in_Development_Environment/DevEnv_Object/python_module.htm),
		 и возвращает результат её работы.


См. также:


[Интерфейсы
 сборки Python](../KePython_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
