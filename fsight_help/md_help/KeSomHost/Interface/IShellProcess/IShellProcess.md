# IShellProcess

IShellProcess
-


# IShellProcess


Сборка: Host;


## Описание


Интерфейс IShellProcess предназначен
 для запуска консольных приложений и получения результата их выполнения.


## Иерархия наследования


           [IProcess](../IProcess/IProcess.htm)


           IShellProcess


## Комментарии


Для запуска консольного приложения инициализируйте объект класса [ShellProcess](../../Class/ShellProcess/ShellProcess.htm),
 настройте параметры запуска (объект класса [ShellExecuteInfo](../../Class/ShellExecuteInfo/ShellExecuteInfo.htm))
 и выполните метод [IProcess.Start](../IProcess/IProcess.Start.htm).
 Приложение будет выполняться в фоновом режиме. Для остановки приложения
 используйте метод [IProcess.Kill](../IProcess/IProcess.Kill.htm).


Реализация IShellProcess позволяет
 запускать приложения в ОС Windows и Linux.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Error](IShellProcess.Error.htm)


		 Свойство Error определяет
		 содержимое стандартного потока ошибок.


		 ![](../../Property_Image.gif)
		 [Output](IShellProcess.Output.htm)


		 Свойство Output
		 определяет содержимое стандартного потока вывода.


## Свойства, унаследованные от [IProcess](../IProcess/IProcess.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ExitCode](../IProcess/IProcess.ExitCode.htm)


		 Свойство ExitCode
		 возвращает код завершения процесса.


		 ![](../../Property_Image.gif)
		 [HasExited](../IProcess/IProcess.HasExited.htm)


		 Свойство HasExited
		 возвращает признак завершения выполнения процесса.


## Методы, унаследованные от [IProcess](../IProcess/IProcess.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Kill](../IProcess/IProcess.Kill.htm)


		 Метод Kill останавливает
		 выполнение процесса.


		 ![](../../Sub_Image.gif)
		 [Start](../IProcess/IProcess.Start.htm)


		 Метод Start запускает
		 процесс.


См. также:


[Интерфейсы
 сборки Host](../KeHost_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
