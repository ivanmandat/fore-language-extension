# ITerm.Text

ITerm.Text
-


# ITerm.Text


## Синтаксис


Text: String;


## Описание


Свойство Text определяет текст
 элемента терма.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1 и компонента TermEdit с наименованием
 TermEdit1.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    i: Integer;

    Terms: ITermList;

    Term: ITerm;

Begin

    Terms := TermEdit1.Terms;

    For i := 0 To Terms.Count - 1 Do

        Term := Terms.Item(i);

        Term.IsLiteral := False;

        Term.Text := "Term " + i.ToString;

        Term.Formula := "Formula " + i.ToString;

    End For;

End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку для каждого терма текст
 будет состоять из слова Term и индекса элемента терма, а формула будет
 состоять из слова Formula и индекса элемента терма. Текст внутри терма
 не будет доступен для редактирования, поскольку для свойства [IsLiteral](ITerm.IsLiteral.htm)
 установлено значение False.


См. также:


[ITerm](ITerm.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
