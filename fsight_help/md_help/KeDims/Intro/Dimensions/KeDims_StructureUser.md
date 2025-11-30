# Структура вычисляемого справочника

Структура вычисляемого справочника
-


# Структура вычисляемого справочника


При работе с вычисляемым справочником необходимо учитывать следующие
 моменты:


	- класс объекта «Вычисляемый
	 справочник» - [MetabaseObjectClass.KE_CLASS_USERDIM](KeSom.chm::/Enums/MetabaseObjectClass.htm).


	- данные для справочника
	 могут храниться где угодно, но для организации структуры элементов
	 справочника должен использоваться модуль, содержащий пользовательскую
	 процедуру с заданной сигнатурой.


Полный пример по созданию вычисляемого справочника с использованием
 языка Fore представлен в разделе
 [Примеры: Создание вычисляемого
 справочника](../../Samples/KeDims_Sample3.htm). Рассмотрим основные этапы по работе с вычисляемым справочником
 более детально.


Интерфейс [IDimensionModel](../../interface/IDimensionModel/IDimensionModel.htm)
 используется только для просмотра информации о структуре справочника.
 Для настройки параметров нового, либо уже существующего, вычисляемого
 справочника необходимо соответствующий объект репозитория привести к интерфейсу
 [IUserDimension](../../interface/IUserDimension/IUserDimension.htm).
 Для изменения параметров объект должен быть открыт на редактирование.


Пример создания нового вычисляемого справочника с идентификатором «NewUserDim»:


	Var

	    //...

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    UserDim: IUserDimension;

	    //...

	Begin

	    //...

	    MB := MetabaseClass.Active;

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_USERDIM;

	    CrInfo.Id := "NewUserDim";

	    CrInfo.Name := "Новый вычисляемый справочник";

	    CrInfo.Parent := MB.Root;

	    //Создание нового вычисляемого справочника и открытие его структуры на редактирование

	    UserDim := MB.CreateObject(CrInfo).Edit As IUserDimension;

	    //...


Пример доступа к структуре существующего вычисляемого справочника с
 идентификатором «UserDim»:


	Var

	    //...

	    MB: IMetabase;

	    UserDim: IUserDimension;

	    //...

	Begin

	    //...

	    MB := MetabaseClass.Active;

	    //Открытие структуры справочника на редактирование

    UserDim := MB.ItemById("UserDim").Edit As IUserDimension;

	    //...


## Атрибуты


Для работы с коллекцией атрибутов вычисляемого справочника предназначен
 интерфейс [IUserDimAttributes](../../interface/IUserDimAttributes/IUserDimAttributes.htm).
 Для корректной работы справочника в списке атрибутов должны быть созданы
 атрибуты с назначением [Наименование](../../interface/IUserDimAttributes/IUserDimAttributes.Name.htm)
 и [Порядок](../../interface/IUserDimAttributes/IUserDimAttributes.Order.htm).


Примечание.
 В качестве атрибута с назначением Наименование
 и Порядок может быть назначен
 один атрибут, но при этом должна соблюдаться уникальность значений в источнике
 данных, который в дальнейшем будет подключен к этому атрибуту.


Рассмотрим пример создания трех новых атрибутов. Данные атрибуты будут
 назначены в качестве атрибутов [Наименования](../../interface/IStandardDimAttributes/IStandardDimAttributes.Name.htm),
 [Порядка](../../interface/IStandardDimAttributes/IStandardDimAttributes.Order.htm)
 и [Идентификатора](../../interface/IStandardDimAttributes/IStandardDimAttributes.Id.htm)
 соответственно:


	Var

	    //...

	    UserDim: IUserDimension;

	    Attrs: IUserDimAttributes;

	    //Переменные для новых атрибутов

	    NameAttr, OrderAttr, IdAttr: IUserDimAttribute;

	    //...

	Begin

	    //...

	    //Список атрибутов

	    Attrs := UserDim.Attributes;

	    //Создание трех новых атрибутов

	    NameAttr := Attrs.Add;

	    OrderAttr := Attrs.Add;

	    IdAttr := Attrs.Add;

	    //Настройка параметров атрибутов

	    NameAttr.DataType := DbDataType.String;

	    NameAttr.Id := "NAME";

	    NameAttr.Name := "Наименование";

	    OrderAttr.DataType := DbDataType.Integer;

	    OrderAttr.Id := "ORDER";

	    OrderAttr.Name := "Порядок";

	    IdAttr.DataType := DbDataType.Integer;

	    IdAttr.Id := "ID";

	    IdAttr.Name := "Идентификатор";

	    //Установка назначения атрибутов

	    Attrs.Name := NameAttr;

	    Attrs.Order := OrderAttr;

	    Attrs.Id := IdAttr;

	    //...


