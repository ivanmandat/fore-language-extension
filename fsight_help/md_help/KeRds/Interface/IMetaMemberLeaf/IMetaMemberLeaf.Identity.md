# IMetaMemberLeaf.Identity

IMetaMemberLeaf.Identity
-


# IMetaMemberLeaf.Identity


## Синтаксис


Identity: Integer;


## Описание


Свойство Identity возвращает
 числовой идентификатор элемента справочника, соответствующего элементу
 иерархии.


## Комментарии


Ключ элемента возвращает свойство [IMetaMemberLeaf.Key](IMetaMemberLeaf.Key.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 MetaAttributesTreeList с идентификатором «MetaAttributesTreeList1». Данный
 компонент настроен на работу с какой-либо базой данных временных рядов.


			Sub UserProc;

Var

    SelNodes: Array;

    Mems: IMetaMembersSet;

    Mem: IMetaMember;

    Leaf: IMetaMemberLeaf;

Begin

    SelNodes := MetaAttributesTreeList1.GetSelectedNodes;

    Mems := MetaAttributesTreeList1.GetNodesMembers(SelNodes);

    If Not Mems.Eof Then

        Mems.Reset;

        Repeat

            Mem := Mems.Current;

            If Mem.IsLeaf Then

                Leaf := Mem As IMetaMemberLeaf;

                Debug.WriteLine("Числовой идентификатор: " + Leaf.Identity.ToString);

                Debug.WriteLine("Ключ: " + Leaf.Key.ToString);

            End If;

            Mems.Next;

        Until Mems.Eof;

    End If;

End Sub UserProc;


Результат выполнения примера: в окно консоли выведены числовые идентификаторы
 и ключи показателей, выделенных в «MetaAttributesTreeList1».


См. также:


[IMetaMemberLeaf](IMetaMemberLeaf.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
