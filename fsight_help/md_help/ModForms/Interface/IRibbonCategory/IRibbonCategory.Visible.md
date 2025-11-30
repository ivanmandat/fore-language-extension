# IRibbonCategory.Visible

IRibbonCategory.Visible
-


# IRibbonCategory.Visible


## Синтаксис


Visible: Boolean;


## Описание


Свойство Visible определяет
 признак отображения вкладки на ленте инструментов.


## Комментарии


Допустимые значения:


	- True. По умолчанию.
	 Вкладка отображается на ленте инструментов;


	- False. Вкладка не отображается
	 на ленте инструментов.


## Пример


Для выполнения примера разместите на форме компоненты [Ribbon](uidevenv.chm::/02_components_constructor_forms/02_additional_components/ribbon.htmdhtmlRibbon.chm%3a%3a/Components/Ribbon/Ribbon.htm),
 [Button](uidevenv.chm::/02_components_constructor_forms/01_Standart_Components/Button.htm)
 и [Label](uidevenv.chm::/02_components_constructor_forms/01_Standart_Components/Label.htm)
 с наименованиями «Ribbon1», «Button1» и «Label1» соответственно.


Добавьте ссылки на системные сборки: ExtCtrls, Forms.


Пример является обработчиком события OnCreate для формы и события OnClick
 для компонента Button.


			Sub IRibbonCategory_VisibleFormOnCreate(Sender: Object; Args: IEventArgs);

Var

    RCategory: IRibbonCategory;

    i: Integer;

Begin

    // Удалим текст подписи

    Label1.Text := "";

    For i := 1 To 5 Do

        // Создадим вкладку

        RCategory := New RibbonCategory.Create;

        // Добавим вкладку наленту инструментов

        Ribbon1.Categories.Add(RCategory);

        // Укажем текст вкладки

        RCategory.Text := "Вкладка " + i.ToString;

    End For;

End Sub IRibbonCategory_VisibleFormOnCreate;

Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    RCategory: IRibbonCategory;

Begin

    // Зададим текст подписи, если активных вкладок нет

    If Ribbon1.ActiveCategory = Null Then

        Label1.Text := "Нет активных вкладок";

    Else

        // Получим активную вкладку

        RCategory := Ribbon1.ActiveCategory;

        // Скроемвкладку на ленте инструментов

        RCategory.Visible := False;

    End If;

End Sub Button1OnClick;


После выполнения примера на форме будет создана лента инструментов с
 пятью вкладками. При нажатии на кнопку активная вкладка будет скрыта.
 Если активных вкладок нет, то будет выведено соответствующее сообщение
 в компоненте Label.


См. также:


[IRibbonCategory](IRibbonCategory.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
