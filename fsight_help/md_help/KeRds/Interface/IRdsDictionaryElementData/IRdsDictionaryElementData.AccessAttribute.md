# IRdsDictionaryElementData.AccessAttribute

IRdsDictionaryElementData.AccessAttribute
-


# IRdsDictionaryElementData.AccessAttribute


## Синтаксис


AccessAttribute(AttributeKey: Integer): String;


## Параметры


AttributeKey. Ключ атрибута
 доступа, по которому необходимо определить метку безопасности. В качестве
 значения параметра должен передаваться ключ одного из базовых атрибутов:
 [READACCESS](../IRdsAttributes/IRdsAttributes.ReadAccess.htm),
 [WRITEACCESS](../IRdsAttributes/IRdsAttributes.WriteAccess.htm),
 [DELETEACCESS](../IRdsAttributes/IRdsAttributes.DeleteAccess.htm),
 [ACCESSACCESS](../IRdsAttributes/IRdsAttributes.AccessAccess.htm).


## Описание


Свойство AccessAttribute определяет
 метку безопасности по атрибуту доступа, ключ которого передается посредством
 параметра AttributeKey.


## Комментарии


Метка безопасности указывается в строковом виде. Данное свойство используется,
 если доступ распределен для более 32 субъектов безопасности.


Пример работы с меткой безопасности приведен в подразделе «[Управление
 правами доступа к элементам](../../Samples/KeRds_Sample6.htm)».


## Пример


Для выполнения примера предполагается наличие репозитория НСИ - , содержащего
 справочник НСИ с идентификатором "Dict_1". Для справочника включено
 управление правами доступа к элементам. В списке субъектов безопасности,
 имеющих доступ к справочнику содержится пользователь "User_1".


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    LabelSec: ISecurityLabels;

    Dict: IRdsDictionary;

    Attrs: IRdsAttributes;

    DictInst: IRdsDictionaryInstance;

    Element: IRdsDictionaryElement;

    Data: IRdsDictionaryElementData;

    Subject, Maping: ISecuritySubject;

    i: Integer;

    AttributeValue: IAccessAttributeValue;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("Dict_1").Bind;

    LabelSec := MObj.SecurityDescriptor.LabelSecurity;

    Subject := Mb.Security.ResolveName("User_1");

    //Поиск бита, сопоставленного пользователю

    For i := 0 To LabelSec.BitCount - 1 Do

        Maping := LabelSec.Mapping(i);

        If Maping <> Null Then

            If Maping.Sid.AsString = Subject.Sid.AsString Then

                Break;

            End If;

        End If;

    End For;

    //Изменение прав на элемент для указанного пользователя

    Dict := MObj As IRdsDictionary;

    Attrs := Dict.Attributes;

    DictInst := Dict.Open(Null);

    Element := DictInst.Elements.Item(1);

    Data := Element.Data;

    //Создание атрибута доступа

    AttributeValue := New AccessAttributeValue.Create(LabelSec.BitCount, Data.AccessAttribute(Attrs.DeleteAccess.Key));

    //Изменение прав для пользователя

    AttributeValue.Value(i) := True; //False, если необходимо забрать право на удаление

    //Установка новых прав

    Data.AccessAttribute(Attrs.DeleteAccess.Key) := AttributeValue.ToString;

    Element.Update(Data);

End Sub UserProc;


После выполнения примера будут обновлены права
 доступа к первому элементу справочника. Для указанного пользователя будет
 установлено право на удаление.


См. также:


[IRdsDictionaryElementData](IRdsDictionaryElementData.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