## Сортировка


Для настройки сортировки по атрибутам в пользовательском справочнике
 предназначен интерфейс [IUserDimOrders](../../interface/IUserDimOrders/IUserDimOrders.htm).
 В список сортировки обязательно должен быть включен атрибут, назначение
 которого [Порядка](../../interface/IStandardDimAttributes/IStandardDimAttributes.Order.htm).
 При добавлении в список сортировки какого-либо одного атрибута данный
 атрибут автоматически будет назначен в качестве атрибута [Порядка](../../interface/IStandardDimAttributes/IStandardDimAttributes.Order.htm).
 При необходимости в список сортировки можно включить любое количество
 атрибутов. По атрибуту, добавленному в список в последнюю очередь, сортировка
 также будет осуществляться в последнюю очередь.


	Var

	    //...

	    UserDim: IUserDimension;

	    Attrs: IUserDimAttributes;

	    NameAttr, OrderAttr, IdAttr: IUserDimAttribute;

	    UserOrders: IUserDimOrders;

	    //...

	Begin

	    //...

	    //Список атрибутов

	    Attrs := UserDim.Attributes;

	    //...

	    //Список сортировки

	    UserOrders := Attrs.Orders;

	    //Добавление атрибутов в список сортировки

    UserOrders.Add(OrderAttr, False);

	    UserOrders.Add(NameAttr, True);

	    //...


## Структура


Для работы со структурой вычисляемого справочника предназначены два
 интерфейса: [IUserDimBlocks](../../interface/IUserDimBlocks/IUserDimBlocks.htm)
 - для работы с блоками справочника; [IUserDimIndexes](../../interface/IUserDimIndexes/IUserDimIndexes.htm)
 - для работы с индексами справочника.


### Блоки вычисляемого справочника


В структуре вычисляемого справочника можно создавать только обычные
 блоки. Блоки можно создавать только на верхнем уровне, без какой-либо
 иерархии относительно друг друга. В структуре каждого блока автоматически
 создается первичный индекс. В первую очередь необходимо определить список
 атрибутов этого индекса. Для редактирования списка атрибутов необходимо
 через коллекцию индексов блока (свойство [IUserDimBlock.Indexes](../../interface/IUserDimBlock/IUserDimBlock.Indexes.htm))
 получить первичный ключ и список его атрибутов. В коллекцию атрибутов
 первичного ключа необходимо включить не менее одного атрибута справочника.


	Var

	    //...

	    UserDim: IUserDimension;

	    UserAttrs: IUserDimAttributes;

	    //Атрибуты индекса

	    IndAttrs: IUserDimIndexAttributes;

	    UserBlocks: IUserDimBlocks;

	    UserBlock: IUserDimBlock;

	    //Первичный ключ блока

	    PrimKey: IUserDimIndex;

	    //...

	Begin

	    //...

	    UserAttrs := UserDim.Attributes;

	    UserBlocks := UserDim.Blocks;

	    UserBlock := UserBlocks.Add;

	    //Получение первичного ключа блока

	    PrimKey := UserBlock.Indexes.PrimaryIndex;

	    //Атрибуты первичного ключа

	    IndAttrs := PrimKey.Attributes;

	    //Включание в первичный ключ атрибута справочника с назначением Идентификатор

	    IndAttrs.Add(UserAttrs.Id);

	    //...


В отличие от табличного справочника, привязка атрибутов в блоке к какому-либо
 источнику данных не осуществляется. Эта функция выполняется пользовательским
 макросом.


### Индексы вычисляемого справочника


Для работы с индексам вычисляемого справочника предназначен интерфейс
 [IUserDimIndexes](../../interface/IUserDimIndexes/IUserDimIndexes.htm).
 Данный интерфейс также используется при работе с индексами блока справочника.


