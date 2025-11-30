# ICubeLoaderFromSource.EditExistingObject

ICubeLoaderFromSource.EditExistingObject
-


# ICubeLoaderFromSource.EditExistingObject


## Синтаксис


EditExistingObject: Boolean;


## Описание


Свойство EditExistingObject
 определяет признак редактирования структуры объекта, в который осуществляется
 загрузка данных.


## Комментарии


Если свойству установлено значение True,
 то перед загрузкой данных будет отредактирована структура указанного [куба](ICubeLoaderFromSource.Cube.htm)/[базы
 данных временных рядов](ICubeLoaderFromSource.Rubricator.htm). Редактирование осуществляется в соответствии
 с заданными параметрами привязки измерений и фактов. Для возможности редактирования
 должны быть соблюдены следующие условия: куб должен быть стандартным,
 измерения куба должны быть построены на табличных справочниках НСИ или
 календаре.


Если свойству установлено значение False,
 то редактирование структуры не осуществляется. Для корректной загрузки
 данных должны быть заданы корректные привязки в свойствах [DimensionBindings](ICubeLoaderFromSource.DimensionBindings.htm)
 и [FactBindings](ICubeLoaderFromSource.FactBindings.htm).


## Пример


Для выполнения примера предполагается наличие файла «C:\Data.xls», в
 файле имеются какие-либо данные по странам. Данные располагаются в столбцах
 с наименованиями «Country Name», «Date» и «Value», а также в каких-либо
 других полях. В репозитории имеется стандартный куб с идентификатором
 «STD_CUBE», построенный на табличных справочниках НСИ и календаре.


			Sub UserProc;

Var

    MB: IMetabase;

    Loader: ICubeLoaderFromSource;

    Provider: IDtExcelProvider;

    StdCube: IStandardCube;

    DimBindings: ICubeLoaderDimensionBindings;

    DimBinding: ICubeLoaderDimensionBinding;

    FactBindings: ICubeLoaderFactBindings;

    FactBinding: ICubeLoaderFactBinding;

Begin

    MB := MetabaseClass.Active;

    //Источник данных для куба

    Provider := New DtExcelProvider.Create;

    Provider.DriverVersion := "Excel 8.0";

    Provider.File := "C:\Data.xls";

    Provider.HasHeader := True;

    Provider.Query := "Select * From [Лист1$]";

    //Куб, в котором будет изменена структура и загружены данные

    StdCube := MB.ItemById("STD_CUBE").Bind As IStandardCube;

    //Загрузчик данных в куб

    Loader := New CubeLoaderFromSource.Create;

    Loader.Cube := StdCube;

    Loader.EditExistingObject := True;

    //Привязка измерений

    //Страны

    DimBindings := Loader.DimensionBindings;

    DimBinding := DimBindings.Add("Country Name");

    DimBinding.Dimension := StdCube.Dimensions.FindById("COUNTRY");

    DimBinding.Dictionary := DimBinding.Dimension.Dimension;

    //Календарь

    DimBinding := DimBindings.AddCalendar("Date", DimCalendarLevel.Month);

    DimBinding.Dimension := StdCube.Dimensions.Calendar;

    //Привязка фактов

    FactBindings := Loader.FactBindings;

    FactBinding := FactBindings.Add("Value");

    FactBinding.FactKey := 2;

    //Изменение структуры куба и загрузка данных

    Loader.Load(Provider, Null);

End Sub UserProc;


При выполнении примера будет осуществлено изменение структуры указанного
 куба и повторная загрузка данных в него. После изменения структуры в кубе
 останется два измерения, поле с данными будет привязано к факту с ключом
 «2».


См. также:


[ICubeLoaderFromSource](ICubeLoaderFromSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
