# IRubricatorInstance.DeleteMemberFacts

IRubricatorInstance.DeleteMemberFacts
-


# IRubricatorInstance.DeleteMemberFacts


## Синтаксис


DeleteMemberFacts(Member: [IMetaMember](KeRds.chm::/Interface/IMetaMember/IMetaMember.htm);
 Recursive: Boolean);


## Параметры


Member. Удаляемый элемент;


Recursive. Признак того, что
 следует удалять дочерние элементы. True
 - дочерние элементы будут удалены; False
 - дочерние элементы не будут удалены.


## Описание


Метод DeleteMemberFacts осуществляет
 удаление показателя, соответствующего указанному элементу.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1, компонента MetaAttributesBreadcrumb
 и компонента MetaAttributesTreeList с наименованием MetaAttributesTreeList1.
 Данные компоненты настроены на работу с какой-либо базой данных временных
 рядов.


Пример будет выполняться при нажатии на кнопку.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    SelNodes: Array;

    MembersSet: IMetaMembersSet;

    Member: IMetaMember;

    Rub: IMetabaseObject;

    RubrIn: IRubricatorInstance;

Begin

    SelNodes := MetaAttributesTreeList1.GetSelectedNodes;

    MembersSet := MetaAttributesTreeList1.GetNodesMembers(SelNodes);

    Rub := MetaAttributesTreeList1.Rubricator As IMetabaseObject;

    RubrIn := Rub.Open(Null) As IRubricatorInstance;

    MembersSet.Reset;

    While Not MembersSet.Eof Do

        Member := MembersSet.Current;

        RubrIn.DeleteMemberFacts(Member, True);

        MembersSet.Next;

    End While;

End Sub Button1OnClick;


После выполнения примера показатели, соответствующие выделенным элементам,
 будут удалены.


См. также:


[IRubricatorInstance](IRubricatorInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
