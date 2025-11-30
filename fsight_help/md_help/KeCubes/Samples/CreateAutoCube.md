# Создание автоматического куба

Создание автоматического куба
-


# Создание автоматического куба


Рассмотрим пример создания автоматического куба с использованием языка
 Fore. Для создания куба необходимо
 наличие в репозитории следующих объектов:


	- Базы данных с идентификатором «DB»;


	- Справочник фактов с идентификатором «FACTS»;


	- Справочник стран с идентификатором «COUNTRY»;


	- Календарный справочник с идентификатором «CALENDAR»;


Указанный ниже пример создает в корневой папке репозитория новый объект
 - Автоматический куб и производит настройку его параметров:


	- Указывается база данных;


	- Задается список измерений.


Для выполнения примеров добавьте ссылки на системные сборки: Cubes,
 Db, Dimensions, Metabase.


## Пример


			Sub CreateAutoCube;

Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    MObj: IMetabaseObject;

    AutoCube: IAutoCube;

    Dims: IAutoCubeDimensions;

Begin

    MB := MetabaseClass.Active;

    CrInfo := MB.CreateCreateInfo;

    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_AUTOCUBE;

    CrInfo.Id := "New_Auto_Cube";

    CrInfo.Name := "Новый автоматический куб";

    CrInfo.Parent := MB.Root;

    MObj := MB.CreateObject(CrInfo).Edit;

    AutoCube := MObj As IAutoCube;

    //Указываем БД, в которой будут храниться данные куба

    AutoCube.Database := MB.ItemById("DB").Bind As IDatabase;

    //Задаем список измерений куба

    Dims := AutoCube.Dimensions;

    Dims.Add(MB.ItemById("FACTS").Bind As IDimensionModel);

    Dims.Add(MB.ItemById("COUNTRY").Bind As IDimensionModel);

    Dims.Add(MB.ItemById("CALENDAR").Bind As IDimensionModel);

    MObj.Save;

End Sub CreateAutoCube;


См. также:


[Примеры](KeCubes_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
