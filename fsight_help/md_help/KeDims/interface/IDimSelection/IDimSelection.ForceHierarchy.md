# IDimSelection.ForceHierarchy

IDimSelection.ForceHierarchy
-


# IDimSelection.ForceHierarchy


## Синтаксис


ForceHierarchy(Value: [IDimHierarchiesInstance](../IDimHierarchiesInstance/IDimHierarchiesInstance.htm));


## Параметры


Valule. Источник альтернативной
 иерархии.


## Описание


Метод ForceHierarchy устанавливает
 альтернативную иерархию в отметке.


## Комментарии


В качестве источника альтернативной иерархии может быть любой другой
 справочник.


## Пример


Для выполнения примера в репозитории предполагается наличие справочника
 с идентификатором «DIC_RF_AH» и справочника с ключом «71660». Справочник
 «DIC_RF_AH» рассматривается в качестве основного, а «71660» - в качестве
 справочника для альтернативной иерархии.


Добавьте ссылки на системные сборки: Dimension, Metabase.


			Sub UserProc;

Var

    Mb: IMetabase;

    OriginalModelObj: IMetabaseObject;

    dimInstance: IDimInstance;

    H_Inst: IDimHierarchyInstance;

    dimSel: IDimSelection;

Begin

    // Получаем репозиторий

    Mb := MetabaseClass.Active;

    // Получаем справочник

    OriginalModelObj := Mb.ItemById("DIC_RF_AH").Edit;

    dimInstance := OriginalModelObj.Open(Null) As IDimInstance;

    dimSel := dimInstance.CreateSelection;

    // Получаем источник альтернативной иерархии

    H_Inst := dimInstance.Hierarchies.FindByKey(71660) As IDimHierarchyInstance;

    // Устанавливаем альтернативную иерархию

    dimSel.ForceHierarchy(H_Inst);

    // Сохраняем справочник

    OriginalModelObj.Save;

End Sub UserProc;


В результате выполнения примера в отметку была установлена альтернативная
 иерархия.


См. также:


[IDimSelection](IDimSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
