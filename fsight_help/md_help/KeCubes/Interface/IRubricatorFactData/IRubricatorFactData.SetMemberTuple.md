# IRubricatorFactData.SetMemberTuple

IRubricatorFactData.SetMemberTuple
-


# IRubricatorFactData.SetMemberTuple


## Синтаксис


SetMemberTuple(Value: [IMetaMember](KeRds.chm::/Interface/IMetaMember/IMetaMember.htm));


## Параметры


Value. Элемент иерархии.


## Описание


Метод SetMemberTuple устанавливает
 значения атрибутов показателя из элемента иерархии.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки, компонента MetaAttributesTreeList с наименованием MetaAttributesTreeList1.
 К данному компоненту должен быть подключен компонент MetaAttributesBreadcrumb
 с наименованием MetaAttributesBreadcrumb1. MetaAttributesBreadcrumb1 должен
 быть настроен на работу с базой данных временных рядов, содержащей показатель
 с ключом 155813.


Пример будет выполняться при нажатии на кнопку. Перед выполнением примера
 в компоненте MetaAttributesTreeList1 необходимо выбрать один показатель.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    RubrIn: IRubricatorInstance;

    RubRev: IRubricatorRevision;

    FactD: IRubricatorFactData;

    Memb: IMetaMember;

Begin

    RubrIn := MetaAttributesBreadcrumb1.Rubricator;

    RubRev := RubrIn.OpenRevision("Test_Revision");

    FactD := RubrIn.GetFactData(155813, DictionaryGetDataOptions.EditExisting);

    Memb := MetaAttributesTreeList1.SelectedMembers.Current;

    FactD.SetMemberTuple(Memb);

    FactD.SaveAndRevise(SaveRubricatorDataOptions.NoValidateRules);

End Sub Button1OnClick;


После выполнения примера значения атрибутов выделенного показателя будут
 установлены для показателя с ключом 155813.


См. также:


[IRubricatorFactData](IRubricatorFactData.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
