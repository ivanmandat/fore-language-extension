# ICubeCreator.EditCube

ICubeCreator.EditCube
-


# ICubeCreator.EditCube


## Синтаксис


EditCube(Cube: [IStandardCube](../IStandardCube/IStandardCube.htm));


## Параметры


Cube. Куб, структуру которого
 необходимо отредактировать.


## Описание


Метод EditCube изменяет структуру
 указанного куба в соответствии с заданными настройками текущего объекта.


## Комментарии


При выполнении метода структура указанного куба будет изменена в соответствии
 набором измерений и фактов, которые указаны в свойствах [ICubeCreator.Dimensions](ICubeCreator.Dimensions.htm)
 и [ICubeCreator.Facts](ICubeCreator.Facts.htm) соответственно.
 Если в кубе использовалось [локальное
 измерение фактов](../IStandardCube/IStandardCube.ExternalFactDimension.htm), то оно будет сброшено. Для измерения фактов будет
 создан новый табличный справочник НСИ.


Важно. При
 изменении структуры существующего куба также будет изменена структура
 таблицы, в которой хранятся данные куба. Все старые данные при этом будут
 удалены.


## Пример


Для выполнения примера предполагается наличие в репозитории следующих
 объектов:


	- Стандартный куб с идентификатором «STD_CUBE», структура которого
	 будет изменена;


	- База данных с идентификатором «DB». В этой базе данных будут
	 храниться данные куба;


	- Календарный справочник с идентификатором «CALENDAR».


			Sub UserProc;

Var

    MB: IMetabase;

    CCreator: ICubeCreator;

    Facts: ICubeCreatorFacts;

    Dims: ICubeCreatorDimensions;

    Dim: IDimensionModel;

    CreatorDim1, CreatorDim2: ICubeCreatorDimension;

Begin

    MB := MetabaseClass.Active;

    //Создатель куба

    CCreator := New CubeCreator.Create;

    CCreator.Database := MB.ItemById("DB").Open(Null) As IDatabaseInstance;

    //Коллекция измерений куба

    Dims := CCreator.Dimensions;

    //Новое измерение, для которого будет создан отдельный справочник

    CreatorDim1 := Dims.AddNew("Country");

    //Измерение на базе существующего справочника

    Dim := MB.ItemById("CALENDAR").Bind As IDimensionModel;

    CreatorDim2 := Dims.Add(Dim);

    //Индекс блока, по которому осуществляетс привязка к полям таблицы

    CreatorDim2.Index := Dim.Blocks.Item("YEARS").Indexes.PrimaryIndex;

    //Факты куба

    Facts := CCreator.Facts;

    Facts.Add("Значение");

    //Редактирование куба

    CCreator.EditCube(MB.ItemById("STD_CUBE").Bind As IStandardCube);

End Sub UserProc;


При выполнении примера будет изменена структура указанного куба. В структуре
 будут присутствовать два измерения, для фактов будет создан отдельный
 справочник. Все предыдущие данные куба будут удалены.


См. также:


[ICubeCreator](ICubeCreator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
