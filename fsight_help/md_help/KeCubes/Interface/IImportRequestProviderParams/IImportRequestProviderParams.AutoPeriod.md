# IImportRequestProviderParams.AutoPeriod

IImportRequestProviderParams.AutoPeriod
-


# IImportRequestProviderParams.AutoPeriod


## Синтаксис


AutoPeriod: [IRubricatorAutoPeriod](../IRubricatorAutoPeriod/IRubricatorAutoPeriod.htm);


## Описание


Свойство AutoPeriod возвращает
 параметры периода импорта показателей.


## Комментарии


По умолчанию начало/окончание периода загрузки совпадает с началом/окончанием
 данных.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором «FC_AUTO». База содержит объект импорта
 с идентификатором «OBJ_IMPORT», импортирующий данные из любого источника,
 кроме базы данных временных рядов. Добавьте ссылки на системные сборки
 «Metabase» и «Cubes».


			Sub UserProc;

Var

    Mb: IMetabase;

    RubrDescr: IMetabaseObjectDescriptor;

    ImpRequestDefDescr: IMetabaseObjectDescriptor;

    ImpRequestDef: IImportRequestDefinition;

    ImpProvParams: IImportRequestProviderParams;

    ImpPeriod: IRubricatorAutoPeriod;

    ImpPeriodDate: IRubricatorAutoPeriodDate;

Begin

    Mb := MetabaseClass.Active;

    RubrDescr := Mb.ItemById("FC_AUTO");

    ImpRequestDefDescr := Mb.ItemByIdNamespace("OBJ_IMPORT", RubrDescr.Key);

    ImpRequestDef := ImpRequestDefDescr.Edit As IImportRequestDefinition;

    ImpProvParams := ImpRequestDef.ProviderParams;

    ImpPeriod := ImpProvParams.AutoPeriod;

    ImpPeriodDate := ImpPeriod.Start;

    ImpPeriodDate.AutoDateType := RubricatorAutoDateType.DateStart;

    ImpPeriodDate.Offset := 1;

    ImpPeriodDate := ImpPeriod.End_;

    ImpPeriodDate.AutoDateType := RubricatorAutoDateType.DateEnd;

    ImpPeriodDate.Offset := -1;

    ImpProvParams.IncreasePeriod := True;

    (ImpRequestDef As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера будут изменены параметры периода импорта показателей:


	- начало периода: начало данных, смещенное на одну точку вперед;


	- окончание периода: окончание данных, смещенное на одну точку
	 назад;


	- если необходимо, то даты начала/окончания показателей в базе-приёмнике
	 будут переопределены.


См. также:


[IImportRequestProviderParams](IImportRequestProviderParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
