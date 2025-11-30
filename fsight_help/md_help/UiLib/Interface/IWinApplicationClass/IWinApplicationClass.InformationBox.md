# IWinApplicationClass.InformationBox

IWinApplicationClass.InformationBox
-


# IWinApplicationClass.InformationBox


## Синтаксис


InformationBox(Message: String; [ParentWindow: [IWin32Window](ModForms.chm::/Interface/IWin32Window/IWin32Window.htm) = Null]);


## Параметры


Message. Сообщение, которое будет отображаться в окне подтверждения.


ParentWindow. Родительское окно, для которого диалог открывается модально. По умолчанию передается значение Null, при этом диалог откроется модально для текущего окна.


## Описание


Метод InformationBox вызывает стандартный информационный диалог.


## Комментарии


Используется только в настольном приложении.


Диалог имеет только одну кнопку «ОК» и выглядит следующим образом:


![](InformationBox_Sample.gif)


## Пример


Для выполнения примера предполагается наличие формы и расположенной на ней кнопки.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Begin

    WinApplication.InformationBox("Загрузка данных завершена.");

End Sub Button1OnClick;


При нажатии на кнопку на экран будет выведен информационный диалог.


См. также:


[IWinApplicationClass](IWinApplicationClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
