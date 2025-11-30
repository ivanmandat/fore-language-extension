# IWinApplicationClass.NotImplementedBox

IWinApplicationClass.NotImplementedBox
-


# IWinApplicationClass.NotImplementedBox


## Синтаксис


NotImplementedBox([ParentWindow: [IWin32Window](ModForms.chm::/Interface/IWin32Window/IWin32Window.htm)
 = Null]);


## Параметры


ParentWindow. Родительское
 окно, для которого диалог открывается модально. По умолчанию передается
 значение Null, при этом диалог
 откроется модально для текущего окна.


## Описание


Метод NotImplementedBox вызывает
 диалог с сообщением "Извините, данная функция находится в стадии
 разработки".


## Комментарии


Используется только в настольном приложении.


Диалог имеет только одну кнопку «ОК» и выглядит следующим образом:


![](NotImplementedBox_Sample.gif)


## Пример


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Begin

    WinApplication.NotImplementedBox;

End Sub Button1OnClick;


При нажатии на кнопку на экран будет выведен диалог с сообщением о том,
 что функция находится в стадии разработки.


См. также:


[IWinApplicationClass](IWinApplicationClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
