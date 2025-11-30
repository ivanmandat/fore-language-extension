# IDropForm.Parent

IDropForm.Parent
-


# IDropForm.Parent


## Синтаксис


Parent: [IComponent](../IComponent/IComponent.htm);


## Описание


Свойство Parent определяет родительскую
 форму для компонента.


## Комментарии


Данное свойство необходимо указывать при динамическом создании компонента
 [DropForm](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/DropForm.htm).


## Пример


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки с наименованием «Button1». В репозитории имеется форма с
 идентификатором «FORM_FOR_DROPFORM», которая будет использоваться как
 раскрывающаяся форма в компоненте DropForm.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    NewDropForm: DropForm;

Begin

    NewDropForm := New DropForm.Create;

    NewDropForm.AnimationType := DropAnimationType.Center;

    NewDropForm.Parent := Self;

    NewDropForm.MetabaseObject := "FORM_FOR_DROPFORM";

    NewDropForm.DropHeight := 100;

    NewDropForm.DropWidth := 100;

    NewDropForm.SizeGrip := True;

    NewDropForm.DropDown(Self, 10, 10);

End Sub Button1OnClick;


При нажатии на кнопку динамически создается новый компонент DropForm.
 Для компонента указываются необходимые параметры, после чего разворачивается
 форма, связанная с данным компонентом.


См. также:


[IDropForm](IDropForm.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
