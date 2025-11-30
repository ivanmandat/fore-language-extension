# IOrmRecord.AttributeValue

IOrmRecord.AttributeValue
-


# IOrmRecord.AttributeValue


## Синтаксис


AttributeValue(AttributeIndex: Integer): Variant;


## Параметры


AttributeIndex. Индекс атрибута.


## Описание


Свойство AttributeValue возвращает значение атрибута по его индексу.


## Комментарии


Для получения индекса атрибута по его идентификатору используйте метод [IOrmRecord.FindAttribute](IOrmRecord.FindAttribute.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент MetaAttributesBreadcrumb и компонент MetaAttributesTreeList с идентификатором «MetaAttributesTreeList1». Компоненты настроены на совместную работу с какой-либо БД временных рядов.


Добавьте ссылку на системные сборки «Cubes», «Metabase», «Orm», «Rds».


			Sub RecordProc;

Var

    Facts: IMetaDictionary;

    Atts: IMetaAttributes;

    SelNodes: Array;

    MembersSet: IMetaMembersSet;

    Member: IMetaMember;

    Rec: IOrmRecord;

    i, AtrIndex: Integer;

    Att: IMetaAttribute;

Begin

    // Получаем справочник временных рядов
    Facts := MetaAttributesTreeList1.Rubricator.Facts;

    // Получаем атрибуты временных рядов
    Atts := Facts.Attributes;

    // Получаем элементы, выделенные в дереве рядов
    SelNodes := MetaAttributesTreeList1.GetSelectedNodes;

    MembersSet := MetaAttributesTreeList1.GetNodesMembers(SelNodes);

    MembersSet.Reset;

    // Выводим информацию об элементах в окно консоли
    While Not MembersSet.Eof Do

        Member := MembersSet.Current;

        Debug.WriteLine("Элемент: " + Member.Name);

        Rec := Member.Tuple;

        Debug.WriteLine("Значения атрибутов элемента:");

        For i := 0 To Atts.Count - 1 Do

            Att := Atts.Item(i);

            AtrIndex := Rec.FindAttribute(Att.Id);

            If AtrIndex <> -1 Then

                Debug.Indent;

                Debug.Write(" атрибут: '" + Att.Name + "'; значение: ");

                Debug.Unindent;

                Debug.WriteLine(Rec.AttributeValue(AtrIndex));

            End If;

        End For;

        Debug.WriteLine("");

        MembersSet.Next;

    End While;

End Sub RecordProc;


Результат выполнения примера: в окно консоли будет выведена информация об элементах, выделенных в компоненте «MetaAttributesTreeList1».


См. также:


[IOrmRecord](IOrmRecord.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
