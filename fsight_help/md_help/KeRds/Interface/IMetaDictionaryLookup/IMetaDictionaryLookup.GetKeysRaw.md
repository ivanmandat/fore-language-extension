# IMetaDictionaryLookup.GetKeysRaw

IMetaDictionaryLookup.GetKeysRaw
-


# IMetaDictionaryLookup.GetKeysRaw


## Синтаксис


GetKeysRaw(Attributes: Array;

           Dimensions:
 Array;

           Result:
 [IMatrixModel](ForeSys.chm::/Interface/IMatrixModel/IMatrixModel.htm);

           Options:
 Integer;

           Attribute:
 String);


## Параметры


Attributes. Массив наименований
 атрибутов рядов;


Dimensions. Массив измерений
 ряда, соответствующих атрибутам;


Result. Матрица, в которую
 будут выгружены результата поиска;


Options. Признак того, что
 при поиске используется агрегатная функция;


Attribute. Наименование атрибута,
 значения которого будут помещены в матрицу Result.


## Описание


Метод GetKeysRaw возвращает
 элементы базы данных временных рядов по заданным измерениям.


## Комментарии


Массив Attributes должен содержать
 строковые значения, а Dimensions
 - значения типа Variant. Порядок наименований атрибутов в массиве Attributes должен соответствовать
 порядку измерений в массиве Dimensions,
 т.е. первый элемент массива Attributes задает
 наименование атрибута, а первый элемент массива Dimensions
 - измерение данного атрибута и т.д.


Количество измерений в результирующей матрице Result
 должна совпадать с количеством измерений в БД временных рядов, в
 которой выполняется поиск.


Для применения к значениям атрибута Attribute
 агрегатных функций используйте параметры Options
 и Attribute. Допустимые значения
 параметра Options:


	- 0. К значениям атрибута
	 применяется агрегатная функция MIN
	 или MAX. Текст функции укажите
	 в параметре Attribute в формате:
	 <функция><наименование_атрибута>.
	 Например: GetKeysRaw(Atts, Dims, mModel, 0, "MAX(DL)");


	- 1. Агрегатные функции
	 не применяются. Например: GetKeysRaw(Atts, Dims, mModel, 1, "MNEMO").


## Пример


Для выполнения примера в репозитории предполагается наличие БД временных
 рядов с идентификатором TSDB, содержащей обязательные атрибуты временных
 рядов с идентификаторами COUNTRY и INDICATOR. Данные атрибуты являются
 ссылкой на справочник.


Добавьте ссылки на системные сборки: Metabase, Cube, Rds, Matrix, Orm,
 Dimensions.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    RubDesc: IMetabaseObjectDescriptor;

	    RubrIn: IRubricatorInstance;

	    DictInst: IMetaDictionaryInstance;

	    MetaDLookup: IMetaDictionaryLookup;

	    DictAtts: IMetaAttributes;

	    Dims: Array[2] Of Variant;

	    Atts: Array[2] Of String;

	    Conditions: IOrmConditions;

	    Cond: IOrmCondition;

	    mf: MatrixFactory;

	    mModel: IMatrixModel;

	    Iter: IMatrixModelIterator;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    // Получаем БД временных рядов

	    RubDesc := MB.ItemById("TSDB");

	    RubrIn := RubDesc.Open(Null) As IRubricatorInstance;

	    // Получаем справочник временных рядов

	    DictInst := RubrIn.Facts;

	    // Создаем объект для поиска по справочнику временных рядов

	    MetaDLookup := DictInst.CreateLookup("");

	    // Указываем измерения, по которым выполняется поиск

	    DictAtts := DictInst.Dictionary.Attributes;

	    Dims[0] := DictAtts.FindById("COUNTRY").ValuesObject.Open(Null) As IDimInstance;

	    Dims[1] := DictAtts.FindById("INDICATOR").ValuesObject.Open(Null) As IDimInstance;

	    // Задаем атрибуты временного ряда, соответствующие измерениям

	    Atts[0] := "COUNTRY";

	    Atts[1] := "INDICATOR";

	    // Задаем условия поиска

	    Conditions := MetaDLookup.CustomWhere;

	    Cond := Conditions.Add;

	    Cond.AttributeName := "COUNTRY";

	    Cond.Value := 512;

	    // Создаем матрицу, в которую будут выгружены результаты

	    mf := New MatrixFactory.Create;

	    mModel := mf.CreateMatrixModel(2);

	    // Выполняем поиск

	    MetaDLookup.GetKeysRaw(Atts, Dims, mModel, 1, "MNEMO");

	    // Выводим результаты в окно консоли

	    Iter := mModel.CreateModelIterator;

	    Iter.Move(IteratorDirection.First);

	    i := 0;

	    While Iter.Valid Do

	        Debug.WriteLine(Iter.Value + " ");

	        Iter.Move(IteratorDirection.Next);

	    End While;

	End Sub UserProc;


Результат выполнения примера: будет выполнен поиск временных рядов по
 измерениям атрибутов «COUNTRY» и «INDICATOR». Условие поиска: значение
 атрибута «COUNTRY» для временного ряда равняется «512». Результаты поиска
 будут выведены в окно консоли.


См. также:


[IMetaDictionaryLookup](IMetaDictionaryLookup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