Для получения индексов справочника используется свойство [IUserDimension.Indexes](../../interface/IUserDimension/IUserDimension.Indexes.htm).
 Для получения индексов блока справочника используется свойство [IUserDimBlock.Indexes](../../interface/IUserDimBlock/IUserDimBlock.Indexes.htm).
 В коллекцию атрибутов любого индекса необходимо включить не менее одного
 атрибута вычисляемого справочника.


	Var

	    //...

	    UserDim: IUserDimension;

	    //Атрибуты вычисляемого справочника

	    UserAttrs: IUserDimAttributes;

	    //Индекс

	    UserIndex: IUserDimIndex;

	    IndAttrs: IUserDimIndexAttributes;

	    //...

	Begin

	    //...

	    //Получение атрибутов вычисляемого справочника

	    UserAttrs := UserDim.Attributes;

	    //Создание нового индекса в справочнике

	    UserIndex := UserDim.Indexes.Add;

	    //Получение атрибутов индекса

	    IndAttrs := UserIndex.Attributes;

	    //Добавление атрибута с назначением Наименование в индекс

	    IndAttrs.Add(UserAttrs.Name);

	    //...


## Уровни


Для работы с коллекцией уровней вычисляемого справочника предназначен
 интерфейс [IUserDimLevels](../../interface/IUserDimLevels/IUserDimLevels.htm).


	Var

	    //...

	    UserDim: IUserDimension;

	    UserLevels: IUserDimLevels;

	    UserLevel: IUserDimLevel;

	    //...

	Begin

	    //...

	    //Список уровней

	    UserLevels := UserDim.Levels;

	    UserLevel := UserLevels.Add;

	    UserLevel.Id := "COUNTRYLVL";

	    UserLevel.Name := "Страны";

	    UserLevel := UserLevels.Add;

	    UserLevel.Id := "CITYLVL";

	    UserLevel.Name := "Города";

	    //...


## Макрос


Основным элементом вычисляемого справочника является пользовательский
 макрос, который используется для построения дерева элементов справочника.
 В качестве пользовательского макроса может выступать процедура, расположенная
 в любом модуле/форме/сборке репозитория и имеющая одну из следующих сигнатур:


Sub UserMacro(UserDim: IUserDimension; Builder: IDimBuilder);

Sub UserMacro(UserDim: IUserDimension; Builder: IDimBuilder; Param: IMetabaseObjectParamValues);


Процедура должна иметь два-три параметра, в которых при выполнении будут
 содержаться следующие значения:


	- Вычисляемый справочник, для которого осуществляется построение
	 дерева элементов.


	- Объект, используемый для подготовки вычисляемого справочника
	 к загрузке данных.


	- Значения параметров, с которыми осуществляется открытие вычисляемого
	 справочника. Данные значения могут использоваться при доступе как
	 каким-либо данным, либо для управления иерархией элементов при построении.


Примечание.
 Наименования параметров и пользовательского макроса могут быть любыми.
 Порядок параметров и тип значения должен соответствовать указанным выше.


Для подключения макроса к справочнику необходимо:


	- в свойстве [ForeModule](../../interface/IUserDimension/IUserDimension.ForeModule.htm)
	 указать модуль репозитория, содержащий макрос.


	- в свойстве [ForeSub](../../interface/IUserDimension/IUserDimension.ForeSub.htm)
	 указать наименование макроса.


Var

    //...

    MB: IMetabase;

    UserDim: IUserDimension;

    //...

Begin

    //...

    MB := MetabaseClass.Active;

    //Открытие структуры справочника на редактирование

    UserDim := MB.ItemById("UserDim").Edit As IUserDimension;

    //Подключение макроса

    //Указание модуля репозитория

    UserDim.ForeModule := MB.ItemById("UserModule").Bind As IModule;

    //Указание наименование макроса

    UserDim.ForeSub := "UserMacro";

    //...


### Подготовка к загрузке данных


В пользовательском макросе перед непосредственной загрузкой необходимо
 подготовить справочник. Подготовка заключается в создании различных загрузчиков
 для блоков справочника. В первую очередь для каждого блока справочника
 необходимо создать загрузчик корневых элементов. Для создания загрузчика
 корневых элементов используется метод [CreateRootBlockLoader](../../interface/IDimBuilder/IDimBuilder.CreateRootBlockLoader.htm).


Sub UserMacro(UserDim: IUserDimension; Builder: IDimBuilder);

Var

    //...

    DimBlocks: IUserDimBlocks;

    DimBlock: IUserDimBlock;

    BlockRoot: IDimBlockLoader;

    //...

Begin

    //Получение списка блоков открываемого вычисляемого справочника

    DimBlocks := UserDim.Blocks;

    //Получение параметров первого блока

    DimBlock := DimBlocks.Item(0);

    //Создание загрузчика корневых элементов для первого блока справочника

    BlockRoot := Builder.CreateRootBlockLoader(DimBlock.Key);

    //...

End Sub UserMacro;


