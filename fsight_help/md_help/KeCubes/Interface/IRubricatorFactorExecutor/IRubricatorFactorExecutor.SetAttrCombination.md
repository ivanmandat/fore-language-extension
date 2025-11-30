# IRubricatorFactorExecutor.SetAttrCombination

IRubricatorFactorExecutor.SetAttrCombination
-


# IRubricatorFactorExecutor.SetAttrCombination


## Синтаксис


SetAttrCombination(Attributes: String; Value: Array);


## Параметры


Attributes. Идентификаторы
 атрибутов, разделенные знаком «;»;


Value. Массив значений атрибутов,
 указанных в параметре Attributes.


## Описание


Метод SetAttrCombination
 задает сочетание атрибутов, по которым будет проходить извлечение данных
 временных рядов.


## Комментарии


Метод SetAttrCombination позволяет
 извлекать лишь ряды с заданным сочетанием атрибутов. Если извлекать временные
 ряды с помощью ограничения отметки атрибутов, то будут выбраны ряды, содержащие
 все возможные сочетания атрибутов.


Например, есть атрибуты «Country» и «Indicator». Если задать отметку
 Country = Afghanistan, Albania; Indicator = BCA, BEA, то будут извлечены
 четыре ряда, содержащие все возможные сочетания данных атрибутов. Если
 использовать метод SetAttrCombination
 и задать сочетание атрибутов Afghanistan|BCA и Albania|BEA, то будут извлечены
 только два ряда, содержащих именно такие атрибуты.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором TSDB_MLNG, содержащей атрибуты временных
 рядов с идентификаторами COUNTRY и INDICATOR. Данные атрибуты должны являться
 ссылкой на справочник.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Matrix, Metabase,
 Rds.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    RubDesc, DictDescr: IMetabaseObjectDescriptor;

	    RubrIn: IRubricatorInstance;

	    Cub: ICubeInstance;

	    Dest: ICubeInstanceDestination;

	    FactorExec: IRubricatorFactorExecutor;

	    Exec: ICubeInstanceDestinationExecutor;

	    Mat: IMatrix;

	    Ite: IMatrixIterator;

	    FactAttr: IMetaAttributes;

	    CountryElements, IndicatorElements: IDimElements;

	    SelArr: Array[2] Of Variant;

	    TmpArr: Array[2] Of Integer;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим базу данных временных рядов

	    RubDesc := MB.ItemById("TSDB_MLNG");

	    RubrIn := RubDesc.Open(Null) As IRubricatorInstance;

	    // Получим атрибуты временных рядов

	    FactAttr := RubrIn.Facts.Dictionary.Attributes;

	    // Получим значения атрибута COUNTRY

	    DictDescr := FactAttr.FindById("COUNTRY").ValuesObject;

	    CountryElements := (DictDescr.Open(Null) As IDimInstance).Elements;

	    // Получим значения атрибута INDICATOR

	    DictDescr := FactAttr.FindById("INDICATOR").ValuesObject;

	    IndicatorElements := (DictDescr.Open(Null) As IDimInstance).Elements;

	    // Создадим массив с сочетанием атрибутов для выборки

	    TmpArr[0] := CountryElements.AttributeValue(1, 0) As Integer;

	    TmpArr[1] := IndicatorElements.AttributeValue(1, 0) As Integer;

	    SelArr[0] := TmpArr;

	    TmpArr[0] := CountryElements.AttributeValue(2, 0) As Integer;

	    TmpArr[1] := IndicatorElements.AttributeValue(2, 0) As Integer;

	    SelArr[1] := TmpArr;

	    // Создадим объект для извлечения данных из базы данных временных рядов

	    Cub := RubrIn As ICubeInstance;

	    Dest := Cub.Destinations.DefaultDestination;

	    Exec := Dest.CreateExecutor;

	    FactorExec := Exec As IRubricatorFactorExecutor;

	    // Указываем, что не извлекаем данные пустых и удаленных рядов

	    FactorExec.WhereIsDeleted := False;

	    FactorExec.WhereIsEmpty := False;

	    // Задаем сочетание атрибутов для выборки

	    FactorExec.SetAttrCombination("COUNTRY;INDICATOR", SelArr);

	    FactorExec.FactDataId := "FACTOR;INDICATOR;COUNTRY";

	    // Извлекаем данные и выводим их в окно консоли

	    Exec := FactorExec.AsCubeExecutor;

	    Exec.PrepareExecute(Null);

	    Exec.PerformExecute;

	    Mat := Exec.Matrix;

	    Ite := Mat.CreateIterator;

	    Ite.Move(IteratorDirection.First);

	    While Ite.Valid Do

	        Debug.WriteLine(Ite.Value);

	        Ite.Move(IteratorDirection.Next);

	    End While;

	End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены значения
 временных рядов, образованных сочетанием первых двух элементов из справочников,
 на которые ссылаются атрибуты COUNTRY и INDICATOR. Пустые и удаленные
 атрибуты будут исключены из выборки.


См. также:


[IRubricatorFactorExecutor](IRubricatorFactorExecutor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
