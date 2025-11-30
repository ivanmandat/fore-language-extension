# IWinApplicationClass.CursorPosition

IWinApplicationClass.CursorPosition
-


# IWinApplicationClass.CursorPosition


## Синтаксис


CursorPosition: [IGxPoint](ModDrawing.chm::/Interface/IGxPoint/IGxPoint.htm);


## Описание


Свойство CursorPosition возвращает точку, содержащую текущие экранные координаты курсора мыши.


## Комментарии


Используется только в настольном приложении.


## Пример


Для выполнения примера предполагается наличие формы и расположенной на ней кнопки.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);
Var

    CurPosition: IGxPoint;
Begin

    CurPosition := WinApplication.CursorPosition;

    Self.Text := CurPosition.X.ToString + " | " + CurPosition.Y.ToString;
End Sub Button1OnClick;


При нажатии на кнопку в заголовок формы будут выведены текущие экранные координаты курсора мыши.


См. также:


[IWinApplicationClass](IWinApplicationClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
