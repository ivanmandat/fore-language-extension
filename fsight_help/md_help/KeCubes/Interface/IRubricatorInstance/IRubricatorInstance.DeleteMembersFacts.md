# IRubricatorInstance.DeleteMembersFacts

IRubricatorInstance.DeleteMembersFacts
-


# IRubricatorInstance.DeleteMembersFacts


## Синтаксис


DeleteMembersFacts(Members: [IMetaMembersSet](KeRds.chm::/Interface/IMetaMembersSet/IMetaMembersSet.htm);
 Recursive: Boolean);


## Параметры


Members. Набор удаляемых элементов;


Recursive. Признак того, что
 следует удалять дочерние элементы. True
 - дочерние элементы будут удалены; False
 - дочерние элементы не будут удалены.


## Описание


Метод DeleteMembersFacts осуществляет
 удаление показателей, соответствующих указанному набору элементов.


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

    Rub: IMetabaseObject;

    RubrIn: IRubricatorInstance;

Begin

    SelNodes := MetaAttributesTreeList1.GetSelectedNodes;

    MembersSet := MetaAttributesTreeList1.GetNodesMembers(SelNodes);

    Rub := MetaAttributesTreeList1.Rubricator As IMetabaseObject;

    RubrIn := Rub.Open(Null) As IRubricatorInstance;

    RubrIn.DeleteMembersFacts(MembersSet, True);

End Sub Button1OnClick;


После выполнения примера показатели, соответствующие выделенным элементам,
 будут удалены.


См. также:


[IRubricatorInstance](IRubricatorInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
