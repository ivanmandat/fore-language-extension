# IAccessElementsIterator.Current

IAccessElementsIterator.Current
-


# IAccessElementsIterator.Current


## Синтаксис


Current: [IAccessElement](../IAccessElement/IAccessElement.htm);


## Описание


Свойство
 Current возвращает текущий элемент.


## Пример


Для выполнения примера на форме должны быть расположены компоненты Button
 с наименованием Button1 и TreeList с наименованием TreeList1. Для компонента
 TreeList должны быть созданы 5 колонок: Наименование, ReadAccess, WriteAccess,
 DeleteAccess, AccessAccess. Также в репозитории предполагается наличие
 справочника НСИ с идентификатором DICT_1.


	Class UserForm: Form

	    Button1: Button;

	    TreeList1: TreeList;


	    Sub FillViewer(Iterator: IAccessElementsIterator; currentlevel: integer; parentNode: ITreeListNode);

	    Var

	        level: integer;

	        node: ITreeListNode;

	        element: IAccessElement;

	    Begin

	        level := iterator.Next;

	        If level <> -1 Then

	            element := iterator.Current;

	            node := TreeList1.Nodes.AddChild(GetParent(parentNode, currentlevel, level), element.Name);

	            node.Data := element;

	            node.ColumnText(1) := element.AttributeAccess(AccessElementAttributes.Read).ToString;

	            node.ColumnText(2) := element.AttributeAccess(AccessElementAttributes.Write).ToString;

	            node.ColumnText(3) := element.AttributeAccess(AccessElementAttributes.Delete).ToString;

	            node.ColumnText(4) := element.AttributeAccess(AccessElementAttributes.Access).ToString;

	            FillViewer(iterator, level, node);

	        End If;

	    End Sub FillViewer;


	    Function GetParent(node: ITreeListNode; currentLevel: integer; level: integer): ITreeListNode;

	    Begin

	        If (level - currentLevel) = 1 Then

	            Return node;

	        End If;

	        If currentLevel >= level Then

	            currentLevel := currentLevel - 1;

	        Else

	            level := level - 1;

	        End If;

	        Return GetParent(node.Parent, currentLevel, level);

	    End Function GetParent;


	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        MB: IMetabase;

	        MDesc: IMetabaseObjectDescriptor;

	        SD: ISecurityDescriptor;

	        AOS: IAccessObjectSecurity;

	        Iterator: IAccessElementsIterator;

	    Begin

	        MB := MetabaseClass.Active;

	        MDesc := MB.ItemById("DICT_1");

	        AOS := Object.GetSecurity;

	        Iterator := AOS.GetElements;

	        FillViewer(Iterator, -1, Null);

	    End Sub Button1OnClick;

	End Class UserForm;


После нажатия на кнопку в компоненте TreeList будет отображено дерево
 элементов справочника НСИ и для каждого элемента в соответствующие столбцы
 будут выведены значения, хранящиеся в атрибутах доступа.


См. также:


[IAccessElementsIterator](IAccessElementsIterator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
