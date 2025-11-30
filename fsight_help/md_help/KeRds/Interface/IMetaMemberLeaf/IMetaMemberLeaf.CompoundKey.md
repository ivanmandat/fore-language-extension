# IMetaMemberLeaf.CompoundKey

IMetaMemberLeaf.CompoundKey
-


# IMetaMemberLeaf.CompoundKey


## Синтаксис


CompoundKey: Variant;


## Описание


Свойство CompoundKey определяет
 составной ключ элемента.


## Комментарии


Уникальный составной ключ элемента определяет свойство [IMetaMemberLeaf.CompoundIdentity](IMetaMemberLeaf.CompoundIdentity.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей кнопку
 с идентификатором «Button1» и компонент MetaAttributesTreeList
 с идентификатором «MetaAttributesTreeList1». Для «MetaAttributesTreeList1»
 должна быть задана база данных временных рядов.


Пример является обработчиком события OnClick
 для компонента «Button1».


			// Обработчик события OnClick

Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    nSelNodes: Array;

    pMembers: IMetaMembersSet;

    pMember: IMetaMember;

    pLeaf: IMetaMemberLeaf;

Begin

    nSelNodes := MetaAttributesTreeList1.GetSelectedNodes;

    pMembers := MetaAttributesTreeList1.GetNodesMembers(nSelNodes);

    If Not pMembers.Eof Then

        pMembers.Reset;

        Repeat

            pMember := pMembers.Current;

            If pMember.IsLeaf Then

                pLeaf := pMember As IMetaMemberLeaf;

                Debug.WriteLine("Identity: " + pLeaf.Identity.ToString);

                Debug.WriteLine("CompoundIdentity: " + ToString(pLeaf.CompoundIdentity));

                Debug.WriteLine("Key: " + pLeaf.Key.ToString);

                Debug.WriteLine("CompoundKey: " + ToString(pLeaf.CompoundKey));

                Debug.WriteLine("__________________");

            End If;

            pMembers.Next;

        Until pMembers.Eof;

    End If;

End Sub Button1OnClick;


// Функция вывода данных

Function ToString(Value: Variant): String;

Var

    s: String;

    arr: Array Of Variant;

    idx: integer;

Begin

    arr := Value As Array Of Variant;

    For idx := 0 To arr.Length - 1 Do

        s := s + arr[idx] + "; ";

    End For;

    Return s;

End Function ToString;


Результат выполнения примера: в окно консоли выведена информация о временных
 рядах, выделенных в компоненте «MetaAttributesTreeList1».


См. также:


[IMetaMemberLeaf](IMetaMemberLeaf.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
