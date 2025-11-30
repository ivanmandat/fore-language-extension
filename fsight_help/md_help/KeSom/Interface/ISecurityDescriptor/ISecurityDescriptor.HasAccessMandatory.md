# ISecurityDescriptor.HasAccessMandatory

ISecurityDescriptor.HasAccessMandatory
-


# ISecurityDescriptor.HasAccessMandatory


## Синтаксис


HasAccessMandatory: Boolean;


## Описание


Свойство HasAccessMandatory
 возвращает признак использования мандатного контроля доступа для
 элементов справочника НСИ.


## Комментарии


	- True. Мандатный контроль
	 доступа используется для элементов справочника НСИ;


	- False. Мандатный контроль
	 доступа не используется для элементов справочника НСИ.


Значение свойства соответствует значению [IRdsDictionary.HasMandatoryAccess](KeRds.chm::/Interface/IRdsDictionary/IRdsDictionary.HasMandatoryAccess.htm).


Признак того, применяется ли дискреционный контроль доступа к элементам
 справочника НСИ, определяет свойство [ISecurityDescriptor.AccessSecured](ISecurityDescriptor.AccessSecured.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории справочника
 НСИ с идентификатором RDS_DICT. Пользователь, выполняющий пример, должен
 обладать [привилегией](Admin.chm::/04_SecurityPolicy/Admin_Priv.htm)
 «Изменение метки безопасности и списка
 контроля доступа любого объекта».


Добавьте ссылки на системные сборки: Metabase, Rds.


			Sub UserProc;

Var

    MB: IMetabase;

    Object: IMetabaseObject;

    SD: ISecurityDescriptor;

    Dict: IRdsDictionary;

    MObj: IMetabaseObjectDescriptor;

Begin

    // Получим текущий репозиторий

    MB := MetabaseClass.Active;

    // Получим справочник НСИ

    MObj := MB.ItemById("RDS_DICT");

    Object := MObj.Edit;

    Dict := Object As IRdsDictionary;

    // Получим параметры управления доступом

    SD := Object.SecurityDescriptor;

    // Проверим использование мандатного контроля доступа для элементов справочника НСИ

    If SD.HasAccessMandatory Then

        // Отключим применение мандатного контроля доступа, если он используется

        Dict.HasMandatoryAccess := False;

        // Сохраним изменения

        Object.Save;

        SD.Apply(True);

    End If;

End Sub UserProc;


При выполнении примера для справочника НСИ будет отключен мандатный
 контроль доступа для элементов, если ранее он был включен.


См. также:


[ISecurityDescriptor](ISecurityDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
