# IShellExecuteInfo

IShellExecuteInfo
-


# IShellExecuteInfo


Сборка: Host;


## Описание


Интерфейс IShellExecuteInfo
 предназначен для настройки параметров запуска приложений.


## Комментарии


Для настройки параметров запуска инициализируйте объект класса [ShellExecuteInfo](../../Class/ShellExecuteInfo/ShellExecuteInfo.htm).
 Заданные настройки передайте в метод [IProcess.Start](../IProcess/IProcess.Start.htm)
 для запуска приложения.


Интерфейс является базовым для интерфейса [IWinShellExecuteInfo](UiLib.chm::/Interface/IWinShellExecuteInfo/IWinShellExecuteInfo.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Directory](IShellExecuteInfo.Directory.htm)


		 Свойство Directory
		 определяет рабочий каталог, из которого открывается файл (приложение).


		 ![](../../Property_Image.gif)
		 [File](IShellExecuteInfo.File.htm)


		 Свойство File определяет
		 наименование файла (приложения), который необходимо открыть.


		 ![](../../Property_Image.gif)
		 [Parameters](IShellExecuteInfo.Parameters.htm)


		 Свойство Parameters
		 определяет параметры командной строки, с которыми открывается
		 файл (приложение).


		 ![](../../Property_Image.gif)
		 [WaitTimeout](IShellExecuteInfo.WaitTimeout.htm)


		 Свойство WaitTimeout
		 определяет время, в течение которого будет ожидаться завершение
		 работы запускаемого приложения.


		 ![](../../Property_Image.gif)
		 [WaitToTerminate](IShellExecuteInfo.WaitToTerminate.htm)


		 Свойство WaitToTerminate
		 определяет признак ожидания завершения работы запускаемого приложения.


См. также:


[Интерфейсы
 сборки Host](../KeHost_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
