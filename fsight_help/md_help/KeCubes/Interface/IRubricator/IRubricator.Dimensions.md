# IRubricator.Dimensions

IRubricator.Dimensions
-


# IRubricator.Dimensions


## Синтаксис


Dimensions: [ICubeModelDimensionsEx](../ICubeModelDimensionsEx/ICubeModelDimensionsEx.htm);


## Описание


Свойство Dimensions возвращает
 коллекцию обязательных измерений базы данных временных рядов.


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором NewCatalog и справочника репозитория с идентификатором
 D_SEP.


			Sub UserProc;

Var

    Mb: IMetabase;

    Rubr: IRubricator;

Begin

    Mb := MetabaseClass.Active;

    Rubr := MB.ItemById("NewCatalog").Edit As IRubricator;

    Rubr.Dimensions.AddDimensionEx(Mb.ItemById("D_SEP").Bind As IDimensionModel);

    (Rubr As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в список обязательных измерений базы данных
 временных рядов будет добавлен указанный справочник.


См. также:


[IRubricator](IRubricator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
