# IDimBuilder.SetAttributeInstanceValuesLoader

IDimBuilder.SetAttributeInstanceValuesLoader
-


# IDimBuilder.SetAttributeInstanceValuesLoader


## Синтаксис


SetAttributeInstanceValuesLoader(Loader: [IDimAttributeInstanceValuesLoader](../IDimAttributeInstanceValuesLoader/IDimAttributeInstanceValuesLoader.htm));


## Параметры


Loader. Загрузчик значений
 дополнительных атрибутов.


## Описание


Метод SetAttributeInstanceValuesLoader
 устанавливает загрузчик значений дополнительных атрибутов.


## Примечание


Данный метод используется при работе всех видов справочников платформы.


## Пример


Для выполнения примера предполагается наличие в репозитории вычисляемого
 справочника с тремя атрибутами.


Данный пример является макросом для вычисляемого справочника. Процедура
 LoadDim может использоваться для
 установки отложенной загрузки для атрибута.


			Sub LoadDim(UserDim: IUserDimension; Builder: IDimBuilder);

Var

    loader: IDimBlockLoader;

    row: Integer;

Begin

    // Установка отложенной загрузки для атрибута

    Builder.SetAttributeInstanceValuesLoader(New AttributeValuesLoader.Create(UserDim.Attributes.Item(2).Key, UserDim.Blocks.Item(0).Key));

    //Создаем загрузчик корневых элементов

    loader := Builder.CreateRootBlockLoader(UserDim.Blocks.Item(0).Key);

    //Создаем корневые элементы

    row := loader.AddRow;

    loader.Value(row, 0) := 1;

    loader.Value(row, 1) := "1";

End Sub LoadDim;

// Отложенный загрузчик

Class AttributeValuesLoader: Object, IDimAttributeInstanceValuesLoader

    attributeKey: Integer;

    blockKey: Integer;

    Public Constructor Create(attributeKey: Integer; blockKey: Integer);

    Begin

        Self.attributeKey := attributeKey;

        Self.blockKey := blockKey;

    End Constructor Create;

    // Определение метода Load

    Sub Load(Arguments: IDimAttributeInstanceValuesLoaderArguments);

    Var

        loader: IDimBlockLoader;

        row: Integer;

    Begin

        If (Arguments.AttributeKeys <> Null) And (Arguments.AttributeKeys.Length > 0) And (Arguments.AttributeKeys[0] = Self.attributeKey) Then

            loader := Arguments.BlockLoader(Self.blockKey);

            row := loader.AddRow;

            // Заполнение атрибута первичного ключа для привязки этой строки к загруженному элементу

            loader.Value(row, 0) := 1;

            // Заполнение атрибута, загрузка которого отложена

            loader.Value(row, 2) := "defered value";

        End If;

    End Sub Load;

End Class AttributeValuesLoader;


В результате выполнения процедуры загрузка значений атрибута будет отложена.


См. также:


[IDimBuilder](IDimBuilder.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
