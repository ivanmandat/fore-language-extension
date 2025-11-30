# IMetaAttributeNamings.GetNamesRaw

IMetaAttributeNamings.GetNamesRaw
-


# IMetaAttributeNamings.GetNamesRaw


## Синтаксис


GetNamesRaw(Values: [IMatrixModel](ForeSys.chm::/Interface/IMatrixModel/IMatrixModel.htm);
 Attributes: Array; Dimensions: Array; [Names: [IMatrixModel](ForeSys.chm::/Interface/IMatrixModel/IMatrixModel.htm)
 = Null; ][ValueIndex: Integer
 = 0]);


## Параметры


Values. Матрица значений.


Attributes. Массив наименований
 атрибутов справочника.


Dimensions. Массив измерений
 справочника.


Names. Матрица наименований.
 Необязательный параметр. По умолчанию данный параметр не определен.


ValueIndex. Индекс значения
 в матрице. Необязательный параметр. По умолчанию матрица значений обрабатывается
 с первого элемента.


## Описание


Метод GetNamesRaw позволяет
 получить наименование элементов базы данных временных рядов по заданным
 значениям и измерениям.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_FC и репозитория НСИ с идентификатором
 RDS_REPO. В репозитории НСИ должен присутствовать справочник с идентификатором
 DICT_CTR. В базе данных временных рядов должен присутствовать атрибут,
 ссылающийся на данный справочник.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Rds.


	Sub Userproc;

	Var

	    Dimensions: Array[1] Of Variant;

	    Attributes: Array[1] Of String;

	    MetaDic, DicEdit: IMetaDictionary;

	    Nams: IMetaAttributeNamings;

	    Rubricator: IRubricator;

	    Mb: IMetabase;

	    RDS: IMetabaseObjectDescriptor;

	    Dim: IDimInstance;

	    Names: Matrix[1];

	    mModel: IMatrixModel;

	Begin

	    Mb := MetabaseClass.Active;

	    Rubricator := Mb.ItemById("OBJ_FC").Bind As IRubricator;

	    MetaDic := Rubricator.Facts;

	    DicEdit := (MetaDic As IMetabaseObject).Edit As IMetaDictionary;

	    Nams := DicEdit.AttributeNamings;

	    Names[0] := 512;

	    MModel := Names As IMatrixModel;

	    RDS := Mb.ItemById("RDS_REPO");

	    Dim := MB.ItemByIdNamespace("DICT_CTR", RDS.Key).Open(Null) As IDimInstance;

	    Dimensions[0] := Dim;

	    Attributes[0] := "COUNTRY";

	    Nams.GetNamesRaw(mModel, Attributes, Dimensions);

	End Sub UserProc;


После выполнения примера будут получены наименования элементов базы
 данных временных рядов по заданным значениям и измерениям.


См. также:


[IMetaAttributeNamings](IMetaAttributeNamings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
