# ISecurityDescriptor.AccessSecured

ISecurityDescriptor.AccessSecured
-


# ISecurityDescriptor.AccessSecured


## Синтаксис


AccessSecured:
 Boolean;


## Описание


Свойство AccessSecured возвращает
 признак использования дискреционных прав доступа для элементов справочника
 НСИ.


## Комментарии


Допустимые значения:


	- True. Для элементов
	 справочника НСИ применяется дискреционный контроль доступа;


	- False. Дискреционный
	 контроль доступа не используется для элементов справочника НСИ.


Значение данного свойства соответствует значению [IRdsDictionary.Secured](KeRds.chm::/Interface/IRdsDictionary/IRdsDictionary.Secured.htm).


Признак того, применяется ли мандатный контроль доступа к элементам
 справочника НСИ, определяет свойство [ISecurityDescriptor.HasAccessMandatory](ISecurityDescriptor.HasAccessMandatory.htm).


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

    // Проверим использование дискреционного контроля доступа для элементов справочника НСИ

    If SD.AccessSecured Then

        // Отключим применение дискреционного контроля доступа, если он используется

        Dict.Secured := False;

        // Сохраним изменения

        Object.Save;

        SD.Apply(True);

    End If;

End Sub UserProc;


При выполнении примера для справочника НСИ будет отключен дискреционный
 контроль доступа для элементов, если ранее он был включен.


См. также:


[ISecurityDescriptor](ISecurityDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
