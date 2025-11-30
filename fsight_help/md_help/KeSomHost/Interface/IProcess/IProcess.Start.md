# IProcess.Start

IProcess.Start
-


# IProcess.Start


## Синтаксис


Start(RawInfo: [IShellExecuteInfo](../IShellExecuteInfo/IShellExecuteInfo.htm));


## Параметры


RawInfo. Информация о запускаемом
 процессе.


## Описание


Метод Start запускает процесс.


## Пример


Для выполнения примера предполагается наличие консольного приложения
 start, расположенного в папке «D:\Work\Project\» для ОС Windows и в папке
 «/usr/local/bin» для ОС Linux. Приложение может принимать на вход значение
 одного целочисленного параметра.


Добавьте ссылку на системную сборку: Host.


	Linux Windows


			Sub UserProc;

			Var

			    Info: IShellExecuteInfo;

			    Proc: IShellProcess;

			Begin

			    // Параметры запуска приложения

			    Info := New ShellExecuteInfo.Create;

			    Info.Directory := "/usr/local/bin";

			    Info.File := "start";

			    Info.Parameters := "1";

			    Info.WaitToTerminate := True;

			    Info.WaitTimeout := 30000;

			    // Запуск приложения

			    Proc := New ShellProcess.Create;

			    Proc.Start(Info);

			    // Если процесс ещё выполняется, то завершить его

			    While Not Proc.HasExited Do

			        Proc.Kill;

			    End While;

			    // Результат выполнения приложения

			    If Proc.HasExited Then

			        Debug.WriteLine("Exit Code:" + Proc.ExitCode.ToString);

			        Debug.WriteLine("Output: " + Proc.Output);

			        Debug.WriteLine(Proc.Error <> "" ? "Error: " + Proc.Error : "No error.");

			    End If;

			End Sub UserProc;


			Sub UserProc;

			Var

			    Info: IShellExecuteInfo;

			    Proc: IShellProcess;

			Begin

			    // Параметры запуска приложения

			    Info := New ShellExecuteInfo.Create;

			    Info.Directory := "D:\Work\Project\";

			    Info.File := "start.exe";

			    Info.Parameters := "1";

			    Info.WaitToTerminate := True;

			    Info.WaitTimeout := 30000;

			    // Запуск приложения

			    Proc := New ShellProcess.Create;

			    Proc.Start(Info);

			    // Если процесс ещё выполняется, то завершить его

			    While Not Proc.HasExited Do

			        Proc.Kill;

			    End While;

			    // Результат выполнения приложения

			    If Proc.HasExited Then

			        Debug.WriteLine("Exit Code:" + Proc.ExitCode.ToString);

			        Debug.WriteLine("Output: " + Proc.Output);

			        Debug.WriteLine(Proc.Error <> "" ? "Error: " + Proc.Error : "No error.");

			    End If;

			End Sub UserProc;


При выполнении примера будет осуществлён запуск указанного консольного
 приложения. В приложение будет передано значение параметра. Текущее приложение
 будет ожидать завершение запущенного приложения пол минуты. Если по истечению
 этого времени приложение до сих пор будет выполняться, то оно будет остановлено
 принудительно. Результаты выполнения приложения будут выведены в консоль
 среды разработки.


См. также:


[IProcess](IProcess.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
