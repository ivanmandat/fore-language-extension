# ICustomEdit.SelLength

ICustomEdit.SelLength
-


# ICustomEdit.SelLength


## Синтаксис


SelLength: Integer;


## Описание


Свойство SelLength определяет
 количество символов, выделенных в тексте компонента.


## Комментарии


При получении значения свойства SelLength
 будет возвращено количество символов,которые выделены в компоненте.


При установке значения свойства SelLength
 осуществляется выделение заданного количества символов. Выделение начинается
 с той позиции, в которой установлен курсор ([SelStart](ICustomEdit.SelStart.htm)).
 Если значение SelLength положительное,
 то выделение текста выполняется вправо от курсора, если значение отрицательное
 - влево от курсора. После выделения позиция курсора [SelStart](ICustomEdit.SelStart.htm)
 изменена не будет.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента ExpressionEdit с наименованием
 «ExpressionEdit1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Begin

    If ExpressionEdit1.SelText = "" Then

        ExpressionEdit1.SelStart := 2;

        ExpressionEdit1.SelLength := 4;

        ExpressionEdit1.SetFocus;

    End If;

End Sub Button1OnClick;


При нажатии на кнопку, если в компоненте «ExpressionEdit1» отсутствует
 выделенный текст, то будет осуществлено выделение: начиная с третьего
 символа будут выделены четыре символа. После этого компонент получит фокус.


См. также:


[ICustomEdit](ICustomEdit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
