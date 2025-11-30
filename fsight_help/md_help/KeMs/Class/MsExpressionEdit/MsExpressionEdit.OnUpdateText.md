# MsExpressionEdit.OnUpdateText

MsExpressionEdit.OnUpdateText
-


# MsExpressionEdit.OnUpdateText


## Синтаксис


OnUpdateText(Sender: [IMsExpressionEdit](../../Interface/IMsExpressionEdit/IMsExpressionEdit.htm); Args: [ITermEventArgs](ModForms.chm::/Interface/ITermEventArgs/ITermEventArgs.htm));


## Параметры


Sender. Компонент, сгенерировавший событие;


Args. Аргументы события.


## Описание


Событие OnUpdateText возникает при преобразовании внутреннего представления выражения во внешнее.


## Комментарии


Событие OnUpdateText вызывается для пользовательских термов, формула и текст которых совпадают. Оно позволяет выражение, хранящееся во внутреннем представлении, преобразовать во внешнее.


Событие срабатывает на изменение самого выражения, а не его свойств.


Преобразование внутреннего представления выражения во внешнее происходит, например, при изменении формулы в компоненте MsExpressionEdit через свойство [IMsExpressionEdit.Expression](../../Interface/IMsExpressionEdit/IMsExpressionEdit.Expression.htm).


## Пример


Приведенный пример является обработчиком события OnUpdateText для компонента MsExpressionEdit с идентификатором «MsExpressionEdit1».


			Sub MsExpressionEdit1OnUpdateText(Sender: IMsExpressionEdit; Args: ITermEventArgs);

Begin

    If Args.Term = Null Then

        Return;

    End If;

    Args.Term.IsHyperlink := True;

    debug.WriteLine("Разделители выражений: '" + Sender.HeavyDelimiters + "'");

    debug.WriteLine("Разделитель слов в выражении: '" + Sender.LightDelimiters + "'");

    debug.WriteLine("Максимальное число слов в выражении: '" + Sender.MaxTermWordCount.ToString + "'");

End Sub MsExpressionEdit1OnUpdateText;


После выполнения примера в окно консоли будут выведены данные о разделителях выражений, разделителе слов в выражении и максимальном числе слов в выражении. Выражения будут представлены в виде гиперссылок.


См. также:


[MsExpressionEdit](MsExpressionEdit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
