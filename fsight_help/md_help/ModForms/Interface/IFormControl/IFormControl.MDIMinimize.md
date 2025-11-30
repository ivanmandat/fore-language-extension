# IFormControl.MDIMinimize

IFormControl.MDIMinimize
-


# IFormControl.MDIMinimize


## Синтаксис


MDIMinimize(Child: [IFormControl](IFormControl.htm));


## Параметры


Child. Дочерняя MDI-форма, окно которой необходимо
 минимизировать.


## Описание


Метод MDIMinimize осуществляет
 минимизацию указанной дочерней MDI-формы в рамках родительской формы.


## Комментарии


Для максимизации родительской формы необходимо в качестве параметра
 передать саму родительскую форму:


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Begin

    Self.MDIMinimize(Self);

End Sub Button1OnClick;


См. также:


[IFormControl](IFormControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
