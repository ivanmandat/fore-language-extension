# ITerm.CustomHyperlinkStyle

ITerm.CustomHyperlinkStyle
-


# ITerm.CustomHyperlinkStyle


## Синтаксис


CustomHyperlinkStyle: Boolean;


## Описание


Свойство CustomHyperlinkStyle
 определяет использование пользовательского стиля гиперссылки.


## Комментарии


Свойство актуально, если [ITerm.IsHyperlink](ITerm.IsHyperlink.htm)
 содержит значение True.


Если свойство содержит значение True,
 к стилю гиперссылки будут применены пользовательские настройки терма,
 например, цвет.


Если свойство содержит значение False,
 гиперссылка будет оформлена стандартным образом.


## Пример


Для выполнения примера предполагается наличие формы, расположенных на
 ней двух кнопок с наименованиями «Button1» и «Button2» и компонента TermEdit с наименованием «TermEdit1».
 Подключите системную сборку Drawing.


			    Terms: ITermList;

    Term: ITerm;


    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Var

        color1 : IGxColor;

        color2 : IGxColor;

        color3 : IGxColor;

    Begin

        Terms := TermEdit1.Terms;

        Term := Terms.Item(0);

        Term.Text := "Text example";

        // Настраиваем терм в виде гиперссылки

        Term.IsHyperlink := True;

        // Будем использовать пользовательский стиль гиперссылки
 терма

        Term.CustomHyperlinkStyle := True;

        // Задаем терму подчеркивание

        Term.Underlined := True;

        // Создаем цвета

        color1 := New GxColor.CreateRGB( 170,40,200);

        color2 := New GxColor.CreateRGB( 120,40,200);

        color3 := New GxColor.CreateRGB( 70,40,200);

        // Задаем цвета для двух символов терма, начиная с первого

        Term.SetTextColor(color1,0,2);

        // Задаем цвета для двух символов терма, начиная с третьего

        Term.SetTextColor(color2,2,2);

        // Задаем цвета для двух символов терма, начиная с пятого

        Term.SetTextColor(color3,4,2);

    End Sub Button1OnClick;


    Sub Button2OnClick(Sender: Object; Args: IMouseEventArgs);

    Var

        Clr : IGxColor;

    Begin

        // Передаем в наименование кнопки цвет первого символа терма

        Clr := Term.GetTextColor(0);

        Button2.text := Clr.R.ToString + ", " + Clr.G.ToString + ", " + Clr.B.ToString;

        // Обнуляем цветовую настройку терма

        Term.ResetTextColor;

        // Убираем подчеркивание

        Term.Underlined := False;

    End Sub Button2OnClick;


После выполнения примера при нажатии на первую кнопку терм будет отображаться
 как гиперссылка с пользовательским стилем: подчеркнутый с градиентной
 расцветкой. При нажатии на вторую кнопку текст на кнопке будет изменен
 на цвет первого символа терма в формате RGB, после чего цвет терма сбросится
 и будет убрано подчеркивание.


См. также:


[ITerm](ITerm.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
