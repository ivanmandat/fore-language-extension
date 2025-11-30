# IRdsLoaderBindings.AddByAttribute

IRdsLoaderBindings.AddByAttribute
-


# IRdsLoaderBindings.AddByAttribute


## Синтаксис


AddByAttribute(Attribute: [IRdsAttribute](../IRdsAttribute/IRdsAttribute.htm)):
 [IRdsBaseBinding](../IRdsBaseBinding/IRdsBaseBinding.htm);


## Параметры


Attribute. Атрибут справочника,
 для которого необходимо создать привязку.


## Описание


Метод AddByAttribute создает
 привязку для указанного атрибута.


## Комментарии


В соответствии с типом атрибута будет установлен [тип
 привязки](../IRdsBaseBinding/IRdsBaseBinding.BindingType.htm). Для привязки можно будет определить базовые свойства, а
 также привести к необходимому типу и задать специфические свойства. Доступны
 следующие типы привязок:


	- [IRdsPredefinedBinding](../IRdsPredefinedBinding/IRdsPredefinedBinding.htm).
	 Параметры привязки системного атрибута.


	- [IRdsTranslationBinding](../IRdsTranslationBinding/IRdsTranslationBinding.htm).
	 Параметры привязки атрибута, содержащего значения на определенном
	 языке.


	- [IRdsUserAttributeBinding](../IRdsUserAttributeBinding/IRdsUserAttributeBinding.htm).
	 Параметры привязки пользовательского атрибута.


	- [IRdsLinkedBinding](../IRdsLinkedBinding/IRdsLinkedBinding.htm).
	 Параметры привязки связанного атрибута.


	- [IRdsImportedBinding](../IRdsImportedBinding/IRdsImportedBinding.htm).
	 Параметры привязки заимствованного атрибута.


## Пример


Для выполнения примера предполагается наличие в репозитории таблицы
 с идентификатором «T_Dictionary» и справочника НСИ - «Dict_1». Также предполагается,
 что поля таблицы и атрибуты справочника имеют одинаковые идентификаторы.


			Sub UserProc;

Var

    MB: IMetabase;

    TableSource: ITable;

    RdsDictionary: IRdsDictionary;

    RdsLoader: IMetaRdsLoader;

    Attrs: IRdsAttributes;

    Attr: IRdsAttribute;

    Fields: ITableFields;

    Field: ITableField;

    Bindings: IRdsLoaderBindings;

    Binding: IRdsBaseBinding;

Begin

    MB := MetabaseClass.Active;

    // Источник данных

    TableSource := MB.ItemById("T_Dictionary").Bind As ITable;

    // Обновляемый справочник

    RdsDictionary := MB.ItemById("Dict_1").Bind As IRdsDictionary;

    RdsLoader := New MetaRdsLoader.Create;

    RdsLoader.Dictionary := RdsDictionary;

    RdsLoader.TableSource := TableSource;

    //Создание привязок

    Attrs := RdsDictionary.Attributes;

    Fields := TableSource.Fields;

    Bindings := RdsLoader.Bindings;

    For Each Attr In Attrs Do

        //Поиск в таблице поля с идентификатором,

        //совпадающим с идентификатором атрибута справочника

        Field := Fields.FindById(Attr.Id);

        If Field <> Null Then

            Select Case Attr.PredefinedType

                Case RdsPredefinedAttribute.Key:

                    Binding := Bindings.KeyBinding;

                    Binding.Attribute := Attr;

                    Binding.Field := Field.Id;

                Case RdsPredefinedAttribute.Name:

                    Binding := Bindings.NameBinding;

                    Binding.Attribute := Attr;

                    Binding.Field := Field.Id;

                Case RdsPredefinedAttribute.Order:

                    Binding := Bindings.OrderBinding;

                    Binding.Attribute := Attr;

                    Binding.Field := Field.Id;

                Else

                    Binding := Bindings.AddByAttribute(Attr);

                    Binding.Field := Field.Id;

            End Select;

        End If;

    End For;

    //Обновление записей

    RdsLoader.Load(UpdateLoadMode.InsertUpdate);

End Sub UserProc;


При выполнении примера будет инициализирован объект, используемый для
 создания справочников НСИ и загрузки в них данных. В настройках объекта
 будет указан справочник НСИ, данные которого необходимо обновить, будут
 созданы привязки для всех атрибутов. После этого данные справочника будут
 обновлены.


См. также:


[IRdsLoaderBindings](IRdsLoaderBindings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
