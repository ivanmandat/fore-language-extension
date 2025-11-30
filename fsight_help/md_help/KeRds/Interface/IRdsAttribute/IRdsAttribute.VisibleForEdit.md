# IRdsAttribute.VisibleForEdit

IRdsAttribute.VisibleForEdit
-


# IRdsAttribute.VisibleForEdit


## Синтаксис


VisibleForEdit: [TriState](ForeSys.chm::/Enums/TriState.htm);


## Описание


Свойство VisibleForEdit определяет,
 доступно ли значение атрибута для редактирования в карточке элемента справочника.


## Комментарии


Допустимые значения свойства соответствуют элементам перечисления [TriState](ForeSys.chm::/Enums/TriState.htm):


	- OnOption. Значение атрибута
	 всегда доступно для редактирования в карточке элемента;


	- OffOption. Значение
	 атрибута никогда не доступно для редактирования в карточке элемента;


	- Undefined. Установлено
	 по умолчанию. Значение атрибута доступно для редактирования в карточке
	 элемента, если атрибут не является скрытым.


Значение свойства VisibleForEdit
 влияет на значения свойств [IRdsAttribute.Nullable](IRdsAttribute.Nullable.htm)
 и [IRdsAttribute.Hidden](IRdsAttribute.Hidden.htm)
 следующим образом:


	- атрибут не скрыт, является обязательным и доступен в карточке
	 элемента в зависимости от настроек скрытости, т.е. Hidden
	 = False, Nullable = False,
	 VisibleForEdit = TriState.Undefined.
	 Если атрибут сделать скрытым Hidden
	 = True, то он автоматически станет необязательным Nullable
	 = True. Пока атрибут скрыт, сделать его обязательным невозможно;


	- если атрибут обязательный Nullable
	 = False и установлено VisibleForEdit
	 = TriState.OffOption, то атрибут автоматически станет необязательным
	 Nullable = True. Если VisibleForEdit = TriState.OffOption,
	 то атрибут невозможно сделать обязательным;


	- если атрибут всегда отображается в карточке элемента VisibleForEdit
	 = TriState.OnOption, то свойства Hidden
	 и Nullable друг на друга не
	 влияют.


Таким образом, значение свойства [IRdsAttribute.Nullable](IRdsAttribute.Nullable.htm)
 следует изменять последним.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 «RDS», содержащего справочник НСИ с идентификатором «DICT_RDS». Добавьте
 ссылки на системные сборки «Metabase», «Rds», «Dal».


			Sub UserProc;

Var

    mb: IMetabase;

    RdsKey: Integer;

    RdsDict: IRdsDictionary;

    RdsAttr: IRdsAttribute;

Begin

    mb := MetabaseClass.Active;

    RdsKey := mb.GetObjectKeyById("RDS");

    RdsDict := mb.ItemByIdNamespace("DICT_RDS", RdsKey).Edit As IRdsDictionary;

    RdsAttr := RdsDict.Attributes.Add;

    RdsAttr.Id := "USER_ATTR";

    RdsAttr.Name := "Страна";

   RdsAttr.DataType := DbDataType.String;

    RdsAttr.VisibleForEdit := TriState.OnOption;

   (RdsDict As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в справочник будет добавлен новый атрибут,
 всегда доступный для редактирования в карточке элемента справочника.


См. также:


[IRdsAttribute](IRdsAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
