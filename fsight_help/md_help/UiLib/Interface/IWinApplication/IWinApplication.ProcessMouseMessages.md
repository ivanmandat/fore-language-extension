# IWinApplication.ProcessMouseMessages

IWinApplication.ProcessMouseMessages
-


# IWinApplication.ProcessMouseMessages


## Синтаксис


ProcessMouseMessages;


## Описание


Метод ProcessMouseMessages отправляет запрос на обработку системных сообщений, адресованных приложению.


## Комментарии


Вызов метода приводит к проверке очереди системных сообщений клавиатуры и мыши и сообщений, вызывающих перерисовку окна приложения. Если очередь не пуста, то осуществляется немедленная обработка сообщений. После обработки сообщения удаляются из очереди.


Метод может использоваться для прерывания длительных процессов путем обработки нажатых клавиш или щелчков по компонентам.


## Пример


Для выполнения примера предполагается наличие формы, на которой расположены две кнопки с идентификаторами «Button1» и «Button2».


			Class TESTForm: Form

    Button1: Button;

    Button2: Button;

    Stop: Boolean = False;


    Sub StartOnClick(Sender: Object; Args: IMouseEventArgs);

    Var

        d: DateTime;

        WinApp: IWinApplication;

    Begin

        Self.BeginOperation("Выполнение");

        d := DateTime.AddSeconds(DateTime.Now, 60);

        WinApp := WinApplication.Instance;

        While DateTime.Now < d Do

            WinApp.ProcessMouseMessages;

            If Stop Then

                Break;

            End If;

        End While;

        Stop := False;

        Self.EndOperation;

    End Sub StartOnClick;


    Sub StopOnClick(Sender: Object; Args: IMouseEventArgs);

    Begin

        Stop := True;

    End Sub StopOnClick;


End Class TESTForm;


Нажатие на кнопку «Button1» запускает процесс длительностью 60 секунд, во время которого будут обрабатываться системные сообщения мыши. Нажатие на кнопку «Button2» прерывает запущенный процесс. Если процесс запустить без обработки системных сообщений мыши, то его нельзя будет прервать нажатием кнопки «Button2».


См. также:


[IWinApplication](IWinApplication.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
