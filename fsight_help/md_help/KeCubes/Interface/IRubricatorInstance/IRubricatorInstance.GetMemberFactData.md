# IRubricatorInstance.GetMemberFactData

IRubricatorInstance.GetMemberFactData
-


# IRubricatorInstance.GetMemberFactData


## Синтаксис


GetMemberFactData(Member: [IMetaMember](KeRds.chm::/Interface/IMetaMember/IMetaMember.htm);
 [Options: [DictionaryGetDataOptions](KeRds.chm::/Enums/DictionaryGetDataOptions.htm)
 = 0]): [IRubricatorFactData](../IRubricatorFactData/IRubricatorFactData.htm);


## Параметры


Member. Элемент иерархии;


Options. Параметр получения
 данных.


## Описание


Метод GetMemberFactData возвращает
 данные из справочника показателей по указанному элементу иерархии.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки, компонента MetaAttributesTreeList с наименованием MetaAttributesTreeList1.
 К данному компоненту должен быть подключен компонент MetaAttributesBreadcrumb
 с наименованием MetaAttributesBreadcrumb1. MetaAttributesBreadcrumb1 должен
 быть настроен на работу с базой данных временных рядов.


Пример будет выполняться при нажатии на кнопку. Перед выполнением примера
 в компоненте MetaAttributesTreeList1 необходимо выбрать один показатель.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Memb: IMetaMember;

    RubInst: IRubricatorInstance;

    FactData: IRubricatorFactData;

    Revi: IRubricatorRevision;

    DataMembers: IMetaDataMembers;

    DataMember: IMetaDataMember;

    i: Integer;

Begin

    Memb := MetaAttributesTreeList1.SelectedMembers.Current;

    RubInst := MetaAttributesBreadcrumb1.Rubricator;

    Revi := RubInst.OpenRevision("GetMemberFactData");

    FactData := RubInst.GetMemberFactData(Memb, DictionaryGetDataOptions.Create);

    Debug.WriteLine("FactorKey = " + FactData.FactorKey.ToString);

    DataMembers := FactData.Record.Members;

    For i := 0 To DataMembers.Count - 1 Do

        DataMember := DataMembers.Item(i);

        Debug.WriteLine(DataMember.Attribute.Id + " = " + DataMember.Value);

    End For;

End Sub Button1OnClick;


После выполнения примера значения атрибутов выбранного показателя будут
 выведены в окно консоли.


См. также:


[IRubricatorInstance](IRubricatorInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
