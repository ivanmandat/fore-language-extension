# IMetaAttributesTreeList.GetSelectedNodes

IMetaAttributesTreeList.GetSelectedNodes
-


# IMetaAttributesTreeList.GetSelectedNodes


## Синтаксис


GetSelectedNodes: Array;


## Описание


Метод GetSelectedNodes возвращает
 массив элементов, отмеченных в компоненте.


## Комментарии


В каждом элементе полученного массива будут находиться параметры отмеченного
 элемента дерева, описываемые интерфейсом [IMetaAttributesTreeListNode](../IMetaAttributesTreeListNode/IMetaAttributesTreeListNode.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента MetaAttributesBreadcrumb
 и компонента MetaAttributesTreeList с наименованием «MetaAttributesTreeList1».
 Компоненты настроены на работу с какой-либо базой данных временных рядов.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    SelNodes: Array;

    MembersSet: IMetaMembersSet;

    Member: IMetaMember;

Begin

    SelNodes := MetaAttributesTreeList1.GetSelectedNodes;

    MembersSet := MetaAttributesTreeList1.GetNodesMembers(SelNodes);

    MembersSet.Reset;

    While Not MembersSet.Eof Do

        Member := MembersSet.Current;

        Debug.WriteLine(Member.Name);

        MembersSet.Next;

    End While;

End Sub Button1OnClick;


При нажатии на кнопку в консоль среды разработки будут выведены наименования
 элементов, отмеченных в компоненте MetaAttributesTreeList.


См. также:


[IMetaAttributesTreeList](IMetaAttributesTreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