Если предполагается создание иерархии элементов, то для загрузки элементов
 нижних уровней потребуется дополнительный загрузчик. Для создания загрузчика
 элементов нижних уровней используется метод [CreateBlockLoader](../../interface/IDimBuilder/IDimBuilder.CreateBlockLoader.htm).


Sub UserMacro(UserDim: IUserDimension; Builder: IDimBuilder);

Var

    //...

    DimBlocks: IUserDimBlocks;

    DimBlock: IUserDimBlock;

    BlockRoot, Block: IDimBlockLoader;

    //...

Begin

    //Получение списка блоков открываемого вычисляемого справочника

    DimBlocks := UserDim.Blocks;

    //Получение параметров первого блока

    DimBlock := DimBlocks.Item(0);

    //Создание загрузчика корневых элементов для первого блока справочника

    BlockRoot := Builder.CreateRootBlockLoader(DimBlock.Key);

    //Создание загрузчика элементов нижних уровней

    Block := Builder.CreateBlockLoader(DimBlock.Key, DimBlock.Key);

    //...

End Sub UserMacro;


### Загрузка данных


Работу с загрузчиком данных можно представить как работу с таблицей.
 Для работы с такой таблицей используются свойства и методы интерфейса
 [IDimBlockLoader](../../interface/IDimBlockLoader/IDimBlockLoader.htm).
 Одна строка таблицы соответствует одному элементу справочника. Столбцы
 таблицы соответствуют атрибутам справочника. Порядок следования
 столбцов соответствует тому порядку, в котором были созданы атрибуты в
 справочнике. Для добавления нового элемента используется метод [AddRow](../../interface/IDimBlockLoader/IDimBlockLoader.AddRow.htm).
 Данный метод возвращает номер строки, в которую будет добавлен элемент.
 Для задания значения атрибутов элемента используется свойство [Value](../../interface/IDimBlockLoader/IDimBlockLoader.Value.htm).
 В данном свойстве указывается номер стоки элемента и номер столбца (атрибута),
 для которого необходимо задать значение.


Var

    //...

    UserDim: IUserDimension;

    Attrs: IUserDimAttributes;

    BlockRoot: IDimBlockLoader;

    i, j, n, Row: Integer;

    //...

Begin

    //...

    Attrs := UserDim.Attributes;

    For i := 0 To n Do

        //Добавление нового элемента

        Row := BlockRoot.AddRow;

        For j := 0 To BlockRoot.ColCount - 1 Do

            //Проверка назначения атрибута, которому соответствует столбец j,

            //и задание соответствующего значения

            If (Attrs.Item(j) = Attrs.Id) Then

                BlockRoot.Value(Row, j) := //значение идентификатора элемента

            Elseif Attrs.Item(j) = Attrs.Name Then

                BlockRoot.Value(Row, j) := //значение наименования элемента

            Elseif Attrs.Item(j) = Attrs.Order Then

                BlockRoot.Value(Row, j) := //значение порядка элемента

            Else

                //...

            End If;

        End For;

    End For;


### Создание иерархии элементов


Так как в вычисляемом справочнике создаются только обычные блоки без
 возможности настройки рекурсии, то для организации иерархии реализован
 специальный механизм. Для создания иерархии элементов используется загрузчик
 элементов нижних уровней. В данном загрузчике количество доступных столбцов
 всегда на один больше чем количество атрибутов, созданных в вычисляемом
 справочнике. Если задать значение по этому дополнительному столбцу, то
 при построении данное значение отображаться не будет. Оно будет рассматриваться
 как идентификатор родительского элемента.


Var

    //...

    BlockRoot, Block: IDimBlockLoader;

    i, j, n, Row: Integer;

    //...

Begin

    //...

    For i := 0 To j Do

        //Добавление нового корневого элемента блока

        Row := BlockRoot.AddRow;

        n := BlockRoot.ColCount;

        //Установка атрибутов элемента

        BlockRoot.Value(Row, 0) := //значение атрибута корневого элемента

        //...

        BlockRoot.Value(Row, n - 1) := //значение атрибута корневого элемента

        //Добавление нового элемента нижнего уровня

        Row := Block.AddRow;

        n := Block.ColCount;

        //Установка атрибутов элемента

        BlockRoot.Value(Row, 0) := //значение атрибутов элемента

        //...

        BlockRoot.Value(Row, n - 2) := //значение атрибута элемента

        //Установка идентификатора родительского элемента

        BlockRoot.Value(Row, n - 1) := //значение атрибута элемента

    End For;


См. также:


[Работа
 со структурой справочников](KeDims_StructureDimensions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
