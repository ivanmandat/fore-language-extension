# IWinProcess.CloseMainWindow

IWinProcess.CloseMainWindow
-


# IWinProcess.CloseMainWindow


## Синтаксис


CloseMainWindow: Boolean;


## Описание


Метод CloseMainWindow закрывает
 процесс, имеющий пользовательский интерфейс, посылая сообщение о закрытии
 главному окну.


## Комментарии


Метод возвращает значение True,
 если запущенный процесс имеет главное окно, и окну было отправлено сообщение
 о закрытии. Если процесс не имеет главного окна либо уже был завершен,
 то метод вернет значение False.


## Пример


Для выполнения примера предполагается наличие формы, расположенных на
 ней кнопок с наименованиями Button1, Button2, компонента Label с наименованием
 Label1 и таймера с наименованием «Timer1». Предполагается, что в операционной
 системе установлен пакет приложений Microsoft Office.


Добавьте ссылки на системные сборки: Host, Ui.


			Class TESTForm: Form

    Button1: Button;

    Button2: Button;

    Label1: Label;

    Timer1: Timer;

    WinProc: IWinProcess;

    WinInfo: IWinShellExecuteInfo;


    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Begin

        WinInfo := New WinShellExecuteInfo.Create;

        WinInfo.File := "excel.exe";

        WinProc := New WinProcess.Create;

        WinProc.Start(WinInfo);

        Timer1.Enabled := True;

    End Sub Button1OnClick;


    Sub Button2OnClick(Sender: Object; Args: IMouseEventArgs);

    Begin

        WinProc.CloseMainWindow;

    End Sub Button2OnClick;


    Sub Timer1OnTimer(Sender: Object; Args: IEventArgs);

    Begin

        If WinProc <> Null Then

            If Not WinProc.HasExited Then

                Label1.Text := "Процесс выполняется";

            Else

            Label1.Text := "Процесс завершен. Код завершения:" + WinProc.ExitCode.ToString;

        End If;

        Else

            Label1.Text := "Процесс не запущен"

        End If;

    End Sub Timer1OnTimer;

End Class TESTForm;


После запуска формы при нажатии кнопки Button1 будет запущено приложение
 Microsoft Excel. Статус выполнения будет контролироваться в процедуре
 таймера. Соответствующие сообщения будут выводиться в компоненте Label1.
 При нажатии кнопки Button2 запущенное приложение Microsoft Excel будет
 закрыто.


См. также:


[IWinProcess](IWinProcess.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
