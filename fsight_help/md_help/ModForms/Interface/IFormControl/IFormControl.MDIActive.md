# IFormControl.MDIActive

IFormControl.MDIActive
-


# IFormControl.MDIActive


## Синтаксис


MDIActive: [IFormControl](IFormControl.htm);


## Описание


Свойство MDIActive определяет
 дочернюю MDI-форму, активную в данный момент.


## Пример


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки с наименованием Button1. Данная форма является родительской
 MDI-формой, содержащей несколько дочерних.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Begin

    Self.MDIActive := Self.MDIChildren(0);

End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будет активирована первая
 дочерняя форма.


См. также:


[IFormControl](IFormControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
