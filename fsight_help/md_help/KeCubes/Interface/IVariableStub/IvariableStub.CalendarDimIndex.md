# IVariableStub.CalendarDimIndex

IVariableStub.CalendarDimIndex
-


# IVariableStub.CalendarDimIndex


## Синтаксис


CalendarDimIndex: Integer;


## Описание


Свойство CalendarDimIndex
 возвращает индекс календарного измерения в источнике данных.


## Комментарии


Если свойство возвращает значение «-1», то в источнике данных отсутствует
 календарное измерение.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MS», содержащего модель с идентификатором
 «MODEL_LINEARREGR». Данная модель должна использовать куб в качестве источника
 данных.


Добавьте ссылки на системные сборки: Cubes, Metabase, Ms.


			Sub UserProc;

Var

    mb: Imetabase;

    MsKey: Integer;

    Model: IMsModel;

    Outputs: IMsFormulaTransformVariables;

    Stub: IVariableStub;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем ключ контейнера моделирования

    MsKey := mb.GetObjectKeyById("MS");

    // Получаем модель

    Model := mb.ItemByIdNamespace("MODEL_LINEARREGR", MsKey).Bind As IMsModel;

    // Получаем моделируемые переменные

    Outputs := Model.Transform.Outputs;

    // Получаем источник данных первой моделируемой переменной

    Stub := Outputs.Item(0).Stub;

    // Выводим в окно консоли индекс календарного измерения в полученном источнике

    Debug.WriteLine("Индекс каледарного измерения в источнике данных '" +

        Stub.Id + "': " + Stub.CalendarDimIndex.ToString);

End Sub UserProc;


В результате выполнения примера в окно консоли будет выведен индекс
 календарного измерения для источника данных моделируемой переменной.


См. также:


[IVariableStub](IVariableStub.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
