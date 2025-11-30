# IControl.Brush

IControl.Brush
-


# IControl.Brush


## Синтаксис


Brush: [IGxBrush](ModDrawing.chm::/Interface/IGxBrush/IGxBrush.htm);


## Описание


Свойство Brush определяет кисть, используемую для заливки области компонента.


## Комментарии


Данное свойство поддерживают следующие компоненты:


-
[Форма](UiDevEnv.chm::/02_Components_constructor_forms/Form.htm);


-
[Panel](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/Panel.htm);


-
[ImageButton](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/ImageButton.htm);


-
[Splitter](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/Splitter.htm);


-
Страницы компонента [PageControl](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/PageControl.htm) (объекты класса [PageControlSheet](../../Class/PageControlSheet/PageControlSheet.htm));


-
Страницы компонента [Wizard](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/Wizard.htm) (объекты класса [WizardPage](../../Class/WizardPage/WizardPage.htm)).


## Пример


Для выполнения примера предполагается наличие формы и расположенной на ней кнопки с наименованием «Button1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    r: IGxRect;

    StColor, EndColor: IGxColor;

    Br: IGxBrush;

Begin

    r := New GxRect.Create(0, 0, Self.Width, Self.Height);

    StColor := GxColor.FromName("CornflowerBlue");

    EndColor := GxColor.FromName("Crimson");

    Br := New GxLinearGradientBrush.Create(StColor, EndColor, 30, r);

    Self.Brush := Br;

End Sub Button1OnClick;


После выполнения примера при нажатии кнопки вся область формы будет залита с помощью двухцветного градиента. Угол наклона градиента - 30 градусов.


См. также:


[IControl](IControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
