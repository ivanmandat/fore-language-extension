# IAttributeValueTreeListNode.AttributeKey

IAttributeValueTreeListNode.AttributeKey
-


# IAttributeValueTreeListNode.AttributeKey


## Синтаксис


AttributeKey: Integer;


## Описание


Свойство AttributeKey возвращает
 ключ атрибута.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки «Button1», компонента MetaAttributesBreadcrumb, компонента
 MetaAttributesTreeList с идентификатором «MetaAttributesTreeList1» и компонента
 Memo с идентификатором «Memo1». Для компонентов MetaAttributesBreadcrumb
 и MetaAttributesTreeList определена одна и та же база данных временных
 рядов. Компонент MetaAttributesBreadcrumb определяет значение свойства
 Breadcrumb для MetaAttributesTreeList.


После запуска формы, в компоненте MetaAttributesBreadcrumb необходимо
 выбрать атрибут, определяющий иерархию дерева базы данных временных рядов.
 Затем выбрать элементы иерархии в компоненте MetaAttributesBreadcrumb
 и нажать кнопку. Пример будет выполнен.


	Sub Button1OnClick(Sender:Object; Args: IMouseEventArgs);

	Var

	    Nodes: ITreeListSelection;

	    Node: ITreeListNode;

	    MetaAttrTLN: IMetaAttributesTreeListNode;

	    AttrValueTLN: IAttributeValueTreeListNode;

	    Keys: Array Of Integer;

	Begin

	    Nodes := MetaAttributesTreeList1.Selection;

	    For Each Node In Nodes Do

	        MetaAttrTLN := Node As IMetaAttributesTreeListNode;

	        If MetaAttrTLN <> Null Then

	            If MetaAttrTLN.Type = MetaAttributesNodeType.AttributeValueNode Then

	                AttrValueTLN := MetaAttrTLN As IAttributeValueTreeListNode;

	                Memo1.Lines.Add("Выделен элемент: " + AttrValueTLN.Text);

	                Memo1.Lines.Add("   Атрибут: " + AttrValueTLN.AttributeName);

	                Memo1.Lines.Add("   Ключ атрибута: " + AttrValueTLN.AttributeKey.ToString);

	                Memo1.Lines.Add("   Значение атрибута: " + AttrValueTLN.Value.ToString);

	                Keys := AttrValueTLN.GetKeys(AttrValueTLN.AttributeName);

	                Memo1.Lines.Add("   Количество показателей:" + Keys.Length.ToString);

	            End If;

	        End If;

	    End For;

	End Sub Button1OnClick;


После выполнения примера, в компонент «Memo1» будут выведены наименование
 и информация о выделенных корневых элементах иерархии, значения которых
 определяются данными справочника.


См. также:


[IAttributeValueTreeListNode](IAttributeValueTreeListNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
