# IKeyPreviewEventArgs.KeyMessage

IKeyPreviewEventArgs.KeyMessage
-


# IKeyPreviewEventArgs.KeyMessage


## Синтаксис


KeyMessage: [KeyMessageType](../../Enums/KeyMessageType.htm);


## Описание


Свойство KeyMessage возвращает значение, указывающее в результате чего было сгенерировано событие [OnKeyPreview](../IControl/IControl.OnKeyPreview.htm).


## Комментарии


Событие [OnKeyPreview](../IControl/IControl.OnKeyPreview.htm) происходит перед такими событиями, как: [OnKeyDown](../IControl/IControl.OnKeyDown.htm), [OnKeyPress](../IControl/IControl.OnKeyPress.htm), [OnKeyUp](../IControl/IControl.OnKeyUp.htm). Для проверки перед каким именно событием произошло событие [OnKeyPreview](../IControl/IControl.OnKeyPreview.htm) в данный момент используется свойство KeyMessage.


## Пример


Для выполнения примера предполагается наличие формы и расположенного на ней компонента EditBox с наименованием «EditBox1». Данная процедура установлена в качестве обработчика события [OnKeyPreview](../IControl/IControl.OnKeyPreview.htm) для «EditBox1».


			    Sub EditBox1OnKeyPreview(Sender: Object; Args: IKeyPreviewEventArgs);

    Begin

        If (Args.KeyMessage = KeyMessageType.KeyUp) And (Args.Key = Keys.A) Then

            Debug.WriteLine("Отмена события OnKeyUp для клавиши A);

            Args.Cancel := True;

        End If;

    End Sub EditBox1OnKeyPreview;


После выполнения примера если при вводе текста в области компонента была нажата и отпущена клавиша A, то будут обработаны только события OnKeyDown и OnKeyPress. Обработка дальнейшего события OnKeyUp будет отменена.


См. также:


[IKeyPreviewEventArgs](IKeyPreviewEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
