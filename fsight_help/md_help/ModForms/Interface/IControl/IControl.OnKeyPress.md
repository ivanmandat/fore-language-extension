# IControl.OnKeyPress

IControl.OnKeyPress
-


# OnKeyPress


## Синтаксис


OnKeyPress(Sender: Object; Args: [IKeyPressEventArgs](../IKeyPressEventArgs/IKeyPressEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnKeyPress наступает,
 если компонент находится в фокусе при нажатии пользователем символьной
 клавиши.


## Комментарии


При работе в компоненте [Frame](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/Frame.htm)
 cобытие OnKeyPress наступит после нажатия пользователем клавиш ENTER,
 SPACE или ESC, если отображаемая форма находится в скрытом состоянии ([Visible](IControl.Visible.htm)
 = False). Для того, чтобы распознать нажатие вспомогательных клавиш, следует
 использовать события [OnKeyDown](IControl.OnKeyDown.htm) и
 [OnKeyUp](IControl.OnKeyUp.htm).


## Пример


Для выполнения примера предполагается наличие формы. На форме расположено
 несколько компонентов, которые могут принимать фокус. В качестве обработчика
 события OnKeyPress для всех компонентов используется следующая процедура:


	Sub OnKeyPress(Sender: Object; Args: IKeyPressEventArgs);

	Begin

	    If Args.Key = 'A' Then

	        Args.Key := 'a';

	    End If;

	End Sub OnKeyPress;


После выполнения примера, если при вводе текста в области какого-либо
 компонента была нажата латинская заглавная буква A, то в тексте данная
 буква будет заменена строчной латинской буквой - a.


См. также:


[IControl](IControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
