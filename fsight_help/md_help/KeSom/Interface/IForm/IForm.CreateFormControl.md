# IForm.CreateFormControl

IForm.CreateFormControl
-


# IForm.CreateFormControl


## Синтаксис


CreateFormControl(pParent: Object): Object;


## Параметры


pParent. Объект, который будет
 являться владельцем создаваемой формы.


## Описание


Метод CreateFormControl осуществляет
 создание новой формы и возвращает контекст для управления данной формой.


## Комментарии


В качестве значения параметра pParent
 должен передаваться объект, реализуемый интерфейсом [IWin32Window](ModForms.chm::/Interface/IWin32Window/IWin32Window.htm).
 Если в качестве значения передаётся Null,
 то создаваемая форма будет равноправна той, в которой её создали. Если
 форма создаётся из прикладного макроса, который вызывается каким-либо
 объектом репозитория, то для передачи окна объекта в качестве родительского
 используйте свойство [IApplicationWindows.ForegroundWindow](UiLib.chm::/Interface/IApplicationWindows/IApplicationWindows.ForegroundWindow.htm).


Для доступа к параметрам созданной формы необходимо результат работы
 метода CreateFormControl привести
 к типу [IFormControl](ModForms.chm::/Interface/IFormControl/IFormControl.htm).


Для открытия созданной формы установите свойству [Visible](ModForms.chm::/Interface/IControl/IControl.Visible.htm)
 значение True. Если указан параметр
 pParent, то созданная форма всегда
 будет отображаться поверх указанного родительского окна. Параметры родительского
 окна также будут доступны в свойстве [ParentWindow](ModForms.chm::/Interface/IFormControl/IFormControl.ParentWindow.htm).


Также для открытия формы можно использовать метод [ShowModal](ModForms.chm::/Interface/IFormControl/IFormControl.ShowModal.htm).
 При этом форма будет открыта модально относительно указанного родительского
 окна.


Примечание.
 Если при создании формы в качестве значения параметра pParent
 передается Null и для отображения
 формы используется метод [ShowModal](ModForms.chm::/Interface/IFormControl/IFormControl.ShowModal.htm),
 то форма открывается модально относительно навигатора объектов.


## Пример


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки с наименованием Button1. В репозитории также имеется форма
 с идентификатором TestForm.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    f: IFormControl;

	Begin

	    MB := MetabaseClass.Active;

	    f := (MB.ItemById("TestForm").Bind As IForm).CreateFormControl(Self) As IFormControl;

	    f.ShowModal;

	End Sub Button1OnClick;


При нажатии на кнопку будет создана и выведена на экран форма TestForm.
 Данная форма будет открыта модально относительно формы, при выполнении
 которой она была создана.


См. также:


[IForm](IForm.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
