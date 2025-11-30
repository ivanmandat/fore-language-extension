# IDimAdditionalHierarchies.Add

IDimAdditionalHierarchies.Add
-


# IDimAdditionalHierarchies.Add


## Синтаксис


Add(New_:[IDimHierarchy](../IDimHierarchy/IDimHierarchy.htm)):
 [IDimHierarchyInstance](../IDimHierarchyInstance/IDimHierarchyInstance.htm);


## Параметры


New. Альтернативная иерархия
 справочника.


## Описание


Метод Add добавляет дополнительную
 альтернативную иерархию в измерение.


## Комментарии


Для копирования коллекции дополнительных альтернативных иерархий из
 одного измерения в другое используйте [IDimAdditionalHierarchies.CopyFrom](IDimAdditionalHierarchies.CopyFrom.htm).


Для очищения коллекции дополнительных альтернативных иерархий используйте
 [IDimAdditionalHierarchies.Clear](IDimAdditionalHierarchies.Clear.htm).


Для удаления указанной дополнительной альтернативной иерархии используйте
 [IDimAdditionalHierarchies.Remove](IDimAdditionalHierarchies.Remove.htm),
 [IDimAdditionalHierarchies.RemoveById](IDimAdditionalHierarchies.RemoveById.htm),
 [IDimAdditionalHierarchies.RemoveByKey](IDimAdditionalHierarchies.RemoveByKey.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие:


	- репозитория НСИ с идентификатором «RDS», содержащего справочник
	 территориальных образований «DIC_RF». Справочник содержит альтернативную
	 иерархию;


	- экспресс-отчета с идентификатором «EXPRESS». Два измерения источника
	 данных отчета c идентификаторами «DIC_RFD» и «DIC_RFDR» должны совпадать
	 со справочником «DIC_RF» по количеству и идентификаторам атрибутов.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    Express: IEaxAnalyzer;

    Slice: IEaxDataAreaSlice;

    OriginDim: IDimensionModel;

    Hiers: IDimHierarchies;

    Hier: IDimHierarchy;

    Sel, Sel_: IDimSelection;

    AdditHiers, AdditHiers_: IDimAdditionalHierarchies;

    HierInst: IDimHierarchyInstance;

Begin

    // Получим репозиторий

    MB := MetabaseClass.Active;

    //Получение структуры основного справочника

    OriginDim := MB.ItemByIdNamespace("DIC_RF", MB.ItemById("RDS").Key).Edit As IDimensionModel;

    // Получим иерархию справочника

    Hiers := OriginDim.Hierarchies;

    Hier := Hiers.Item(0);

    // Получим экспресс-отчет

    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

    // Получим среза данных

    Slice := Express.DataArea.Slices.Item(0);

    // Добавим альтернативные иерархии в измерение

    Sel := Slice.Selection.FindById("DIC_RFD");

    AdditHiers := Sel.AdditionalHierarchies;

    HierInst := AdditHiers.Add(Hier);

    Sel_ := Slice.Selection.FindById("DIC_RFDR");

    AdditHiers_ := Sel.AdditionalHierarchies;

    AdditHiers.CopyFrom(AdditHiers_);

    // Обновим отчет и сохраним изменения

    Express.RefreshAll;

    (Express As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в измерение будут добавлены дополнительные
 альтернативные иерархии.


См. также:


[IDimAdditionalHierarchies](IDimAdditionalHierarchies.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
