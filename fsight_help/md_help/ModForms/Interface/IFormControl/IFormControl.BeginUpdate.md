# IFormControl.BeginUpdate

IFormControl.BeginUpdate
-


# IFormControl.BeginUpdate


## Синтаксис


BeginUpdate([Value: [ControlsUpdateMode](../../Enums/ControlsUpdateMode.htm)
 = 0]);


## Параметры


ControlsUpdateMode. Перерасчет
 размеров компонентов формы.


## Описание


Метод BeginUpdate отключает
 перерисовку формы.


## Комментарии


Метод используется для ускорения работы при динамическом создании большого
 количества компонентов. После вызова данного метода и до вызова [EndUpdate](IFormControl.EndUpdate.htm)
 будет отключена перерисовка формы при изменении размеров формы и размеров
 компонентов. Изменение значения [TabOrder](../IControl/IControl.TabOrder.htm)
 не будет приводить к изменению порядка отображения компонентов. Будут
 отключены внутренние события формы. Возобновление перерисовки формы и
 применение всех изменений осуществляется методом [EndUpdate](IFormControl.EndUpdate.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и панели с наименованием «Panel1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Edit1, Edit2: IEditBox;

Begin

    Self.BeginUpdate(ControlsUpdateMode.LockResizeOnUpdate);

    Edit1 := New EditBox.Create;

    Edit2 := New EditBox.Create;

    Edit1.Parent := Panel1;

    Edit2.Parent := Panel1;

    Edit1.Anchors.Right := 100;

    Edit2.Anchors.Right := 100;

    Edit1.Text := "Значение 1:";

    Edit2.Text := "Значение 2:";

    Edit2.Top := Edit1.Top + Edit1.Height;

    Self.EndUpdate;

End Sub Button1OnClick;


При нажатии на кнопку на панели будут созданы два редактора текста.
 Для ускорения работы перед созданием компонентов будет отключена перерисовка
 формы. Все изменения будут применены после создания компонентов и настройки
 их свойств.


См. также:


[IFormControl](IFormControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
