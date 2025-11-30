# Создание представление-куба

Создание представление-куба
-


# Создание представления-куба


Рассмотрим пример создания представления-куба с использованием языка
 Fore. Для создания представления-куба
 необходимо наличие в репозитории другого куба с идентификатором «Cube_1».
 Данный куб в своей структуре должен иметь календарное измерение с идентификатором
 «CALENDAR».


Указанный ниже пример создает в корневой папке репозитория новый объект
 - Представление-куб и производит настройку его параметров:


	- Указывается куб-источник;


	- Фиксируется измерение для уменьшения размерности представления-куба.


Для выполнения примеров добавьте ссылки
 на системные сборки: Cubes, Dimensions, Matrix, Metabase.


## Пример


			Sub CreateViewCube;

Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    MObj: IMetabaseObject;

    ViewCube: ICubeView;

    SourceCube: ICubeModel;

    FixInfo: ICubeDimensionFixInfo;

    DimFix: ICubeDimensionFix;

Begin

    MB := MetabaseClass.Active;

    //Информация для создания нового объекта репозитория

    CrInfo := MB.CreateCreateInfo;

    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_CUBEVIEW;

    CrInfo.Id := "New_View_Cube";

    CrInfo.Name := "Новый представление-куб";

    CrInfo.Parent := MB.Root;

    //Настройка параметров куба

    MObj := MB.CreateObject(CrInfo).Edit;

    ViewCube := MObj As ICubeView;

    //Указание куба источника

    SourceCube := MB.ItemById("CUBE_1").Bind As ICubeModel;

    ViewCube.Cube := SourceCube.Destinations.DefaultDestination;

    //Фиксация измерения

    FixInfo := ViewCube.FixInfo;

    DimFix := FixInfo.ItemByDim(ViewCube.Cube.Dimensions.FindById("CALENDAR"));

    DimFix.Fixed := True;

    //Указываем метод агрегации значений по фиксированным элементам

    DimFix.Operation := BasicAggregatorOperation.Sum;

    //Отмечаем весь уровень, на котором расположен первый элемент

    DimFix.Selection.SelectSiblings(0);

    //Сохранение куба

    MObj.Save;

End Sub CreateViewCube;


См. также:


[Примеры](KeCubes_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
