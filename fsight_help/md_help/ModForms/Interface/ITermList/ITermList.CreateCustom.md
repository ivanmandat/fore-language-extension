# ITermList.CreateCustom

ITermList.CreateCustom
-


# ITermList.CreateCustom


## Синтаксис


CreateCustom(Text: String; Formula: String): [ITerm](../ITerm/ITerm.htm);


## Параметры


Text. Текст пользовательского
 терма.


Formula. Формула пользовательского
 терма.


## Описание


Метод CreateCustom создает пользовательский
 терм.


## Комментарии


В пользовательском терме, в отличии от литерального, невозможно редактировать
 текст. Пользовательский терм можно выделить только целиком.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1 и компонента TermEdit с наименованием
 TermEdit1.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Terms: ITermList;

    Te: ITerm;

    i: Integer;

Begin

    Terms := TermEdit1.Terms;

    Te := Terms.CreateCustom("A", "@a");

    i := TermEdit1.PutTerm(Te);

    TermEdit1.Hyperlink(i) := True;

    Te := Terms.CreateLiteral("+");

    i := TermEdit1.PutTerm(Te);

    Te := Terms.CreateCustom("B", "@b");

    i := TermEdit1.PutTerm(Te);

    TermEdit1.Hyperlink(i) := True;

End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку для компонента TermEdit1
 будет создано три терма, из которых будет составлено выражение. Термы
 будут отображаться в виде гиперссылок.


См. также:


[ITermList](ITermList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
