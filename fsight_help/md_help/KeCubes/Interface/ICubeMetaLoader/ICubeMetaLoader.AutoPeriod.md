# ICubeMetaLoader.AutoPeriod

ICubeMetaLoader.AutoPeriod
-


# ICubeMetaLoader.AutoPeriod


## Синтаксис


AutoPeriod: [IRubricatorAutoPeriodDate](../IRubricatorAutoPeriodDate/IRubricatorAutoPeriodDate.htm);


## Описание


Свойство AutoPeriod возвращает параметры периода загрузки показателей.


## Комментарии


По умолчанию начало/окончание периода загрузки совпадает с началом/окончанием данных.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных временных рядов с идентификатором «FC_AUTO». База содержит объект импорта с идентификатором «OBJ_IMPORT», импортирующий данные из любого источника, кроме базы данных временных рядов. Добавьте ссылки на системные сборки «Metabase» и «Cubes».


			Sub UserProc;

Var

    Mb: IMetabase;

    RubrDescr: IMetabaseObjectDescriptor;

    ImpRequestDefDescr: IMetabaseObjectDescriptor;

    ImpRequestDef: IImportRequestDefinition;

    MetaLoader: ICubeMetaLoader;

    ImpPeriod: IRubricatorAutoPeriod;

    ImpPeriodDate: IRubricatorAutoPeriodDate;

Begin

    Mb := MetabaseClass.Active;

    RubrDescr := Mb.ItemById("FC_AUTO");

    ImpRequestDefDescr := Mb.ItemByIdNamespace("OBJ_IMPORT", RubrDescr.Key);

    ImpRequestDef := ImpRequestDefDescr.Edit As IImportRequestDefinition;

    MetaLoader := ImpRequestDef.ProviderParams As ICubeMetaLoader;

    ImpPeriod := MetaLoader.AutoPeriod;

    ImpPeriodDate := ImpPeriod.Start;

    ImpPeriodDate.AutoDateType := RubricatorAutoDateType.DateStart;

    ImpPeriodDate.Offset := 1;

    ImpPeriodDate := ImpPeriod.End_;

    ImpPeriodDate.AutoDateType := RubricatorAutoDateType.DateEnd;

    ImpPeriodDate.Offset := -1;

    MetaLoader.IncreasePeriod := True;

    (ImpRequestDef As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера будут изменены параметры периода импорта показателей:


-
начало периода: начало данных, смещенное на одну точку вперед;


-
окончание периода: окончание данных, смещенное на одну точку назад;


-
если необходимо, то даты начала/окончания показателей в базе-приёмнике будут переопределены.


См. также:


[ICubeMetaLoader](ICubeMetaLoader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
