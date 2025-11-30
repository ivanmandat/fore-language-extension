# IDefGroupSettings.Add

IDefGroupSettings.Add
-


# IDefGroupSettings.Add


## Синтаксис


Add(dimKey: Integer): [IDefGroupSetting](../IDefGroupSetting/IDefGroupSetting.htm);


## Параметры


dimKey. Ключ измерения боковика,
 для которого необходимо добавить настройки группировки.


## Описание


Метод Add для указанного измерения
 добавляет настройки группировки.


## Пример


Для выполнения примера предполагается наличие в репозитории формы ввода,
 для которой указанный макрос назначен в качестве исполняемого метода для
 пользовательской кнопки. В форме ввода создана табличная область. В боковике
 табличной области расположено измерение, в основе которого лежит справочник
 с идентификатором DICT_INDICATORS.


Добавьте ссылки на системные сборки: Dimensions, Metabase, Report. Также
 добавьте ссылки на сборки, которые [необходимы](../../Intro/DataEntryFormsCore_Intro.htm#link_assembly)
 для работы с формами ввода.


			Public Sub AddGroupSetting(Report: IPrxReport);

Var

    Mb: IMetabase;

    DEForm: IDataEntryForm;

    TArea: IDefTableArea;

    Groups: IDefGroupSettings;

    Group: IDefGroupSetting;

    DimMod: IDimensionModel;

    Attrs: IDimAttributes;

    GrAttrs: NamedEntitiesCollection;

    Dim: IDefDimension;

Begin

    Mb := MetabaseClass.Active;

    // Экземпляр текущей формы ввода

    DEForm := New DataEntryForm.CreateByReport(Report);

    DEForm.refreshOnEdit := True;

    // Создание новой табличной области

    TArea := DEForm.InputAreas.Item(0) As IDefTableArea;

    DimMod := Mb.ItemById("DICT_INDICATORS").Bind As IDimensionModel;

    Attrs := DimMod.Attributes;

    Dim := TArea.DefDimensions.ItemByKey((DimMod As IMetabaseObject).Key);

    Dim.Place := DimPlace.side;

    // Настройки группировки

    Groups := TArea.GroupSettings;

    Groups.Clear;

    Group := Groups.Add(Dim.Key);

    // Формирование коллекции атрибутов

    GrAttrs := New NamedEntitiesCollection.Create;

    GrAttrs.Add(New NamedEntity.CreateWithData(Attrs.Name.Key, "", ""));

    Group.Attributes := GrAttrs;

    // Признак создания листьевых элементов при пустых значениях атрибутов

    Group.CreateElemForEmptyAttr := True;

    // Уровень элементов, на котором осуществляется группировка

    Group.LevelNumber := 1;

    // Применить изменения к форме ввода

    DEForm.InputAreas.ApplyAreaToReport(TArea.id);

    DEForm._Dispose;

End Sub AddGroupSetting;


При выполнении макроса для табличной области будут сброшены настройки
 группировки для измерений, если они были созданы. После этого будет добавлена
 новая настройка группировки для указанного измерения боковика.


См. также:


[IDefGroupSettings](IDefGroupSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
