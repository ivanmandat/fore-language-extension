# IFormControl.MDIRestore

IFormControl.MDIRestore
-


# IFormControl.MDIRestore


## Синтаксис


MDIRestore(Child: [IFormControl](IFormControl.htm));


## Параметры


Child. Дочерняя MDI-форма,
 окно которой необходимо вернуть к исходному состоянию.


## Описание


Метод MDIRestore восстанавливает
 исходные размеры окна указанной дочерней MDI-формы.


## Комментарии


Для восстановления окна родительской формы необходимо в качестве параметра
 передать саму родительскую форму:


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Begin

    Self.MDIRestore(Self);

End Sub Button1OnClick;


См. также:


[IFormControl](IFormControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
