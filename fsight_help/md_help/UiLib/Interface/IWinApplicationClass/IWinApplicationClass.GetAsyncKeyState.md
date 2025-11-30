# IWinApplicationClass.GetAsyncKeyState

IWinApplicationClass.GetAsyncKeyState
-


# IWinApplicationClass.GetAsyncKeyState


## Синтаксис


GetAsyncKeyState(Key: [Keys](ModForms.chm::/Enums/Keys.htm)): Boolean;


## Параметры


Key. Клавиша, для которой необходимо проверить состояние.


## Описание


Метод GetAsyncKeyState возвращает состояние клавиши (нажата/не нажата) вне очереди сообщений.


## Комментарии


Метод возвращает True, если клавиша, передаваемая посредством параметра Key, (вне зависимости от текущего состояния) была нажата последней.


## Пример


Для выполнения примера предполагается наличие формы и расположенной на ней кнопки.


			Class TESTForm: Form

    Button1: Button;


    Sub StartOnClick(Sender: Object; Args: IMouseEventArgs);

    Var

        d: DateTime;

    Begin

        Self.BeginOperation("Выполнение");

        d := DateTime.AddSeconds(DateTime.Now, 60);

        While DateTime.Now < d Do

            If WinApplication.GetAsyncKeyState(Keys.Escape) Then

                Break;

            End If;

        End While;

        Self.EndOperation;

    End Sub StartOnClick;


End Class TESTForm;


Нажатие на кнопку запускает процесс длительностью 60 секунд, во время которого будет проверяться состояние клавиши ESC. Если клавиша будет нажата, то процесс будет остановлен до окончания указанного времени.


См. также:


[IWinApplicationClass](IWinApplicationClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
