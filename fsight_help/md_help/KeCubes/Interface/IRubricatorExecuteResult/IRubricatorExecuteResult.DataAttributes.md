# IRubricatorExecuteResult.DataAttributes

IRubricatorExecuteResult.DataAttributes
-


# IRubricatorExecuteResult.DataAttributes


## Синтаксис


DataAttributes(Dictionary: [RubricatorDictionary](../../Enums/RubricatorDictionary.htm)):
 [IMetaAttributesSet](KeRds.chm::/Interface/IMetaAttributesSet/IMetaAttributesSet.htm);


## Параметры


Dictionary. Справочник, для
 которого необходимо получить информацию о извлеченных атрибутах.


## Описание


Свойство DataAttributes возвращает
 информацию об извлеченных значениях атрибутов для указанного справочника
 базы данных временных рядов.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    RubInst: IRubricatorInstance;

	    Cub: ICubeInstance;

	    Dest: ICubeInstanceDestination;

	    Exe: ICubeInstanceDestinationExecutor;

	    Mat: IMatrix;

	    Result: IRubricatorExecuteResult;

	    DataAttributes: IMetaAttributesSet;

	    MetaAttr: IMetaAttribute;

	    Field: ITableField;

	Begin

	    MB := MetabaseClass.Active;

	    RubInst := MB.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

	    Cub := RubInst As ICubeInstance;

	    Dest := Cub.Destinations.DefaultDestination;

	    Exe := Dest.CreateExecutor;

	    //Атрибут показателей

	    (Exe As IRubricatorFactorIO).FactDataId := "FACTOR;REV;MNEMO";

	    //Атрибут наблюдений

	    (Exe As IRubricatorFactorIO).ValueId := "KEY;VL";

	    Exe.PrepareExecute(Null);

	    Exe.PerformExecute;

	    Mat := Exe.Matrix;

	    Result := CubeClass.ExecuteResult(Mat) As IRubricatorExecuteResult;

	    DataAttributes := Result.DataAttributes(RubricatorDictionary.Facts);

	    For Each MetaAttr In DataAttributes Do

	        Debug.WriteLine("Атрибут справочника: " + MetaAttr.Name);

	        Debug.Indent;

	        Debug.WriteLine("Идентификатор поля таблицы: " + MetaAttr.FieldId);

	        Debug.WriteLine("Множественные значения: " + MetaAttr.HasMultipleValues.ToString);

	        Debug.WriteLine("Скрытый: " + MetaAttr.Hidden.ToString);

	        Debug.WriteLine("Возможность хранения пустых значений: " + MetaAttr.Nullable.ToString);

	        Debug.Unindent;

	    End For;

	End Sub UserProc;


При выполнении примера будет осуществлено извлечение данных базы данных
 временных рядов по указанным атрибутам показателей и наблюдений. Информация
 об извлеченных атрибутах показателей будет выведена в консоль среды разработки.


См. также:


[IRubricatorExecuteResult](IRubricatorExecuteResult.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
