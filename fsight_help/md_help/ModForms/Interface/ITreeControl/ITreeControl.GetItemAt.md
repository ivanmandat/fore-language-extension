# ITreeControl.GetItemAt

ITreeControl.GetItemAt
-


# ITreeControl.GetItemAt


## Синтаксис


GetItemAt(Pt: [IPoint](../IPoint/IPoint.htm);
 [FullRow: Boolean = False]): [ITreeListNode](../ITreeListNode/ITreeListNode.htm);


## Параметры


Pt. Точка, в которой нужно
 получить элемент компонента.


FullRow. Область, в которой
 производится проверка наличия элемента.


## Описание


Метод GetItemAt осуществляет
 проверку наличия элемента в заданной точке клиентской области компонента.


## Комментарии


Если точка Pt попадает в область
 элемента, то метод вернёт параметры этого элемента, иначе метод вернёт
 значение Null.


По умолчанию в параметре FullRow
 передается значение False, при
 этом областью элемента считается только та область, которую занимает [пиктограмма](../ITreeListNode/ITreeListNode.ImageIndex.htm)
 и [текст элемента](../ITreeListNode/ITreeListNode.Text.htm)
 ([текст](../ITreeListNode/ITreeListNode.ColumnText.htm) во
 всех столбцах, если свойству [ShowColumnHeaders](ITreeControl.ShowColumnHeaders.htm)
 установлено значение True).


При установке параметру FullRow
 значения True областью элемента
 будет считаться вся строка, в которой он расположен: область отступа и
 экспандера, [пиктограмма
 состояния](../ITreeListNode/ITreeListNode.StateIndex.htm), [пиктограмма](../ITreeListNode/ITreeListNode.ImageIndex.htm),
 [текст элемента](../ITreeListNode/ITreeListNode.Text.htm) ([текст](../ITreeListNode/ITreeListNode.ColumnText.htm) во
 всех столбцах) и свободная область справа от текста.


Примечание.
 Метод GetItemAt не поддерживается
 компонентами [TreeCombo](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/TreeCombo.htm),
 [MetabaseTreeCombo](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/MetabaseTreeCombo.htm),
 которые являются наследниками интерфейса [ITreeControl](ITreeControl.htm).


## Пример


Для выполнения примера предполагается наличие формы и, расположенного
 на ней, компонента TreeList с наименованием «TreeList1». Указанная процедура
 установлена в качестве обработчика события OnMouseMove компонента «TreeList1».


			Sub TreeList1OnMouseMove(Sender: Object; Args: IMouseEventArgs);

Var

    Node: ITreeListNode;

Begin

    Node := TreeList1.GetItemAt(Args.pPoint, True);

    If Node <> Null Then

        Self.Text := Node.Text + '(' + Node.Selected.ToString + ')';

    End If;

End Sub TreeList1OnMouseMove;


При выполнении примера будет отслеживаться положение курсора мыши в
 области компонента «TreeList1». Если курсор находится над строкой, в которой
 есть элемент, то текст элемента и признак наличия отметки у элемента будут
 выведены в заголовок формы.


См. также:


[ITreeControl](ITreeControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
