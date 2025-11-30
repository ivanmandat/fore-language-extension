# IRubricatorFactorExecutor.UseDeduplication

IRubricatorFactorExecutor.UseDeduplication
-


# IRubricatorFactorExecutor.UseDeduplication


## Синтаксис


UseDeduplication: Boolean;


## Описание


Свойство UseDeduplication определяет,
 поддерживает ли база данных временных рядов [дедупликацию](UiNav.chm::/Glossary.htm#deduplicatio).


## Комментарии


[Дедупликация](UiNav.chm::/Glossary.htm#deduplicatio)
 выполняется при создании матрицы и поддерживается для строк и числовых
 значений.


В результате дедупликации в матрице будут храниться только разные строки.
 Несколько нод матрицы могут ссылаться на одну строку. Это позволяет сократить
 объем создаваемой матрицы.


Допустимые значения:


	- True. Используется дедупликация;


	- False. Дедупликация
	 не используется.


## Пример


Для выполнения примера в репозитории предполагается наличие базы
 данных временных рядов с идентификатором «TSDB», содержащей атрибут рядов
 с идентификатором «CITY».


Добавьте ссылки на системные сборки: Cubes, Dimensions, Matrix, Metabase,
 Orm, Rds.


			Sub UserProc;

Var

    MB: IMetabase;

    RubDesc: IMetabaseObjectDescriptor;

    RubrIn: IRubricatorInstance;

    Cub: ICubeInstance;

    Dest: ICubeInstanceDestination;

    FactorExec: IRubricatorFactorExecutor;

    FactsLookup: IRubricatorFactsLookup;

    MetaDLookup: IMetaDictionaryLookup;

    Key: Array Of Integer;

    i: Integer;

    Cond: IOrmCondition;

    Exec: ICubeInstanceDestinationExecutor;

    Mat: IMatrix;

    Ite: IMatrixIterator;

    SelSet: IDImSelectionSet;

Begin

    // Получаем текущий репозиторий

    MB := MetabaseClass.Active;

    // Получаем базу данных временных рядов

    RubDesc := MB.ItemById("TSDB");

    // Открываем базу данных временных рядов

    RubrIn := RubDesc.Open(Null) As IRubricatorInstance;

    // Получаем вариант отображения базы данных временных рядов, используемый по умолчанию

    Cub := RubrIn As ICubeInstance;

    Dest := Cub.Destinations.DefaultDestination;

    // Создаем объект для извлечения данных

    Exec := Dest.CreateExecutor;

    FactorExec := Exec As IRubricatorFactorExecutor;

    // Указываем, что используем дедупликацию

    FactorExec.UseDeduplication := True;

    // Задаем параметры отбора данных

    FactsLookup := RubrIn.CreateFactsLookup;

    MetaDLookup := FactsLookup.Lookup;

    // Значение атрибута CITY должно быть равно 750

    Cond := MetaDLookup.Where.Add;

    Cond.AttributeName := "CITY";

    Cond.Value := 750;

    // Создаем массив для ключей рядов, соответствующих условиям отбора

    i := FactsLookup.LookupFactors.Length;

    Key := New Integer[i];

    // Получаем массив ключей рядов, соответствующих условиям отбора

    Key := FactsLookup.LookupFactors;

    // Указываем, что именно из рядов с данными ключами необходимо получить данные

    FactorExec.SetFactorKeys(Key);

    // Указываем, что получаем значения по атрибуту VL,

    // то есть получаем значения рядов

    FactorExec.ValueKind := MetaAttributeKind.Value;

    FactorExec.ValueId := "VL";

    // Указываем, что значения должны быть получены по состоянию на последнюю ревизию

    FactorExec.WhereRevisionBetween(-1, -1);

    // Выполняем получение данных

    Exec := FactorExec.AsCubeExecutor;

    Exec.PrepareExecute(Null);

    Exec.PerformExecute;

    // Получаем матрицу с данными

    Mat := Exec.Matrix;

    // Выводим значение элемента до изменения

    Ite := Mat.CreateIterator;

    Ite.Move(IteratorDirection.Last);

    Debug.Write("Значение элемента до изменения: ");

    Debug.WriteLine(Ite.Value);

    // Задаем отметку по которой будем менять значение

    SelSet := Dest.CreateDimSelectionSet;

    For i := 0 To SelSet.Count - 1 Do

        SelSet.Item(i).SelectElement(0, False);

    End For;

    // Меняем значение элемента

    Mat.SetValueBySelection(SelSet, 0.547);

    // Выводим значение элемента после изменения

    Ite.Move(IteratorDirection.Last);

    Debug.Write("Значение элемента после изменения: ");

    Debug.WriteLine(Ite.Value);

End Sub UserProc;


В результате выполнения примера будет получена матрица данных по следующему
 условию: значение атрибута «CITY» равняется «750». При получении данных
 будет использоваться дедупликация. Затем будет изменено значение элемента.
 В окно консоли будет выведено значение данного элемента до и после изменения.


См. также:


[IRubricatorFactorExecutor](IRubricatorFactorExecutor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
