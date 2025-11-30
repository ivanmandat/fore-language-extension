# MsExpressionEdit.OnUpdateFormula

MsExpressionEdit.OnUpdateFormula
-


# MsExpressionEdit.OnUpdateFormula


## Синтаксис


OnUpdateFormula(Sender: [IMsExpressionEdit](../../Interface/IMsExpressionEdit/IMsExpressionEdit.htm); Args: [ITermEventArgs](ModForms.chm::/Interface/ITermEventArgs/ITermEventArgs.htm));


## Параметры


Sender. Компонент, сгенерировавший событие;


Args. Аргументы события.


## Описание


Событие OnUpdateFormula возникает при преобразовании внешнего представления выражения во внутреннее.


## Комментарии


Событие OnUpdateFormula вызывается для литеральных термов, формула и текст которых совпадают. Оно позволяет задать внешнему представлению внутреннее.


Преобразование внешнего представления терма во внутреннее происходит, например, при вводе или изменении текста в компоненте MsExpressionEdit.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент MsExpressionEdit с идентификатором «MsExpressionEdit1».


Пример является обработчиком события OnUpdateFormula для компонента «MsExpressionEdit1».


			Sub MsExpressionEdit1OnUpdateFormula(Sender: IMsExpressionEdit; Args: ITermEventArgs);

Begin

    If Args.Term = Null Then

        Return;

    End If;

    Args.Term.IsHyperlink := True;

    Debug.WriteLine("Разделители выражений: '" + Sender.HeavyDelimiters + "'");

    Debug.WriteLine("Разделитель слов в выражении: '" + Sender.LightDelimiters + "'");

    Debug.WriteLine("Максимальное число слов в выражении: '" + Sender.MaxTermWordCount.ToString + "'");

End Sub MsExpressionEdit1OnUpdateFormula;


После выполнения примера в окно консоли будут выведены данные о разделителях выражений, разделителе слов в выражении и максимальном числе слов в выражении. Выражения будут представлены в виде гиперссылок.


См. также:


[MsExpressionEdit](MsExpressionEdit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
