# ICubeMetaLoaderBinding.AttributeKey

ICubeMetaLoaderBinding.AttributeKey
-


# ICubeMetaLoaderBinding.AttributeKey


## Синтаксис


AttributeKey: Integer;


## Описание


Свойство AttributeKey определяет
 ключ атрибута показателя.


## Комментарии


Привязка атрибутов базы данных временных рядов с полями приёмника может
 осуществляться несколькими способами:


	- используя идентификаторы атрибутов: свойство [ICubeMetaLoaderBinding.Attribute](ICubeMetaLoaderBinding.Attribute.htm);


	- используя ключи атрибутов: свойство AttributeKey;


	- используя ключи и идентификаторы атрибутов одновременно.


Если для привязки используются лишь идентификаторы атрибутов, то в процессе
 импорта могут возникнуть ошибки, если идентификатор атрибута в базе данных
 временных рядов был изменен. Более надежной является привязка с использованием
 ключей атрибутов.


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором «OBJ_RUBRICATOR». В данной базе должен присутствовать
 объект импорта показателей с идентификатором «OBJ_IMPORTREQUEST». Также
 необходимо добавить ссылки на системные сборки «Cubes», «Metabase», «Rds».


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    RubDesc: IMetabaseObjectDescriptor;

	    Obj: IMetabaseObject;

	    ImportRequestDef: IImportRequestDefinition;

	    ImportRequestProviderParams: IImportRequestProviderParams;

	    Rubr: IRubricator;

	    FactsDict: IMetaDictionary;

	    Attr: IMetaAttribute;

	    Binds: ICubeMetaLoaderBindings;

	    Binding: ICubeMetaLoaderBinding;

	    i: Integer;

	Begin

	    Mb := MetabaseClass.Active;

	    RubDesc := Mb.ItemById("OBJ_RUBRICATOR");

	    Obj := Mb.ItemByIdNamespace("OBJ_IMPORTREQUEST", RubDesc.Key).Edit;

	    // Параметры импорта

	    ImportRequestDef := Obj As IImportRequestDefinition;

	    ImportRequestProviderParams := ImportRequestDef.ProviderParams;

	    Binds := ImportRequestProviderParams.Bindings;

	    Rubr := RubDesc.Bind As IRubricator;

	    FactsDict := Rubr.Facts;

	    For i := 0 To Binds.Count - 1 Do

	        Binding := Binds.Item(i);

	        If Binding.BindingType = CubeMetaLoaderBindingType.Attribute Then

	            Attr := FactsDict.Attributes.FindById(Binding.Attribute);

	            Binding.AttributeKey := Attr.Key;

	        End If;

	    End For;

	    Obj.Save;

	End Sub UserProc;


После выполнения примера будет произведена перенастройка объекта импорта:
 привязки атрибутов будут сделаны по ключам и идентификаторам.


См. также:


[ICubeMetaLoaderBinding](ICubeMetaLoaderBinding.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
