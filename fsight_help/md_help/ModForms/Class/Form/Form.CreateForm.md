# Form.CreateForm

Form.CreateForm
-


# Form.CreateForm


## Синтаксис


CreateForm([Parent: [IWin32Window](../../Interface/IWin32Window/IWin32Window.htm)
 = Null]);


## Параметры


Parent. Форма, которая будет
 являться владельцем создаваемой формы.


## Описание


Конструктор CreateForm осуществляет
 создание новой формы.


## Комментарии


Если параметр Parent не указан,
 то создаваемая форма будет равноправна той, в которой её создали.


Для открытия созданной формы установите свойству [Visible](../../Interface/IControl/IControl.Visible.htm)
 значение True. Если указан параметр
 Parent, то созданная форма всегда
 будет отображаться поверх указанного родительского окна. Параметры родительского
 окна также будут доступны в свойстве [ParentWindow](../../Interface/IFormControl/IFormControl.ParentWindow.htm).


Также для открытия формы можно использовать метод [ShowModal](../../Interface/IFormControl/IFormControl.ShowModal.htm).
 При этом форма будет открыта модально относительно указанного родительского
 окна.


Примечание.
 Если при создании формы в качестве значения параметра Parent
 передается Null и для отображения
 формы используется метод [ShowModal](../../Interface/IFormControl/IFormControl.ShowModal.htm),
 то форма открывается модально относительно навигатора объектов.


## Пример


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки с наименованием Button1. В репозитории имеется форма с наименованием
 TestForm. Ссылка на данную форму добавлена в инспекторе сборок для текущей
 формы.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    f: Form;

Begin

    f := New TestForm.CreateForm(Self As IWin32Window);

    f.Visible := True;

End Sub Button1OnClick;


После выполнения примера будет создана и выведена на экран форма "TestForm".


См. также:


[Form](Form.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
