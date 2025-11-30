# IWinProcess

IWinProcess
-


# IWinProcess


Сборка: Ui;


## Описание


Интерфейс IWinProcess содержит
 свойства и методы для запуска приложений, имеющих визуальный интерфейс,
 и получения результата их выполнения.


## Иерархия наследования


           [IProcess](KeSomHost.chm::/Interface/IProcess/IProcess.htm)


           IWinProcess


## Комментарии


Для запуска приложения или открытия какого-либо файла в приложении инициализируйте
 объект класса [WinProcess](../../Class/WinProcess/WinProcess.htm),
 настройте параметры запуска (объект класса [WinShellExecuteInfo](../../Class/WinShellExecuteInfo/WinShellExecuteInfo.htm))
 и выполните метод [IProcess.Start](KeSomHost.chm::/Interface/IProcess/IProcess.Start.htm).
 Для остановки приложения используйте метод [IWinProcess.CloseMainWindow](IWinProcess.CloseMainWindow.htm).


Реализация IWinProcess позволяет
 запускать приложения только в ОС Windows.


## Свойства, унаследованные от [IProcess](KeSomHost.chm::/Interface/IProcess/IProcess.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ExitCode](KeSomHost.chm::/Interface/IProcess/IProcess.ExitCode.htm)


		 Свойство ExitCode
		 возвращает код завершения процесса.


		 ![](../../Property_Image.gif)
		 [HasExited](KeSomHost.chm::/Interface/IProcess/IProcess.HasExited.htm)


		 Свойство HasExited
		 возвращает признак завершения выполнения процесса.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CloseMainWindow](IWinProcess.CloseMainWindow.htm)
		 Метод CloseMainWindow
		 закрывает процесс, имеющий пользовательский интерфейс, посылая
		 сообщение о закрытии основному окну.


## Методы, унаследованные от [IProcess](KeSomHost.chm::/Interface/IProcess/IProcess.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Kill](KeSomHost.chm::/Interface/IProcess/IProcess.Kill.htm)


		 Метод Kill останавливает
		 выполнение процесса.


		 ![](../../Sub_Image.gif)
		 [Start](KeSomHost.chm::/Interface/IProcess/IProcess.Start.htm)


		 Метод Start запускает
		 процесс.


См. также:


[Интерфейсы
 сборки Ui](../Ui_Intefrace.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
