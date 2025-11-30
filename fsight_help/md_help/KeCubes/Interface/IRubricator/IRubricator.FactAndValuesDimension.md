# IRubricator.FactAndValuesDimension

IRubricator.FactAndValuesDimension
-


# IRubricator.FactAndValuesDimension


## Синтаксис


FactAndValuesDimension: [IDimensionModel](KeDims.chm::/interface/IDimensionModel/IDimensionModel.htm);


## Описание


Свойство FactAndValuesDimension
 возвращает измерение атрибутов базы данных временных рядов.


## Комментарии


В измерение атрибутов входят атрибуты показателей, которые являются
 ссылками на справочник, а также атрибут «Значение».


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента DimensionTree с наименованием DimensionTree1 и компонент
 UiDimension с наименованием UiDimension1, является источником данных для
 DimensionTree1.


В репозитории предполагается наличие базы данных временных рядов с идентификатором
 TSBD.


Добавьте ссылки на системные сборки: Cubes, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    TSDB: IRubricator;

	Begin

	    // Получаем текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Получаем базу данных временных рядов

	    TSDB := MB.ItemById("TSDB").Bind As IRubricator;

	    // Отображаем измерение атрибутов в компоненте DimensionTree1

	    UiDimension1.Dimension := TSDB.FactAndValuesDimension;

	    UiDimension1.Active := True;

	End Sub UserProc;


В результате выполнения примера в компоненте DimensionTree1 будет отображено
 измерение атрибутов базы данных временных рядов.


См. также:


[IRubricator](IRubricator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
