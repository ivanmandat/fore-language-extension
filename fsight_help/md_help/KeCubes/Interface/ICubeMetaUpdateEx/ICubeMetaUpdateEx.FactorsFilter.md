# ICubeMetaUpdateEx.FactorsFilter

ICubeMetaUpdateEx.FactorsFilter
-


# ICubeMetaUpdateEx.FactorsFilter


## Синтаксис


FactorsFilter: [IDimSelectionSet](kedims.chm::/interface/idimselectionset/idimselectionset.htm);


## Описание


Свойство FactorsFilter возвращает
 отметку справочников, в соответствии с которой будет производиться копирование
 данных базы данных временных рядов.


## Комментарии


По умолчанию копируются все временные ряды из базы-источника.


Примечание.
 Данное свойство учитывается, если базы данных временных рядов копируется
 вместе с данными, т.е. свойство [ICubeMetaUpdateEx.CopyData](ICubeMetaUpdateEx.CopyData.htm)
 имеет значение True.


## Пример


Для выполнения примера в репозитории предполагается наличие базы
 данных временных рядов с идентификатором «FC». База должна содержать уникальный
 атрибут временных рядов, ссылающийся на справочник с идентификатором «DICT_CTR».


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    RubUpdateEx: ICubeMetaUpdateEx;

    Rub: IRubricator;

    Progress: IMetabaseUpdateProgress;

    CrInfo: IMetabaseObjectCreateInfo;

    s: string;

    SelSet: IDimSelectionSet;

    Sel: IDimSelection;

Begin

    mb := MetabaseClass.Active;

    RubUpdateEx := New CubeMetaUpdateClass.Create As ICubeMetaUpdateEx;

    Rub := mb.ItemById("FC").Bind As IRubricator;

    RubUpdateEx.Rubricator := Rub;

    RubUpdateEx.Metabase := Mb;

    CrInfo := RubUpdateEx.CreateInfo;

    CrInfo.Parent := mb.Root;

    s := Mb.GenerateId("FC_COPY");

    CrInfo.Id := s;

    CrInfo.Name := s;

    RubUpdateEx.CopyData := True;

    SelSet := RubUpdateEx.FactorsFilter;

    Sel := SelSet.FindById("DICT_CTR");

    Sel.DeselectAll;

    Sel.SelectElement(0, False);

    RubUpdateEx.RdsDatabase := Rub.Database;

    RubUpdateEx.Apply(Progress);

End Sub UserProc;


После выполнения примера база данных временных рядов «FC» будет скопирована
 в корневую папку репозитория. Идентификатор копии - «FC_COPY». Будут скопированы
 те данные временных рядов, которые вошли в указанную отметку.


См. также:


[ICubeMetaUpdateEx](ICubeMetaUpdateEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
