# ICubeMetaCopierBinding.DestinationAttributeKey

ICubeMetaCopierBinding.DestinationAttributeKey
-


# ICubeMetaCopierBinding.DestinationAttributeKey


## Синтаксис


DestinationAttributeKey: Integer;


## Описание


Свойство DestinationAttributeKey определяет ключ атрибута базы-приёмника.


## Комментарии


Привязка атрибута базы-приёмника с атрибутами базы-источника данных может осуществляться несколькими способами:


-
используя идентификаторы атрибутов: свойства [ICubeMetaCopierBinding.DestinationAttribute](ICubeMetaCopierBinding.DestinationAttribute.htm) и [ICubeMetaCopierBinding.SourceAttribute](ICubeMetaCopierBinding.SourceAttribute.htm);


-
используя ключи атрибутов: свойства DestinationAttributeKey и [ICubeMetaCopierBinding.SourceAttributeKey](ICubeMetaCopierBinding.SourceAttributeKey.htm);


-
используя ключи и идентификаторы атрибутов одновременно.


Если для привязки используются лишь идентификаторы атрибутов, то в процессе экспорта/импорта данных могут возникнуть ошибки, если идентификатор атрибута в какой-либо из баз был изменен. Более надежной является привязка с использованием ключей атрибутов.


## Пример


Для выполнения примера предполагается наличие базы данных временных рядов с идентификатором «OBJ_RUBRICATOR». В данной базе должен присутствовать объект импорта показателей с идентификатором «OBJ_IMPORTREQUEST», импортирующий данные из базы данных временных рядов. Также необходимо добавить ссылки на системные сборки «Cubes», «Metabase», «Rds».


			    Sub UserProc;

    Var

        Mb: IMetabase;

        RubDesc: IMetabaseObjectDescriptor;

        Obj: IMetabaseObject;

        ImportRequestDef: IImportRequestDefinition;

        ImportRequestRubricatorParams: IImportRequestRubricatorParams;

        Rubr: IRubricator;

        FactsDict: IMetaDictionary;

        Attr: IMetaAttribute;

        Binds: ICubeMetaCopierBindings;

        Binding: ICubeMetaCopierBinding;

        i: Integer;

    Begin

        Mb := MetabaseClass.Active;

        RubDesc := Mb.ItemById("OBJ_RUBRICATOR");

        Obj := Mb.ItemByIdNamespace("OBJ_IMPORTREQUEST", RubDesc.Key).Edit;

    // Параметры импорта
        ImportRequestDef := Obj As IImportRequestDefinition;

        ImportRequestRubricatorParams := ImportRequestDef.RubricatorParams;

        Binds := ImportRequestRubricatorParams.Bindings;

        Rubr := RubDesc.Bind As IRubricator;

        FactsDict := Rubr.Facts;

        For i := 0 To Binds.Count - 1 Do

            Binding := Binds.Item(i);

            If Binding.BindingType = CubeMetaCopierBindingType.Attribute Then

                Attr := FactsDict.Attributes.FindById(Binding.DestinationAttribute);

                Binding.DestinationAttributeKey := Attr.Key;

                Attr := FactsDict.Attributes.FindById(Binding.SourceAttribute);

                Binding.SourceAttributeKey := Attr.Key;

            End If;

        End For;

        Obj.Save;

    End Sub UserProc;


После выполнения примера будет произведена перенастройка объекта импорта: привязки атрибутов будут сделаны по ключам и идентификаторам.


См. также:


[ICubeMetaCopierBinding](ICubeMetaCopierBinding.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
