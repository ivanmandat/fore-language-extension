# IWinApplicationClass.ErrorBox

IWinApplicationClass.ErrorBox
-


# IWinApplicationClass.ErrorBox


## Синтаксис


ErrorBox(Message: String; [ParentWindow: [IWin32Window](ModForms.chm::/Interface/IWin32Window/IWin32Window.htm) = Null]);


## Параметры


Message. Сообщение, которое будет отображаться в окне ошибки.


ParentWindow. Родительское окно, для которого диалог открывается модально. По умолчанию передается значение Null, при этом диалог откроется модально для текущего окна.


## Описание


Метод ErrorBox вызывает стандартный диалог с сообщением об ошибке.


## Комментарии


Используется только в настольном приложении.


Диалог имеет только одну кнопку «ОК» и выглядит следующим образом:


![](ErrorBox_Sample.gif)


## Пример


Для выполнения примера предполагается наличие формы и расположенной на ней кнопки.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Begin

    WinApplication.ErrorBox("Критическая ошибка");

End Sub Button1OnClick;


При нажатии на кнопку на экран будет выведен диалог с сообщением об ошибке.


См. также:


[IWinApplicationClass](IWinApplicationClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
