# ITreeControl.HitTest

ITreeControl.HitTest
-


# ITreeControl.HitTest


## Синтаксис


HitTest(Pt: [IPoint](../IPoint/IPoint.htm);
 Var Hit: [HitTestResult](../../Enums/HitTestResult.htm)): [ITreeListNode](../ITreeListNode/ITreeListNode.htm);


## Параметры


Pt. Точка, в которой нужно
 получить элемент компонента.


Hit. Параметр,
 в котором будет содержаться дополнительная информация после выполнения
 метода.


## Описание


Метод HitTest осуществляет проверку
 наличия элемента в заданной точке клиентской области компонента и возвращает
 результат проверки.


## Комментарии


Метод HitTest является расширением
 метода [GetItemAt](ITreeControl.GetItemAt.htm).


Если точка Pt попадает в область
 элемента (учитывается вся строка: область отступа, [пиктограмма
 состояния](../ITreeListNode/ITreeListNode.StateIndex.htm), [пиктограмма](../ITreeListNode/ITreeListNode.ImageIndex.htm),
 [текст элемента](../ITreeListNode/ITreeListNode.Text.htm) в
 любом столбце и свободная область справа от текста), то метод вернёт параметры
 этого элемента, иначе метод вернёт значение Null.


Также в переменной, которая будет передана в качестве параметра Hit, будет содержаться область
 компонента, в которую попадает точка Pt.


Примечание.
 Метод GetItemAt не поддерживается
 компонентами [TreeCombo](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/TreeCombo.htm),
 [MetabaseTreeCombo](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/MetabaseTreeCombo.htm),
 которые являются наследниками интерфейса [ITreeControl](ITreeControl.htm).


## Пример


Для выполнения примера предполагается наличие формы и, расположенного
 на ней, компонента TreeList с наименованием «TreeList1». Указанная процедура
 установлена в качестве обработчика события OnMouseDown компонента «TreeList1».


			Sub TreeList1OnMouseDown(Sender: Object; Args: IMouseClickEventArgs);

Var

    Node: ITreeListNode;

    Result: HitTestResult;

    s: String;

Begin

    Node := TreeList1.HitTest(Args.pPoint, Result);

    Select Case Result

        Case HitTestResult.Nowhere: s := "Nowhere";

        Case HitTestResult.OnItemIcon: s := "OnItemIcon";

        Case HitTestResult.OnItemLabel: s := "OnItemLabel";

        Case HitTestResult.OnItemIndent: s := "OnItemIndent";

        Case HitTestResult.OnItemButton: s := "OnItemButton";

        Case HitTestResult.OnItemRight: s := "OnItemRight";

        Case HitTestResult.OnItemStateIcon: s := "OnItemStateIcon";

        Case HitTestResult.Above: s := "Above";

        Case HitTestResult.Below: s := "Below";

        Case HitTestResult.ToLeft: s := "ToLeft";

        Case HitTestResult.ToRight: s := "ToRight";

    End Select;

    If Node <> Null Then

        s := Node.Text + '(' + s + ')';

    End If;

    Self.Text := s;

End Sub TreeList1OnMouseDown;


При щелчке мышью в области компонента «TreeList1» будет осуществляться
 проверка наличия в этой области какого-либо элемента. Область компонента
 и текст элемента, если он имеется в этой области, будут выведены в заголовок
 формы.


См. также:


[ITreeControl](ITreeControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
